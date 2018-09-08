import React from "react";


class Signup extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name:'',
      email: '',
      password: ''
    }
  }
  onNameChange = (event) => {
    this.setState({ name : event.target.value})
  }
  onEmailChange = (event) => {
    this.setState({ email : event.target.value})
  }
  onPasswordChange = (event) => {
    this.setState({ password : event.target.value})
  }
  onbuttonSubmit = () => {
    fetch('http://localhost:3002/register', {
      method : 'post',
      headers:{'Content-Type' : 'application/json'},
      body : JSON.stringify({
        name : this.state.name,
        email: this.state.email,
        password: this.state.password
      })
    }).then(response => response.json())
    .then(data => {
      if(data){
        this.props.loadUser(data);
        this.props.onbuttonclick('home');
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
            <legend className="f4 fw6 ph0 mh0">Sign Up</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
              <input onChange={this.onNameChange} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="name"  id="name"/>
            </div>
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
            <input onClick={this.onbuttonSubmit} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign up"/>
          </div>
          <div className="lh-copy mt3">
            <p onClick={()=>onbuttonclick('signin')} className="f6 pointer" >Sign in</p>
          </div>
        </div>
      </main>
      
    );
 }
}

export default Signup;