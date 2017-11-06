import React, {Component} from 'react';
import './UserImage.css';
import axios from 'axios'

class UserImage extends Component{
  constructor(props) {
    super(props)
    this.state={
      userString: '',
      apiKey: 'nEBf0Nj9zkSUxzHJw2sm9CQ4R8dQSOav',
      userImage: props.userImage
    }
  }
  

  componentWillReceiveProps(props){
    this.setState({
      userString: props.userString.split(' ').join('+'),
      userImage: props.userImage
    })
  }
// https://i.giphy.com/media/EcCIaUBoC55uM/giphy-preview.gif
  render(){
    return(
      <div>
        <img className='gif-image' src={`https://i.giphy.com/media/${this.props.userImage[this.props.gifIndex].id}/giphy-preview.gif` } alt={this.state.userString}/>
      </div>
    )
  }

}

export default UserImage;