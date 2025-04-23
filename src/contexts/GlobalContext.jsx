import { createContext, useContext, useState, useEffect } from "react";

const GlobalContext = createContext()

function GlobalProvider({ children }) {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:3000/api/v1/movies')
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setMovies(data)
                setLoading(false)
            })
            .catch(error => console.log(error))
    }, [])

    return (
        <GlobalContext.Provider value={{ movies, loading, setLoading }}>
            {children}
        </GlobalContext.Provider>
    )
}

function useGlobal() {
    const context = useContext(GlobalContext)
    return context
}

export { GlobalProvider, useGlobal }