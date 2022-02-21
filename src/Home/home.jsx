import banner1 from "../Assets/banner-1-1.jpg";
import banner2 from "../Assets/banner-1-2.jpg";
import Header from "../common/header";
import Amarnayem_Amarna from "../Assets/Madurai_Amarnayem_Amarna-Yem.jpg"
import Babashyem_BABASH from "../Assets/Madurai_Babashyem_BABASH-YEM.jpg"
import Lillisyem_LILLIS from "../Assets/Madurai_Lillisyem_LILLIS-YEM.jpg"
import Prabhayem_imgonline from "../Assets/Madurai_Prabhayem_imgonline.jpg"
import whoweare from "../Assets/Who_We_Are.jpg"
import Footer2 from "../common/Footer2";
import Footer from "../common/Footer";
import CollectionsCard from "../common/collectionsCard";
import SelfIntroCom from "../common/selfIntroCom";
import './home.css';
//import './home.css';
export function Home() {
    return (
        <div>
            <Footer />
            <Header />
            <Carousel />
            <SelfIntro />
            <RecentCollections />
            <Footer2 />
        </div>
    )
}

function Carousel() {
    const myStyle = {
        background_image: banner1,
        background_position: 'left top'
    }
    return (
        <div className="corousel">
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    {/* <li data-target="#carouselExampleIndicators" data-slide-to="2"></li> */}
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="d-block w-100" src={banner1} alt="First slide" />
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src={banner2} alt="Second slide" />
                        <div class="carousel-caption d-none d-md-block">
                            <div class="thm-container">
                                <div class="box valign-middle">
                                    <div class="content ">
                                        <h3 data-animation="animated fadeInUp" class="">WORLD CLASS WEDDING INVITATION </h3>
                                        <h2 data-animation="animated fadeInDown" class="">MANUFACTURERS
                                        </h2>
                                        <a href="madan_cards_contact.php" class="thm-btn" data-animation="animated fadeInDown">Contact Us</a> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </div>
    );
}

export function SelfIntro() {
    var para1 = <p align="justify"><br /><strong>Madan Cards &amp; Arts </strong>is one of the high quality manufacturers of wedding invitations in India. The concern has machinery to serve pre-pressing, printing and finishing operations. Though the machinery in house are installed for achieving innovations in invitation manufacturing, purposes are indeed served by the same machinery in packaging as well. Thus, the company <strong>Madan Cards &amp; Arts</strong>, besides advancing in its own product, focuses on quality job requirements around the country. The manufacturing unit is situated in a town called Sivakasi which is also termed as the national printing hub for India.  </p>


    var para2 = <p align="justify"><br />In this modern scenario, competing is mandatory for survival rather than development and printing industry in Sivakasi is nowhere exceptional. In order to survive and not get blacklisted, it is important inside the town to keep updating the technological features and<strong> Madan Cards &amp; Arts</strong> have somehow achieved it for almost two decades. <br />

        The company has its establishment in the year 1988 with the name “<strong>Mariappa Traders</strong>” and a simple lamination operation. As the company grew, the founder initiated the idea of wedding invitations and on a normal humanitarian term, worked hard on it. Eventually, the company managed to earn some devotional blessings and entered a creative period during which, it emerged as <strong>Madan Cards &amp; Arts</strong> throughout the southern part of India. Apart from quality and innovations, customer service was also considered important here and that made all the difference.
    </p>
    return (
        <section class="welcome-section sec-pad">
            <SelfIntroCom src={whoweare} para1={para1} para2={para2}/>
            {/* <div class="thm-container">
                <div class="row">
                    <div class="col-md-6">
                        <div class="welcome-img-box"> <img src={whoweare} alt="Madan Cards and Arts - Sivakasi" /> </div>
                    </div>
                    <div class="col-md-6">
                        <div class="welcome-content">
                            <div class="title">
                                <p>Welcome To</p>
                            </div>
                            <p align="justify"><br /><strong>Madan Cards &amp; Arts </strong>is one of the high quality manufacturers of wedding invitations in India. The concern has machinery to serve pre-pressing, printing and finishing operations. Though the machinery in house are installed for achieving innovations in invitation manufacturing, purposes are indeed served by the same machinery in packaging as well. Thus, the company <strong>Madan Cards &amp; Arts</strong>, besides advancing in its own product, focuses on quality job requirements around the country. The manufacturing unit is situated in a town called Sivakasi which is also termed as the national printing hub for India.  </p>
                        </div>
                    </div>

                    <div class="col-md-12">
                        <p align="justify"><br />In this modern scenario, competing is mandatory for survival rather than development and printing industry in Sivakasi is nowhere exceptional. In order to survive and not get blacklisted, it is important inside the town to keep updating the technological features and<strong> Madan Cards &amp; Arts</strong> have somehow achieved it for almost two decades. <br />

                            The company has its establishment in the year 1988 with the name “<strong>Mariappa Traders</strong>” and a simple lamination operation. As the company grew, the founder initiated the idea of wedding invitations and on a normal humanitarian term, worked hard on it. Eventually, the company managed to earn some devotional blessings and entered a creative period during which, it emerged as <strong>Madan Cards &amp; Arts</strong> throughout the southern part of India. Apart from quality and innovations, customer service was also considered important here and that made all the difference.
                        </p>
                    </div>
                </div>
            </div> */}
        </section>
    )
}

export function RecentCollections() {
    return (
        <section class="recent-projects sec-pad">
            <div class="thm-container">
                {/* <!-- <span>Our Products Category</span>--> */}
                <div class="sec-title text-center">
                    <h3>Recent Collections</h3>
                    <p>Products listed below can be ordered from a minimum of 100 nos. to 10,000 nos. and are delivered to any location through any preferable mode of transport</p>
                </div>
                <div class="row">
                    <div class="col-md-3 col-sm-6 col-xs-12">
                        <CollectionsCard src={Lillisyem_LILLIS} text={'LILLIS - YEM'} />
                    </div>
                    <div class="col-md-3 col-sm-6 col-xs-12">
                        <CollectionsCard src={Prabhayem_imgonline} text={'PRABHA - YEM'} />
                    </div>
                    <div class="col-md-3 col-sm-6 col-xs-12">
                        <CollectionsCard src={Babashyem_BABASH} text={'BABASH-YEM'} />

                    </div>
                    <div class="col-md-3 col-sm-6 col-xs-12">
                        <CollectionsCard src={Amarnayem_Amarna} text={'AMARNA-YEM'} />
                    </div>
                </div>
            </div>
        </section>
    )
}

     // <div id="minimal-bootstrap-carousel" class="carousel slide carousel-fade slider-home-one" data-ride="carousel">
        //     {/* <!-- Wrapper for slides --> */}
        //     <div class="carousel-inner" role="listbox">
        //         <div class="item slide-1 active" style={myStyle}>
        //             <div class="carousel-caption">
        //                 <div class="thm-container">
        //                     <div class="box valign-middle">
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //         <div class="item slide-2" style={myStyle}>
        //             <div class="carousel-caption">
        //                 <div class="thm-container">
        //                     <div class="box valign-middle">
        //                         <div class="content ">
        //                             <h3 data-animation="animated fadeInUp" class="">WORLD CLASS WEDDING INVITATION </h3>
        //                             <h2 data-animation="animated fadeInDown" class="">MANUFACTURERS
        //                             </h2>
        //                             <a href="http://madancards.com/madan_cards_contact.php" class="thm-btn" data-animation="animated fadeInDown">Contact Us</a> </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        //     {/* <!-- Controls --> */}
        //     <a class="left carousel-control" href="http://madancards.com/index.php#minimal-bootstrap-carousel" role="button" data-slide="prev"> <i class="fa fa-angle-left"></i> <span class="sr-only">Previous</span> </a> <a class="right carousel-control" href="http://madancards.com/index.php#minimal-bootstrap-carousel" role="button" data-slide="next"> <i class="fa fa-angle-right"></i> <span class="sr-only">Next</span> </a>
        //     <ul class="carousel-indicators list-inline custom-navigation">
        //         <li data-target="#minimal-bootstrap-carousel" data-slide-to="0" class="active"></li>
        //         <li data-target="#minimal-bootstrap-carousel" data-slide-to="1" class=""></li>
        //     </ul>
        // </div>