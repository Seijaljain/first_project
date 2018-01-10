 import React from 'react';
 import ReactDOM from 'react-dom';
 import Try from './Try';
    class Index extends React.Component {
    constructor(props) {
     super(props);
 
   }

  
   render() {
    return (
    <Try />
        );
   }
 }
  
   ReactDOM.render(
   <Index />,

   document.getElementById('container')

 );
 