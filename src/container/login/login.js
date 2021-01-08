import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import HOC from '../HOC/HOC'; 
import {makeStyles} from '@material-ui/core/styles';
import './login.css';
import Button from '@material-ui/core/Button';
import {TextField} from '@material-ui/core';
import {Link} from 'react-router-dom';



// Custome styles for material UI buttons 
export const useStyles = makeStyles((theme)=>({
    forHover:{
    '&:hover, &.Mui-focusVisible':{
        backgroundColor:'white',
        color:'red'
    }
},
    simple:{
        borderColor:'white',
        color:'white'
    },
    button:{
        width:100+'%',
        textAlign:'center',
        padding:10+'px', 
        borderColor:'dodgerblue',
        color:'dodgerblue'
    },
    buttonHover:{
        '&:hover, &.Mui-focusVisible':{
            backgroundColor:'dodgerblue',
            borderColor:'white',
            color:'white'
        }
    }

}));
;

const Login=()=>{
    const classes=useStyles()

    return(
        <HOC>

            {/* Main login div with background image */}
            <div className='bg-main d-flex justify-content-center'>
                <h1 className='align-self-center' style={{fontWeight:800,color: '#0b1c39',fontSize:80+'px'}}>
                    Login
                </h1>
            </div>

            {/* Grid system for login and a div with background image */}
            <div className='row my-5 p-3' style={{width:80+'%',margin:'auto'}}>

                {/* Background image with text div */}
                <div className='bg-login col-md-6 d-flex justify-content-center'>
                    <div className='text-white text-center align-self-center' style={{width:80+'%',margin:'auto'}}>
                        <h4 className='text-center'>New to our Shop?</h4>
                        <p>There are advances being made in science and technology everyday, and a good example of this is the</p>
                        <Button variant='outlined' className={classes.forHover +' '+ classes.simple} color='white'><Link to='/signup/' style={{textDecoration:'none',color:'inherit'}}>Create an account</Link></Button>
                    </div>
                </div>


                {/* Login fields form */}
                <div className=' col-md-6'>
                    <form className='p-5'>
                        <legend>Welcome Back!</legend>
                        <legend>Please Sign in here!</legend>
                        <TextField label='Username' fullWidth  />
                        <TextField label='Password' className='my-3' type='password' fullWidth />
                        <Button variant='outlined' className={classes.button+' '+classes.buttonHover} >Log In</Button>
                    </form>
                </div>
            </div>
        </HOC>
    )
}
export default Login;