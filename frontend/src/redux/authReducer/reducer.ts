import { authAction, initialState } from "../../contraints/Type"
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "../actionType"

const init:initialState={
    isLoading:false,
    isError:false,
    isAuth:false,
    data:[]
}

export const reducer = (state=init,action:authAction)=>{
     const {type,payload}=action
     switch(type) {
        case LOGIN_REQUEST : {
            return{
               ...state,
               isLoading:true,
               isError:false,
               isAuth:false,
            }
        }
        case LOGIN_SUCCESS : {
            return{
               ...state,
               isLoading:false,
               isAuth:true,
               data:payload,
            // token:payload?.accessToken
            }
        }
        case LOGIN_FAILURE : {
            return{
               ...state,
               isLoading:false,
               isErorr:true,
               isAuth:false,
            //    token:payload?.accessToken
            }
        }
        default:{
            return state
        }
     }
    
}