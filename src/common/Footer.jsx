import "./Footer.css"
export default function Footer() {
                const mystyle = {
        color: "#FFFFFF",
        line_height: "40px"
    };
    const font = {
        font_size: "19px"
    }
    return (
        <div class="footer-bottom">
            <div class="thm-container clearfix" style={{ padding: "0px" }}>
                <div class="pull-left copy-text">
                    <p style={mystyle}><i class="fa fa-mobile" style={font}> </i> &nbsp; +91 - 9443363328</p>
                </div>
                <div class="pull-right copy-text">
                    <p style={mystyle}><i class="fa fa-envelope " style={font}> </i> &nbsp; mathancards@gmail.com</p>
                </div>
            </div>
        </div>
    )
}
// , line-height:"40px"