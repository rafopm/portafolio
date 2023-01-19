import React, { createContext } from 'react';
import SliderData from '../components/slider/SliderData';

const SliderContext = createContext();

const SliderProvider = ({ children }) => {

    const data = { slide: SliderData }

    return (
        <SliderContext.Provider value={data}>
            { children }
        </SliderContext.Provider>
    )
}

export { SliderProvider }
export default SliderContext;