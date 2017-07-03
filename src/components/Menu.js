import {Nav,NavItem} from 'react-bootstrap'

import React, { Component } from 'react'
import '../stylesheets/menu.scss'

class Menu extends Component {
  
  constructor(props){
    super(props)

    this.state = {
      activeKey: 1
    }

  }

  handleSelect(eventKey){
    // console.log(eventKey)
    this.setState({
      activeKey: eventKey
    })
  }
  render () {
    return (
         <Nav 
            bsClass="myNav" 
            activeKey={this.state.activeKey} 
            onSelect={this.handleSelect.bind(this)}>

            <NavItem eventKey={1} >О компании</NavItem>
            <NavItem eventKey={2} >Рабочий проект</NavItem>
            <NavItem eventKey={3} >Эскизный проект</NavItem>
            <NavItem eventKey={4} >Портфолио</NavItem>
            <NavItem eventKey={5} >Контакты</NavItem>
        </Nav>
    )
  }
}

export default Menu