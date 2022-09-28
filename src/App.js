import React,{useState, useEffect} from "react"; 
import './App.css';
import Axios from 'axios' 
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import Home from "./pages/home/home";
import Employee from "./pages/employeeHome/Employee";
import Login from "./pages/login/Login";
import Landing from "./pages/landing/Landing";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import List from "./pages/list/List";
import Inventory from "./pages/inventory/Inventory";
import POS from "./pages/pos/POS";
import EM from './pages/EM/Em';
import Sales from './pages/sales/Sales';
import Alerts from './pages/alerts/Alerts';
import ProductPage from "./pages/productPage/ProductPage";

function App() {

  const [movieName,setMovieName] = useState("");
  const [review,setReview] = useState("");
  const [movieReviewList, setMovieList] = useState([]);

  useEffect(()=>{
    Axios.get('http://localhost:3001/api/get').then((response)=>{
    setMovieList(response.data)
  });
},[]);

  const submitReview = () => {
    Axios.post('http://localhost:3001/api/insert',{
      movieName:movieName, 
      movieReview:review,
    }).then(() =>{
      alert("Successfully Inserted");
    })
  };



  return (
    <div className="App">
   <Router>
   <Routes>
          <Route path="/">
            <Route index element={<Landing/>}/>
            <Route path="login" element={<Login/>}/>
            <Route path="home">
              <Route path="admin" element={<Home/>}/>
              <Route path=":userID" element={<Employee/>}/>
              </Route>
            <Route path="users">
              <Route index element={<List/>}/>
              <Route path=":userID" element={<Single/>}/>
              <Route path="new" element={<New/>}/>
            </Route>
            <Route path="products">
              <Route index element={<List/>}/>
              <Route path=":productID" element={<Single/>}/>
              <Route path="new" element={<New/>}/>
            </Route>
            </Route>
            <Route path="inventory">
              <Route index element={<Inventory/>}>
            </Route>
          </Route>
            <Route path="pos">
              <Route index element={<POS/>}/> 
            </Route>
            <Route path="ref">
              <Route index element={<ProductPage/>}/>
            </Route>
            <Route path="EM">
                <Route index element={<EM/>}/>
            </Route>
            <Route path="sales">
                <Route index element={<Sales/>}/>
            </Route>
            <Route path="alerts">
                <Route index element={<Alerts/>}/>
            </Route>
        </Routes>
    </Router>


    </div>

  );
}

export default App;
