import React,{useState,useRef} from 'react';
import {Button} from '@material-ui/core';

const Stopwatch=()=>{
    const [timer, setTimer] = useState(0)
    const [isActive, setIsActive] = useState(false)
    const [isPaused, setIsStop] = useState(false)
    const increment = useRef(null)
  
    const clickHandler = () => {
      setIsActive(true)
      setIsStop(false)
      increment.current = setInterval(() => {
        setTimer((timer) => timer + 1)
      }, 1000)
    }

    const clickStopHandler=()=>{
        clearInterval(increment.current)
        setIsActive(false)
        setIsStop(true)
    }

    const formatTime=()=>{
        const sec = `0${timer%60}`.slice(-2);
        const min = `${Math.floor(timer/60)}`;
        const mins = `0${min%60}`.slice(-2);
        const hour = `0${Math.floor(timer / 3600)}`.slice(-2);
        return `Tracking | Today ${hour}:${mins}:${sec}`
    }

    return(
        <div className='text-center text-white'>
            <div>
                <h4>{formatTime()}</h4>
                {
                    isActive?<Button variant='outlined' style={{color:'white',border:'none',backgroundColor:'red'}}
                     onClick={clickStopHandler}>Stop</Button>:
                     <Button variant='outlined' style={{color:'white',borderColor:'white'}}
                      onClick={clickHandler}>Start</Button>
                }
            </div>
            
        </div>
    )
}
export default Stopwatch;