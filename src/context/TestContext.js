import { createContext, useReducer } from "react";

// Create Context Object
export const TestContext = createContext();
const initialState = {hello: "hello"};

const testReducer = (state = initialState, action) => {
  switch(action.type) {
    case "DATA": 
    return {
      ...state,
      hello: action.payload
    };
    default: 
    return state
  }
}

// Create a provider for components to consume and subscribe to changes
export const TestContextProvider = (props) => {
  const [state, dispatch] = useReducer(testReducer, initialState)
  return (
    <TestContext.Provider value={{state, dispatch}} >
      {props.children}
    </TestContext.Provider>
  )
}