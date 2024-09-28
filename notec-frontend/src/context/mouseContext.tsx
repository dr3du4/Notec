import React, { createContext, useState } from "react";

export const MouseContext = createContext({
    cursorType: "",
    cursorChangeHandler: (cursor) => {},
});

const MouseContextProvider = (props) => {
    const [cursorType, setCursorType] = useState("");

    const cursorChangeHandler = (cursor) => {
        setCursorType(cursor);
    };

    return (
        <MouseContext.Provider
            value={{
                cursorType: cursorType,
                cursorChangeHandler: cursorChangeHandler,
            }}
        >
            {props.children}
        </MouseContext.Provider>
    );
};

export default MouseContextProvider;
