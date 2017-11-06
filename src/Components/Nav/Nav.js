import React, {Component} from 'react';
import './Nav.css'
class Nav extends Component {
  constructor(props){
    super(props)
    this.state={
      nav1: this.props.nav1,
      nav2: this.props.nav2,
    }
  }
  render(){
    return(
      <div>
        <ul className="nav_links-wrapper">
          <h1 className="nav_logo">MEMEIT</h1>
          <li className="nav_link" onClick={this.props.fun1}>{this.state.nav1}</li>
          <li className="nav_link" onClick={this.props.fun2}>{this.state.nav2}</li>
        </ul>
      </div>
    )
  }
}
export default Nav;