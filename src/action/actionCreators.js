import * as actionTypes from './action';


export const createProject=(project,color)=>dispatch=>{
    const data={'project':project,'color':color}
    dispatch({
        type:actionTypes.CREATE_PROJECT_SUCCESS,
        payload:data
    })
}