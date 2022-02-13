import Header from '../common/header'
import Footer2 from '../common/Footer2'
import Footer from '../common/Footer'
import SelfIntroCom from '../common/selfIntroCom'
import whoweare from "../Assets/Who_We_Are.jpg"
import BannerCom from '../common/BannerCom'



export default function AboutUs(props) {
    return (
        <>
            <Footer />
            <Header />
            <BannerCom />
            <WhoWeAre />
            <Footer2 />
        </>
    )
}

function WhoWeAre() {
    var para1 = <p align="justify"><strong>Madan Cards &amp; Arts</strong> was established in the year 1988 by Mr.M.S.Sivagaminathan. Initially, the company was named as “Mariappa Traders” and lamination was the only process in house. Since, the founder of the company focused more on the basic business essentials like quality, accuracy, timely performance and payments, the margin levels helped to expand the infrastructure to three lamination machines. Meanwhile, recognizing the competitive nature in the industry, multiple streams are considered like invitation manufacturing and craft paper production.

    </p>

    var para2 = <p align="justify"><br />  Finally, there came a point where the expectation towards quality was completely drained out and low cost production became the only area to be concentrated in lamination process and that is when, <strong>Madan Cards &amp; Arts</strong> gave up the process.   <br />    <br />
        After quelling lamination, the machinery possessed for that operation was used for laminating craft papers as they are sold in the form of sheets and rolls as well. On the other hand, wedding invitations are manufactured through outsourcing methods involving printing, hot foil stamping and embossing processes. Once <strong>Madan Cards</strong> reached a considerable annual turn-over and found it difficult to outsource the manufacturing operations, the first printing machine was launched in house. Having started with a double color machine, the venture continued and the concern switched to a four color and then a six color offset with UV printing options in two decades. The progression it had in its printing area, restricted the partners from working more on craft papers and so, at a stage, they decided to stop manufacturing craft papers and work round the clock on invitations. <br /><br />
        Though <strong>Madan Cards</strong> gave up its basements like lamination and craft papers, advanced printing jobs are still focused to meet its monthly debts during non-seasonal occasions for invitations. Moreover, to be precise on its standards, it has strengthened its manufacturing capacity by importing lot of pre-press and post-press machinery for Screen Printing, Hot-Foil Stamping, Micro Embossing, Laser-Cutting, Creasing, Envelope Making and packing. Thus, at present, the ultimate target in <strong>Madan Cards &amp; Arts</strong> is to maintain their recognition in invitation market and satisfy advanced requirements in the printing job market.
    </p>
    return (
        <>
            <SelfIntroCom src={whoweare} para1={para1} para2={para2} />
        </>
    )
}