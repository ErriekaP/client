import React from 'react'
import "./reportbar.scss"
import InboxRoundedIcon from '@mui/icons-material/InboxRounded';
import avatar from '../../assets/avatar.png';

const Reportbar = () => {
  return (
    <div className="reportbar">
        <div className="wrapper">
            <div className="icons">
                <ul>
                    <li><InboxRoundedIcon className='icon'/><p>Item Inventory</p></li>
                    <li><InboxRoundedIcon className='icon'/><p>Supplier Info</p></li>
                    <li><InboxRoundedIcon className='icon'/><p>Order Form</p></li>
                    <li><InboxRoundedIcon className='icon'/><p>Return Form</p></li>
                    <li><InboxRoundedIcon className='icon'/><p>Inventory Report</p></li>
                </ul>
            </div>
            <div className="user">
                <p>ADMIN</p>
                <div className="image">
                    <img src={avatar} alt='' className='avatar'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Reportbar