import React, { Component } from "react";
import './Form.css';

class Form extends Component {
  constructor() {
    super();
    this.formSubmit = this.formSubmit.bind(this);
  }

  formSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const email = form.elements["email"].value;
    const name = form.elements["name"].value;
    this.props.addPerson(name, email);
    form.reset();
  }

  render() {
    return (
      <div>
      
      <form onSubmit={this.formSubmit} className="container ml-4 mt-2">
        <h3 id="heading"> Add Employee</h3>
        <input
          id="name"
          type="text"
          required
          defaultValue=""
          placeholder="User Name"
          /> <br/>
        <input
          id="email"
          type="text"
          required
          defaultValue=""
          placeholder="Destination"
        /><br/>
        <button type="submit" id="subbtn" value="submit">Submit</button>
      </form>
      </div>
    );
  }
}

export default Form;