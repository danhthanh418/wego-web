import React, { Component } from 'react';
import NavLink from 'react-router-dom/NavLink'
class Navigation extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark2 sticky-top">
                <div className="container">
                    <NavLink className="navbar-brand" to="/">
                        <img alt="WeGo" src="http://placehold.it/35x35" className="rounded-circle" />
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".navMenu" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse justify-content-end navMenu">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink to="/" className="nav-link h5" exact  activeStyle={{color:"#00a8ad", fontWeight:"bold"}}>Tour</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/chi-tiet" className="nav-link h5" exact  activeStyle={{color:"#00a8ad", fontWeight:"bold"}}>Chi tiết</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/cam-nang" className="nav-link h5" exact  activeStyle={{color:"#00a8ad", fontWeight:"bold"}}>Cẩm nang du lịch</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/gioi-thieu" className="nav-link h5" exact  activeStyle={{color:"#00a8ad", fontWeight:"bold"}} >Giới thiệu </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/giai-dap" className="nav-link h5" exact  activeStyle={{color:"#00a8ad", fontWeight:"bold"}} >Giải đáp</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/ho-tro" className="nav-link h5" exact  activeStyle={{color:"#00a8ad", fontWeight:"bold"}} >Hỗ trợ</NavLink>
                            </li>
                            <li className="nav-item">                                
                                <div className="btn text-white btn-login mx-auto" role="button">
                                    <NavLink to="/dang-nhap" className="text-white block" >
                                     <i className="fa fa-user-circle-o text-white fa-16 mr-1" aria-hidden="true"></i>
                                    Đăng nhập</NavLink>
                                </div>
                            </li>
                            {/* <li className="dropdown">
                            <a className="nav-link h5 dropdown-toggle" to="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="components-dropdown">Components</NavLink>
                            <div className="dropdown-menu dropdown-menu-wide p-0 o-hidden dropdown-menu-right" aria-labelledby="components-dropdown">
                                <div className="list-group list-group-flush">
                                    <a to="components-insight.html" className="list-group-item list-group-item-action d-flex justify-content-between align-items-center py-3">
                                        <div className="d-flex align-items-center">
                                            <div>
                                                <span>Components to help you build sites faster</span>
                                            </div>
                                        </div>
                                    </NavLink>
                                </div>
                            </div>
                        </li> */}
                        </ul>
                    </div>
                </div>
            </nav>

        );
    }
}

export default Navigation;
