import React from "react";
import "../stylesheets/main.scss";

// app component
export default class App extends React.Component {
  constructor(props) {
  super(props);
  this.state = { width: '0', height: '0' };
  this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
}

componentDidMount() {
  this.updateWindowDimensions();
  window.addEventListener('resize', this.updateWindowDimensions);
}

componentWillUnmount() {
  window.removeEventListener('resize', this.updateWindowDimensions);
}

updateWindowDimensions() {
  this.setState({ width: window.innerWidth, height: window.innerHeight });
}
  // render
  render() {
        let style = {
          bgImage: {
            width: this.state.width,
            height: '900px'
          }
        }
        
    return (
      <div style={style.bgImage} id="lp" className="container-fluid">
        {this.props.children}
      </div>
    );
  }
}
