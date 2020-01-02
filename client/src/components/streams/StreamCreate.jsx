import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends Component {
  render() {
    return (
      <Field name="title" />
      <Field name="descriptions" />

    );
  }

};

export default reduxForm({
  form: 'streamCreate'
})
)(StreamCreate);
