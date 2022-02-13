import BannerCom from "../common/BannerCom";
import Footer from "../common/Footer";
import Footer2 from "../common/Footer2";
import Header from "../common/header";
import Hindunews from "../Assets/Hindunews.jpg"


export default function Awards() {
    return (
        <>
            <Footer />
            <Header />
            <BannerCom />
            <AwardsDetails />
            <Footer2 />
        </>
    )
}
function AwardsDetails() {
    return (
        <section class="welcome-section1 sec-pad">
            <div class="thm-container">
                <div class="row" align="center">
                    <div class="col-md-2">&nbsp;</div>
                    <div class="col-md-8">
                        <div class="welcome-img-box">
                            <img src={Hindunews}alt="Madan Cards and Arts - Sivakasi"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}