import BannerCom from "../common/BannerCom";
import Footer from "../common/Footer";
import Footer2 from "../common/Footer2";
import Header from "../common/header";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { Link } from "react-router-dom";
import useForm from "../common/useForm";
import { userAction } from "../_actions/usersAction";
import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch } from "react-redux";
import Modal from "../common/Modal";
export default function Register() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    return (
        <>
            <Footer />
            <Header />
            <BannerCom />
            <RegisterForm navigate={navigate} dispatch={dispatch} />
            <Footer2 />
        </>
    )
}

export function RegisterForm(props) {
    const [loader, setLoader] = useState(false)
    const [isModalOpen, setModalIsOpen] = useState(false)
    const [message,setMessage] = useState('')
    useEffect(() => {
        setLoader(false)
    }, [])


    const handleResponse = (data) => {
       // setLoader(false)
       setMessage(data.message)
        setModalIsOpen(!isModalOpen)
       // props.navigate('/login')
        console.log('insideRegisterData---->',data)
        // setIsFinished(true)

    }

    const signupUser = () => {

        if (values.u_f_name !== undefined && values.u_cmp_name !== undefined && values.u_email !== undefined &&
            values.password !== undefined && values.u_mobile !== undefined && values.u_mobile !== undefined && values.u_pin_code !== undefined) {
            //  setLoader(true)
            props.dispatch(userAction.register(values, handleResponse))


        } else {
            alert("Please Enter The Fields");
        }
    }
    const { handleChange, handleSubmit, values, errors } = useForm(signupUser)
    const toggleModal = () => {
        setModalIsOpen(!isModalOpen);
    };
    return (
        <>
            {isModalOpen && <Modal onRequestClose={toggleModal} message={message} />}
            <section class="contact-section sec-pad">
                <div class="thm-container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="contact-form-content">
                                <div class="title"> <span>Register with us</span>
                                    <h2>Sign Up</h2>
                                </div>
                                <form name="u_reg" id="u_reg" method="post" onSubmit={handleSubmit} >
                                    <input name="b44e54caef" type="hidden" id="authenticatelogin" value="f7edf59d3ab3b05fc6154fd36b0de442a15d7bf692bf879deaf15f6238f05150" style={{ display: "none" }} />
                                    <input name="psmt" type="hidden" id="psmt" value="addreg" style={{ display: "none" }} />
                                    <div class="row">
                                        <RegisterComDiv handlechange={handleChange} error={errors.u_f_name} name={'u_f_name'} id={"u_f_name"} placeholder={"Name"} />
                                        <RegisterComDiv handlechange={handleChange} error={errors.u_cmp_name} name={"u_cmp_name"} id={"u_cmp_name"} placeholder={"Company Name"} />
                                    </div>
                                    <div class="row">
                                        <RegisterComDiv handlechange={handleChange} error={errors.email} name={"u_email"} id={"u_email"} placeholder={"Email"} maxlength="40" />
                                        <RegisterComDiv handlechange={handleChange} error={errors.password} name={"password"} id={"password"} placeholder={"Password"} />

                                    </div>
                                    <div class="row">
                                        <RegisterComDiv handlechange={handleChange} error={errors.mobile} name={"u_mobile"} id={"u_mobile"} placeholder={"Mobile"} maxlength="15" />
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
                                        <RegisterComDiv handlechange={handleChange} error={errors.u_city} name={"u_city"} id={"u_city"} placeholder={"City"} />
                                        <RegisterComDiv handlechange={handleChange} name={"u_state"} id={"u_state"} placeholder={"State"} />
                                    </div>
                                    <div class="row">
                                    </div>
                                    <div class="row">
                                        <RegisterComDiv handlechange={handleChange} name={"u_gst_num"} id={"u_gst_num"} placeholder={"GST Number"} />
                                        <RegisterComDiv handlechange={handleChange} error={errors.u_pin_code} name={"u_pin_code"} id={"u_pin_code"} placeholder={"Postal Code"} />
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
                {props.error && <p style={{ textAlign: 'center', color: ' coral' }}>{props.error}</p>}
            </div>
        </>
    )
}


