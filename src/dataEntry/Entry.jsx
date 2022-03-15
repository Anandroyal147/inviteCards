import Footer from "../common/Footer"
import Header from "../common/header"
import { useState } from "react";
import Buttons from "../common/button";
import './entry.css'
import Select from 'react-select';
import QRCode from "qrcode.react";
import BannerCom from "../common/BannerCom";
import { storage } from "../firebase/firebase";
import { usePromiseTracker } from "react-promise-tracker";
import { trackPromise } from 'react-promise-tracker';
import { Circles } from 'react-loader-spinner';
import { Hearts } from "react-loader-spinner";

const Entry = () => {
    return (
        <>
            <Footer />
            <Header />
            <BannerCom />
            <DataEntryContent />
            <Footer />

        </>
    )
}
export default Entry;
const DataEntryContent = () => {
    const [select, setSelect] = useState('')
    const handleChange = (e) => {
        setSelect(e.value)
        console.log('calling==>' + e.value)
    }
    var x;
    if (select === 'Products') {
        x = <ImgUpload />
    } else {
        x = <InputForm handleChange={handleChange} />
    }
    return (
        <div>
            <UserDetails handleChange={handleChange} />
            <hr></hr>

            {/* <InputForm handleChange={handleChange} /> */}
            {x}

        </div>
    )
}
const ImgUpload = (props) => {
    const [inputs, setInputs] = useState({});
    const [selectedImage, setSelectedImage] = useState(null);
    const allInputs = { imgUrl: '' }
    const [imageAsFile, setImageAsFile] = useState('')
    const [imageAsUrl, setImageAsUrl] = useState(allInputs)
    const [error, setError] = useState(false)
    const [spinnerLoading, setSpinnerLoading] = useState(false);
    const { promiseInProgress } = usePromiseTracker();
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        console.log(event.target.value)
        setInputs(values => ({ ...values, [name]: value }))

    }
    const handleImgChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        console.log(event.target.files[0]);
        setImageAsFile(event.target.files[0]);
        console.log("handleImageChange==>", imageAsFile)
      //  setSelectedImage(event.target.files[0]);
        setInputs(values => ({ ...values, [name]: value }))
        
        handleFireBaseUpload()
    }
    const handleSubmit = (event) => {
        console.log('insideHandleSubmit==>', inputs)
        if (inputs.name !== undefined && inputs.description !== undefined) {
            saveData()
            console.log('valid', inputs)
        } else {
            console.log('invalid', inputs)
            setError(true)
        }
        // saveData()
    }
    const saveData = () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            body: JSON.stringify({ data: inputs })
        };
        trackPromise(
            fetch("http://localhost:3600/products", requestOptions)
                .then((res) => { console.log(res.status) })
        )
    }
    var loader = <>
        <div
            style={{
                width: "100%",
                height: "100",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}
        >
            {/* <Circles type="ThreeDots" color="#2BAD60" height="100" width="100" /> */}
            <Hearts
                type="Puff"
                color="#00BFFF"
                height={100}
                width={100}
            />
        </div></>

    const handleFireBaseUpload = e => {
        //   e.preventDefault()
        setSpinnerLoading(false)
        console.log('start of upload')
        // async magic goes here...
        if (imageAsFile === '') {
            console.error(`not an image, the image file is a ${typeof (imageAsFile)}`)
        }
        const uploadTask = storage.ref(`/images/${imageAsFile.name}`).put(imageAsFile)
        //initiates the firebase side uploading 
        //  trackPromise(
        uploadTask.on('state_changed', 
            (snapShot) => {
                //takes a snap shot of the process as it is happening
               // setSpinnerLoading(false)
                console.log(snapShot)
            }, (err) => {
               // setSpinnerLoading(false)
                //catches the errors
                console.log(err)
            }, () => {
                // gets the functions from storage refences the image storage in firebase by the children
                // gets the download url then sets the image from firebase as the value for the imgUrl key:
                console.log('imageAsFile===>', imageAsFile)

                storage.ref('images').child(imageAsFile.name).getDownloadURL()
                    .then(fireBaseUrl => {
                        setImageAsUrl(prevObject => ({ ...prevObject, imgUrl: fireBaseUrl }))
                        setInputs(values => ({ ...values, 'productImgUrl': imageAsUrl }));
                        

                    })

            })
        //  )
    }

    return (
        <>
            <div className="thm-container">
                <div className=" text-center prod-form">

                    <div class="row">
                        <div class="col-md-3 hidden-xs">
                        </div>
                        <div class="col-md-6">
                            <div class="contact-form-content">
                                <div class="title" align="center">
                                    <form onSubmit={handleSubmit}>
                                        <div class="col-lg-12 col-md-12">
                                            <div class="rld-single-input">
                                                <Input label={'Name Of Item'} requured={true} for={"staticEmail2"} name={"name"} value={inputs.name} error={error} handleChange={handleChange} />
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-12">
                                            <div class="rld-single-input">
                                                <Input label={'Description'} requured={true} for={"staticEmail2"} name={"description"} value={inputs.description} error={error} handleChange={handleChange} />
                                            </div>
                                        </div>
                                        <div className="inputfl ">
                                            <input type='file' name='myImg' onChange={handleImgChange} />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 hidden-xs"> </div>
                    </div>

                </div>
                {
                    selectedImage && (
                        <div className="text-center" >
                            <img alt="not fount" width={"250px"} src={URL.createObjectURL(selectedImage)} />
                            <br />
                            <button style={{ marginTop: 20 }} onClick={() => setSelectedImage(null)}>Remove</button>
                        </div>
                    )
                }
            </div >
            {
                error ?
                    <div className="text-center errStl">
                        < p > Please Enter The All Fields</p >
                    </div > : <></>
            }
            {spinnerLoading && loader}
            <div className="submit_btn text-center">
                <Buttons type="submit" handleSubmit={handleSubmit} text={"Submit"} />
            </div>
        </>
    )
}
function UserDetails(props) {
    const colourStyles = {
        menuList: styles => ({
            ...styles,
            background: 'hsl(169deg 1% 76%)'
        }),
        option: (styles, { isFocused, isSelected }) => ({
            ...styles,
            background: isFocused
                ? 'black'
                : isSelected
                    ? 'hsla(291, 64%, 42%, 1)'
                    : undefined,
            zIndex: 1

        }),
        menu: base => ({
            ...base,
            zIndex: 100
        }),
        control: (base, state) => ({
            ...base,

            color: state.isSelected ? 'yellow' : 'black',
            backgroundColor: state.isSelected ? 'green' : 'white'
            // You can also use state.isFocused to conditionally style based on the focus state
        })
    }

    const Countries = [
        { label: "Products", value: "Products" },
        { label: "Purchase", value: 'Purchase' },
        { label: "Sales", value: 'Sales' },

    ];
    var x = "Anand Raj"
    return (
        <>
            <div className="user_details">
                <p><b>Party A/c Name</b> : {x}</p>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <Select onChange={props.handleChange} styles={colourStyles} options={Countries} />
                    </div>
                    <div className="col-md-4"></div>
                </div>
            </div>
        </>

    )
}

function InputForm() {
    const [inputs, setInputs] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false)
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        console.log(event.target.value)
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsSubmitted(true)
        saveData()
        console.log(inputs);
    }
    const saveData = () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            body: JSON.stringify({ data: inputs })
        };
        fetch("http://localhost:3600/store", requestOptions)
            .then((res) => { console.log(res.status) })
    }
    return (

        <>


            <form class="row g-3 forms thm-container" onSubmit={handleSubmit}>
                <Input label={'Name Of Item'} for={"staticEmail2"} name={"name"} value={inputs.name} handleChange={handleChange} />
                <div class="row">
                    <Col6Div input={<Input label={'Licence No'} for={"inputPassword2"} name={"licence_no"} value={inputs.licence_no} handleChange={handleChange} />} />
                    <Col6Div input={<Input label={'License Value'} for={"staticEmail2"} name={"license_value"} value={inputs.license_value} handleChange={handleChange} />} />
                </div>
                <div class="row">
                    <Col6Div input={<Input label={'Date'} for={"inputPassword2"} name={"date"} value={inputs.date} handleChange={handleChange} />} />
                    <Col6Div input={<Input label={'Tax%'} for={"staticEmail2"} name={"tax"} value={inputs.tax} handleChange={handleChange} />} />
                </div>
                <div class="row">
                    <Col6Div input={<Input label={'Quantity'} for={"staticEmail2"} name={"quantity"} value={inputs.quantity} handleChange={handleChange} />} />
                    <Col6Div input={<Input label={'Profit%'} for={"staticEmail2"} name={"profit"} value={inputs.profit} handleChange={handleChange} />} />
                </div>
                <div class="row">
                    <Col6Div input={<Input label={'Rate Inc Tax'} for={"staticEmail2"} name={"rate_inc_tax"} value={inputs.rate_inc_tax} handleChange={handleChange} />} />
                    <Col6Div input={<Input label={'Rate Per'} for={"staticEmail2"} name={"rate_per"} value={inputs.rate_per} handleChange={handleChange} />} />
                </div>
                <div class="row">
                    <Col6Div input={<Input label={'Amount Incl Tax'} for={"staticEmail2"} name={"amount_incl"} value={inputs.amount_incl} handleChange={handleChange} />} />
                    <Col6Div input={<Input label={'Tax Amt'} for={"staticEmail2"} name={"tax_amt"} value={inputs.tax_amt} handleChange={handleChange} />} />
                </div>
                <Input label={'Amount'} for={"staticEmail2"} name={"amount"} value={inputs.amount} handleChange={handleChange} />
                <div className="submit_btn text-center">
                    <Buttons type={"submit"} handleSubmit={handleSubmit} text={"Submit"} />
                </div>
                {isSubmitted ?
                    <div className="text-center">
                        <QRCode value='' />
                    </div>
                    : <></>}

            </form>
        </>


    )
}

const Input = (props) => {
    function style(error) {
        if (error) {
          return {
            backgroundColor: "rgba(255, 0, 0, 0.5)" 
            // Or any other style you prefer
          };
        }
      }
    return (
        <>
            <div class="col-auto  rld-single-input">
                <input type="text"
                    class="form-control"
                    placeholder={props.label}
                    required={props.required}
                    name={props.name}
                    value={props.value || ""}
                    style={style(props.error)}
                    onChange={props.handleChange} />
            </div>
        </>
    )
}

const Col6Div = (props) => {
    return (
        <>
            <div class="col-lg-6 col-md-6">
                <div class="rld-single-input">
                    {props.input}
                </div>
            </div>
        </>
    )
}