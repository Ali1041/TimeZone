import React from 'react';
import Footer from '../footer/footer';
import Navbar from '../Navbar/Navbar';

// Higher order component which will not be routed
// All other components will be rendered as children.
const HOC=(props)=>{

    return(
        <div className='' style={{backgroundColor:'black'}}>
            <Navbar/>
            {props.children}
            <Footer/>
        </div>
    )
}
export default HOC;