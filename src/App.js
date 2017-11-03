import React, { Component } from 'react';
import Test from './Components/Test/Test.js';
import Nav from './Components/Nav/Nav.js';
import All from './Components/All/All.js';
import Create from './Components/Create/Create.js';
import './reset.css';

class App extends Component {
  constructor(){
    super()
    this.state={
      all: false,
      create: false
    }
    this.allSetter = this.allSetter.bind(this);
    this.createSetter = this.createSetter.bind(this);
  }
  allSetter(){
    if (!this.state.all) {
      this.setState({
        all: !this.state.all, 
        create: false
      })
    }
  }
  createSetter() {
    if (!this.state.create){
      this.setState({
        create: !this.state.create,
        all: false
      })
    }
  }
  render() {
    return (
      <div>
        <Test/>
        <Nav nav1="URGENT" nav2="ALL" nav3="CREATE" nav4="GROUPS" nav5="SCHEDULED" fun1={this.allSetter} fun2={this.createSetter}/>
        {this.state.all && <All />}
        {this.state.create && <Create />}
      </div>
    );
  }
}

export default App;
