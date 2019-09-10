import React, {useReducer} from "react";

const UseReducerEx = () => {
    const COUNT_INCREASE_1 = 'APP/APP/COUNT_INCREASE_1';
    const COUNT_DECREASE_1 = 'APP/APP/COUNT_DECREASE_1';
    const RESET = 'APP/APP/RESET';

    const reset = (initialState) =>{
        return {count: initialState}
    };

    const testReducer = (state, action) =>{
        switch (action.type) {
            case COUNT_INCREASE_1:
                return {count: state.count + 1};
            case COUNT_DECREASE_1:
                return {count: state.count - 1};
            case RESET:
                return reset(action.payload);
            default: throw new Error();
        }
    };

    const [state, dispatch] = useReducer(testReducer, 0, reset);

    return(
        <div>
            useReducer
            <div>state.count = {state.count}</div>
            <button
                onClick={() => dispatch({type: RESET, payload: 0})}> RESET</button>
            <button
                onClick={() => dispatch({type: COUNT_INCREASE_1})}> +1</button>
            <button
                onClick={() => dispatch({type:COUNT_DECREASE_1})}> -1</button>
        </div>
    )
};

export default UseReducerEx