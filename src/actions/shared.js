import { getInitialData } from "../utils/api"
import { receiveCustomers } from './customers'

export function handleInitialData() {
    return (dispatch) => {
        return getInitialData().then(({ customers })=> {
            dispatch(receiveCustomers(customers))
        })
    }
}