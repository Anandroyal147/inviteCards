import BannerCom from "../common/BannerCom";
import Footer from "../common/Footer";
import Footer2 from "../common/Footer2";
import Header from "../common/header";
import FacilitiesComDiv from "./FacilitiesComDiv";
import divider from "../Assets/divider.png"
import printer from "../Assets/OffsetPrinting.jpg"
import laserCutting from "../Assets/LaserCutting.jpg"
import stamping from "../Assets/Stamping.jpg"


export default function Facilities() {
    return (
        <>
            <Footer />
            <Header />
            <BannerCom />
            <FacilitiesDetails />
            <Footer2 />
        </>
    )
}
const FacilitiesDetails = () => {

  
    var para1 = <p align="justify">
        Mitsubishi six color Inter-deck offset (Size: 30” x 40”) with UV printing, UV Coating, Aqua Coating and Tripp Off facilities. This offset belongs to Diamond series and so, high quality printing service is offered within a short period of time. Tripp Off services are offered both in Metalized and normal printed boards.
    </p>
    var para2 = <p align="justify">
        ITOH type cutting machine (Size: 30” * 40” – 2 Nos.) for precise cutting and trimming. The accuracy achieved in this process serves as a backbone for our timely performance in offset printing. One machine completely satisfies offset requirements and the other is utilized for invitation manufacturing.
    </p>


    return (
        <>
            <section class="welcome-section1 sec-pad">
                <div class="thm-container">
                    <div class="row">
                        <div class="welcome-content1" style={{ padding_left: 0 }}>
                            <div class="title">
                                <p>High</p>
                                <h3> Quality Machines </h3>
                            </div>
                            <p align="justify">All the machinery and their facilities are listed below based on several levels of Research and Development. So, the details mentioned below are precise and up to date. Moreover, the operations that are not hosted by this concern can be still done through perfect outsourcing methods. </p>
                            <div class="col-md-12" align="center">
                                <img src={divider} alt="Madan Cards and Arts - Sivakasi" style={{ margin_top: 20 }} />
                            </div>
                        </div>
                        <FacilitiesComDiv name={"Offset Printing"} para={para1} src={printer} bootClass={"col-md-8"}  />
                        <FacilitiesComDiv name={"Cutting"} para={para2} src={printer} bootClass={"col-md-8"} />
                        <FacilitiesComDiv name={"Screen Printing"} para={para1} src={printer} bootClass={"col-md-8"} />
                        <FacilitiesComDiv name={"HOT-FOIL Stamping"} para={para2} src={stamping} bootClass={"col-md-12"} />
                        <FacilitiesComDiv name={"Embossing"} para={para2} src={printer} bootClass={"col-md-8"} />
                        <FacilitiesComDiv name={"Laser Cutting"} para={para2} src={laserCutting} bootClass={"col-md-4"} />
                        <FacilitiesComDiv name={"Hydraulic Punching and Envelope Pasting"} para={para2} src={laserCutting} bootClass={"col-md-4"} />
                        <FacilitiesComDiv name={'Shrink Packaging'} para={para1} src={printer} bootClass={"col-md-8"} />
                        <FacilitiesComDiv name={"Creasing"} para={para2} src={laserCutting} bootClass={"col-md-4"} />
                        <FacilitiesComDiv name={'Foiling and Embossing'} para={para2} src={printer} bootClass={"col-md-8"} />
                    </div>
                </div>
            </section>
        </>
    )
}