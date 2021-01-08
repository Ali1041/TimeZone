import React from 'react';
import {TextField} from '@material-ui/core'

const Search=(props)=>{

    return (
        <div className='bg-dark p-5'  style={{height:100+'vh'}}>

            {/* taking props history object goBack function here */}
            <h2 onClick={props.history.goBack} className='text-center' style={{cursor:'pointer',borderRadius:50+'%',borderColor:'black'}}>X</h2>

            {/* Search Field */}
            <div className='d-flex justify-content-center' style={{width:70+'%',margin:'auto'}}>
                <TextField label='Search....' size='medium' fullWidth helperText='Search Item here' />
            </div>
        </div>
    )
}
export default Search;