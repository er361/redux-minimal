import React from "react";
import "../stylesheets/main.scss";
import {Grid,Col,Row, Clearfix} from 'react-bootstrap';
import Svg from '../../public/media/ssLogo.svg'

import Menu from './Menu';
import Phone from './Phone';
import Content from './Content';
import Feedback from './Feedback';
// Home page component
export default class Home extends React.Component {
  // render
  render() {
    let style = {
      container : {
        paddingTop : 20
      }
    }

    return (
      <div style={style.container}  className="container">
        <Grid>
          <Row className='show-grid'>
            <Col xs={2}>
             <div className="logo"/>
            </Col>

            <Col xs={7}>
              <Menu/>
            </Col>

            <Col xs={2}>
              <Phone/>
            </Col>
          </Row>

          <Clearfix className="clearfix"/>

          <Row >
            <Col xsOffset={2} xs={7}>
              <Content/>
            </Col>
          </Row>

          <Clearfix className="clearfix"/>

          <Row>
            <Col xsOffset={2} xs={7}>
              <Feedback/>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
