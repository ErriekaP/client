import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import "./home.scss"
import Inventory from '../inventory/Inventory'
import POS from '../pos/POS'
import EM from '../EM/Em'
import Sales from '../sales/Sales';
import Alerts from '../alerts/Alerts';
import {
  Route,
  Routes,
  useNavigate
} from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  const navigateToInv = () => {
    navigate('/inventory')
  }
  const navigateToPos = () => {
    navigate('/pos')
  }
  const navigateToEmpl = () => {
    navigate('/EM')
  }
  const navigateToSales = () => {
    navigate('/sales')
  }
  const navigateToAlerts = () => {
    navigate('/alerts')
  }
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          {/* <Widget type="pos"/> */}
          {/* <Widget type="inventory"/> */}
          {/* <Widget type="employees"/>
          <Widget type="sales"/>
          <Widget type="tax"/> */}
          {/* <Widget type="alert"/> */}
          <button onClick={navigateToPos}>POS</button>
          <button onClick={navigateToInv}>Inventory</button>
          <button onClick={navigateToEmpl}>Employees</button>
          <button onClick={navigateToSales}>Sales</button>
          <button>Tax</button>
          <button onClick={navigateToAlerts}>Send Alerts</button>
          <Routes>
            <Route path='/pos' element={<POS/>}/>
            <Route path='/inventory' element={<Inventory/>}/>
            <Route path='/EM' element={<EM/>}/>
            <Route path='/sales' element={<Sales/>}/>
            <Route path='/alerts' element={<Alerts/>}/>
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default Home