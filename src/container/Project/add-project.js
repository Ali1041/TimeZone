import React,{useState} from 'react';
import Radio from '@material-ui/core/Radio';
import { withStyles } from '@material-ui/core/styles';
import { green,red,blue,orange,purple } from '@material-ui/core/colors';
import { TextField,Button } from '@material-ui/core';
import {makeStyles} from '@material-ui/core';
// import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import './custom.css'
import {connect} from 'react-redux'
import {createProject} from '../../action/actionCreators'
import { Redirect } from 'react-router-dom';
import Alert from '@material-ui/lab/Alert';



// All custom radio buttons
// Green Button
const GreenRadio = withStyles({
    root: {
      color: green[400],
      '&$checked': {
        color: green[600],
      },
    },
    checked: {},
  })((props) => <Radio color="default" {...props} />);

// Red Button
  const RedRadio = withStyles({
    root: {
      color: red[400],
      '&$checked': {
        color: red[600],
      },
    },
    checked: {},
  })((props) => <Radio color="default" {...props} />);  

  // Blue Button
  const BlueRadio = withStyles({
    root: {
      color: blue[400],
      '&$checked': {
        color: blue[600],
      },
    },
    checked: {},
  })((props) => <Radio color="default" {...props} />);

// Orange Button
  const OrangeRadio = withStyles({
    root: {
      color: orange[400],
      '&$checked': {
        color: orange[600],
      },
    },
    checked: {},
  })((props) => <Radio color="default" {...props} />);

// Purple Button
  const PurpleRadio = withStyles({
    root: {
      color: purple[400],
      '&$checked': {
        color: purple[600],
      },
    },
    checked: {},
  })((props) => <Radio color="default" {...props} />);
  

//   custom input 
export const useStyles = makeStyles({
  root: {
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      border: "none"
    },
    "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      border: "none"
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      border: "none"
    },
    "& .MuiOutlinedInput-input": {
      color: "white"
    },
    "&:hover .MuiOutlinedInput-input": {
      color: "white"
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
      color: "white"
    },
    "& .MuiInputLabel-outlined": {
      color: "white"
    },
    "&:hover .MuiInputLabel-outlined": {
      color: "white"
    },
    "& .MuiInputLabel-outlined.Mui-focused": {
      color: "white"
    }
  },
  rootField:{
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "white"
    },
    "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "white"
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "white"
    },
    "& .MuiOutlinedInput-input": {
      color: "white"
    },
    "&:hover .MuiOutlinedInput-input": {
      color: "white"
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
      color: "white"
    },
    "& .MuiInputLabel-outlined": {
      color: "white"
    },
    "&:hover .MuiInputLabel-outlined": {
      color: "white"
    },
    "& .MuiInputLabel-outlined.Mui-focused": {
      color: "white"
    }
  },
  
  rootButton:{
    borderColor:'white',
    color:'white'
  },
  rootButtonHover:{
      '&:hover,&.Mui-focusVisible':{
          borderColor:'dodgerblue',
          color:'dodgerblue',
      }
  }
});


const AddProject=({createProject,history})=>{

    // defining state here
    const [data,setdata]=useState({
        bgColorValue:'#bd90cb',
        save:false,
        value:'',
        redirect:false
    })

    // destructuring the state data
    const {bgColorValue,save,value,redirect} = data

    const classes = useStyles() 


    // click handler for color changes
    const clickHandler=(e)=>{
        setdata({
            ...data,
            bgColorValue:e.target.value
        })
    }

    // input change handler
    const changeHandler=(e)=>{
        if (e.target.value!==''){
            // set data here
            setdata({
                ...data,
                save:true,
                value:e.target.value
            })
        }
        else{
            // set data here
            setdata({
                ...data,
                save:false,
                value:e.target.value
            })
        }
    }

    // create project on click
    const clickCreateProject=()=>{
      createProject(value,bgColorValue)
      setdata({
        ...data,
        redirect:true
      })
    }

    // redirect to previous page
    if(redirect===true){
      setTimeout(() => {
        return   (
          <div>
              <Redirect to={history.goBack()} />
          </div>)
      }, 2000);


    }

    return(
            <div className='text-center text-white p-4' 
            style={{backgroundImage:`-webkit-linear-gradient(top, ${bgColorValue}, black 32%)`,height:100+'vh'}}>
                {/* <ArrowBackIcon/> */}
                {redirect?
                (<div style={{position:'absolute',top:20,right:0}}>
                  <Alert severity="success" variant='filled' style={{textAlign:'right',color:'white',width:'fit-content'}}>
                 Project added successfully!!
               </Alert>
                </div>)
                :null} 
                <form style={{width:40+'%',margin:'auto'}}>
                  <div style={{height:30+'vh'}}>
                    <h3 >Create Project</h3>


                    <TextField fullWidth variant='outlined' label='New project' value={value} className={classes.root} onChange={changeHandler}/>

                    {/* Displaying the sve button when something is written */}
                    {
                        save?(
                        <div className='my-1'>
                            <Button variant='outlined' onClick={clickCreateProject} className={classes.rootButton+' '+classes.rootButtonHover} >Save</Button>
                        </div>
                            ):null
                    }
                  </div>  

                    <PurpleRadio value='#bd90cb' onClick={clickHandler} checked={bgColorValue === '#bd90cb'} />
                    <OrangeRadio value='orange' onClick={clickHandler} checked={bgColorValue === 'orange'}/>
                    <BlueRadio value='#19c6e8' onClick={clickHandler} checked={bgColorValue === '#19c6e8'}/>
                    <RedRadio value='#ff3333' onClick={clickHandler} checked={bgColorValue === '#ff3333'}/>
                    <GreenRadio value='#00ff40' onClick={clickHandler} checked={bgColorValue === '#00ff40'}/>
                </form>

                <div>
                  <Button variant='outlined' onClick={history.goBack} color='primary'>
                    Back
                  </Button>
                </div>
            </div>
    )
}

export default connect(null,{createProject})(AddProject);