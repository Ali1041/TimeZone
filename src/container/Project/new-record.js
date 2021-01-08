import React,{useState} from 'react';
import Stopwatch from '../stopwatch/stopwatch';
import { enGB } from 'date-fns/locale';
import {Button} from '@material-ui/core'
import 'react-nice-dates/build/style.css'
import { DateRangePickerCalendar, START_DATE } from 'react-nice-dates'
import { format } from 'date-fns'
import { TimePicker,MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { createMuiTheme, TextField } from '@material-ui/core';
import { ThemeProvider } from 'react-bootstrap';
import {useStyles} from './add-project';
import './custom.css';



const NewRecord=(props)=>{
    const [startDate, setStartDate] = useState()
    const [endDate, setEndDate] = useState()
    const [focus, setFocus] = useState(START_DATE)
    const [selectedDate, handleDateChange] = useState(new Date());

    const theme = createMuiTheme({ 
        color:'white'
    })
    const classes=useStyles()

    // focus handler
    const handleFocusChange = newFocus => {
        setFocus(newFocus || START_DATE)
      }
    return(
        <div style={{backgroundColor:'black',minHeight:100+'vh'}} className=' p-3'>

            {/* Back button */}
            <div>
                <Button variant='outlined' onClick={props.history.goBack} className={classes.rootButton+' '+classes.rootButtonHover}>Back</Button>
            </div>

            {/* Stopwatch */}
            <Stopwatch/>

            {/* Date picker */}
            <div className='d-flex mx-auto' style={{width:50+'%'}}>
                <div className='text-center my-4 mx-auto text-white' style={{width:60+'%'}}>
                    <p>Starting date: {startDate?format(startDate,'dd-MM-yyyy',{locale:enGB}):null}</p>
                    <p>End date: {endDate?format(endDate,'dd-MM-yyyy',{locale:enGB}):null} </p>
                <DateRangePickerCalendar
                        startDate={startDate}
                        endDate={endDate}
                        focus={focus}
                        onStartDateChange={setStartDate}
                        onEndDateChange={setEndDate}
                        onFocusChange={handleFocusChange}
                        locale={enGB}
                    />
                </div>


                {/* Time picker */}
                <div className='align-self-center'>
                <ThemeProvider theme={theme}>
                <MuiPickersUtilsProvider utils={DateFnsUtils} className='text-white' >
                    <TimePicker
                        className={classes.rootField}
                        ampm={false}
                        openTo="hour"
                        views={["hours", "minutes", "seconds"]}
                        format="hh:mm:ss"
                        label="Minutes and seconds"
                        value={selectedDate}
                        onChange={handleDateChange}
                        // style={{color:'white',backgroundColor:'white',borderColor:'red'}}
                        
                    />
                </MuiPickersUtilsProvider>
                </ThemeProvider>
                </div>
            </div>
        </div>
    )
}
export default NewRecord;