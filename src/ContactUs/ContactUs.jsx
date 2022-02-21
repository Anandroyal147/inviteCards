import BannerCom from "../common/BannerCom";
import Footer from "../common/Footer";
import Footer2 from "../common/Footer2";
import Header from "../common/header";
import ContactUsComInput from "./ContactComInput";
import './ContactUs.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faPinterest } from "@fortawesome/free-brands-svg-icons"
import { faYoutube } from "@fortawesome/free-brands-svg-icons"


export default function ContactUs() {
    return (
        <>
            <Footer />
            <Header />
            <BannerCom />
            <ContactUsDetails />
            <Footer2 />

        </>
    )
}

function ContactUsDetails() {
    const ValidateNumber = () => {

    }
    const handleValidation = () => {
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        //Name
        if (!fields["name"]) {
            formIsValid = false;
            errors["name"] = "Cannot be empty";
        }

        if (typeof fields["name"] !== "undefined") {
            if (!fields["name"].match(/^[a-zA-Z]+$/)) {
                formIsValid = false;
                errors["name"] = "Only letters";
            }
        }

        //Email
        if (!fields["email"]) {
            formIsValid = false;
            errors["email"] = "Cannot be empty";
        }

        if (typeof fields["email"] !== "undefined") {
            let lastAtPos = fields["email"].lastIndexOf("@");
            let lastDotPos = fields["email"].lastIndexOf(".");

            if (
                !(
                    lastAtPos < lastDotPos &&
                    lastAtPos > 0 &&
                    fields["email"].indexOf("@@") == -1 &&
                    lastDotPos > 2 &&
                    fields["email"].length - lastDotPos > 2
                )
            ) {
                formIsValid = false;
                errors["email"] = "Email is not valid";
            }
        }

        this.setState({ errors: errors });
        return formIsValid;
    }
    const contactSubmit=(e)=> {
        e.preventDefault();

        if (handleValidation()) {
            alert("Form submitted");
        } else {
            alert("Form has errors.");
        }
    }

    return (
        <>
            <section class="contact-section sec-pad">
                <div class="thm-container">
                    <div class="row">
                        <div class="col-md-8">
                            <div class="contact-form-content">
                                <div class="title">
                                    <h2>Send Message</h2>
                                </div>
                                <form name="u_reg" id="u_reg" method="post" novalidate="novalidate">

                                    <input name="592a8f3367" type="hidden" id="authenticatelogin" value="afd5cc6b1db0d05a2a53b0f4484deebdc14c8459eb781c28d1224b948f6de15f" style={{ display: "none" }} />

                                    <input name="psmt" type="hidden" id="psmt" value="addreg" style={{ display: "none" }} />
                                    <ContactUsComInput name={"u_name"} id={"u_name"} placeholder={"Your Name"} autocomplete={"off"} />
                                    <ContactUsComInput name={"u_email"} id={"u_email"} placeholder={"Email"} maxlength={"40"} autocomplete={"off"} />
                                    <ContactUsComInput name={"u_mobile"} id={"u_mobile"} placeholder={"Mobile"} maxlength={"15"} onkeydown={ValidateNumber} autocomplete={"off"} />
                                    <ContactUsComInput name={"u_city"} id={"u_city"} placeholder={"City"} maxlength={"15"} autocomplete={"off"} />
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <textarea name="u_message" id="u_message" class="form-control inp_design" cols="10" rows="8" placeholder="What you are looking for?"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <input type="submit" name="frm_reg_smt" id="frm_reg_smt" class="thm-btn yellow-bg" value="Submit Now" />
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <ContactInfoDetails />
                    </div>
                </div>
            </section>
        </>
    )
}

function ContactInfoDetails() {
    return (
        <>
            <div class="col-md-4">
                <div class="contact-info text-center">
                    <div class="title text-center"> <span>Contact info</span>
                        <h2>Details</h2>
                    </div>
                    <div class="single-contact-info">
                        <h4>Head Office (Sales and Administration)</h4>
                        <p>Door No. - 1836, Periyakaruppan Road,<br />
                            Marison Buildings, Near Sangeetha Lodge,<br />
                            Sivakasi – 626 189.
                        </p>
                    </div>
                    <div class="single-contact-info">
                        <h4>Manufacturing Units</h4>
                        <p><strong>Unit-I</strong> <br /> 4/824-A, Hussain Colony,<br />
                            Opposite to Deepak Enterprises,<br />
                            Sivakasi – 626 189.<br /><br />
                            <strong>Unit-II</strong> <br />	4/824-B, Hussain Colony,<br />
                            Opposite to Deepak Enterprises,
                            Sivakasi – 626 189.
                        </p>
                    </div>
                    <div class="single-contact-info">
                        <h4>Contact Numbers</h4>
                        <p align="left" className="contactnum" >
                            1)	04562-277373 (Sales)<br />
                            2)	+91-94433 63328 (Sales)<br />
                            3)	+91-90470 45373 (Administration)<br />
                            4)	+91-97906 23618 (Administration)
                        </p>
                    </div>
                    <div class="single-contact-info">
                        <h4>Email</h4>
                        <p>mathancards@gmail.com</p>
                    </div>
                    <div class="single-contact-info">
                        <h4>Website</h4>
                        <p>www.madancards.com</p>
                    </div>
                    <div class="single-contact-info">
                        <h4>Our Dealer's Location</h4>
                        <a href="madan_cards_dealers.php" class="thm-btn yellow-bg">Click Here</a> </div>
                    <div class="single-contact-info">
                        <h4>Follow</h4>
                        <div class="social">
                            <a href="#" class="fab fa-twitter hvr-pulse"><FontAwesomeIcon icon={faTwitter} /></a>
                            <a href="#" class="fab fa-pinterest hvr-pulse"><FontAwesomeIcon icon={faPinterest} /></a>
                            <a href="#" class="fab fa-facebook-f hvr-pulse"><FontAwesomeIcon icon={faFacebookSquare} /></a>
                            <a href="#" class="fab fa-youtube hvr-pulse"><FontAwesomeIcon icon={faYoutube} /></a></div>
                    </div>
                </div>
            </div>
        </>
    )
}

