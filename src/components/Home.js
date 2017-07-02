import React from "react";
import "../stylesheets/main.scss";
import Menu from './Menu.js';
import {Grid,Col,Row} from 'react-bootstrap';
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
            <Col md={3}>
             <div className="logo">
             </div>
            </Col>

            <Col md={8}>
              <Menu/>
            </Col>

          </Row>
        </Grid>
                
        <div className="test">
        </div>

      </div>
    );
  }
}
