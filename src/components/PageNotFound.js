import React, { Component } from 'react';
import NavLink, { } from "react-router-dom/NavLink";
class PageNotFound extends Component {

  render() {
    return <div style={{ top: 0 }}>
      <section className="error-container">
        <span className="four">
          <span className="screen-reader-text">4</span>
        </span>
        <span className="zero">
          <span className="screen-reader-text">0</span>
        </span>
        <span className="four">
          <span className="screen-reader-text">4</span>
        </span>
        <h1
          style={{ fontSize: 68, color: '#4facfe', marginTop: '5vh' }}
        >
          Page Not Found
            </h1>
      </section>
      <div className="link-container">
        <NavLink to="/" className="more-link">
          Go home
              </NavLink>
      </div>
    </div>;
  }
}

export default PageNotFound;