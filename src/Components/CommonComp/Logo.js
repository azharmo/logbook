import React from 'react'
import CommonLink from './CommonLink'

function Logo(){
    return(
        <div>
        {/*<CommonLink to ={''} class={'link'}><img src ={require('src\Images\Logo.png')}></img></CommonLink>*/}
        <img src ='src\Images\Logo.png'></img>
        <img src ={require('src\Images\Logo.png')}></img>
        </div>
    )
}
export default Logo