import React,{useState} from 'react';
import {Button, TextField} from '@material-ui/core'
import AddSharpIcon from '@material-ui/icons/AddSharp';
import RadioButtonUncheckedSharpIcon from '@material-ui/icons/RadioButtonUncheckedSharp';
import PlayArrowSharpIcon from '@material-ui/icons/PlayArrowSharp';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {useStyles} from './add-project'
import './custom.css';
import Slide from '@material-ui/core/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const ProjectTask=()=>{
    const [data,setdata]=useState({
        open:false
    })

    const {open}=data

    const openModal=()=>{
        setdata({
            ...data,
            open:!open
        })
    }
    const classes = useStyles()

    return(
        <div>
            <div style={{height:25+'vh'}}>
                <div>
                    <h3 className='text-center p-3 text-white'>
                        Project Name
                    </h3>
                </div>


                <div className='text-center my-4 ' >
                    <Button variant='contained' className='Mui-btn' onClick={openModal}
                     color='primary' style={{width:15+'%',borderRadius:20}}>
                        <AddSharpIcon fontSize='small' />
                        Add a new task
                    </Button>
                </div>
            </div>

            <div className='container my-5 text-white'>
                <div className='d-flex justify-content-between'>

                    <div className='d-flex m-0 align-self-center'>
                        <RadioButtonUncheckedSharpIcon/>
                        <p className='m-0 pl-2'>Task name</p>
                    </div>

                    <div className='align-self-center' >

                        <div className='bg-dark d-flex justify-content-around p-1' style={{width:100+'%',borderRadius:15,cursor:'pointer'}}>
                            <PlayArrowSharpIcon/>
                            <p className='m-0 mr-2'>00:00:10</p>
                        </div>

                    </div>
            </div>
            <hr className='bg-white'/>

        </div>
        <Dialog open={open} style={{backgroundColor:'rgba(0,0,0,.5)'}} TransitionComponent={Transition} fullWidth>
            <DialogTitle className='bg-dark text-white'>
                Add task
            </DialogTitle>
            <DialogContent className='bg-dark text-white'>
                <DialogContentText className='text-white'>
                    Add a new task to project
                </DialogContentText>
                <TextField autoFocus variant='outlined' fullWidth label='New task' className={classes.rootField} />
            </DialogContent>
            <DialogActions className='bg-dark text-white'>
                <Button variant='contained' onClick={openModal} color='primary' style={{color:'white'}} >Add</Button>
                <Button variant='contained' onClick={openModal} style={{color:'white',backgroundColor:'gray'}}>Cancel</Button>
            </DialogActions>
        </Dialog>
            
    </div>

    )
}
export default ProjectTask;