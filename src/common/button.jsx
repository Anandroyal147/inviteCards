import { Button } from '@material-ui/core';

export default function Buttons(props) {

    return (
        <>
            <Button
                type={props.submit}
                fullWidth
                variant="contained"                
                color="primary"
               // className={classes.submit}
                onClick={props.handleSubmit}
              //  disabled={loading || !this.state.email || !this.state.password}               
            >{props.text}</Button>
        </>
    )
}