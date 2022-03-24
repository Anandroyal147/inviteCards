import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux"


import Button from '@mui/material/Button';

const Modal = (props) => {
    // // Use useEffect to add an event listener to the document
    // useEffect(() => {
    // 	function onKeyDown(event) {
    // 		if (event.keyCode === 27) {
    // 			// Close the modal when the Escape key is pressed
    // 			onRequestClose();
    // 		}
    // 	}

    // 	// Prevent scolling
    // 	document.body.style.overflow = "hidden";
    // 	document.addEventListener("keydown", onKeyDown);

    // 	// Clear things up when unmounting this component
    // 	return () => {
    // 		document.body.style.overflow = "visible";
    // 		document.removeEventListener("keydown", onKeyDown);
    // 	};
    // });
    const message = useSelector((state) => state.auth.user.message)
    console.log('ModalMsg---->',props. message);
    return (
        <div className="modal__backdrop">
            <div className="modal__container">
                <h3 className="modal__title text-center">Alert!!</h3>

                <p className="text-center">
                    {props.message}                </p>
                <div className="text-right">
                    <Button variant="contained" onClick={props.onRequestClose}>OK</Button>
                </div>
            </div>
        </div>
    );
};

export default Modal;