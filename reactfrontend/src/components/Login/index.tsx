import './styles.css';

import { Component, useState } from 'react';
import { User } from '../interfaces';


export class Login extends Component<{}, { email: string, password: string }> {
  constructor(props: User) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };

  }

  handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ email: e.target.value });

  }

  handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ password: e.target.value });
  }

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      })
    };

    fetch("http://localhost:9000/login", requestOptions)
      .then(response => response.json)
  }

  render() {
    const { email, password } = this.state;
    return (
      <div className='Login'>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <input className="login_input" type="email" value={email} onChange={this.handleChangeEmail} placeholder="Email"></input>
          <input className="login_input" type="password" value={password} onChange={this.handleChangePassword} placeholder="Password"></input>
          <button className='forms_button' type='submit'>Login</button>
        </form>
      </div >
    )
  }

}