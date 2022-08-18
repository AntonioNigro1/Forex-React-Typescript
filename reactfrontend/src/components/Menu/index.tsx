import './styles.css';

import { Link } from 'react-router-dom'
import { Component } from 'react';




export class Menu extends Component<{}, { auth: boolean | string | null, token: string }> {
  constructor(props: string) {
    super(props);
    this.state = {
      auth: false,
      token: '',
    }
  }

  componentDidUpdate() {
    setTimeout(() => {
      this.setState({ auth: localStorage.getItem('auth') })
    }, 5000);

  }

  componentWillUnmount() {
    clearTimeout();
  }

  render() {
    const { auth, token } = this.state;
    return (
      <>
        <div className='menu'>
          <img className='top_img' src="/images/topbg.jpg" alt='' />

          <button className={`menu_button ${auth}"":"hidden"`}>Deposit</button>

          <button className={`menu_button ${auth}"":"hidden"`}>Withdraw</button>

          <button className={`menu_button ${auth}"":"hidden"`}>Exchange</button>

          <button className={`menu_button ${auth}"":"hidden"`}>Trade</button>

          <button className={`menu_button ${auth}"":"hidden"`}>History</button>
          <Link to="/Login" className='link'>
            <button className={`menu_button ${!auth}"":"hidden"`}>Login</button></Link>
          <Link to="/Register" className='link'>
            <button className={`menu_button ${!auth}"":"hidden"`}>Register</button></Link>
          <button className={`menu_button ${auth}"":"hidden"`}>Logout</button>
        </div>

      </>
    )
  }
}