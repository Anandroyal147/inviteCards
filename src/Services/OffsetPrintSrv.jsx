

import BannerCom from "../common/BannerCom";
import Footer from "../common/Footer";
import Footer2 from "../common/Footer2";
import Header from "../common/header";
import CustomizedComDiv from "./CustComDiv";
import divider from "../Assets/divider.png"
import offset_service_img1 from "../Assets/offset_service_img1.jpg"

export default function OffsetPrintSrv() {
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
    var para = <div align="justify"><b>Textile packages are printed here with various options as per the necessities of the customer both in Normal and UV Printing. After printing services like Hot Foil stamping, Screen Printing, Embossing, Laser Cutting, Scoring and Pasting are done based on the requirements of the customers.</b><br/></div>
    return (
        <>
            <section class="welcome-section1 sec-pad">
                <div class="thm-container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="welcome-content1" style={{ padding_left: 0 }}>
                                <div class="title">
                                    <h3>Offset Printing Services</h3>
                                </div>
                            </div>

                            <div align="justify"><p><b>Madan Cards &amp; Arts is also well known for its high quality printing service. Printing is done using well serviced and technologically updated machines and so, the jobs are completed on time with good results. </b><b><b><b><b>Since the colors are achieved using an
                                advanced CIP-3 system, the results will remain uniform in the jobs
                                irrespective of quantity. </b></b></b>Apart from printing, finishing services can also be done on a requirement basis for people who prefer to complete the entire chain in a single premise. </b></p><p><b>The options available in Printing are (both Normal and UV):</b><br/></p><ul><li><b><b><b>Just Printing </b></b></b></li><li><b><b><b>Printing with Full coating</b></b></b></li><li><b><b><b>Printing
                                    with Spot coating</b></b></b></li><li><b><b><b>Printing with Tripp-off</b></b></b></li><li><b><b><b>Only Tripp-off</b></b></b></li><li><b><b><b>Only Full
                                        coating</b></b></b></li><li><b><b><b>Only Spot coating </b></b></b></li></ul><p><b><b><br /> </b></b></p></div>

                            <div class="col-md-12" align="center"> <img src={divider} alt="Madan Cards and Arts - Sivakasi" style={{ margin_top: 20 }} /></div>

                            <CustomizedComDiv src={offset_service_img1} name={'Textile Printing'} para={para} col1={"col-md-8"} col2={"col-md-4"} />
                            <CustomizedComDiv src={offset_service_img1} name={'Food Package Printing'} para={para} col1={"col-md-8"} col2={"col-md-4"} />
                            <CustomizedComDiv src={offset_service_img1} name={'Medical Package Printing'} para={para} col1={"col-md-8"} col2={"col-md-4"} />
                            <CustomizedComDiv src={offset_service_img1} name={'Notebook Printing'} para={para} col1={"col-md-8"} col2={"col-md-4"} />
                            <CustomizedComDiv src={offset_service_img1} name={'Pictures and Posters Printing'} para={para} col1={"col-md-8"} col2={"col-md-4"} />
                            <CustomizedComDiv src={offset_service_img1} name={'Fireworks Package Printing'} para={para} col1={"col-md-8"} col2={"col-md-4"} />
                            <CustomizedComDiv src={offset_service_img1} name={'Calender Printing'} para={para} col1={"col-md-8"} col2={"col-md-4"} />
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