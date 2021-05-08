import { _getCustomers } from './_DATA.js'

export function getInitialData() {
     return Promise.all([
        _getCustomers()
     ]).then(([customers]) => ({
        customers
     }))
}