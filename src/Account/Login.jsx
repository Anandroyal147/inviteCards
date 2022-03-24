import { useEffect } from "react";
import { useLocation, useNavigate } from 'react-router-dom'
import { Link } from "react-router-dom";
import BannerCom from "../common/BannerCom";
import Footer from "../common/Footer";
import Footer2 from "../common/Footer2";
import Header from "../common/header";
import { RegisterForm } from "./Register";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Loader from "../common/Loader";
import useForm from "../common/useForm";
import { useDispatch,useSelector } from "react-redux";
import { userAction } from "../_actions/usersAction";
import Modal from "../common/Modal";
export default function Login(props) {
    const navigate = useNavigate();
    useEffect(() => {

    }, []);
    // const location = useLocation();
    // console.log(location.pathname);

    return (
        <>
            <Footer />
            <Header />
            <BannerCom />
            <LoginForm navigate={navigate} />
            <Footer2 />
        </>
    )
}

function LoginForm(props) {

    const [loader, setLoader] = useState(false)
    const [isModalOpen, setModalIsOpen] = useState(false)

    const dispatch = useDispatch()
    const location = useLocation()
    const message = useSelector((state) => state.auth.user.message)

    const doNavigation = (data) => {
        setLoader(false)
        console.log('finalResponse---->', data)
        toast(data.message)
        setModalIsOpen(true)
        // props.navigate('/')
    }
    const loginUser = () => {
        if (values.u_email !== undefined && values.password !== undefined) {
            setLoader(true)
            const { from } = location.state || { from: { pathname: "/contactUs" } };
            dispatch(userAction.login(values, doNavigation))

        } else {
            alert("Please Enter The Fields");
        }
    }

    const toggleModal = () => {
        setModalIsOpen(!isModalOpen);
    };
    const { handleChange, handleSubmit, values, errors } = useForm(loginUser)

    return (
        <>
            {isModalOpen && <Modal onRequestClose={toggleModal} message={message} />}

            <section class="contact-section sec-pad">
                <div class="thm-container">
                    <div class="row">
                        <div class="col-md-3 hidden-xs"> </div>
                        <div class="col-md-6">
                            <div class="contact-form-content">
                                <div class="title" style={{ margin_bottom: 20 }} align="center"> <span>Customer Login</span> </div>
                                <form action="" method="post" name="alum_lgn_frm" id="alum_lgn_frm" onSubmit={handleSubmit} class="contact-form" novalidate="novalidate">
                                    <input name="f416f36f7c" type="hidden" id="authenticatelogin" value="c8d881928cca811723fb40d3ff7895f70a559178d810594705cc33017ca933fd" style={{ display: "none" }} />
                                    <input type="hidden" name="lgn_guess" id="lgn_guess" value="user_almdcrd" style={{ display: "none" }} />
                                    <div class="form-group">
                                        <input type="text" name="u_email" onChange={handleChange} id="u_email" class="form-control" placeholder="Registered Email ID" data-errmsg="input-group" autocomplete="off" />
                                        {errors.email && <p style={{ textAlign: 'center', color: ' coral' }}>{errors.email}</p>}

                                    </div>
                                    <div class="form-group">
                                        <input type="password" name="password" onChange={handleChange} id="password" class="form-control" placeholder="Password" data-errmsg="input-group" autocomplete="off" />
                                        {errors.password && <p style={{ textAlign: 'center', color: ' coral' }}>{errors.password}</p>}

                                    </div>
                                    <input type="hidden" name="nowsvalue" id="nowsvalue" value="ygh924yxp5svcr4" style={{ display: 'none' }} />
                                    <input type="hidden" name="sublogin" value="1" />
                                    <p align="center">
                                        <button type="submit" class="thm-btn yellow-bg">Submit</button>
                                        <br />
                                    </p>
                                    <table style={{ width: '100%' }}>
                                        <tbody><tr>
                                            <td  ><Link to='/register'> New Customer</Link></td>
                                            <td className="newCust"><Link to="/forgotPassword"> Forgot Password </Link></td>
                                        </tr>
                                        </tbody></table>
                                    <ToastContainer />
                                    {loader && <Loader />}
                                </form>
                            </div>
                        </div>
                        <div class="col-md-3 hidden-xs"> </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export function ForgotPassword() {

    // const location = useLocation();
    // console.log(location.pathname);

    return (
        <>
            <Footer />
            <Header />
            <BannerCom />
            <ForgotPasswordForm />
            <Footer2 />
        </>
    )
}

function ForgotPasswordForm() {
    return (
        <>
            <section class="contact-section sec-pad">
                <div class="thm-container">
                    <div class="row">
                        <div class="col-md-3 hidden-xs"> </div>
                        <div class="col-md-6">
                            <div class="contact-form-content">
                                <div class="title" style={{ margin_bottom: 20 }} align="center"> <span>Customer Forgot Password</span> </div>
                                <form action="" method="post" name="usr_frg_pswd" id="usr_frg_pswd" class="contact-form" novalidate="novalidate">
                                    <input name="4092d1b99d" type="hidden" id="authenticatelogin" value="1329ca1bc8acc796843a51d9a7c61df285e9370dd24820bdbb5cb14cdae0a62e" style={{ display: "none" }} />
                                    <input type="hidden" name="lgn_guess" id="lgn_guess" value="user_almdcrd" style={{ display: "none" }} />
                                    <div class="form-group">
                                        <input type="text" name="u_email" id="u_email" class="form-control" placeholder="Registered Email ID" data-errmsg="input-group" autocomplete="off" />
                                    </div>
                                    <input type="hidden" name="nowsvalue" id="nowsvalue" value="" style={{ display: "none" }} />
                                    <input type="hidden" name="frgpswd" value="1" />
                                    <p align="center">
                                        <button type="submit" class="thm-btn yellow-bg">Submit</button>
                                        <br />
                                    </p>
                                    <table style={{ width: "100%" }}>
                                        <tbody><tr>
                                            <td  ><Link to='/register'> New Customer</Link></td>
                                            <td className="newCust"><a href="#"> Forget Password </a></td>
                                        </tr>
                                        </tbody></table>
                                </form>
                            </div>
                        </div>
                        <div class="col-md-3 hidden-xs"> </div>
                    </div>
                </div>
            </section>
        </>
    )
}
