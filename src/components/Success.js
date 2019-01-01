import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';


export class Success extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  }

  render() {
    const { values: { firstName, lastName, email, occupation, city, bio }} = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Success" />
            <h1>Thank You For Your Submisstion</h1>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }

}


export default Success;
