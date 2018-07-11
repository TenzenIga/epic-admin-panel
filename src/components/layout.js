import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import Navigation from './navigation';
import Sidebar from './sidebar';
class Layout extends Component {
  render() {
    return (
        <div className='layout'>
          <Sidebar />
          <Navigation />
      </div>
    );
  }
}

export default Layout;
