import React, { Component } from 'react';
// import ResultList from './TimKiem/ResultList';

class SearchBox extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         items:[],
         term:'',
         isFocus:undefined
      };
    };
    
    onChange = (event)=>{
        this.props.onChange(event)
    }

    onFocus = ()=>{
        this.setState({isFocus:!this.state.isFocus});
    }
    render() {
        const { term } = this.props
        // const {isFocus} = this.state
        return (
            <div className="search-box col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <form className="card-sm bg-dark2 p-2">
                    <div className="no-padding tourHomeIntro">
                        <div className="title">Đặt tours du lịch!</div>
                        <div className="desc">Hơn 300 tours du lịch ở Việt Nam và Quốc tế</div>
                    </div>
                    <div className="card-body row no-gutters">
                        {/*end of col*/}
                        <div className="col">
                            <input
                            onChange = {this.onChange}
                            className="form-control form-control form-control-borderless" 
                            type="search"
                            placeholder="Tìm kiếm tour hoặc địa điểm"
                            name= "filter"
                            id="filter"
                            value={term}
                            onFocus = {this.onFocus}
                            />
                        </div>
                        {/*end of col*/}
                        <div className="col-auto">
                            <button className="btn btn btn-primary" type="submit"><i className="fa fa-search mr-2" aria-hidden="true"></i>Tìm</button>
                        </div>
                        {/*end of col*/}
                    </div>
                </form>
                

            </div>
        );
    }
}

export default SearchBox;