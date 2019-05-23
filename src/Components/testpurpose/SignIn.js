import React,{Component} from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, 
    MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer, MDBMask, MDBView}
    from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import Flipsignin from './Flipsignin'
//import SignInTemplate from './SignInTemplate'
import {Link} from 'react-router-dom'


class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }
  render() {
    return (
     <div>
        <header>
          <Router>
            <MDBNavbar color="bg-primary" fixed="top" dark expand="md" scrolling transparent>
              <MDBNavbarBrand href="/">
                <strong>Black Canvas</strong>
              </MDBNavbarBrand>
              {!this.state.isWideEnough && <MDBNavbarToggler onClick={this.onClick} />}
              <MDBCollapse isOpen={this.state.collapse} navbar>
                <MDBNavbarNav left>
                  <MDBNavItem active>
                    <MDBNavLink to="#">Home</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#">Contact</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#">Careers</MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
          </Router>

          <MDBView src="https://mdbootstrap.com/img/Photos/Others/img%20(40).jpg">
            <MDBMask overlay="purple-light" className="flex-center flex-column text-white text-center">
            <MDBContainer className="mt-3">
              
            <Flipsignin/>
            
          </MDBContainer>
              </MDBMask>
          </MDBView>
        </header>

        <main>
          
        </main>
      </div>
    )
  }
}

export default SignIn;
