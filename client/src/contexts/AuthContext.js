import React, { createContext, useReducer, useEffect, useContext } from "react";
import jwtDecode from "jwt-decode";

import fetcher from "../utils/api/fetcher";

export const AuthContext = createContext({});

const DEFAULT_STATE = { user: undefined };

const AUTH_TYPES = {
  signIn: "SIGN_IN",
  signOut: "SIGN_OUT",
};

const authReducer = (state, action) => {
  switch (action.type) {
    case AUTH_TYPES.signIn:
      return { ...state, user: action.user };
    case AUTH_TYPES.signOut:
      return { ...state, user: undefined };
    default:
      return state;
  }
};

export default function AuthContextProvider({ children }) {
  const [state, dispatch] = useReducer(authReducer, DEFAULT_STATE);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) saveUser(token);
  }, []);

  const saveUser = async (token) => {
    localStorage.setItem("token", token);
    fetcher.defaults.headers.Authorization = `Bearer ${token}`;
    dispatch({ type: AUTH_TYPES.signIn, user: jwtDecode(token) });
  };

  const removeUser = () => {
    localStorage.removeItem("token");
    fetcher.defaults.headers.Authorization = undefined;
    dispatch({ type: AUTH_TYPES.signOut });
  };

  return (
    <AuthContext.Provider value={{ user: state.user, saveUser, removeUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
