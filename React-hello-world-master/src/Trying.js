import React from 'react';
import {Link} from 'react-router';
import './new.css';
// import Lll from './Lll.svg';
import are from './are.png';
class Trying extends React.Component{
    navigate(){
        debugger;
       this.props.router.push("/");
      
    }
    render(){
        return(
 <div className="New">
     <div className="New-header">
            {/*<img src={Lll} className="New-logo" alt="Lll" />*/}
             <img src={are} className="New-logo" alt=""/>
    <Link to="live"><button className="New-button1" onClick={this.navigate.bind(this)}>Live</button></Link>
<Link to="love"><button className="New-button2">Love</button></Link>
<Link to="learn"><button className="New-button3">Learn</button></Link>
    {/*<button onClick={this.navigate.bind(this)}>Featured</button>*/}
    </div> {this.props.children}</div>
        );
    }
}
export default Trying; 
