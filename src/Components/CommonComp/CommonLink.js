import React from 'react'
import {Link} from 'react-router-dom'
//import proptypes from 'prop-types'

function CommonLink(props){
    return(
        <div>
        <strong><Link to = {props.to} className={props.class}>{props.title}</Link></strong>
        </div>
    )
    
}
 
export default CommonLink