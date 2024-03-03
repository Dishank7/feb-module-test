import { API_FAIL, API_START, API_SUCCESS } from "../actions/actionTypes";


const initialValue = {
    loading:"false",
    data:[],
    err:null
}

function pincodeReducer(state=initialValue , action){

    switch(action.type){

      case API_START: return {...state , loading:"true" , data:[] , err:null}

      case API_SUCCESS : return{ ...state , loading:"false" , data:action.payload , err:null}

      case API_FAIL : return{...state , loading:"false" , data:[], err:action.payload}

      default: return state;

    }
}

export default pincodeReducer