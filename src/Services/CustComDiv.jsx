import divider from "../Assets/divider.png"


export default function CustomizedComDiv(props) {

    return (
        <>
            <div class="row">
                <div class="container">
                    <div class="row">
                        <div class={props.col1}>
                            <div class="welcome-content1" style={{ padding_left: 0 }}>
                                <div class="title" style={{ margin_bottom: 10 }}>
                                    <p>{props.name}</p>
                                </div>
                            </div>
                            {props.para}
                        </div>
                        <div class={props.col2}>
                            <div class="img-box event" style={{ max_height: 250, overflow: 'hidden' }}>  <img src={props.src} alt="Announcement" class="img-responsive" />  </div>
                        </div>
                        {props.col3!==undefined?  <div class={props.col3}>
                            <div class="img-box event" style={{ max_height: 250, overflow: 'hidden' }}>  <img src={props.src2} alt="Announcement" class="img-responsive" />  </div>
                        </div>:<></>}
                    </div>
                </div>
                <div class="col-md-12" align="center"> <img src={divider} alt="Madan Cards and Arts - Sivakasi" style={{ margin_top: 20 }} /></div>
            </div>
        </>
    )
}
