
export default function ContactUsComInput(props) {
    return (
        <>
            <div class="row">
                <div class="col-md-12">
                    <div class="form-group">
                        <input
                            type="text"
                            name={props.name}
                            id={props.id}
                            class="form-control inp_design"
                            placeholder={props.placeholder}
                            maxLength={props.maxLength !== null ? props.maxLength : ""}
                            autocomplete={props.autocomplete} />
                    </div>
                </div>
            </div>
        </>
    )
}