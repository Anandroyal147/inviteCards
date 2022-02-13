export default function SelfIntroCom(props) {

    return (
        <section class="welcome-section sec-pad">
            <div class="thm-container">
                <div class="row">
                    <div class="col-md-6">
                        <div class="welcome-img-box"> <img src={props.src} alt="Madan Cards and Arts - Sivakasi" /> </div>
                    </div>
                    <div class="col-md-6">
                        <div class="welcome-content">
                            <div class="title">
                                <p>Welcome To</p>
                            </div>
                            {props.para1}
                        </div>
                    </div>

                    <div class="col-md-12">
                        {props.para2}
                    </div>
                </div>
            </div>
        </section>
    )
}