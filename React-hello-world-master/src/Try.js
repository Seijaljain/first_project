 import React, {Component} from 'react';
//  import ReactDOM from 'react-dom';
  import Trying from './Trying';
//   import Featured from './Featured';
  import Live from './Live';
  import Love from './Love';
  import Learn from './Learn';
  import {Router, Route, IndexRoute, hashHistory} from 'react-router';

class Try extends Component{
  render(){
        return(
            <Router history={hashHistory}>
                <Route path="/" component={Trying}>
                {/*<IndexRoute component={Featured}></IndexRoute>*/}
                <Route path="live" component={Live}></Route>
                 <Route path="love" component={Love}></Route>
                 <Route path="learn" component={Learn}></Route>
                </Route>
 </Router>
        );
  }
}

 export default Try;  

 
   