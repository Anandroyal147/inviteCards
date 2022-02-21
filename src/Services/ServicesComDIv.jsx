import divider from "../Assets/divider.png"
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';


export default function ServicesComDiv(props) {
    return (
        <>
            <div class="row">
                <div class="container">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="img-box event" style={{ max_height: 250, overflow: 'hidden' }}>  <img src={props.src} alt="Announcement" class="img-responsive" />  </div>
                        </div>
                        <div class="col-md-8">
                            <div class="welcome-content1" style={{ padding_left: 0 }}>
                                <div class="title" style={{ margin_bottom: 10 }}>
                                    <p>{props.name}</p>
                                </div>
                            </div>
                            <p align="justify">  Madan Cards &amp; Arts is also well known for its high quality printing service. Printing is done using well serviced and technologically updated machines and so, the jobs are completed on time with good results.      Since the colors are achieved using an
                                advanced CIP-3 system, the results will remain uniform in the jobs
                                irrespective of quantity.    Apart from printing, finishing...</p>
                            <p align="justify"><Link to={props.route} class="btn btn-primary btn-sm">view</Link></p>
                        </div>
                    </div>
                </div>
                <div class="col-md-12" align="center"> <img src={divider} alt="Madan Cards and Arts - Sivakasi" style={{ margin_top: 20 }} /></div>
            </div>
        </>
    )
}
