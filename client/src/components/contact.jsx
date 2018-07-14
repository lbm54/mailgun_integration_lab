import React, { Component } from "react";
import { sendContactEmail } from "../services/contact";

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      message: ""
    };
  }

  handleName(name) {
    this.setState({ name });
  }

  handleEmail(email) {
    this.setState({ email });
  }

  handleMessage(message) {
    this.setState({ message });
  }

  async handleSubmit(e) {
    e.preventDefault();
    try {
      let response = await sendContactEmail(
        this.state.name,
        this.state.email,
        this.state.message
      );
      this.props.history.push('/');
    } catch (err) {
      console.log('go an error?');
      console.log(err);
    }
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={e => this.handleSubmit(e)}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              onChange={e => this.handleName(e.target.value)}
              className="form-control"
              id="name"
              type="text"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              onChange={e => this.handleEmail(e.target.value)}
              className="form-control"
              id="email"
              type="email"
              required
            />
          </div>
          <div className="form-group">
            <textarea
              onChange={e => this.handleMessage(e.target.value)}
              cols="30"
              rows="10"
              className="form-control"
              id="name"
            />
          </div>
          <input type="submit" className="btn btn-primary" />
        </form>
      </div>
    );
  }
}

export default Contact;
