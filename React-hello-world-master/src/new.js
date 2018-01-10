import React from 'react';
import ReactDOM from 'react-dom';
import Live from './Live.svg';
import './new.css';
import { BrowserRouter as Router, Link, Match, Miss } from 'react-router';
 import {LivePage} from './components/LivePage'
 import {LovePage} from './components/LovePage'
 import {LearnPage} from './components/LearnPage'
//  import { Link, IndexLink } from 'react-router';

// class New extends React.Component {
  
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     login: false
  //   }
  //     this.state = {
  //     gin: false
  //   }
  //    this.state = {
  //     in: false
  //   }

  // }
  //  handleClick = () => {
  //    browserHistory.push('/Live1');
  //  }
//     this.setState({ login: true });
//      this.setState({ gin: false });
//        this.setState({ in: false });
//   }
//   dohandleClick = () => {
//     this.setState({ gin: true });
//  this.setState({ login: false });
//  this.setState({ in: false });
//   }
//   dohandleClicks = () => {
//     this.setState({ in: true });
//     this.setState({ gin: false });
//  this.setState({ login: false });
//   }


  // render() {
    const New = () => {
    return (
      // <Router>
      <div className="New">
        <div>
          <div className="New-header">
            <img src={Live} className="New-logo" alt="Live" />
            {/*<input type="Button" value="Live" className="New-button1" onClick={this.handleClick} />
            <input type="Button" value="Love" className="New-button2" onClick={this.dohandleClick}/>
            <input type="Button" value="Learn" className="New-button3"  onClick={this.dohandleClicks}/>*/}
            <nav>
    <IndexLink to="/"></IndexLink>
   
    <a  className="New-button1" onClick={this.handleClick}>Live</a>
     
    <Link to="/Love2" className="New-button2">Love</Link>
     
    <Link to="/Learn3" className="New-button3">Learn</Link>
</nav>
          </div></div>{/*<div className="New"></div>
        <div className={this.state.login ? 'new-display__block New' : 'new-display__none'}>
          <LivePage/></div>
          <div className={this.state.gin ? 'new-display__block New' : 'new-display__none'}>
         <LovePage/>
      </div><div className={this.state.in ? 'new-display__block New' : 'new-display__none'}>
        <<LovePage/>/div></div>  </div>
        
      {/*<div>
        <ul>
          <li><Link to='/'>New</Link></li>
           <li><Link to='/Live1'>Live</Link></li>
          <li><Link to='/Love2'>Love</Link></li>
          <li><Link to='/Learn3'>Learn</Link></li>
        </ul>
        <hr/>
          <Match exactly pattern='/' component={New}/>
          <Match pattern='/Live1' component={LivePage}/>
          <Match pattern='/Love2' component={LovePage}/>
          <Match pattern='/Learn3' component={LearnPage}/>
         
      </div>
    </Router>*/}
  </div>
    );
  }
  export default New;
