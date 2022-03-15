import React, { useState } from 'react'
import { omit } from 'lodash'

const useForm = (callback) => {

    //Form values
    const [values, setValues] = useState({});
    //Errors
    const [errors, setErrors] = useState({});



    const validate = (event, name, value) => {
        //A function to validate each input values

        switch (name) {
            case 'u_name':
                if (value.length <= 2) {
                    // we will set the error state

                    setErrors({
                        ...errors,
                        username: 'Username atleast have 5 letters'
                    })
                } else {
                    // set the error state empty or remove the error for username input

                    //omit function removes/omits the value from given object and returns a new object
                    let newObj = omit(errors, "username");
                    setErrors(newObj);

                }
                break;

            case 'u_email':
                if (
                    value.length < 1 ||
                    !new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(value)
                ) {
                    setErrors({
                        ...errors,
                        email: 'Enter a valid email address'
                    })
                } else {

                    let newObj = omit(errors, "email");
                    setErrors(newObj);

                }
                break;
            case 'u_mobile':
                const regex = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i;
                if (value.length < 10 || value.length > 10 || (!new RegExp(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i).test(value))) {
                    setErrors({
                        ...errors,
                        mobile: 'Enter a valid Phone Number'
                    })
                } else {
                    let newObj = omit(errors, "mobile");
                    setErrors(newObj);
                }

                break;
            case 'u_city':
                if (value.length < 1) {
                    setErrors({
                        ...errors,
                        u_city: 'Please Enter City Details'
                    })
                } else {
                    let newObj = omit(errors, "u_city");
                    setErrors(newObj);
                }

                break;
            case 'u_message':
                if (value.length < 1) {
                    setErrors({
                        ...errors,
                        u_message: 'Please Enter Details'
                    })
                } else {
                    let newObj = omit(errors, "u_message");
                    setErrors(newObj);
                }

                break;
            case 'password':
                if (
                    !new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/).test(value)
                ) {
                    setErrors({
                        ...errors,
                        password: 'Password should contains atleast 8 charaters and containing uppercase,lowercase and numbers'
                    })
                } else {

                    let newObj = omit(errors, "password");
                    setErrors(newObj);

                }
                break;

            default:
                break;
        }
    }

    //A method to handle form inputs
    const handleChange = (event) => {
        //To stop default events    
        event.persist();

        let name = event.target.name;
        let val = event.target.value;

        validate(event, name, val);
        //Let's set these values in state
        console.log('useForm------>')
        setValues({
            ...values,
            [name]: val,
        })

    }


    const handleSubmit = (event) => {
        if (event) event.preventDefault();

        if (Object.keys(errors).length === 0 && Object.keys(values).length !== 0) {
            callback();

        } else {
            console.log('useFormError------->', values)

            if (Object.keys(values).length === 0) {
                alert("Please Enter The Fields");
            }
        }
    }


    return {
        values,
        errors,
        handleChange,
        handleSubmit
    }
}

export default useForm