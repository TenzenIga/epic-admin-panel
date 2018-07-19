import React from 'react';
import { Glyphicon} from 'react-bootstrap';

const SideBarControllers = ()=>{

  return(
<div className="sidebar-controllers">
    <ul >
        <li ><a><Glyphicon glyph="align-left"/></a></li>
        <li><a><Glyphicon glyph="comment"/></a></li>
        <li><a><Glyphicon glyph="stats"/></a></li>
        <li><a><Glyphicon glyph="tasks"/></a></li>
        <li className="active"><a><Glyphicon glyph="bell"/></a></li>
      </ul>
    </div>
)
}

export default SideBarControllers;
