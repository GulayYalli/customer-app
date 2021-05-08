import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { handleInitialData } from '../actions/shared'
import CustomerList from './CustomerList'
import { Container } from 'semantic-ui-react'
import CustomerDetail from './CustomerDetail'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() { 
    return (
        <Router>
          <Container style={{ marginTop: '3em', position: 'relative' }}>
            <Route path="/" exact component={CustomerList} />
            <Route path="/customer-detail/:id" component={CustomerDetail} />
          </Container> 
        </Router> 
      )
    ;
  }
}

export default connect()(App);
