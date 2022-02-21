import './App.css';
import { Home } from './Home/home';
import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom"; 
import AboutUs from './AboutUs/AboutUs';
import ManagementDesk from './AboutUs/ManagementDesk';
import Awards from './AboutUs/Awards';
import Facilities from './Facilities/Facilities';
import Products from './Products/Products';
import Services from './Services/Services';
import CustWeddingCards from './Services/CustWeddingCards';
import OffsetPrintSrv from './Services/OffsetPrintSrv';
import CakeToppers from './Services/CakeToppers';
import ContactUs from './ContactUs/ContactUs';
import Login, { ForgotPassword } from './Account/Login';
import Register from './Account/Register';




function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route path='/about' element={<AboutUs/>}/>
                    <Route path='/managementdesk' element={<ManagementDesk/>}/>
                    <Route path='/awards' element={<Awards/>}/>            
                    <Route path='/facilities' element={<Facilities/>}/>            
                    <Route path='/products' element={<Products/>}/>            
                    <Route path='/services' element={<Services/>}/>            
                    <Route path='/customizedWeddingCards' element={<CustWeddingCards/>}/>            
                    <Route path='/offsetPrinting' element={<OffsetPrintSrv/>}/>            
                    <Route path='/cakeToppers' element={<CakeToppers/>}/>            
                    <Route path='/contactUs' element={<ContactUs/>}/>            
                    <Route path='/login' element={<Login/>}/>            
                    <Route path='/register' element={<Register/>}/>            
                    <Route path='/forgotPassword' element={<ForgotPassword/>}/>            
                </Routes>
            </Router>
        </div>
    ); 
}

export default App;
