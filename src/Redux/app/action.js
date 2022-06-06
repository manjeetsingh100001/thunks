import { useNavigate } from "react-router-dom";
import axios from "axios";

export const loginActionTypes = {
    // key value pair
    USER_LOADING:"ADD_USER_LOADING",
    USER_SUCCESS:"ADD_USER_SUCCESS",
     USER_FAILURE:" ADD_USER_FAILURE"
  };
  export const getLoading=()=>({
      type:loginActionTypes.USER_LOADING
  })
  export const getSuccess=(data)=>({
      type:loginActionTypes.USER_SUCCESS,
      payload:data
  })
  export const getFailure=()=>({
    type:loginActionTypes.USER_FAILURE
    
})

export const postLogin = (email,password) => (dispatch, getState) => {
    const loadingAction = getLoading();
    dispatch(loadingAction);
    const navigate = useNavigate();
    console.log(`token is`, getState().auth.token);
    return axios({
      url: "https://reqres.in/api/login",
      method: "POST",
      data:{
          email,password
        //   email: "eve.holt@reqres.in",
        // password: "cityslicka"
      }
    })
      .then((res) => {
        const SuccessAction = getSuccess(res);
        dispatch(SuccessAction);
        navigate("/posts");
      })
      .catch((err) => {
        const ErrorAction = getFailure();
        dispatch(ErrorAction);
      });
  };
  