import React  from "react";
import UseContext from "./UseContext";
import UseReduce from "./UseReduce";
import { useReducer } from "react";

const StateUse = (props) => {

    const [state, dispatch] = useReducer(UseReduce,'' )


  return (
  <UseContext.Provider value={{
    state
  }}>
    {props.children}
  </UseContext.Provider>)
};

export default StateUse;
