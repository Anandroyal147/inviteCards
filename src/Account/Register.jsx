import BannerCom from "../common/BannerCom";
import Footer from "../common/Footer";
import Footer2 from "../common/Footer2";
import Header from "../common/header";


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
                                <form name="u_reg" id="u_reg" method="post" novalidate="novalidate">
                                    <input name="b44e54caef" type="hidden" id="authenticatelogin" value="f7edf59d3ab3b05fc6154fd36b0de442a15d7bf692bf879deaf15f6238f05150" style={{display:"none"}} />
                                    <input name="psmt" type="hidden" id="psmt" value="addreg" style={{ display: "none" }} />
                                    <div class="row">
                                        <RegisterComDiv name={"u_f_name"} id={"u_f_name"} placeholder={"Name"} />
                                        <RegisterComDiv name={"u_cmp_name"} id={"u_cmp_name"} placeholder={"Company Name"} />
                                    </div>
                                    <div class="row">
                                        <RegisterComDiv name={"u_gst_num"} id={"u_gst_num"} placeholder={"GST Number"} />
                                        <RegisterComDiv name={"u_email"} id={"u_email"} placeholder={"Email"} maxlength="40" />
                                    </div>
                                    <div class="row">
                                        <RegisterComDiv name={"u_mobile"} id={"u_mobile"} placeholder={"Mobile"} maxlength="15" />
                                        <RegisterComDiv name={"u_off_phone"} id={"u_off_phone"} placeholder={"Office Phone Number"} maxlength="15" />
                                    </div>
                                    <div class="row">
                                        <RegisterComDiv name={"u_addrs1"} id={"u_addrs1"} placeholder={"Address 1"} />
                                        <RegisterComDiv name={"u_addrs2"} id={"u_addrs2"} placeholder={"Address 2"} />
                                    </div>
                                    <div class="row">
                                        <RegisterComDiv name={"u_city"} id={"u_city"} placeholder={"City"} />
                                        <RegisterComDiv name={"u_state"} id={"u_state"} placeholder={"State"} />
                                    </div>
                                    <div class="row">
                                    </div>
                                    <div class="row">
                                        <RegisterComDiv name={"u_pin_code"} id={"u_pin_code"} placeholder={"Postal Code"} />
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <input type="submit" name="frm_reg_smt" id="frm_reg_smt" class="thm-btn yellow-bg" value="Create Account" />
                                            </div>
                                        </div>
                                    </div>
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
    return (
        <>
            <div class="col-md-6">
                <div class="form-group">
                    <input type="text" name={props.name} id={props.id} class="form-control inp_design" placeholder={props.placeholder} />
                </div>
            </div>
        </>
    )
}