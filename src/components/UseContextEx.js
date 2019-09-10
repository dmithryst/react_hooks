import React, {useContext} from "react";
import {GlobalContext} from "../GlobalContext";

const ExampleUseContext = React.createContext();

const ShowContext = () => {
    const value = useContext(ExampleUseContext);
    return (
        <div>
            Hello, {value}
        </div>)
};

const UseContextEx = () => {
    return (
        <GlobalContext.Consumer>
            {value => {
                return (
                    <div>
                        <ExampleUseContext.Provider value={"useContext works correctly!"}>
                            <ShowContext/>
                        </ExampleUseContext.Provider>
                        Hello, {value}
                    </div>
                )
            }
            }
        </GlobalContext.Consumer>
    )
};
export default UseContextEx