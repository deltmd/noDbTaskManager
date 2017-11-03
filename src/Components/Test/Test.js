import React, {Component} from "react";
import axios from "axios";

class Test extends Component {
  constructor(props) {
    super(props);
    this.state={
      test:""
    }
  }
  componentWillMount(){
    let promise = axios.get('http://localhost:8001/app/test')
    promise.then(res=>{
      this.setState({test: res.data})
    })
    
  }
  
  render(){
    return(
      <div>
        <p>Test Complete</p>
        <p>{this.state.test}</p>

      </div>
    )
  }
}
export default Test;