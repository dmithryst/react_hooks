import React, {useState} from 'react';
import UseStateEx from "./components/UseStateEx";
import UseLayout_EffectEx from "./components/UseLayout_EffectEx";
import UseReducerEx from "./components/UseReducerEx";
import UseContextEx from "./components/UseContextEx";
import UseCallbackEx from "./components/UseCallbackEx";
import {GlobalContext} from "./GlobalContext";


const App = () => {
    const [state, setState] = useState(() =>{
        let initialState = 1;
        return initialState
    });
    const globalContextValue ='Global context works!';



  return (
    <div className="App">
        <UseStateEx/>
        <hr/>
        <UseLayout_EffectEx state={state} setState={setState}/>
        <hr/>
        <GlobalContext.Provider value={globalContextValue}>
            <UseContextEx/>
        </GlobalContext.Provider>
        <hr/>
        <UseReducerEx/>
        <hr/>
        <UseCallbackEx/>
        <hr/>
    </div>
  );
};

export default App;
