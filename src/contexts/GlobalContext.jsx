import { createContext, useContext, useState, useEffect } from "react";

const GlobalContext = createContext()

function GlobalProvider({ children }) {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/api/v1/movies')
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setMovies(data)
            })
            .catch(error => console.log(error))
    }, [])

    return (
        <GlobalContext.Provider value={{ movies }}>
            {children}
        </GlobalContext.Provider>
    )
}

function useGlobal() {
    const context = useContext(GlobalContext)
    return context
}

export { GlobalProvider, useGlobal }