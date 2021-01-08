import React,{useState} from 'react';
import AlarmIcon from '@material-ui/icons/Alarm';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import DonutLargeSharpIcon from '@material-ui/icons/DonutLargeSharp';
import {makeStyles} from '@material-ui/core';
import ProjectRecord from '../Project/project-records';
import ProjectTask from '../Project/project-tasks';
import { Link } from 'react-router-dom';
import ProjectStats from '../Project/project-stats';


// custome styles for icons
const useStyles=makeStyles((theme)=>({
    root:{
        color:'dodgerblue'
    }
}))


const ProjectFooter=(props)=>{

    // defining the state here
    const [data,setdata]=useState({
        selectedIcon:'records',
        showRecord:true,
        showTask:false,
        showStats:false,
    })

    // defining styles inside component
    const classes = useStyles() 

    // destructuring the state
    const {selectedIcon,showRecord,showTask,showStats} = data

    const clickHandler=(e)=>{
        if (e==='records'){
            setdata({
                ...data,
                selectedIcon:e,
                showRecord:true,
                showStats:false,
                showTask:false
            })
        }
        else if(e==='tasks'){
            setdata({
                ...data,
                selectedIcon:e,
                showRecord:false,
                showStats:false,
                showTask:true
            })
        }
        else if(e==='Stats'){
            setdata({
                ...data,
                selectedIcon:e,
                showRecord:false,
                showStats:true,
                showTask:false
            })
        }
        
        
    }

    return(
        <div style={{height:100+'vh',backgroundImage:'-webkit-linear-gradient(top ,#bd90cb , black 32%)'}} className='text-white'>
        
        {/* Back to project page link */}
        <p className='text-right p-2 text-white'>
            <Link to='/all-projects/' style={{textDecoration:'none',color:'inherit'}} >
                Close
            </Link></p>

        {/* rendering one of them at one time */}
        {showRecord?<ProjectRecord/>:null}
        {showTask?<ProjectTask/>:null}
        {showStats?<ProjectStats/>:null}

        {/* fixed position bottom */}
        <div style={{position:'fixed',width:100+'%',bottom:0}} className='bg-dark'>

        {/* flex wrapper */}
        <div className='d-block w-100 p-2'>
            <div className='d-flex justify-content-around text-white'>

                {/* Record icon and text */}
                <div className='text-center align-self-center' >
                    <p className='m-0' style={{cursor:'pointer'}}
                     onClick={()=>{clickHandler('records')}}>
                        <AlarmIcon className={selectedIcon==='records'?classes.root:null}/>
                        <small className='d-block'>
                            Records
                        </small>
                    </p>
                </div>
            
                {/* Tasks icon ad text */}
                <div className='text-center align-self-center'>
                    <p className='m-0' style={{cursor:'pointer'}}>
                    <CheckCircleIcon onClick={()=>{clickHandler('tasks')}} className={selectedIcon==='tasks'?classes.root:null}/>

                        <small className='d-block'>
                            Tasks
                        </small>
                    </p>
                </div>

                {/* stats icon and text */}
                <div className='text-center align-self-center' >
                    <p className='m-0' style={{cursor:'pointer'}} >
                    <DonutLargeSharpIcon onClick={()=>{clickHandler('Stats')}} className={selectedIcon==='Stats'?classes.root:null}/>
                        <small className='d-block'>
                            Statistics
                        </small>
                    </p>
                </div>
            </div>
        </div>
        </div>
        </div>


    )
}
export default ProjectFooter;