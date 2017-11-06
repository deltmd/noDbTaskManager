import React, { Component } from 'react';
import './UserText.css';

class UserText extends Component {

  

  render() {
    return (
      <div>
        <textarea className="user-input" type="text" onChange={e => this.props.userStringGetter(e.target.value)} placeholder="Subject"/>
        <textarea className="user-sub-input" type="text" name="" id="" placeholder="Funny saying about said subject"/>
      </div>
    )
  }

}

export default UserText;