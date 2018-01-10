import React, { Component } from 'react';
// import './App.css';
import Projects from './Components/Projects';
import AddProject from './Components/AddProject';

 class Layout extends React.Component {
    constructor() {
      super();
      this.state = {
        projects : [
          {
            title : 'Business Website',
            category : 'Web Design'
          },
           {
            title : 'Social App',
            category : 'Mobile Development'
          },
           {
            title : 'Ecommerce shopping Cart',
            category : 'Web Development'
          },
        ]
      }
    }
    render() {
    return (
           <div className="App">
        <AddProject />
          <Projects projects={this.state.projects} />
           </div>
    );
  }
 }
export default Layout;