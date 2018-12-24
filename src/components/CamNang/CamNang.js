import React, {Component} from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Button,
} from 'reactstrap';
import tips from '../data/tips.json';
import CustomHandbookCard from './CustomHandbookCard.js';
import {Link} from 'react-router-dom';
const items = tips;

export default class CamNang extends Component {
  constructor (props) {
    super (props);
    this.state = {
      activeIndex: 0,
      data: tips,
    };
    this.next = this.next.bind (this);
    this.previous = this.previous.bind (this);
    this.goToIndex = this.goToIndex.bind (this);
    this.onExiting = this.onExiting.bind (this);
    this.onExited = this.onExited.bind (this);
  }
  onExiting () {
    this.animating = true;
  }

  onExited () {
    this.animating = false;
  }

  next () {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1
      ? 0
      : this.state.activeIndex + 1;
    this.setState ({activeIndex: nextIndex});
  }

  previous () {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0
      ? items.length - 1
      : this.state.activeIndex - 1;
    this.setState ({activeIndex: nextIndex});
  }

  goToIndex (newIndex) {
    if (this.animating) return;
    this.setState ({activeIndex: newIndex});
  }
  render () {
    const {activeIndex} = this.state;
    const slides = tips.map (item => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.img}
        >
          <img
            src={item.img}
            alt={item.name}
            style={{width: '100%', height: 'auto'}}
          />
          <CarouselCaption captionText={item.doc} captionHeader={item.name} />
           <Link to="/cam-nang-chi-tiet">
            <Button
            outline
              color="warning"
              className="clear-fix"
              style={{position: 'absolute', bottom: '40%', left: '50%'}}
            >
              {' '}Xem thêm
            </Button>
          </Link>
        </CarouselItem>
      );
    });
    return (
      <div className="cam-nang">
        <div className="row">
          <div className="carosel col-md-8">
            <Carousel
              activeIndex={activeIndex}
              next={this.next}
              previous={this.previous}
            >
              <CarouselIndicators
                items={tips}
                activeIndex={activeIndex}
                onClickHandler={this.goToIndex}
              />
              {slides}
              <CarouselControl
                direction="prev"
                directionText="Previous"
                onClickHandler={this.previous}
              />
              <CarouselControl
                direction="next"
                directionText="Next"
                onClickHandler={this.next}
              />

            </Carousel>
          </div>
          <div className="carosel col-md-4">
            <div className="row">
              {items.map ((tour, index) => {
                if (index < 2) {
                  return (
                    <CustomHandbookCard
                      key={index}
                      src={tour.img}
                      cat={'Mẹo'}
                      title={tour.name}
                      caption={tour.doc}
                    />
                  );
                }else{
                  return undefined
                }
              })}
            </div>
          </div>
        </div>
        <div className="row diem-den" />
      </div>
    );
  }
}
