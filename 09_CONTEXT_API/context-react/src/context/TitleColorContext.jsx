// Criar context
import { createContext, useReducer } from "react";

export const TitleColorReducer = (state, action) => {
    // switch
    switch(action.type){
        case "RED":
            return{...state, color: "red"}
        case "BLUE":
            return{...state, color: "blue"}
        case "GREEN":
            return{...state, color: "green"}
        case "YELLOW":
            return{...state, color: "yellow"}   
        default:
            return state
    }
}
export const TitleColorContext = createContext()
// Criar provider
export const TitleColorContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(TitleColorReducer, {color: "purple"})
    console.log(state)
    return(
        <TitleColorContext.Provider value={{...state, dispatch}}>
            {children}
        </TitleColorContext.Provider>
    )
 
}