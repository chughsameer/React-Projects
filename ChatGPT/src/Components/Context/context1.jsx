import { createContext, useState } from "react";
import runChat from "../components/config/gemini";


export const Context = createContext();

const ContextProvider = (props) => {

    const[input,setInput] = useState('');
    const[recentPrompt,setRecentPrompt] = useState('');
    const[previousPrompt,setPreviousPrompt] = useState([]);
    const[showResult,setShowResult] = useState(false);
    const[loading,setLoading] = useState(false);
    const[resultData,setResultData] = useState('');

    const onSent = async (prompt) => {
        await run(input)
    }

    const contextValue = {
        previousPrompt,
        setPreviousPrompt,
        onSent,
        setRecentPrompt,
        recentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setInput,
        newCHat
    }
    return(
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )

}
export default ContextProvider