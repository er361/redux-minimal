import React, {Component} from 'react'
import {Form, FormControl, Button} from 'react-bootstrap'
import {TextField, Paper, RaisedButton} from 'material-ui'
import {Grid, Col, Row} from 'react-bootstrap';
import NumberFormat from 'react-number-format'

const MyInput = (props) => {
  return (
    <div>
      <TextField id="phone" floatingLabelText='Телефон'/>
    </div>
  )
}

class Feedback extends Component {
  render() {
    const style = {
      height: 140,
      width: '100%',
      margin: 'auto',
      textAlign: 'center',
      display: 'inline-block',
      button: {
        margin: 12
      }
    };
    return (
      <div className='bottomContent'>
        <h2 className='header'>Полное сопровождение от идеи заказчика до ввода в эксплуатацию объекта
        </h2>
          <Paper style={style} zDepth={1}>
              <Row>
                <Col xs={5} xsOffset={1}>
                  <TextField id="name" floatingLabelText='Имя'/>
                </Col>
                <Col xs={5}>
                  <NumberFormat customInput={MyInput} format="#### #### #### ####"/>
                </Col>
              </Row>
              <Row>
                <Col xs={8} xsOffset={2}>
                  <RaisedButton
                    label="Получить консультацию"
                    labelPosition="before"
                    style={style.button}
                    containerElement="label"
                    primary={true}/>
                </Col>
              </Row>
          </Paper>
      </div>
    )
  }
}

export default Feedback