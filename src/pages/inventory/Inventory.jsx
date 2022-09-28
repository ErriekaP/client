import React from 'react'
import Reportbar from '../../components/reportbar/Reportbar'
import "./inventory.scss"
import {Route, Routes, useNavigate} from 'react-router-dom';
import ProductPage from '../productPage/ProductPage';
import Homebutton from '../../components/homebutton/Homebutton';

const Inventory = () => {
  const navigate = useNavigate()
  const navigateToPage = () => {
    navigate('/ref')
  }
  return (
    <div className="inventory">
      <div className="reportbar">
      <Reportbar/>
      </div>
      <div className="listtable">
        <div className="homebutton">
        <Homebutton/>
        </div>
        {/* <button onClick={ navigateToPage }>ITEM SAMPLE</button>
        <Routes>
          <Route path='/ref' element={<ProductPage/>}/>
        </Routes> */}
      </div>
    </div>
  )
}

export default Inventory