

import BannerCom from "../common/BannerCom";
import Footer from "../common/Footer";
import Footer2 from "../common/Footer2";
import Header from "../common/header";
import CustomizedComDiv from "./CustComDiv";
import divider from "../Assets/divider.png"
import cake_toppers_img1 from "../Assets/cake_toppers_img1.jpg"

export default function CakeToppers() {
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
    var para = <p><b>Cake toppers are designed at a standard size of 4x5 inches and are cut and engraved in MDF boards using advanced laser cutting technology. This technology provides sharp and attractive results and it enriches the look of cakes during party usage. Size of the topper can be varied according to the requirement of the customers</b></p>
    return (
        <>
            <section class="welcome-section1 sec-pad">
                <div class="thm-container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="welcome-content1" style={{ padding_left: 0 }}>
                                <div class="title">
                                    <h3>Cake Toppers</h3>
                                </div>
                            </div>
                            <div align="justify"><p><b>Whilst possessing laser cutting technology for invitations, Madan Cards also uses the same for manufacturing cake toppers. Cake toppers are prepared in a variety of materials and in variable colors. The materials used here are MDF and Acrylic. In each material, 'n' number of color options are available and price of the toppers varies depending on the material cost, color and size </b></p><p><b>(Detailed descriptions and images can be found on our instagram page: m.c.a_caketoppers)</b><br /></p></div>
                            <div class="col-md-12" align="center"> <img src={divider} alt="Madan Cards and Arts - Sivakasi" style={{ margin_top: 20 }} /></div>
                            <CustomizedComDiv src={cake_toppers_img1} name={'MDF Cake Toppers'} para={para} col1={"col-md-8"} col2={"col-md-4"} />
                            <CustomizedComDiv src={cake_toppers_img1} name={'Acrylic Cake Toppers'} para={para} col1={"col-md-8"} col2={"col-md-4"} />
                            <CustomizedComDiv src={cake_toppers_img1} name={'Customized Cake Toppers'} para={para} col1={"col-md-8"} col2={"col-md-4"} />
                            <CustomizedComDiv src={cake_toppers_img1} name={'Acrylic Coins'} para={para} col1={"col-md-8"} col2={"col-md-4"} />
                            <CustomizedComDiv src={cake_toppers_img1} name={'MDF Baloons'} para={para} col1={"col-md-8"} col2={"col-md-4"} />
                            <table width="100%" border="0" cellspacing="0" cellpadding="0" >
                                <tbody><tr>
                                    <td><div class="pagination_div"></div></td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div >
            </section >
        </>
    )
}