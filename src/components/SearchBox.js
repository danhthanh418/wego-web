import React, {Component} from 'react';
import TourData from './data/data.json';
import {Card, CardImg, CardBody, CardText, CardTitle} from 'reactstrap';

import NavLink from 'react-router-dom/NavLink';
class SearchBox extends Component {
  constructor (props) {
    super (props);

    this.state = {
      term: '',
      isFocus:false
    };
  }

  onChange = event => {
    this.setState ({
      term: event.target.value,
    });
  };
  renderResult = (filterdList) => {
    if (this.state.isFocus) {
      return <Card
        style={{
          width: '81%',
          padding: 0,
          position: 'absolute',
          top: '81',

        }}
        className='d-flex'
      >
        <div style={{ color: '#003c71' }}><i class="fa fa-map-marker" aria-hidden="true"></i> ĐỊA ĐIỂM HOT</div>
        {filterdList.map((item, index) => {
          return (
            <Card
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                flexDirection: 'row',
              }}
            >
              <CardImg
                className="img-fluid"
                src={item.img}
                style={{
                  width: '10%',
                  height: '10%',
                  flex: 1,
                  padding: 5,
                  justifyContent: 'center',
                  alignItems: 'center',
                  margin: 'auto'
                }}
              />
              <CardBody style={{ flex: 4, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', margin: '0 auto' }}>
                <CardText style={{ fontSize: 14, color: '', flex: 1 }}>
                  {item.place}
                </CardText>
                <CardText className="vcolor-primary" style={{ fontSize: 14, flex: 1 }}>
                  {'11 tour'}
                </CardText>
              </CardBody>
            </Card>
          );
        })}
      </Card>
    } else if (this.state.term.length > 0) {
      console.log(this.state.length)
    }
  }
  onSubmit=(event)=>{
    event.preventDefault();
  }
  render () {
    let filterdList = TourData.filter((item, index) => {
      return (
        item.name.toLowerCase().indexOf(this.state.term.toLowerCase()) !== -1
      );
    });
    return <div className="search-box col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{zIndex: 3}}>
        <form className="card-sm bg-dark2 p-2" onSubmit={this.onSubmit}>
          <div className="no-padding tourHomeIntro d-none d-md-block d-lg-block">
            <div className="title">Đặt tours du lịch!</div>
            <div className="desc">
              Hơn 300 tours du lịch ở Việt Nam và Quốc tế
            </div>
          </div>
          <div className="card-body row no-gutters p-1">
            {/*end of col*/}
            <div className="col">
              <input onChange={this.onChange} className="form-control form-control form-control-borderless" type="search" placeholder="Tìm kiếm tour hoặc địa điểm" name="term" id="term" value={this.state.term} onFocus={() => this.setState(
                    {
                      isFocus: true,
                    }
                  )} onBlur={() => {
                  this.setState({isFocus: false});
                }} />
            </div>
            {/*end of col*/}
            <div className="col-auto">
              <NavLink to={`tim-kiem/${this.state.term}`}>
                <button className="btn btn btn-primary" type="submit" onClick={this.toSearchDeatail}>
                  <i className="fa fa-search mr-2" aria-hidden="true" />
                  Tìm
                </button>
              </NavLink>
            </div>
            {/*end of col*/}
          </div>
          <div style={{display:'flex',
          flex:1,
          flexWrap:'wrap',
          alignContent:'center'}}>
          {this.renderResult(filterdList)}
          </div>
        </form>
      </div>;
  }
}

export default SearchBox;
