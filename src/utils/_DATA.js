let customers = {
    zeynepozer: {
      id: 'zeynepozer',
      name: 'Zeynep Özer',
      avatarURL: 'https://avatars.dicebear.com/api/avataaars/zeynep.svg?w=35&r=35',
      type: 'Şahıs',
      relatedFirm: '-',
      address: 'Maltepe',
      gsm: '05363455590',
      email: 'dd@dd.com',
      portalInformation: '******',
      website: 'www.zeynepozer.com',
      tcknVkn: '11111111111'
    },
    cagtolga: {
      id: 'cagtolga',
      name: 'Tolga Çağ',
      avatarURL: 'https://avatars.dicebear.com/api/avataaars/john.svg?w=35&r=35',
      type: 'Şahıs',
      relatedFirm: '-',
      address: 'Slovakya',
      gsm: '0535*******',
      email: 'cc@tt.com',
      portalInformation: '******',
      website: 'www.cagtolga.com',
      tcknVkn: '11111111111'
    }
  }

  export function generateUID () {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
  }

  export function _getCustomers () {
    return new Promise((res, rej) => {
      setTimeout(() => res({...customers}), 1000)
    })
  }

  function formatCustomer ({ nameSurname, customertype, relatedFirm, address, phoneNumber, email, tckn }) {
    return {
      id: generateUID(),
      name: nameSurname,
      avatarURL: `https://avatars.dicebear.com/api/avataaars/${generateUID()}.svg?w=35&r=35`,
      type: customertype,
      relatedFirm: relatedFirm,
      address: address,
      gsm: phoneNumber,
      email: email,
      portalInformation: '******',
      website: '',
      tcknVkn: tckn
    }
  }

  export function _saveCustomer (customer) {
    return new Promise((res, rej) => {
      const formattedCustomer = formatCustomer(customer);
  
      setTimeout(() => {
        customers = {
          ...customers,
          [formattedCustomer.id]: formattedCustomer
        }  
        res(formattedCustomer)
      }, 1000)
    })
  }

  export function _deleteCustomer (custId) {
    return new Promise((res, rej) => {  
      setTimeout(() => {
        const result = delete customers[custId]
        res(result)        
      }, 1000)
    })
  }