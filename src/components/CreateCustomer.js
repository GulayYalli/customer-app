import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Formik } from 'formik'
import * as Yup from "yup"
import { Segment, Button } from 'semantic-ui-react'
import { Form, Input, Radio, SubmitButton, Select, TextArea } from 'formik-semantic-ui-react'
import { handleCreateCustomer } from '../actions/customers'

const relatedFirmOptions = [
    { key: '1', value: 'firm1', text: 'Firm 1' },
    { key: '2', value: 'firm2', text: 'Firm 2' }
]

class CreateCustomer extends Component {

    closeCreateCustomer = () => {
        this.props.closeCreateCustomer()
    }

    render() { 
        const initialValues = {
            nameSurname: '',
            customertype: 'personal',
            title: '',
            email: '',
            phoneNumber: '',
            tckn: '',
            relatedFirm: '',
            address: ''
        };
        const validationSchema = Yup.object({
            nameSurname: Yup.string().required("Required"),
            title: Yup.string().required("Required"),
            email: Yup.string().email("Invalid email address").required("Required"),
            phoneNumber: Yup.number().required("Required"),
            tckn: Yup.number().required("Required"),
            relatedFirm: Yup.string().required("Required"),
            address: Yup.string().required("Required")
          });
        return ( 
            <Segment style={{position: 'absolute', zIndex:2, right:0, top: 0, minWidth: 300 }}>                
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={ (values)=>{ 
                        this.props.dispatch(handleCreateCustomer(values))
                        setTimeout(() => {
                            this.closeCreateCustomer()
                        }, 1500)
                    } }
                >
                    <Form size="large">                  
                        <Radio name='customertype' value='personal' label='Gerçek' /> 
                        <Radio name='customertype' value='corporate' label='Tüzel' />  
                        <Input
                            name="nameSurname"
                            placeholder="Name Surname"
                            errorPrompt
                        />                   
                        <Input
                            name="title"
                            placeholder="Title"
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
                        <Input
                            name="tckn"
                            type="number"
                            placeholder="Tckn / Vkn"
                            errorPrompt
                        />
                        <Select
                            name="relatedFirm"
                            options= {relatedFirmOptions}
                            placeholder="Related Firm"
                            errorPrompt
                        /> 
                        <TextArea
                            name="address"
                            placeholder="Address"
                            errorPrompt
                        /> 
                        <SubmitButton fluid primary>
                            Create
                        </SubmitButton>
                        <Button fluid secondary onClick={this.closeCreateCustomer}>
                            Close
                        </Button>
                    </Form>
                </Formik>
            </Segment>
        );
    }
}

function mapStateToProps({customers}) {
    return {
        customers: Object.values(customers)
    }
}

export default connect(mapStateToProps)(CreateCustomer);
