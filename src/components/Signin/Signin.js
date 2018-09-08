import React from "react";


class  Signin extends React.Component{
   constructor(props){
     super(props);
     this.state = {
       email: '',
       password: ''
     }
   }
  onEmailChange = (event) => {
    this.setState({ email : event.target.value})
  }
  onPasswordChange = (event) => {
    this.setState({ password : event.target.value})
  }
  onButtonSubmit = () =>{
    fetch('http://localhost:3002/signin', {
      method: 'post',
      headers: {'Content-Type' : 'application/json'},
      body : JSON.stringify({
        password: this.state.password,
        email: this.state.email
      })
    }).then(response => response.json())
    .then(data => {
      
       if( (typeof data)==="object"){
        this.props.loadUser(data);
        this.props.onbuttonclick('home');
       }
      else{        
        document.write(data)
      }
    })
    
  }
  render(){
    const { onbuttonclick } = this.props;
    return(
      <main className="pa4 black-80 shadow-5" 
      style={{ marginLeft:'auto', marginRight:'auto', width:'30%', textAlign:'center', border: '1px solid white' }}>
      <div className="measure ">
        <fieldset id="sign_up" className="ba b--transparent ph0 mh0" >
          <legend className="f4 fw6 ph0 mh0">Sign In</legend>
          <div className="mt3">
            <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
            <input onChange={this.onEmailChange} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
          </div>
          <div className="mv3">
            <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
            <input onChange={this.onPasswordChange} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
          </div>
        </fieldset>
        <div className="">
          <input onClick={this.onButtonSubmit} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in"/>
        </div>
        <div className="lh-copy mt3">
          <p onClick={()=>onbuttonclick('signup')} className="f6 pointer" >Sign up</p>
        </div>
      </div>
    </main>
    
  );
  }
    
}

export default Signin;