import React from 'react'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import './homebutton.scss'
import { Button } from '@mui/material';

const Homebutton = () => {
  return (
    <div className="button">
      <Button className='icon'><HomeRoundedIcon/></Button>
    </div>
  )
}

export default Homebutton