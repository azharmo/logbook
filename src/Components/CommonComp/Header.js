import React from 'react'
import CommonLink from './CommonLink'
//import Logo from './Logo'

function Header(props){
    return (gjhjk
        <div>
                <div className='masterdiv'>
                    <div className ='container zeropadding'>
                        <ul className='toptoolbar'>
                            <li>
                                <ul className='floatleft'>
                                    <li className='columns'><CommonLink title={'Support'} to={''} class={'link'}/></li>
                                    <li className='columns'><CommonLink title={'Live Demo'} to={''} class={'link'}/></li>
                                </ul>
                            </li>
                            <li>
                                <ul className='floatright'>
                                    <li className='columns'><CommonLink title={'My Campus'} to={'MyCampus'} class={'link'}/></li>
                                    <li className='columns'><CommonLink title={'Contact Us'} to={''} class={'link'}/></li>
                                </ul>
                            </li>
                        </ul>
                    </div>

                </div>
                <div className='mainstring'> 
                    <ul>
                        <li className='Logo' ></li>
                        <li className='title' ><strong><CommonLink title={'SLATE'} to={''} class={'link'}/></strong></li>
                        <li className='maincolumns'><CommonLink title={props.tab1} to={props.tab1to} class={'link'}/></li>
                        <li className='maincolumns'><CommonLink title={props.tab2} to={props.tab2to} class={'link'}/></li>
                        <li className='maincolumns'><CommonLink title={props.tab3} to={props.tab3to} class={'link'}/></li>
                        <li className='maincolumns'><CommonLink title={props.tab4} to={props.tab4to} class={'link'}/></li>
                    </ul>

                </div>
        </div>
    )
}
export default Header 