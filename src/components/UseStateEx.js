import React, {useDebugValue, useState} from "react";

const UseStateEx = () =>{
const [state, setState] = useState(() =>{
        let initialState = 1;
        return initialState
    });
    const [flag, setFlag] = useState(false);

    useDebugValue(flag ? 'true' : 'false');

    return(
        <div>
            <div>
                <div>useState</div>
                <span>setState count</span>
                <h3>{state}</h3>
                <button onClick={()=>(setState (initialState => initialState + 1))}>Count + 1</button>
            </div>
            <div>
                <span>setState flag</span>
                {flag ? <h3>true</h3> : <h3>false</h3>}
                <button onClick={()=>(setFlag(!flag))}>Change flag</button>
            </div>
        </div>
    )
};

export default UseStateEx