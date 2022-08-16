import './Background.css';
import clickHandler from '../LayoutController';
import Register from '../Register/Register';

export default function Topmenu() {



  return (
    <div className='menu'>
      <img className='top_img' src="/images/topbg.jpg" alt='' />
      <button className='menu_button' onClick={clickHandler}>Deposit</button>
      <button className='menu_button'>Withdraw</button>
      <button className='menu_button'>Exchange</button>
      <button className='menu_button'>Trade</button>
      <button className='menu_button'>History</button>
      <button className='menu_button'>Login</button>
      <button className='menu_button' onClick={(e) => clickHandler(Register)}>Register</button>
    </div>

  )
}

