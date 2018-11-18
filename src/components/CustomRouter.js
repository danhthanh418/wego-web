import React, { Component } from 'react';
import Tour from './Tour'
import TravelHandBook from './TravelHandBook'
import AboutUs from './AboutUs'
import Answer from './Answer'
import Support from './Support'
import Login from './Login'
import TourDetail from './TourDetail'
import Route  from 'react-router-dom/Route'
class CustomRouter extends Component {
    render() {
        return (
            <div className="bg-lightblue">
                <Route exact path="/"  component={Tour}></Route>
                <Route exact path="/chi-tiet"  component={TourDetail}></Route>
                <Route exact path="/cam-nang"  component={TravelHandBook}></Route>
                <Route exact path="/gioi-thieu"  component={AboutUs}></Route>
                <Route exact path="/giai-dap"  component={Answer}></Route>
                <Route exact path="/ho-tro"  component={Support}></Route>
                <Route exact path="/dang-nhap"  component={Login}></Route>
            </div>
        );
    }
}

export default CustomRouter;