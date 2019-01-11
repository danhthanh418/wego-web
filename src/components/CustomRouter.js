import React, { Component } from 'react';
import Tour from './Tour'
import AboutUs from './AboutUs'
import Answer from './Answer'
import Support from './Support'
import Login from './Login'
import TourDetail from './TourDetail'
import Route  from 'react-router-dom/Route'
import SearchDetail from './SearchDetail';
import CamNangDetail from './CamNangDetail';
import Tips from './Tips';
import TipsDetail from './TipsDetail';
import CamNang from './CamNang/CamNang';
import {Switch} from 'react-router-dom'
import PageNotFound from './PageNotFound';
class CustomRouter extends Component {
    render() {
        return (
            
                <div className="bg-lightblue">
                   <Switch>
                    <Route exact path="/" component={Tour}></Route>
                    <Route exact path="/chi-tiet" component={TourDetail}></Route>
                    <Route exact path="/cam-nang" component={CamNang}></Route>
                    <Route exact path="/cam-nang-chi-tiet" component={CamNangDetail}></Route>
                    <Route exact path="/meo" component={Tips}></Route>
                    <Route exact path="/chi-tiet-tips" component={TipsDetail}></Route>
                    <Route exact path="/gioi-thieu" component={AboutUs}></Route>
                    <Route exact path="/giai-dap" component={Answer}></Route>
                    <Route exact path="/ho-tro" component={Support}></Route>
                    <Route exact path="/dang-nhap" component={Login}></Route>
                    <Route path="/tim-kiem/:tu_khoa" component={SearchDetail}></Route>
                    <Route component={PageNotFound} />;
                   </Switch>
                   
                </div>
            
        );
    }
}

export default CustomRouter;