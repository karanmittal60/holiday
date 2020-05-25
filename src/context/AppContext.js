import React from 'react';

export const AppContext = React.createContext();

export const AppProvider = (props) => {
    const initialSate = {
       cart: []
    };

    const [state, setState] = React.useState(initialSate);

    return (
        <AppContext.Provider value={[state, setState]}>
            {props.children}
        </AppContext.Provider>
    )
};

