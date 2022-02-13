import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'



export default function CollectionsCard(props) {
    return (
        <div class="single-recent-project album">
            <div class="img-box"> <img src={props.src} alt="Madan Cards and Arts - Sivakasi" /> </div>
            <div class="text-box"> <a href="madan_cards_product.php?sl=lillis-yem" class="more"><FontAwesomeIcon icon={faPlus} /></a>
                <div class="inner hvr-bounce-to-bottom" align="center"> <a href="madan_cards_product.php?sl=lillis-yem">
                    <h3>{props.text}</h3>
                </a> <a href="madan_cards_product.php?sl=lillis-yem"> <span>View More</span></a> </div>
            </div>
        </div>
    )
}