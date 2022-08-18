import './styles.css';

import { Link } from 'react-router-dom'
import { Component } from 'react';




export class Menu extends Component<{}, { visibility: boolean, auth: boolean | string | null, token: string }> {
  constructor(props: string & boolean) {
    super(props);
    this.state = {
      visibility: false,
      auth: false,
      token: '',
    }
  }

  //handleVisibility = () => {
  //  if (this.state.auth === true) {
  //    this.setState(prevState => ({ visibility: !prevState.visibility }));
  //  }
  // }

  //handleClassName = () => {
  //  if (this.state.visibility === true) return "hidden";
  //}

  render() {
    return (
      <>
        <div className='menu'>
          <img className='top_img' src="/images/topbg.jpg" alt='' />

          <button className="menu_button">Deposit</button>

          <button className="menu_button">Withdraw</button>

          <button className="menu_button">Exchange</button>

          <button className="menu_button">Trade</button>

          <button className="menu_button">History</button>

          <Link to="/Login" className='link'>
            <button className="menu_button">Login</button>
          </Link>

          <Link to="/Register" className='link'>
            <button className="menu_button">Register</button>
          </Link>

          <button className="menu_button">Logout</button>
        </div>

      </>
    )
  }
}