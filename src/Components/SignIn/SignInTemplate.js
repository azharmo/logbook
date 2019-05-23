import React from'react'
import { MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact";
//import propTypes from 'prop-types'
//import {Link} from 'react-router-dom'
import CommonLink from '../CommonComp/CommonLink'
import Header from '../CommonComp/Header'
import Footer from '../CommonComp/Footer'



class SignInTemplate extends React.Component {
  state = {
    
    username:"",
    password:""
  }

  submitHandler = event => {
    event.preventDefault();
    event.target.className += " was-validated";
  };

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      
      <div>
      <Header tab1 = {'About'} tab1to={''} 
                        tab2 = {'Features'} tab2to={''} tab3 = {'Pricing'} tab3to={''}
                        tab4 = {''} tab4to={''}/>
        <form
          className="needs-validation"
          onSubmit={this.submitHandler}
          noValidate
        >
          <MDBRow>
            <MDBCol >
              <MDBInput
                value={this.state.username}
                name="username"
                onChange={this.changeHandler}
                type="text"
                id="signinuname"
                label="User name"
                required
              >
                
              </MDBInput>
            </MDBCol>
            </MDBRow>
            <MDBRow>
            <MDBCol>
              <MDBInput
                value={this.state.password}
                name="password"
                onChange={this.changeHandler}
                type="password"
                id="signinpwd"
                label="Password"
                required
              >
              </MDBInput>
            </MDBCol>
            </MDBRow>
            <MDBRow>
            <MDBCol >

            <MDBBtn color="success" type="submit" className='floatright'><CommonLink to ={'dashboard'} title = {'LogIn'} class={'link'}/></MDBBtn>           
            
            </MDBCol>
            <MDBCol >
            <CommonLink to = {'CreateAccount'} title = {'Create Account'} />
           
          </MDBCol>
          </MDBRow>
               </form>
               <Footer/>
               </div> 
               
    )    
}
}

export default SignInTemplate
