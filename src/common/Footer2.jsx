import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faPinterest } from "@fortawesome/free-brands-svg-icons"
import { faYoutube } from "@fortawesome/free-brands-svg-icons"
export default function Footer2() {
    return (
        <div class="footer-bottom">
            <div class="thm-container clearfix">
                <div class="pull-left copy-text">
                    <p>© Copyright 2019 Madan Cards and Arts,Sivakasi.</p>
                </div>
                <div class="social-box pull-right">
                     <a href="#" class="fab fa-twitter hvr-pulse"><FontAwesomeIcon icon={faTwitter}/></a>                     
                    <a href="#" class="fab fa-pinterest hvr-pulse"><FontAwesomeIcon icon={faPinterest}/></a>
                    <a href="#" class="fab fa-facebook-f hvr-pulse"><FontAwesomeIcon icon={faFacebookSquare}/></a>
                    <a href="#" class="fab fa-youtube hvr-pulse"><FontAwesomeIcon icon={faYoutube}/></a></div>
            </div>
        </div>
    )
}