import React from "react";
import { MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact";
//import {Link} from 'react-router-dom'
import CommonLink from '../CommonComp/CommonLink'
//import Inputfield from '../CommonComp/Inputfield'
import Header from '../CommonComp/Header'
import Footer from '../CommonComp/Footer'

class Userdetails extends React.Component {
  state = {
    fname: "",
    lname: "",
    email: "",
    uname:"",
    password:"",
    address:"",
    street:"",
    city: "",
    state: "",
    zip: "",
    ph1:"",
    ph2:""
  };

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
            <MDBCol md="4">
              {/*<Inputfield statevalue = {this.state.fname} name ={'fname'} onChange={this.changeHandler} type="text"
              id="stfirstname"
                label="First name"
                required></Inputfield>*/}
              <MDBInput
                value={this.state.fname}
                name="fname"
                onChange={this.changeHandler}
                type="text"
                id="stfirstname"
                label="First name"
                required
              >
                <div className="valid-feedback">Looks good!</div>
              </MDBInput>
            </MDBCol>
            <MDBCol md="4">
              <MDBInput
                value={this.state.lname}
                name="lname"
                onChange={this.changeHandler}
                type="text"
                id="stlastname"
                label="Last name"
                required
              >
                <div className="valid-feedback">Looks good!</div>
              </MDBInput>
            </MDBCol>
            <MDBCol md="4">
              <MDBInput
                value={this.state.email}
                onChange={this.changeHandler}
                type="email"
                id="stemail"
                name="email"
                label="Your Email address"
                required
              >
                <small id="emailHelp" className="form-text text-muted valid-feedback">
                  We'll never share your email with anyone else.
                </small>
              </MDBInput>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol md="4">
              <MDBInput
                value={this.state.uname}
                name="uname"
                onChange={this.changeHandler}
                type="text"
                id="stusername"
                label="User name"
                required
              >
                <div className="valid-feedback">Looks good!</div>
              </MDBInput>
            </MDBCol>
            <MDBCol md="4">
              <MDBInput
                value={this.state.password}
                name="password"
                onChange={this.changeHandler}
                type="password"
                id="stpassword"
                label="Create a Password"
                required
              >
                <div className="valid-feedback">Looks good!</div>
              </MDBInput>
            </MDBCol>
            <MDBCol md="4">
              <MDBInput
                value={this.state.address}
                onChange={this.changeHandler}
                type="text"
                id="staddress"
                name="address"
                label="House No:"
                
              >
                
              </MDBInput>
            </MDBCol>
          </MDBRow>
          
          <MDBRow>
            <MDBCol md="4">
              <MDBInput
                value={this.state.city}
                onChange={this.changeHandler}
                type="text"
                id="stcity"
                name="city"
                label="City"
                required
              >
                <div className="invalid-feedback">
                  Please provide a valid city.
                </div>
                <div className="valid-feedback">Looks good!</div>
              </MDBInput>
            </MDBCol>
            <MDBCol md="4">
              <MDBInput
                value={this.state.state}
                onChange={this.changeHandler}
                type="text"
                id="ststate"
                name="state"
                label="State"
                required
              >
                <div className="invalid-feedback">
                  Please provide a valid state.
                </div>
                <div className="valid-feedback">Looks good!</div>
              </MDBInput>
            </MDBCol>
            <MDBCol md="4">
              <MDBInput
                value={this.state.zip}
                onChange={this.changeHandler}
                type="text"
                id="stzip"
                name="zip"
                label="Zip"
                required
              >
                <div className="invalid-feedback">
                  Please provide a valid zip.
                </div>
                <div className="valid-feedback">Looks good!</div>
              </MDBInput>
            </MDBCol>
          </MDBRow>
          <MDBRow>            
            <MDBCol md="4">
              <MDBInput
                value={this.state.ph1}
                name="ph1"
                onChange={this.changeHandler}
                type="tel"
                id="sthomephone"
                label="Home Phone"
                required
              >
                <div className="valid-feedback">Looks good!</div>
              </MDBInput>
            </MDBCol>
            <MDBCol md="4">
              <MDBInput
                value={this.state.ph2}
                name="ph2"
                onChange={this.changeHandler}
                type="tel"
                id="stmobile"
                label="Mobile"
                required
              >
                
              </MDBInput>
            </MDBCol>
          </MDBRow>
         {/* <MDBRow>
            <MDBInput
              type="checkbox"
              value="conditions"
              id="sttermsconditions"
              required
              label="Agree to terms and conditions"
            >
              <div className="invalid-feedback">
                You must agree before submitting.
              </div>
            </MDBInput>
          </MDBRow>*/}
          <MDBRow>
            <MDBCol >
            
            <MDBBtn color="success" type="submit" className='floatright'><strong>Create account</strong></MDBBtn>
            </MDBCol>
            <MDBCol >
            <CommonLink to = {'MyCampus'} title ={'Already a Member'} />
           
          </MDBCol>
          </MDBRow>
        </form>
        <Footer/> 
      </div>
    )
  }
}

export default Userdetails;


