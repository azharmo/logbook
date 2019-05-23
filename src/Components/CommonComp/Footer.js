import React from 'react'
import CommonLink from './CommonLink'

function Footer(){
    return(
        <div>
            <footer id ='footer-global' class>
                <div className ='container'>
                    <div className='col-sm-push-1 col-sm-10'>
                        <div className='columnfooter'>
                            <ul className='floatleft'>
                                <li><h4>About</h4></li>
                                <li className='footercolumns'>
                                    <CommonLink title= {'About us'} to ={''} />
                                </li>
                                <li className='footercolumns'>
                                    <CommonLink title= {'News'} to ={''} />
                                </li>
                                <li className='footercolumns'>
                                    <CommonLink title= {'Partners'} to ={''} />
                                </li>
                                <li className='footercolumns'>
                                    <CommonLink title= {'Plan'} to ={''} />
                                </li>
                            </ul>
                        </div>
                        <div className='columnfooter'>
                        <ul className='floatleft'>
                                <li><h4>Support</h4></li>
                                <li className='footercolumns'>
                                    <CommonLink title= {'Help'} to ={''} />
                                </li>
                                <li className='footercolumns'>
                                    <CommonLink title= {'FAQ'} to ={''} />
                                </li>
                                <li className='footercolumns'>
                                    <CommonLink title= {'Live Demo'} to ={''} />
                                </li>
                                <li className='footercolumns'>
                                    <CommonLink title= {'Refer'} to ={''} />
                                </li>
                            </ul>
                        </div>
                        <div className='columnfooter'>
                        <ul className='floatleft'>
                                <li><h4>Info</h4></li>
                                <li className='footercolumns'>
                                    <CommonLink title= {'Features'} to ={''} />
                                </li>
                                <li className='footercolumns'>
                                    <CommonLink title= {'Careers'} to ={''} />
                                </li>
                                <li className='footercolumns'>
                                    <CommonLink title= {'Pricing'} to ={''} />
                                </li>
                                
                            </ul>
                        </div>
                        <div className='columnfooter'>
                        <ul className='floatleft'>
                                <li><h4>Contact Us</h4></li>
                                <li className='footercolumns'>
                                    <CommonLink title= {'Phone:0458221234'} to ={''} />
                                </li>
                                <li className='footercolumns'>
                                    <CommonLink title= {'Email:noemail@email.com'} to ={''} />
                                </li>
                                <li className='footercolumns'>
                                    <CommonLink title= {'Facebook:blc@fb.com'} to ={''} />
                                </li>
                                <li className='footercolumns'>
                                    <CommonLink title= {'Twitter:'} to ={''} />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
export default Footer