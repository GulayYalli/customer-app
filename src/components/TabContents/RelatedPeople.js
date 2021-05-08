import React, { Component } from 'react'
import { Formik } from 'formik'
import * as Yup from "yup"
import { Form, Input, SubmitButton} from 'formik-semantic-ui-react'


class RelatedPeople extends Component {
    state = {  }
    render() { 
        const initialValues = {
            nameSurname: '',
            role: '',
            email: '',
            phoneNumber: ''
        };
        const validationSchema = Yup.object({
            nameSurname: Yup.string().required("Required"),
            role: Yup.string().required("Required"),
            email: Yup.string().email("Invalid email address").required("Required"),
            phoneNumber: Yup.number().required("Required")
        });
        return ( 
            <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={ (values)=>{ 
                        console.log(values)                   
                    } }
                >
                    <Form size="large">                  
                        <Input
                            name="nameSurname"
                            placeholder="Name Surname"
                            errorPrompt
                        />
                        <Input
                            name="role"
                            placeholder="Role"
                            errorPrompt
                        />
                        <Input
                            type="number"
                            name="phoneNumber"
                            placeholder="Phone Number"
                            errorPrompt
                        />  
                        <Input
                            name="email"
                            placeholder="E-mail"
                            errorPrompt
                        />                       
                        <SubmitButton fluid primary>
                            Update
                        </SubmitButton>
                    </Form>
                </Formik>
        );
    }
}
 
export default RelatedPeople;