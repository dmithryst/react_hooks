import React, {useEffect, useLayoutEffect} from "react";
import {connect} from "react-redux";
import {setCountAC} from "../redux/reducers/test-reducer";

const UseLayout_EffectEx = ({setCountAC,count, state, setState}) => {

    //you will see console log useEffect/useLayoutEffect during component first rendering and changing input[state]
    useEffect(() => {
        console.log('useEffect')
    }, [state]);//useEffect = after componentDidMount/Update layout and paint
    useLayoutEffect(() => {
        console.log('useLayoutEffect')
    }, [state]); //useLayoutEffect = componentDidMount/Update


    //Such variant of code will start useEffect/useLayoutEffect on changing redux state/props an so on
    // useEffect(() => {
    //     console.log('useEffect')
    // });
    // useLayoutEffect(() => {
    //     console.log('useLayoutEffect')
    // });

    return (
        <div>
            {/*useEffect should not work in spite of changing redux state, only if {state} changed*/}
                useEffect
            <div>
                <h2>Count redux {count}</h2>
                <button onClick={() => setCountAC()}> Count +1</button>
            </div>
            <div>
                <h2>Count App useState {state}</h2>
                <button onClick={() => setState((state) => state + 1)}> Count +1</button>
            </div>

        </div>
    )
};

export default connect((state) => ({
    count: state.test.count
}), {setCountAC})(UseLayout_EffectEx)