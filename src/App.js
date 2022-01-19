import logo from './logo.svg';
import './App.css';
import { Home } from './Home/home';
import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom"; 

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    {/* <Route path='/Services' component={Services} />
                    <Route path='/contact' component={Contact} />
                    <Route path='/about' component={About} /> */}
                </Routes>
            </Router>
        </div>
    ); 
}

export default App;
