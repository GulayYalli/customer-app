import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Table, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { handleDeleteCustomer } from '../actions/customers'

class Customer extends Component {
    deleteCustomer = (custId) => {
        this.props.dispatch(handleDeleteCustomer(custId))
    }
    render() { 
        const {customer} = this.props
        const custId = customer.id
        return ( 
            <Fragment>
                <Table.Cell><img src={customer.avatarURL} alt={customer.id} /></Table.Cell>
                <Table.Cell>{customer.name}</Table.Cell>
                <Table.Cell>{customer.type}</Table.Cell>
                <Table.Cell>{customer.relatedFirm}</Table.Cell>
                <Table.Cell>{customer.address}</Table.Cell>
                <Table.Cell>{customer.gsm}</Table.Cell>
                <Table.Cell>{customer.email}</Table.Cell>
                <Table.Cell>{customer.portalInformation}</Table.Cell>
                <Table.Cell>                       
                    <Link className="ui black basic button" to={`/customer-detail/${customer.id}`} exact="true">Update</Link>
                    <Button basic color='grey' onClick={()=>this.deleteCustomer(custId)}>Delete</Button>
                </Table.Cell>
            </Fragment>
        );
    }
}
function mapStateToProps({},{customer}) {
    return {
        customer
    }
}

export default connect(mapStateToProps)(Customer)