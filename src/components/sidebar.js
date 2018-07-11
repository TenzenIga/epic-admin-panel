import React from 'react';
import {Image, Glyphicon} from 'react-bootstrap';
 const Sidebar = ()=>{

  return(
    <div class="sidebar">
    <div className='sidebar-avatar'>
      <Image src="https://pp.userapi.com/c636426/v636426984/1227a/2VSA_Wc-voo.jpg" circle />
      <div className="sidebar-controllers">
        <ul >
            <li ><a><Glyphicon glyph="align-left"/></a></li>
            <li><a><Glyphicon glyph="comment"/></a></li>
            <li><a><Glyphicon glyph="stats"/></a></li>
            <li><a><Glyphicon glyph="tasks"/></a></li>
            <li className="active"><a><Glyphicon glyph="bell"/></a></li>
          </ul>
        </div>
  </div>

    <div className="sidebar-menu">
    <h3 className="sidebar-header">Pages</h3>
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
