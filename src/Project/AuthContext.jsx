import React, { createContext, useContext, useReducer } from "react";

const initialState = {
  isAuthenticated: false,
  username: "",
};
const SET_AUTH = "SET_AUTH";
const LOGOUT = "LOGOUT";
const authReducer = (state, action) => {
  switch (action.type) {
    case SET_AUTH:
      return {
        ...state,
        isAuthenticated: true,
        username: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        username: "",
      };
    default:
      return state;
  }
};
const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, initialState);

  const setAuth = (username) => {
    dispatch({ type: SET_AUTH, payload: username });
  };

  const logout = () => {
    dispatch({ type: LOGOUT });
  };

  return (
    <AuthContext.Provider value={{ authState, setAuth, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export { AuthProvider, useAuth };
