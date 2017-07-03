import React, {Component} from 'react'
import {TextField} from 'material-ui'
import NumberFormat from 'react-number-format'
import InputMask from 'react-input-mask';

class PhoneInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      phone: ''
    }
  }


  render() {
    return (
        <TextField
            floatingLabelText='Телефон'
            children = {<InputMask mask="+7 999 999 99 99" maskChar="-"/>}
            onChange={(e,newVal) => {
                this.setState({phone : newVal})
                }}
        />
    )
  }
}

export default PhoneInput