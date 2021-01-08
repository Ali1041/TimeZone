import React from 'react';
import HOC from '../HOC/HOC';
import {Button,TextField} from '@material-ui/core'
import {useStyles} from '../login/login';
import './signup.css';
import {Link} from 'react-router-dom';


const Signup=()=>{

    // Reusing the useStyle styles in this component.
    // Actual location is Login component
    const classes=useStyles();
    return(
        <HOC>
            <div className='row my-4' style={{width:70+'%',margin:'auto'}}>

                {/* The gradient div wih text */}
                <div className='col-md-6 gradient d-flex justify-content-center'>
                    <div className='align-self-center text-center'>
                        <h2 className='text-white '>Join us in our journey!!</h2>
                        <Button variant='outlined' className={classes.simple+' '+classes.forHover} >
                            <Link to='/' style={{textDecoration:'none',color:'inherit'}}>Login</Link></Button>
                    </div>   
                </div>
                
                {/* The form div */}
                <div className='col-md-6'>
                    <form className='p-5'>
                        <legend>Hello there!</legend>
                        <legend>Sign up here!</legend>
                        <TextField fullWidth label='Email' type='email' />
                        <TextField fullWidth label='Username' type='text' className='my-3'/>
                        <TextField fullWidth label='Password' type='password' />
                        <TextField fullWidth label='Confirm Password' type='password' className='my-3' />
                        <Button variant='outlined' className={classes.button+' '+classes.buttonHover}>Signup</Button>
                    </form>
                </div>
            </div>
        </HOC>
    )
}
export default Signup;