import React,{Component} from 'react'
import SignInTemplate from './SignIn/SignInTemplate'
import Userdetails from './SignUp/Userdetails'
import {Route} from 'react-router-dom'
//import Header from '../Components/CommonComp/Header'
//import Footer from '../Components/CommonComp/Footer'
import HomePage from './HomePage'
import Dashboard from './Portals/Dashboard'
class Main extends Component{
    render(){
        return (
         <div>            
            <div>
                    <Route exact path = '/' render={()=>(
                    <div>
                    
                        <HomePage/>
                        
                    </div>
            
                    )}/>
            </div>
           
                       
               <div> 
                        <Route path = '/MyCampus' render={()=>(
                            <div>
                                <SignInTemplate />
                            </div>
                        )}/>      
                </div>
                
                <div> 
                        <Route path = '/CreateAccount' render={()=>(
                            <div>                                                           
                                <Userdetails />                                                              
                            </div>
                        )}/>     
                 </div>  
                 <div>
                    <Route exact path = '/dashboard' render={()=>(
                    <div>
                                            
                        <Dashboard />
                      
                    </div>
            
                    )}/>
            </div>          
        </div>
        )}
} 
export default Main