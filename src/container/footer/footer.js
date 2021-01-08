import 'bootstrap/dist/css/bootstrap.css';
import './footer.css'
import React from 'react';


// Footer component
const Footer=()=>{
    return(

        // wrapping div
        <div className='p-2 text-white'>

            {/* Div with label and text */}
            <div className='d-flex justify-content-around footer-div '>
                <div className='col-md-2 text-center' >
                    <h3 className='m-0'>Time<span style={{color:'dodgerblue'}}>Zone</span></h3>
                    <p className=''>Asorem ipsum adipolor sdit amet, consectetur adipisicing elitcf sed do eiusmod tem</p>
                </div>

                {/* Quick links div */}
                <div>
                    <h4>Quick Links</h4>
                    <p className='footer'>About</p>
                    <p className='footer'>Offer</p>
                    <p className='footer'>Discount</p>
                    <p className='footer'>Contact Us</p>
                </div>

                {/* New products div */}
                <div>
                    <h4>New Products</h4>
                    <p className='footer'>New product</p>
                    <p className='footer'>New product</p>
                    <p className='footer'>New product</p>
                    <p className='footer'>New product</p>
                </div>

                {/* Support div */}
                <div>
                    <h4>Support</h4>
                    <p className='footer'>FAQS</p>
                    <p className='footer'>Terms & conditons</p>
                    <p className='footer'>Privacy Policy</p>
                    <p className='footer'>Report Issue</p>
                </div>
            </div>
            <hr/>
            <p className='text-center'>CopyRight</p>
        </div>
    )
}
export default Footer;