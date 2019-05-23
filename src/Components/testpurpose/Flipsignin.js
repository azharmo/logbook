import React, { Component } from 'react'
import Flippy, { FrontSide, BackSide } from 'react-flippy'
import SignInTemplate from '../SignIn/SignInTemplate'
//import $ from 'jquery'
//import {Link} from 'react-router-dom'
class Flipsignin extends Component{
  
  handleClick(){
    //$('.flippy-container').toggleClass(flipOnClick.BackSide)
    //$(".flippy-container").css("","rotateY(180deg)")
    //isFlipped: true
    alert('will flip')
  }
    render(){
    return(      
        <Flippy
    flipOnHover={false} // default false
    flipOnClick={false} // default false
    flipDirection="horizontal" >
    <FrontSide>    
      <SignInTemplate/>
      
    </FrontSide>
    <BackSide>
      <SignInTemplate name={'Staff Email'} pass={'enter password'} />
    </BackSide>
  </Flippy>
    )
  }
}
export default Flipsignin