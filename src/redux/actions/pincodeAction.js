import { API_FAIL , API_START , API_SUCCESS } from "./actionTypes";

export function apiStart(){
    return{
        type : API_START
    }
}

export function apiSuccess(data){
    return{
        type:API_SUCCESS,
        payload:data
    }
}

export function apiFail(err){
    return{
        type:API_FAIL,
        payload:err
    }
}