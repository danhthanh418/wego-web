import React, { Component } from 'react'

export default class CustomDropDownList extends Component {
  render() {
    return (
        <div style={{ flex: '1 0 15%', margin: 2, height: '100%', flexGrow:1}}>
            <div className='dia-diem m-3'>
                <img className='img-fluid' src={this.props.src} alt='' style={{width:120, height:120}}></img>
                <div className='chi-tiet'>
                  <p>{this.props.tourPlace}</p>
                  <p>{this.props.tourCount}</p>
                </div>
            </div>
        </div>
    )
  }
}
