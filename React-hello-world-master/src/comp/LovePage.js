import React,{Component} from 'react';
import love from '../love.jpg';
import {Link} from 'react-router';

export class LovePage extends Component {
     
     render() {
    return (
       <img src={love} alt="love" />
        );
  }
}
