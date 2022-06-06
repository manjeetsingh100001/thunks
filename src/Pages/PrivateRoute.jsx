import { useContext } from "react";
import { Navigate, Route } from "react-router-dom";
// import { AuthContext } from "../Context/AuthContext";

function PrivateRoute({ children, to }) {
  const [state] = useContext(AuthContext);

  if (state.isAuth) {
    return children;
  }

  return <Navigate to={to || "/"} />;
}

export default PrivateRoute;

import React, { useReducer, useState } from "react";

export const AuthContext = React.createContext();

const initState = {
  isAuth: false,
  token: null
};

const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS": {
      return {
        ...state,
        isAuth: true,
        token: action.payload
      };
    }
    case "LOGOUT_SUCCESS": {
      return {
        ...state,
        isAuth: false,
        token: null
      };
    }
    default: {
      return state;
    }
  }
};

function AuthContextProvider({ children }) {
  const [state, dispatch] = useReducer(authReducer, initState);
  return (
    <AuthContext.Provider value={[state, dispatch]}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
