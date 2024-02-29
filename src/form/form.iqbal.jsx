import { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export const FormIqbal = (props) =>{
    
    const inititalValues = {name: "", email: ""};
    const [formValues, setFormValues] = useState(inititalValues);
    const [formErrors, setFormErrors] = useState({});

    const nameHandling = (e) => {
        console.log(e.target.value);
        setFormValues({...formValues, name: e.target.value});
    }

    const emailHandling = (e) => {
        console.log(e.target.value);
        setFormValues({...formValues, email: e.target.value});
    }

    const validationSchema = Yup.object({
        name: Yup.string().required("Name required").min(3, "Minimum 3 characters").max(15, "Maximum 15 characters"),
        email: Yup.string().email("Invalid email format").required("Email required")
    });

    const validate = (e) =>{
        console.log("validate");
    
        const errors = {};
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i;

        if (!formValues.name){
            errors.name = "Name required";
        }
        
        if (!formValues.email) {
            errors.email = "Email required";
        }
        else if (!regex.test(formValues.email)) {
            errors.email = "Invalid Email address";
        }
        
        setFormErrors(errors);

    }

    // useEffect(()=>{
    //     debugger;
    //     if (Object.keys(formErrors).length == 0){
    //         submitForm(); 
    //     }
    // }, [formErrors]);

    const submitForm = () => {
        console.log("Form submitted");
    }

    return(<>
        {/* <div stype={{display: "flex", flexDirection: "column", alignItems: "center"}}>
        <h1>Iqbal Form controlled</h1>
        <input style={{minWidth: 200, borderRadius: "10px", padding: "8px"}} placeholder="Enter name" value={formValues.name} onChange={nameHandling} />
        <br/>
        <span style={{color: "red"}}>{formErrors.name}</span>
        <br/>
        <input style={{minWidth: 200, borderRadius: "10px", padding: "8px"}} placeholder="Enter email" value={formValues.email} onChange={emailHandling} />
        <br/>
        <span style={{color: "red"}}>{formErrors.email}</span>
        <br/>
        <br/>
        <button style={{ cursor: "pointer" }} onClick={validate}>Submit</button>
        </div> */}

        <Formik initialValues={inititalValues} validationSchema={validationSchema} onSubmit={submitForm}>
            { (formik) => {
                // const {values,handleChange,handleSubmit, errors, touched, handleBlur, isValid, dirty} = formik; 
                // console.log("Formik props", formik);
                return (
                    <div stype={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                        <h1>Iqbal Formik</h1>
                        <Form>
                            <Field name="name" type="input" placeholder="Enter name" />
                            <ErrorMessage name="name" />
                            <br/>
                            <br/>
                            <Field name="email" type="input" placeholder="Enter email" />
                            <ErrorMessage name="email" />
                            <br/>
                            <br/>
                            <button type="submit">Submit</button>
                        </Form>
                    </div>
                );
            }}
        </Formik>
    </>);

}
