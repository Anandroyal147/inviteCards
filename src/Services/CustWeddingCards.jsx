import BannerCom from "../common/BannerCom";
import Footer from "../common/Footer";
import Footer2 from "../common/Footer2";
import Header from "../common/header";
import CustomizedComDiv from "./CustComDiv";
import service1 from "../Assets/service1.jpg"
import divider from "../Assets/divider.png"
import custm_img1 from "../Assets/custm_img1.jpg"

export default function CustWeddingCards() {
    return (
        <>
            <Footer />
            <Header />
            <BannerCom />
            <ServicesDetails />
            <Footer2 />
        </>
    )
}

function ServicesDetails() {
    var myStyle = {
        font_size: 12.0,
        line_height: 115
    }
    var para = <p><b>Cards are inserted in box type covers which provides a professional and grand look for the receivers. Both UV and normal printing can be done in this type along with all the post press works. Additional effects like laser cutting and sticker pasting are also done based on customer preferences (stickers can be varied in terms of materials and colors as well).</b><br /></p>
    return (
        <>
            <section class="welcome-section1 sec-pad">
                <div class="thm-container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="welcome-content1" style={{ padding_left: 0 }}>
                                <div class="title">
                                    <h3>Customized Wedding Cards</h3>
                                </div>
                            </div>

                            <div align="justify">
                                <p class="MsoNormal" style={{ text_align: 'justify' }}><b><span style={myStyle}>
                                    Customized
                                    invitations are done here on a customer friendly basis. One to one sessions are
                                    arranged for customers with the person in charge to know the requirements of
                                    customers in terms of quality, quantity and price. Models<span>&nbsp;are shown before starting the process
                                        and regular updates are provided to the customers about the progress of the
                                        finalized card along with round the clock customer service.</span></span></b><span style={myStyle}></span>
                                </p>
                            </div>

                            <div class="col-md-12" align="center"> <img src={divider} alt="Madan Cards and Arts - Sivakasi" style={{ margin_top: 20 }} /></div>

                            <CustomizedComDiv src={custm_img1} src2={custm_img1} name={'Customized Box Card'} para={para} col1={"col-md-4"} col2={"col-md-4"} col3={"col-md-4"} />
                            <CustomizedComDiv src={custm_img1} src2={custm_img1} name={'Customized Box Card'} para={para} col1={"col-md-4"} col2={"col-md-4"} col3={"col-md-4"} />
                            <CustomizedComDiv src={custm_img1} src2={custm_img1} name={'Customized Box Card'} para={para} col1={"col-md-4"} col2={"col-md-4"} col3={"col-md-4"} />
                            <CustomizedComDiv src={service1} name={'Customized Box Card'} para={para} col1={"col-md-8"} col2={"col-md-4"} />
                            <CustomizedComDiv src={service1} name={'Special Occasion Cards'} para={para} col1={"col-md-8"} col2={"col-md-4"} />
                            <table width="100%" border="0" cellspacing="0" cellpadding="0" >
                                <tbody><tr>
                                    <td><div class="pagination_div"></div></td>
                                </tr>
                                </tbody></table>
                        </div>
                    </div>
                </div >
            </section >
        </>
    )
}