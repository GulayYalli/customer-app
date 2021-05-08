import { _saveCustomer, _deleteCustomer } from "../utils/_DATA"
export const RECEIVE_CUSTOMERS = 'RECEIVE_CUSTOMERS'
export const CREATE_CUSTOMER = 'CREATE_CUSTOMER'
export const DELETE_CUSTOMER = 'DELETE_CUSTOMER'

export function receiveCustomers(customers) {
    return {
        type: RECEIVE_CUSTOMERS,
        customers
    }
}

export function createCustomer(customer) {
    return {
        type: CREATE_CUSTOMER,
        customer
    }
}

export function handleCreateCustomer(customer) {
    return (dispatch) => {
        return _saveCustomer(customer).then((customer) => {            
            dispatch(createCustomer(customer))
        })
    }
}

export function deleteCustomer(custId) {
    return {
        type: DELETE_CUSTOMER,
        custId
    }
}
export function handleDeleteCustomer(custId) {
    return (dispatch) => {
        return _deleteCustomer(custId).then(() => {            
            dispatch(deleteCustomer(custId))
        })
    }
}