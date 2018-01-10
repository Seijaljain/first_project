import React,{Component} from 'react';
import life from '../life.jpg';
import { Router, browserHistory }  from 'react-router';

export class LivePage extends Component {
    //  constructor(props, context)
    // {
    //     super(props, context);
    //        this.redirectToAddCoursePage=this.redirectToAddCoursePage.bind(this);   
    // }
    // redirectToAddCoursePage ()
    // {
    //     browserHistory.push('/LivePage');
    // }
     render() {

    return (
        <div> <img src={life} alt="life" /></div>
        );
  }
}

