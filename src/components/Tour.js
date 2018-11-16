import React, { Component } from 'react';
import TourICardtem from './TourCardItem';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'

class Tour extends Component {
    render() {
        return (
            <div className="container">
                <h3 class="localHeadLine hasLine">
                    <NavLink to="/trang-chu">
                        <span>
                            WEGO DEALS
            </span>
                        <span class="readMoreTours hidden-xs">
                            XEM THÊM TOURS <i class="fa fa-chevron-right" />
                        </span>
                        <span class="clearfix" />
                    </NavLink>
                </h3>
                <div class="row">
                    <TourICardtem
                        tourTitle="Tour Thái Lan 5N4D: Bangkok - Kanchanaburi"
                        imgLink="https://cdn2.ivivu.com/2018/04/16/10/river-kwai-and-kanchanaburi-500x313.jpg"
                        tourTime="5 ngày 4 đêm"
                        tourCalendar="KH: thứ 5 hằng tuần. Giá không áp dụng giai đoạn Lễ,Tết."
                        tourPrice="3.700.000 VND"
                    ></TourICardtem>

                    <TourICardtem
                        tourTitle="Tour Thái Lan 5N4D: Bangkok - Kanchanaburi"
                        imgLink="https://cdn2.ivivu.com/2018/04/16/10/river-kwai-and-kanchanaburi-500x313.jpg"
                        tourTime="5 ngày 4 đêm"
                        tourCalendar="KH: thứ 5 hằng tuần. Giá không áp dụng giai đoạn Lễ,Tết."
                        tourPrice="3.700.000 VND"
                    ></TourICardtem>

                    <TourICardtem
                        tourTitle="Tour Thái Lan 5N4D: Bangkok - Kanchanaburi"
                        imgLink="https://cdn2.ivivu.com/2018/04/16/10/river-kwai-and-kanchanaburi-500x313.jpg"
                        tourTime="5 ngày 4 đêm"
                        tourCalendar="KH: thứ 5 hằng tuần. Giá không áp dụng giai đoạn Lễ,Tết."
                        tourPrice="3.700.000 VND"
                    ></TourICardtem>

                    <TourICardtem
                        tourTitle="Tour Thái Lan 5N4D: Bangkok - Kanchanaburi"
                        imgLink="https://cdn2.ivivu.com/2018/04/16/10/river-kwai-and-kanchanaburi-500x313.jpg"
                        tourTime="5 ngày 4 đêm"
                        tourCalendar="KH: thứ 5 hằng tuần. Giá không áp dụng giai đoạn Lễ,Tết."
                        tourPrice="3.700.000 VND"
                    ></TourICardtem>

                    <TourICardtem
                        tourTitle="Tour Thái Lan 5N4D: Bangkok - Kanchanaburi"
                        imgLink="https://cdn2.ivivu.com/2018/04/16/10/river-kwai-and-kanchanaburi-500x313.jpg"
                        tourTime="5 ngày 4 đêm"
                        tourCalendar="KH: thứ 5 hằng tuần. Giá không áp dụng giai đoạn Lễ,Tết."
                        tourPrice="3.700.000 VND"
                    ></TourICardtem>

                    <TourICardtem
                        tourTitle="Tour Thái Lan 5N4D: Bangkok - Kanchanaburi"
                        imgLink="https://cdn2.ivivu.com/2018/04/16/10/river-kwai-and-kanchanaburi-500x313.jpg"
                        tourTime="5 ngày 4 đêm"
                        tourCalendar="KH: thứ 5 hằng tuần. Giá không áp dụng giai đoạn Lễ,Tết."
                        tourPrice="3.700.000 VND"
                    ></TourICardtem>
                </div>
            </div>
        );
    }
}

export default Tour;
