import React, { Component, Fragment } from 'react'
import {connect} from 'react-redux'
import Customer from './Customer'
import { Table, Segment, Button } from 'semantic-ui-react'
import CreateCustomer from './CreateCustomer'

class CustomerList extends Component {

    state = {
        isCreateMode: false
    }
    handleOpenCreateCustomer = () => {
        this.setState({
            isCreateMode : true
        })
    }
    handleCloseCreateCustomer = () => {
        this.setState({
            isCreateMode : false
        })
    }

    render() { 
        const { customers } = this.props
        const { isCreateMode } = this.state

        return ( <Fragment>   
            <Segment clearing vertical> 
                <Button color='grey' floated='right' onClick={this.handleOpenCreateCustomer}>Create</Button>                             
            </Segment> 
            {
                isCreateMode ? <CreateCustomer closeCreateCustomer={this.handleCloseCreateCustomer} /> : ''
            } 
            <Table>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>
                            &nbsp;
                        </Table.HeaderCell>
                        <Table.HeaderCell>
                            Customer Name
                        </Table.HeaderCell>
                        <Table.HeaderCell>
                            Type
                        </Table.HeaderCell>
                        <Table.HeaderCell>
                            Related Firm
                        </Table.HeaderCell>
                        <Table.HeaderCell>
                            Address
                        </Table.HeaderCell>
                        <Table.HeaderCell>
                            GSM
                        </Table.HeaderCell>
                        <Table.HeaderCell>
                            Email
                        </Table.HeaderCell>
                        <Table.HeaderCell>
                            Portal Information
                        </Table.HeaderCell>
                        <Table.HeaderCell>&nbsp;</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>  
                <Table.Body>                                                                       
                    {customers.map((customer) => (     
                        <Table.Row key={customer.id} >                                                      
                            <Customer customer={customer} />  
                        </Table.Row>                                                                   
                    ))} 
                </Table.Body>                                                   
            </Table>                        
        </Fragment> );
    }
}

function mapStateToProps({customers}) {
    return {
        customers: Object.values(customers)
    }
}

export default connect(mapStateToProps)(CustomerList);