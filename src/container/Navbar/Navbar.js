import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import PersonIcon from '@material-ui/icons/Person';
import { makeStyles } from '@material-ui/styles'
import './navbar.css';
import {Link} from 'react-router-dom';

// custom styles for material UI
const useStyles=makeStyles(themes=>({
    customHoverFocus: {
        "&:hover, &.Mui-focusVisible": { 
            color: "dodgerblue",
            cursor:'pointer',
         }
      },
}))
const Navbar=()=>{

    // Defing styles from the above function
    const classes = useStyles()


    return(

        <div className='text-white row pt-5 pb-5 m-0 gradient-class' style={{position:'sticky',top:0,zIndex:1}}>

            {/* // The image place */}
            <div className='col-md-2 text-center' >
                <h3 className='m-0'>Time<span style={{color:'dodgerblue'}}>Zone</span></h3>
            </div>

            {/* The actual navbar with Links */}
            <div  className='col-md-8  align-self-center'>
                <div className='text-center d-flex justify-content-around navbar-div' style={{width:70+'%',margin:'auto'}}>
                <p className=' m-0  p' >Timeline</p>
                <Link to ='/all-projects/' className=' m-0  p' style={{textDecoration:'none',color:'inherit'}}>Projects</Link>
                <p className=' m-0  p'>About</p >
                <p className=' m-0  p'>Blog</p >
                <p className=' m-0  p'>Contact</p>
                </div>
            </div>

            {/* Using icons here */}
            <div className='col-md-2 d-flex justify-content-around align-self-center' >
                <PersonIcon className={classes.customHoverFocus}/>
            </div>
        </div>
    )
}
export default Navbar;
