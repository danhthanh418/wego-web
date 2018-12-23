import React, { Component } from 'react';
import TourCardItem from './TourCardItem'
class SearchResult extends Component {
    render() {
        const { items, term } = this.props 
        let filteredTour  = items.filter((tour)=>{
            return tour.name.toLowerCase().indexOf(term.toLowerCase())!==-1
        })
       
        return (
            <div className="row">
                {filteredTour.map((tour, index)=>{
                    return (
                        <TourCardItem
                            key={index}
                            tourID={tour.id}
                            tourTitle={tour.name}
                            tourImg={tour.img}
                            tourTime={tour.time}
                            tourCalendar={tour.doc}
                            tourPrice={tour.price}
                            tourCategory={tour.category}/>
                    )
                })}
            </div>
        );
    }
}

export default SearchResult;