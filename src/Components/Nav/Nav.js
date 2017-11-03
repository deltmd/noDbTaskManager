import React, {Component} from 'react';
import './Nav.css'
class Nav extends Component {
  constructor(props){
    super(props)
    this.state={
      nav1: this.props.nav1,
      nav2: this.props.nav2,
      nav3: this.props.nav3,
      nav4: this.props.nav4,
      nav5: this.props.nav5
    }
  }
  render(){
    return(
      <div>
        <ul className="nav_links-wrapper">
          <h1 className="nav_logo">REWARDED</h1>
          <li className="nav_link">{this.state.nav1}</li>
          <li className="nav_link" onClick={this.props.fun1}>{this.state.nav2}</li>
          <li className="nav_link" onClick={this.props.fun2}>{this.state.nav3}</li>
          <li className="nav_link">{this.state.nav4}</li>
          <li className="nav_link">{this.state.nav5}</li>
        </ul>
      </div>
    )
  }
}
export default Nav;