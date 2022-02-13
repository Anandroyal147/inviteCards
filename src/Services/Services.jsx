import BannerCom from "../common/BannerCom";
import Footer from "../common/Footer";
import Footer2 from "../common/Footer2";
import Header from "../common/header";
import ServicesComDiv from "./ServicesComDIv";
import service1 from "../Assets/service1.jpg"

export default function Services() {
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
    return (
        <>
            <section class="welcome-section1 sec-pad">
                <div class="thm-container">
                    <div class="row">
                        <div class="col-md-12">
                            <ServicesComDiv src={service1} name={'Customized Wedding Cards'} route={'/customizedWeddingCards'}/>
                            <ServicesComDiv src={service1} name={'Offset Printing Services'}   route={'/offsetPrinting'} />
                            <ServicesComDiv src={service1} name={'Cake Toppers'}  route={'/cakeToppers'} />
                            <table width="100%" border="0" cellspacing="0" cellpadding="0" >
                                <tbody><tr>
                                    <td><div class="pagination_div"></div></td>
                                </tr>
                                </tbody></table>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}