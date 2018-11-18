import React, { Component } from 'react';
import Tour from './Tour'
import TravelHandBook from './TravelHandBook'
import AboutUs from './AboutUs'
import Answer from './Answer'
import Support from './Support'
import Login from './Login'
import TourDetail from './TourDetail'
import { BrowserRouter as Router,Route,NavLink } from 'react-router-dom'
class CustomRouter extends Component {
    render() {
        return (
            <div className="">
                <Route  exact path="/" component={Tour}></Route>
                <Route  path="/chi-tiet" component={TourDetail}></Route>
                <Route  path="/cam-nang" component={TravelHandBook}></Route>
                <Route  path="/gioi-thieu" component={AboutUs}></Route>
                <Route  path="/giai-dap" component={Answer}></Route>
                <Route  path="/ho-tro" component={Support}></Route>
                <Route  path="/dang-nhap" component={Login}></Route>
            </div>
        );
    }
}

export default CustomRouter;