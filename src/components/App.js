import React from "react";
import "../stylesheets/main.scss";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {greenA700} from 'material-ui/styles/colors';
injectTapEventPlugin();

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
            height: this.state.height
          }
        }
        const muiTheme = getMuiTheme({
              palette: {
                primary1Color: greenA700,
              }
            });
        
    return (
      <div style={style.bgImage} id="lp" className="container-fluid">
        <MuiThemeProvider muiTheme={muiTheme}>
           {this.props.children}
        </MuiThemeProvider>
      </div>
    );
  }
}
