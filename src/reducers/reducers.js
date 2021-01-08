import * as actionTypes from '../action/action';

const insitialState={
    project:'',
    color:'',
    task:''
}
const reducer=(state=insitialState,action)=>{
    const {type,payload}=action
    switch(type){
        case actionTypes.CREATE_PROJECT_SUCCESS:
            return {
                ...state,
                project:payload.project,
                color:payload.color
            }
        default:
            return state    
    }
}
export default reducer;