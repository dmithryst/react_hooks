import React, {useState, useCallback} from "react";

const UseCallbackEx = () => {
    const [input1, setInput1] = useState('');
    const onChange = useCallback(e => (setInput1(e.target.value)), []);

    return (
        <div>
            <input type="text" onChange={onChange} />
            <h3>{input1}</h3>
        </div>
    )
};

export default UseCallbackEx