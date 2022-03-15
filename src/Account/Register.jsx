import BannerCom from "../common/BannerCom";
import Footer from "../common/Footer";
import Footer2 from "../common/Footer2";
import Header from "../common/header";
import { useEffect, useState } from "react";
import { useForm } from 'react-hook-form'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { Link } from "react-router-dom";

export default function Register() {

    return (
        <>
            <Footer />
            <Header />
            <BannerCom />
            <RegisterForm />
            <Footer2 />
        </>
    )
}

export function RegisterForm(props) {
    const [inputs, setInputs] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);
    // const {register,handleSubmit}=useForm();
    const [loader, setLoader] = useState(false)

    useEffect(() => {
        setLoader(false)
    }, [])
    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setInputs(values => ({ ...values, [name]: value }))
        console.log(inputs)
    }
    const handlSubmit = (e) => {
        e.preventDefault();
        console.log(inputs)
        setLoader(true)
        if (inputs.password === undefined || inputs.password == null || inputs.password.length < 8) {
            console.log('invalid---->')
            setError(true);
            setLoader(false) 
        } else {
            console.log('valid---->', inputs.password.length)
            signupUser()
            setSubmitted(true);
            setError(false);
        }
    };

    function isDataValid() {
        var state;
        //  inputs.name === '' || inputs.email === '' || inputs.password === 
        if (inputs.password != null && inputs.password.length > 8) {
            state = true;
        }
        return state;
    }
    const signupUser = () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            body: JSON.stringify({ data: inputs })
        };
        fetch("http://localhost:3600/signup", requestOptions)
            .then((json) => json.json())
            .then(data => {
                setLoader(false)
                // setUser(data)
                // if (user !== undefined){
                //     checkUser();
                // }
                console.log(data)
                toast(data.message)
                console.log('name---->', inputs.u_f_name.value)
                if (data.message == 'User Registered Successfully') {
                    props.history.push('/home')
                    inputs.value = ""
                }
            })
    }
    const handleClick = () => {
        console.log('calling--->')
        props.history.push('/about')
    }
    return (
        <>
            <section class="contact-section sec-pad">
                <div class="thm-container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="contact-form-content">
                                <div class="title"> <span>Register with us</span>
                                    <h2>Sign Up</h2>
                                </div>
                                <form name="u_reg" id="u_reg" method="post" onSubmit={handlSubmit} >
                                    <input name="b44e54caef" type="hidden" id="authenticatelogin" value="f7edf59d3ab3b05fc6154fd36b0de442a15d7bf692bf879deaf15f6238f05150" style={{ display: "none" }} />
                                    <input name="psmt" type="hidden" id="psmt" value="addreg" style={{ display: "none" }} />
                                    <div class="row">
                                        <RegisterComDiv handlechange={handleChange} name={'u_f_name'} id={"u_f_name"} placeholder={"Name"} />
                                        <RegisterComDiv handlechange={handleChange} name={"u_cmp_name"} id={"u_cmp_name"} placeholder={"Company Name"} />
                                    </div>
                                    <div class="row">
                                        <RegisterComDiv handlechange={handleChange} name={"u_email"} id={"u_email"}  error={error} placeholder={"Email"} maxlength="40" />
                                        <RegisterComDiv handlechange={handleChange} name={"password"} id={"password"} error={error} placeholder={"Password"} />

                                    </div>
                                    <div class="row">
                                        <RegisterComDiv handlechange={handleChange} name={"u_mobile"} id={"u_mobile"} placeholder={"Mobile"} maxlength="15" />
                                        <RegisterComDiv handlechange={handleChange} name={"u_off_phone"} id={"u_off_phone"} placeholder={"Office Phone Number"} maxlength="15" />
                                    </div>
                                    {loader &&
                                        <div class="overlay">
                                            <div class="load"></div>
                                        </div>}                                   <div class="row">
                                        <RegisterComDiv handlechange={handleChange} name={"u_addrs1"} id={"u_addrs1"} placeholder={"Address 1"} />
                                        <RegisterComDiv handlechange={handleChange} name={"u_addrs2"} id={"u_addrs2"} placeholder={"Address 2"} />
                                    </div>
                                    <div class="row">
                                        <RegisterComDiv handlechange={handleChange} name={"u_city"} id={"u_city"} placeholder={"City"} />
                                        <RegisterComDiv handlechange={handleChange} name={"u_state"} id={"u_state"} placeholder={"State"} />
                                    </div>
                                    <div class="row">
                                    </div>
                                    <div class="row">
                                        <RegisterComDiv handlechange={handleChange} name={"u_gst_num"} id={"u_gst_num"} placeholder={"GST Number"} />
                                        <RegisterComDiv handlechange={handleChange} name={"u_pin_code"} id={"u_pin_code"} placeholder={"Postal Code"} />
                                    </div>
                                    <div class="col-md-12 text-center">
                                        <div class="form-group">
                                            <input type="submit" name="frm_reg_smt" id="frm_reg_smt" onclick="$('#cover-spin').show(0)" class="thm-btn yellow-bg" value="Create Account" />
                                        </div>
                                    </div>
                                    <ToastContainer />
                                </form>
                                <div class="form-result"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

function RegisterComDiv(props) {
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
            <div class="col-md-6">
                <div class="form-group">
                    <input type="text"
                        onChange={props.handlechange}
                        name={props.name} id={props.id}
                        class="form-control inp_design"
                        style={style(props.error)}
                        placeholder={props.placeholder} />
                </div>
                {props.error && <p style={{ textAlign: 'center', color:' coral' }}>Please Enter Valid Details</p>}
            </div>
        </>
    )
}


