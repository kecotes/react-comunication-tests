import React from 'react'
import { useContext } from 'react';
import ComponentContext1 from './components/ComponentContext1'
import ComponentContext2 from './components/ComponentContext2'
import { KevContext, KevContextProvider } from './context/Kev.context';

function Kev() {
    return (
        <KevContextProvider>
            <ComponentContext1 />
            <ComponentContext2 />
        </KevContextProvider>
    )
}

export default Kev