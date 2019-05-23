import React from 'react'
//import { slide as Menu } from "react-burger-menu"
import Header from '../CommonComp/Header'
import Footer from '../CommonComp/Footer'

function Dashboard(props){
    return(
        <div>
        <Header tab1 = {'Courses'} tab1to={''} 
                        tab2 = {'Grades'} tab2to={''} tab3 = {'News'} tab3to={''}
                        tab4 = {'Performance'} tab4to={''}/>

        <Footer/>        
        </div>
    )
}
export default Dashboard