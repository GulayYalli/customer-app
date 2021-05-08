import React, { Component } from 'react'
import { Grid, Tab, Item } from 'semantic-ui-react'
import { connect } from 'react-redux'
import RelatedPeople from './TabContents/RelatedPeople'

const panes = [
    {
      menuItem: 'İlgili Kişiler',
      render: () => <Tab.Pane attached={false}><RelatedPeople/></Tab.Pane>,
    },
    {
      menuItem: 'Aramalar',
      render: () => <Tab.Pane attached={false}>Under Construction</Tab.Pane>,
    },
    {
      menuItem: 'Ziyaretler',
      render: () => <Tab.Pane attached={false}>Under Construction</Tab.Pane>,
    },
    {
        menuItem: 'Ürünler',
        render: () => <Tab.Pane attached={false}>Under Construction</Tab.Pane>,
    },
    {
        menuItem: 'Siparişler',
        render: () => <Tab.Pane attached={false}>Under Construction</Tab.Pane>,
    }
]

class CustomerDetail extends Component {
    render() { 
        const { customer } = this.props
        return (            
            <Grid celled='internally'>
                <Grid.Row>
                    {customer ? <><Grid.Column width={4}>
                    <Item.Group>
                        <Item>
                            <Item.Image size='tiny' src={customer.avatarURL} />
                            <Item.Content>
                                <Item.Header as='a'>{customer.name}</Item.Header>
                                <Item.Meta>{customer.email}</Item.Meta>
                                <Item.Extra>{customer.gsm}</Item.Extra>
                            </Item.Content>
                        </Item>
                    </Item.Group>                 
                    </Grid.Column>
                    <Grid.Column width={12}>
                        <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
                    </Grid.Column></>:'Customer is loading!'
                    }                    
                </Grid.Row>
            </Grid>
        );
    }
}

function mapStateToProps({customers}, props) {
    const {id} = props.match.params
    let customer = customers[id]
    return {
        customer
    }
}

export default connect(mapStateToProps)(CustomerDetail);