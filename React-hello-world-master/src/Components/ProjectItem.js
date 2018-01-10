import React, { Component } from 'react';

 class ProjectItem extends React.Component {
  render() {
    return (
           <li className="Projects">
         <strong> {this.props.project.title}</strong> : {this.props.project.category}
        
           </li>
    );
  }
 }
export default ProjectItem;