import React from 'react';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import {Button} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import {Link} from 'react-router-dom';
import {useStyles} from '../home/home'
import FiberManualRecordSharpIcon from '@material-ui/icons/FiberManualRecordSharp';
import './custom.css'
const Project=()=>{

    const classes = useStyles()
    return(

        <div style={{height:100+'vh',backgroundColor:'black'}} className='text-white  '>
            <div  className=' d-flex justify-content-center'>
            
            
            <div className='align-self-start'>    
                
                <h1 className='text-center my-4'>
                    Projects
                </h1>


                <Button color='primary' variant='contained' className=''>
                   <Link to='/add-project/' style={{textDecoration:'none',color:'inherit'}} className='d-flex'>
                   <AddIcon fontSize='small' className='align-self-center'/>
                    Add a new project
                   </Link>
                </Button>
                <div className='text-center'>
                    <Button variant='contained' className='my-2' >
                        <Link to='/home/' style={{textDecoration:'none',color:'inherit'}} className='d-flex'>
                            Back to timeline                        
                        </Link>
                    </Button>
                </div>


            </div>
        </div>

            {/* the flex wrapper */}
            <div className='d-flex justify-content-between container my-3 border-bottom p-2 custom-div' style={{width:60+'%'}}>

                {/* project name div */}
                <div className='align-self-center custom-div-div' style={{width:70+'%'}}>
                    <div className='d-flex'>
                        <FiberManualRecordSharpIcon style={{color:'red'}}/>
                        <h5 className='text-white align-self-center m-0'><Link style={{textDecoration:'none',color:'inherit'}}
                         to='/project-details/'>Project 1</Link></h5>

                    </div>
                </div>


                {/* center aligned wrapper */}
                <div className='align-self-center custom-btn' style={{width:30+'%'}}>
                    <div className='d-flex justify-content-around ' >


                        <Button className={'m-0 align-self-center '+classes.simple+' '+classes.simpleHover} variant='outlined'>
                            <Link to='/project-details/' style={{textDecoration:'none',color:'inherit'}}>
                            View task
                            </Link>
                        </Button>


                        <div style={{borderRadius:20,width:35+'%'}} 
                        className='bg-dark text-white m-0 p-2 align-self-center d-flex'>
                            <PlayArrowIcon/>
                            <Link to='/' style={{textDecoration:'none',color:'inherit'}} className='align-self-center'>Start</Link>
                        </div>
                    </div>
                </div>
            </div>

    <div className='d-flex justify-content-between container my-3 border-bottom p-2 custom-div' style={{width:60+'%'}}>

        {/* project name div */}
        <div className='align-self-center custom-div-div ' style={{width:70+'%'}}>
            <div className='d-flex' >
                <FiberManualRecordSharpIcon style={{color:'blue'}}/>
                <h5 className='text-white align-self-center m-0'><Link style={{textDecoration:'none',color:'inherit'}}
                to='/project-details/'>Project 2</Link></h5>

            </div>
        </div>


        {/* center aligned wrapper */}
        <div className='align-self-center custom-btn' style={{width:30+'%'}}>
            <div className='d-flex justify-content-around' >


                <Button className={'m-0 align-self-center '+classes.simple+' '+classes.simpleHover} variant='outlined'>
                    <Link to='/project-details/' style={{textDecoration:'none',color:'inherit'}}>
                    View task
                    </Link>
                </Button>


                <div style={{borderRadius:20,width:35+'%'}} 
                className='bg-dark text-white m-0 p-2 align-self-center d-flex'>
                    <PlayArrowIcon/>
                    <Link to='/' style={{textDecoration:'none',color:'inherit'}} className='align-self-center'>Start</Link>
                </div>
            </div>
        </div>
        </div>

        </div>
    )
}

export default Project;