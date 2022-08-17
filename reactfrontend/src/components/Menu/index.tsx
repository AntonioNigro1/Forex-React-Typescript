import './styles.css';

import { ComponentClass, useState } from 'react';
import { Register } from '../Register/index';
import { Login } from '../Login';

export default function Menu() {
  const [component, setComponent] = useState<React.ComponentClass>();

  const LoadComponent = async (component: ComponentClass) => {
    setComponent(component);
  }

  return (
    <>
      <div className='menu'>
        <img className='top_img' src="/images/topbg.jpg" alt='' />
        <button className='menu_button'>Deposit</button>
        <button className='menu_button'>Withdraw</button>
        <button className='menu_button'>Exchange</button>
        <button className='menu_button'>Trade</button>
        <button className='menu_button'>History</button>
        <button className='menu_button'>Login</button>
        <button className='menu_button'>Register</button>
      </div>
      {component}
    </>
  )
}

