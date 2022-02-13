import BannerCom from "../common/BannerCom"
import Footer from "../common/Footer"
import Footer2 from "../common/Footer2"
import Header from "../common/header"
import OwnerCardCom from "./OwnerCardCom"
import md1 from "../Assets/md1.jpg"
import './AboutUs.css'

export default function ManagementDesk() {
    return (
        <>
            <Footer />
            <Header />
            <BannerCom />
            <OwnerCard />
            <Footer2 />

        </>
    )
}
function OwnerCard() {
    var styles1 = {
        position: 'absolute', left: 0, top: 0
    }
    var styles2 = {
        position: 'absolute', left: 399, top: 0
    }
    var styles3 = {
        position: 'absolute', left: 799, top: 0
    }
    var address1 =
        <p>S/O, P.M.S.Mariappa Nadar <br />
            D.O.B. – 22-07-1944<br />
            Mobile Number: +91-94432 63317<br /><br />
            " <em>Establishment and successful development for more than two decades along with responsibility distribution to future generations</em> "
            <br /><br /><br /><br /><br />  </p>
    var address2 = <p>S/O, M.Sivagaminathan <br />
        D.O.B. – 31-07-1968<br />
        Mobile Number: +91-90470 45373<br /><br />

        <strong>Education:</strong> Bachelors in Electricals and Electronics Engineering (Mepco Schlenk Engieering College, Virudhunagar)<br /><br />
        “<em>Joined the concern in 1990 after under graduation, adopted substantial marketing strategies and updated latest innovations in the product</em>”
        <br />
    </p>
    var address3 = <p>S/O, S.Mathan Kumar, B.E. <br />
        D.O.B. – 16-03-1994<br />
        Mobile Number: +91-97906 23618<br /><br />

        <strong>Education:</strong> <br />
        1) Bachelors in Mechatronics Engieering (Kongu Engieering College, Erode)<br />
        2) Masters in Business Administration (Anglia Ruskin University, Cambridge)<br />
        3) Diploma in Strategic Management (Chartered Management Institute, London)
        <br /><br /><br />
    </p>
    return (
        <>
            <section class="about-section sec-pad">
                <div class="thm-container">
                    <div class="row masonary-layout" style={{ padding_bottom: 40, position: 'relative', height: 888.292 }} >
                        <OwnerCardCom name={'Mr.M.Sivagaminathan'} posting={' Managing Director and Founder'} address={address1} styles={styles1} src={md1} />
                        <OwnerCardCom name={'Mr.S.Mathan Kumar, B.E'} posting={'Director'} address={address2} styles={styles2} src={md1} />
                        <OwnerCardCom name={'M.Arvind Kumaran, B.E., M.B.A'} posting={''} address={address3} styles={styles3} src={md1} />
                    </div>
                </div>
            </section>
        </>
    )
}
