'use client';
// basket of global variables
import { createContext, useContext, ReactNode, useState } from "react";

// bad name, too confusing
type CounterContextType = {
    counter: number;
    increment: () => void; // setting method
    // for login
    username: string;
    setUsername: (name: string) => void; // setting method
}

// create global var container available throughout the app

export const GlobalContext = createContext<CounterContextType | undefined>(undefined);

// function to update counter and create global DOM element "wrapper" to share with other components
// this is more messy in react
// children: any Child components in React
export function GlobalProvider({ children }: { children: ReactNode }) {
    // initalize global counter va
    const [counter, setCounter] = useState<number>(0);

    // initalized global username var
    const [username, setUsername] = useState<string>('');
    // function to add 1 when button is clicked
    const increment = () => {
        setCounter(counter + 1);
    }

    // expose the global to the DOM
    return (
        <GlobalContext.Provider value={{ counter, increment, username, setUsername }}>
            {children}
        </GlobalContext.Provider>
    )
}

// expose counter globally
export function useCounter() {
    const context = useContext(GlobalContext);
    if (!context) throw new Error('Counter needs a Provider');
    return context;
}

// reuse this for setting up the username stuff