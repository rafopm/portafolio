import React, { createContext, useState } from 'react';

export const displayModal = false;

const ModalContext = createContext();

const ModalProvider = ({ value }) => {

    const [display, setDisplay] = useState(displayModal)
    console.log(display)
    return (
        <ModalContext.Provider value={value}>
           
        </ModalContext.Provider>
    )
}

export { ModalProvider }
export default ModalContext;