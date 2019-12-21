import React from 'react';

class GoogleAuth extends React.Component {

  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '412317181939-i82s9pf6k7ecdhpu590van5v0i55heq2.apps.googleusercontent.com',
        scope: 'email'
      });
    });
  }
  render() {
    return <div> Google Auth </div>;
  }

}

export default GoogleAuth;