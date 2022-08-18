import './styles.css';

import { Component } from 'react';
import { User } from '../interfaces';


export class Login extends Component<{}, { email: string, password: string, data: { auth: boolean, token: string, userInfo: { _id: string, name: string } }, message: string }> {
  constructor(props: User) {
    super(props);
    this.state = {
      email: '',
      password: '',
      data: {
        auth: false,
        token: '',
        userInfo: {
          _id: '',
          name: ''
        }
      },
      message: ''
    };

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
        email: this.state.email,
        password: this.state.password
      })
    };

    try {
      const res = await fetch("http://localhost:9000/login", requestOptions);

      if (!res.ok) {
        const message = `An error has occured: Email or password invalid`;
        this.setState({ message: message });
        throw new Error(message);
      }
      const data = await res.json();
      this.setState({ data: data });
      localStorage.setItem('auth', data.auth);
      localStorage.setItem('token', data.token);
      this.setState({ message: data.message });
    } catch (err) {

    }
  }
  render() {
    const { email, password, message } = this.state;
    return (
      <div className='Login'>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <input className="login_input" type="email" value={email} onChange={this.handleChangeEmail} placeholder="Email"></input>
          <input className="login_input" type="password" value={password} onChange={this.handleChangePassword} placeholder="Password"></input>
          <button className='forms_button' type='submit'>Login</button>
          <p className='login_res'>{message}</p>
        </form>
      </div >
    )
  }

}