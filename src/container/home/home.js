import React from 'react';
import HOC from '../HOC/HOC'
import './home.css';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import {Button} from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/styles'
import {Link} from 'react-router-dom';
import FiberManualRecordSharpIcon from '@material-ui/icons/FiberManualRecordSharp';


// custom styles for material UI buttons
export const useStyles=makeStyles((theme)=>({
    simple:{
        borderColor:'white',
        color:'white'
    },
    input:{
        color:'white',
        borderColor:'white',
    },
    simpleHover:{
        '&:hover,&.Mui-focuVisible':{
            borderColor:'dodgerblue',
            color:'dodgerblue',
            cursor:'pointer',
        }
    }
}))


const Home=()=>{


    const classes=useStyles()
    return(
        <HOC>
            <div className='text-white container my-5 '>
                <h1 className='m-0 text-center my-2'>Timeline</h1>
                <div className='text-right text-white'>
                    <Button variant='outlined' className={classes.simple+' '+classes.simpleHover}>
                    <Link style={{textDecoration:'none',color:'inherit'}} to='/add-project/'>
                        <AddIcon fontSize='small'/>
                        Project
                        </Link>
                        </Button>
                </div>    
                <div className='d-flex justify-content-between'>
                    <h3 className='m-0 align-self-center'>Today</h3>
                    <p className='m-0 align-self-center'>00:00:46</p>
                </div>

                <hr className='bg-white'/>

                <div className='d-flex justify-content-between p-2'>
                    <div style={{width:90+'%'}}>
                        <div className='d-flex ' >
                            <FiberManualRecordSharpIcon style={{color:'red'}} className='align-self-center' />
                            <h4 className='m-0 align-self-center'>New Project</h4>
                        </div>
                        <ul style={{listStyleType:'circle'}} className='my-2'> 
                            <li>New 1</li>
                            <li>New 2</li>
                            <li>New 3</li>
                            <li>New 4</li>
                        </ul>
                    </div>

                    
                    <div className='home-div' style={{width:10+'%'}}>
                        <div className='bg-dark p-2 d-flex' style={{borderRadius:22,width:100+'%'}}>
                            <span><PlayArrowIcon/></span>
                            <p className='m-0 align-self-center'>00:00:24</p>

                        </div>
                    </div>
                </div>
            <hr className='bg-white'/>
            </div>

        </HOC>
    )
}
export default Home;