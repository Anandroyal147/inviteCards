import './AboutUs.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
export default function OwnerCardCom(props) {
    // style="; ;"
    // style=""
    // position: absolute; left: 399px; top: 0px;
    // position: absolute; left: 799px; top: 0px;
    return (
        <>
            <div class="col-md-4 col-sm-6 col-xs-12" style={props.styles} >
                <div class="single-about">
                    <div class="img-box">
                        <img src={props.src} alt="Madan Cards and Arts - Sivakasi" />
                    </div>
                    <div class="text-box hvr-bounce-to-bottom">
                        <h3 style={{ margin_bottom: 5, font_size: 18 }}> {props.name}</h3>
                        <h5 style={{ font_size: 15,color:'#337ab7' }} >{props.posting}</h5>
                        {props.address}  
                        <a href="#" class="read-more fas fa-angle-right"><FontAwesomeIcon icon={faAngleRight}/></a>
                    </div>
                </div>
            </div>
        </>
    )
}