import React,{useState} from 'react';
import {Button} from '@material-ui/core'
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import Stopwatch from '../stopwatch/stopwatch';
import './custom.css';
import {Link} from 'react-router-dom';


const ProjectRecord=()=>{
    const [data,setdata] = useState({
        showRecording:false
    })

    const {showRecording}=data

    const startRecording=()=>{
        setdata({
            ...data,
            showRecording:true
        })
    }

    const exitRecording=()=>{
        setdata({
            ...data,
            showRecording:false
        })
    } 
    return(
            <div>
                <div>
                <div>
                    <h3 className='text-center p-3 text-white'>
                        Project Name
                    </h3>
                </div>



                {
                    showRecording?
                    (<div className='text-center'>
                        <Stopwatch/>
                        <Button variant='text' color='primary' onClick={exitRecording}>Exit recording</Button>
                    </div>)
                    :(
                        <div>
                            <div className='text-center my-4 ' >
                                <Button variant='contained' className='Mui-btn' onClick={startRecording}
                                style={{backgroundColor:'#03fc67',color:'white',borderRadius:20,width:15+'%'}}>
                                    <PlayArrowIcon/>
                                    Start Project
                                </Button>
                            </div>
                            <div className='text-center'>
                                <Button variant='outlined' className='bg-dark text-white ' style={{borderRadius:20}}>
                                    <Link to='/project-details/record/' style={{textDecoration:'none',color:'inherit'}}>New Record</Link>
                                </Button>
                            </div>
                        </div>   
                    )
                }
                



                </div>

                <div className='container my-5 text-white'>
                <h3>
                    Today
                </h3>

                <hr className='bg-white'/>

                <div className='d-flex justify-content-between'>
                    <p className='m-0'>20:16 - 20:16</p>
                    <p className='m-0' >00:00:10</p>
                </div>
                <hr className='bg-white'/>

                </div>

            
            </div>

    )
}
export default ProjectRecord;