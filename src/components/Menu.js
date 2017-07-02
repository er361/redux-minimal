import {Nav,NavItem} from 'react-bootstrap'

import React, { Component } from 'react'
import '../stylesheets/menu.scss'

class Menu extends Component {
  handleSelect(){
    console.log('select')
  }
  render () {
    return (
         <Nav bsStyle="pills" bsClass="myNav" activeKey={1} onSelect={this.handleSelect()}>
            <NavItem className="menuButton" eventKey={1} >О компании</NavItem>
            <NavItem eventKey={2} >Рабочий проект</NavItem>
            <NavItem eventKey={3} >Эскизный проект</NavItem>
            <NavItem eventKey={3} >Портфолио</NavItem>
            <NavItem eventKey={3} >Контакты</NavItem>
        </Nav>
    )
  }
}

export default Menu