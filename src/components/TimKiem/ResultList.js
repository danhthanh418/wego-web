import React, { Component } from 'react'
import TourData from '../data/data.json'
import CustomDropDownList from './CustomDropDownList'
export default class ResultList extends Component {
  render() {
    return (
     <div className="" style={{backgroundColor:'#fff', position:'absolute', top:'80%',}}>
            <i
              className="fa fa-map-marker mr-2 clearfix"
              data-toggle="tooltip"
              title=""
              style={{left: 0}}
            />
            {'ĐỊA ĐIỂM HOT'}
            {' '}
            {' '}
            <div className="" style={{display: 'flex', flexWrap: 'wrap'}}>
              {TourData.map (tour => {
                return (
                  <CustomDropDownList
                    key={tour.img}
                    src={tour.img}
                    tourCount={'10'}
                    tourPlace={'Campuchia'}
                  />
                );
              })}
            </div>
          </div>
    )
  }
}
