import React from 'react'
import './widget.scss'
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import Inventory2RoundedIcon from '@mui/icons-material/Inventory2Rounded';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import ReceiptRoundedIcon from '@mui/icons-material/ReceiptRounded';
import AssessmentRoundedIcon from '@mui/icons-material/AssessmentRounded';
import AnnouncementRoundedIcon from '@mui/icons-material/AnnouncementRounded';

const Widget = ({type}) => {
  let data;

switch(type){
  case "pos":
    data = {
      title: "POS",
      icon: <ShoppingCartRoundedIcon className='icon' />,
    };
    break;
  case "inventory":
    data = {
      title: "Inventory",
      icon: <Inventory2RoundedIcon className='icon' />,
    };
    break;
  case "employees":
      data = {
        title: "Employees",
        icon: <PeopleAltRoundedIcon className='icon' />,
      };
      break;
  case "sales":
      data = {
        title: "Sales",
        icon: <ReceiptRoundedIcon className='icon' />,
      };
      break;
  case "tax":
      data = {
        title: "Tax Reports",
        icon: <AssessmentRoundedIcon className='icon' />,
      };
      break;
  case "alert":
      data = {
        title: "Send Alerts",
        icon: <AnnouncementRoundedIcon className='icon' />,
      };
      break;
  default:
      break;
}

  return (
    <div className='widget'>
      <div className="top">
        <div className="icon">
          {data.icon}
        </div>
      </div>
      <div className="bot">
        {data.title}
      </div>
    </div>
  )
}

export default Widget