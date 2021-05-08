import { CREATE_CUSTOMER, RECEIVE_CUSTOMERS, DELETE_CUSTOMER } from '../actions/customers'

export default function customers(state = {}, action) {
 switch(action.type) {
    case RECEIVE_CUSTOMERS :
     return {
       ...state,
       ...action.customers
    }
    case CREATE_CUSTOMER :
     return {
       ...state,
       [action.customer.id]: action.customer
    }
    case DELETE_CUSTOMER : {
      const {custId} = action
      const { [custId]:value, ...othersCustomers } = state
      return othersCustomers
    }
   default :
     return state
 }
} 