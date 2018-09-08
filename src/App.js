import React, { Component } from 'react';
import './App.css';
import Nav from "./components/Nav/Nav";
import Logo from "./components/Logo/Logo";
import Recognise from "./components/Recognise/Recognise";
import Profile from "./components/Profile/Profile";
import ImageLink from "./components/ImageLink/ImageLink";
import Signin from "./components/Signin/Signin";
import Signup from "./components/Signup/Signup";
import tachyons from "tachyons";
import Particles from 'react-particles-js';  
import Clarifai from "clarifai"; 

const app = new Clarifai.App({
  apiKey: '31be77aa20334bc686c1066a8bd938a7'
 });
const ParticlesParams = {
  particles: {
    number: {
      value: 100,
      density: { 
        enable: true,
        value_area: 600
      }
    }
  },
  interactivity:{
    detect_on:"canvas",
    events:{
      onhover:{
        enable:true,
        mode:"repulse"
      },
    
    resize:true
  }
}
};
const defaultState = {
    inputfield : '',
    url : '',
    box: {},
    route: 'signin',
    routeStatus: false,
    user : {
      id:'',
      name: '',
      email: '',
      entries: '',
      joined:''
    }
}
class App extends Component {
  constructor(){
    super();
    this.state = defaultState;
  }
  loadUser= ({ id, email, name, entries, joined }) => {
    this.setState({user: {
        id:id,
        name:name,
        email: email,
        entries: entries,
        joined: joined
    }})
   
  }
  calculate = (data) => {
   
    const resp = data.outputs[0].data.regions[0].region_info.bounding_box;
    
     const image = document.getElementById("imagesdetect");
     const width = Number(image.width);
    
     const height = Number(image.height);
    return{
        topRow:resp.top_row * height,
        leftCol:resp.left_col * width,
        rightCol: width - ( width * resp.right_col),
        bottomRow: height - ( height * resp.bottom_row)

      }
    
  }
  recFace = (box)=> {
  
    this.setState({box: box})
  }
  onInputChange = (event) => {
    this.setState({inputfield: event.target.value});
  }
  onButtonSubmit = () => {
    this.setState({url : this.state.inputfield})
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.inputfield).then(
    (response) => {
      if(response){
        fetch('http://localhost:3002/image', {
      method: 'put',
      headers: {'Content-Type' : 'application/json'},
      body : JSON.stringify({
        id: this.state.user.id        
      })
    }).then(response => response.json())
    .then(data => {
      this.setState(Object.assign(this.state.user, { entries : data }))
    })
      }
      this.recFace(this.calculate(response))
     },
    (err) => {
      
    }
  );
  }
  onButtonClick = (route) => {
   route ==='home'? this.setState({routeStatus:true}) : this.setState(defaultState);
   this.setState({route: route})
  }

  
  render() {
    return (
      <div className="App">
           <Particles  className="particles"
              params={ParticlesParams}
            />
        <Nav route={this.state.routeStatus} onbuttonclick={this.onButtonClick}/> 
        {
          this.state.route==='signin' ? <Signin loadUser={this.loadUser} onbuttonclick={this.onButtonClick} /> :

          ( this.state.route==='signup' ? <Signup loadUser={this.loadUser} onbuttonclick={this.onButtonClick} /> :
          
          <div>
            <Logo />
            <Profile entries={this.state.user.entries}  name = {this.state.user.name} />
            <ImageLink  onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit} />
            <Recognise box={this.state.box} url = {this.state.url} />
          </div>)
       
        }
      </div>
    );
  }
}

export default App;
