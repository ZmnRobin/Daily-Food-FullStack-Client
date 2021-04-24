import React from 'react';
import BreakFast from '../BreakFast/BreakFast';
import Dinner from '../Dinner/Dinner';
import Launch from '../Launch/Launch';
import './Body.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import FoodDetail from '../FoodDetail/FoodDetail';
import Footer from '../Footer/Footer';

const Body = () => {
    return (
        <Router>
            <div>
                <div>
                    <div className='meal-time'>
                        <Link to='/breakFast'><h6>Breakfast</h6></Link>
                        <Link to='/launch'><h6>Launch</h6></Link>
                        <Link to='/dinner'><h6>Dinner</h6></Link>
                    </div>
                </div>
                <Switch>
                    <Route path="/breakFast">
                        <BreakFast/>
                    </Route>
                    <Route path="/dinner">
                        <Dinner/>
                    </Route>
                    <Route path="/launch">
                        <Launch/>
                    </Route>
                    <Route exact path="/breakFast">
                        <BreakFast/>
                    </Route>
                    <Route path="/foodDetail/:id">
                         <FoodDetail/>
                    </Route>
               </Switch>
               <div className='mt-5 ml-3'>
                   <Footer/>
               </div>
            </div>
        </Router>
    );
};

export default Body;