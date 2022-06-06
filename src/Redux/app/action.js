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
  export const getFailure=(data)=>({
    type:loginActionTypes.USER_FAILURE
    
})