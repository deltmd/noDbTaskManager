import React, { Component } from 'react';
import axios from 'axios'
import './Create.css'
import UserImage from '../UserImage/UserImage.js'
import UserText from '../UserText/UserText.js'
import domToImage from 'dom-to-image'
import rightArrow from '../../img/arrowRight.png'
import leftArrow from '../../img/arrowLeft.png'

class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiKey: 'nEBf0Nj9zkSUxzHJw2sm9CQ4R8dQSOav',
      userString: '',
      userImage: [{id: 'l41K3o5TzvmhZwd4A'}],
      gifIndex: 0,
      imageToSave: ''
    }
    this.userStringGetter = this.userStringGetter.bind(this);
    this.ImageSaver = this.ImageSaver.bind(this);
    this.gifIndexIncramentor = this.gifIndexIncramentor.bind(this);
    this.gifIndexDecramentor = this.gifIndexDecramentor.bind(this);
  }
  userStringGetter(str){
    this.setState({
      userString: str.split(' ').join('+'),
      gifIndex: 0
      }, 
      () => {
        if (this.state.userString) {
          let promise = axios.get(`http://api.giphy.com/v1/gifs/search?q=${this.state.userString}&api_key=${this.state.apiKey}&limit=10`);
          promise.then(res => {
            console.log(res);
            if (res.data.data[this.state.gifIndex]) {
              this.setState({
                userImage: res.data.data
              })
            }
          })
        }
      }
    )
    console.log(this.state.userString, 'nonAsync')
  }
  ImageSaver(){
    domToImage.toPng(document.getElementById('thingToSave')).then(url=>{
      this.setState({
        imageToSave: url
      })
    })
  }
  gifIndexIncramentor(){
      if (this.state.gifIndex < this.state.userImage.length-1) {
      let plusOne = this.state.gifIndex + 1
      this.setState({
        gifIndex: plusOne
      })
    }
  }
  gifIndexDecramentor() {
    if (this.state.gifIndex > 0) {
      let minusOne = this.state.gifIndex - 1
      this.setState({
        gifIndex: minusOne
      })
    }
  }

  render() {
    return (
      <div className='meme-wrapper'>
        <div className='meme-background' id='thingToSave'>
          <UserImage userString={this.state.userString} userImage={this.state.userImage} gifIndex={this.state.gifIndex}/>
          <UserText userStringGetter={this.userStringGetter}/>
        </div>
        <div className='img-arrow-wrapper'>
          <img src={leftArrow} alt="" onClick={this.gifIndexDecramentor} />
          <button onClick={this.ImageSaver}>Savableize it! o_O</button>
          <img src={rightArrow} alt="" onClick={this.gifIndexIncramentor} />
        </div>
        <img className='image-to-save' src={this.state.imageToSave} alt=""/>
      </div>
    );
  }
}

export default Create;
