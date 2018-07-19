import React from 'react';
import {Image, Glyphicon} from 'react-bootstrap';
import SideBarHeader from './sidebar-header';
import SideBarControllers from './sidebar-controllers';
 const Sidebar = ()=>{

  return(
    <div class="sidebar">
      <SideBarHeader />
      <SideBarControllers />
    <div className="sidebar-menu">
    <h3 className="sidebar-menu-header">Pages</h3>
<ul >
 <a href="#">Dashboard</a>
  <a href="#">Mailbox</a>
  <a href="#">Gallery</a>
  <a href="#">Social</a>
  <a href="#">Blog</a>
  <hr />
  <a href='#'>Panels</a>
  <a href='#'>Charts</a>
  <a href='#'>Static Timeline</a>
  <a href='#'>Interactive Timeline</a>
  <a href='#'>Codemirror</a>
  <a href='#'>Maps</a>
  <a href='#'>Editor</a>
  <a href='#'>UI Elements</a>
  <a href='#'>Forms</a>
  <a href='#'>Tables</a>
  <a href='#'>Grid</a>
  <a href='#'>Calendar</a>
  <a href='#'>File Utilities</a>
  <a href='#'>Fonts</a>
  <hr />
    <a href='#'>Login</a>
    <a href='#'>Signup</a>
    <a href='#'>Lock Page</a>
    <a href='#'>Invoice</a>
    <a href='#'>Pricing Tables</a>
    </ul>
    </div>
</div>

  );
}

export default Sidebar;
