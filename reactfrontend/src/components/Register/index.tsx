import './styles.css'

import { Component } from 'react';
import { User } from '../interfaces';

export class Register extends Component<{}, { name: string, email: string, password: string, message: string }> {
  constructor(props: User) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      message: ''
    };

  }

  handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ name: e.target.value });

  }

  handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ email: e.target.value });

  }

  handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ password: e.target.value });
  }

  handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        password: this.state.password
      })
    };

    try {
      const res = await fetch("http://localhost:9000/register", requestOptions);
      if (!res.ok) {
        const message = `An error has occured: ${res.status} - email already exists`;
        this.setState({ message: message });
        throw new Error(message);
      }
      const data = await res.json();
      this.setState({ message: data.message });
    } catch (err) {
    }
  };

  render() {
    const { name, email, password, message } = this.state;

    return (
      <div className='Register'>
        <h1>Register new User</h1>
        <form onSubmit={this.handleSubmit}>
          <input className="register_input" type="text" value={name} onChange={this.handleChangeName} placeholder="Full name"></input>
          <input className="register_input" type="email" value={email} onChange={this.handleChangeEmail} placeholder="Email"></input>
          <input className="register_input" type="password" value={password} onChange={this.handleChangePassword} placeholder="Password"></input>
          <button className='forms_button' type='submit'>Register</button>
          <p className='register_res'>{message}</p>
        </form>
      </div>
    )
  }
}