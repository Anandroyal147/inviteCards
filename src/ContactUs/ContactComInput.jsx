
export default function ContactUsComInput(props) {
    var inputClass = props.errors? "form-control inp_design error_input":'form-control inp_design'
    return (
        <>
            <div class="row">
                <div class="col-md-12">
                    <div class="form-group">
                        <input
                            type="text"
                            name={props.name}
                            id={props.id}
                            onChange={props.handleChange}
                            class={inputClass}
                            placeholder={props.placeholder}
                            maxLength={props.maxLength !== null ? props.maxLength : ""}
                            autocomplete={props.autocomplete} />
                        {props.errors && <p className="error_txt">{props.errors}</p>}
                    </div>
                </div>
            </div>
        </>
    )
}