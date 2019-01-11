import React, {Component} from 'react';
import _ from 'lodash';
import NavLink from 'react-router-dom/NavLink';
import TourCardItem from './TourCardItem';

class TourContainer extends Component {
  constructor (props) {
    super (props);

    this.state = {};
  }
  groupedByCategory = data => {
    return _.chain (data)
      .groupBy ('category')
      .map ((value, key) => {
        return {
          category: key,
          items: value,
        };
      })
      .value ();
  };
  render () {
    const {items} = this.props;
    return (
      <div className="tourContainer " style={{paddingLeft:-15}}>
        <div className="container px-0">
          {/* {console.log (this.groupedByCategory (items))} */}
          {this.groupedByCategory (items).map ((cat, index) => {
            if (cat.category==='deal')
            return (
              <div className="tourContainer" key={index} style={{backgroundColor: '#fff'}}>
                <div className="container" style={{backgroundColor: '#fff'}}>
                  <h3 className="localHeadLine hasLine" key={index}>
                    <NavLink to="/chi-tiet">
                      <span className="category text-uppercase font-weight-bold">
                          Tour liên quan
                      </span>
                      <span className="readMoreTours hidden-xs">
                        XEM THÊM TOURS
                        {' '}
                        <i className=" mr-2 fa fa-chevron-right" />
                      </span>
                      <span className="clearfix" />
                    </NavLink>
                  </h3>
                        <div className="row">
                            {cat.items.map((tour, index) => {
                                return (
                                    <TourCardItem
                                        key={index}
                                        tourID={tour.id}
                                        tourTitle={tour.name}
                                        tourImg={tour.img}
                                        tourTime={tour.time}
                                        tourCalendar={tour.doc}
                                        tourPrice={tour.price}
                                        tourPlace = {tour.place}
                                        tourCategory={tour.category} />
                                )
                            })}
                        </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default TourContainer;
