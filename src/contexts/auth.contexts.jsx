import { createContext, useEffect, useState } from "react"
import authServices from "../services/auth.services"

const AuthContext = createContext()

function AuthProviderWrapper(props) {

    const [loggedUser, setLoggedUser] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    const loginUser = loginData => {
        authServices
            .loginUser(loginData)
            .then(({ data }) => {
                localStorage.setItem('userToken', data.authToken)
                authenticateUser()
            })
            .catch(err => alert(err.response.data.message))
    }

    const authenticateUser = () => {
        const token = localStorage.getItem('userToken')

        if (token) {
            authServices
                .verifyToken(token)
                .then(({ data }) => {
                    setLoggedUser(data)
                    setIsLoading(false)
                })
                .catch(err => console.log(err))
        } else {
            logoutUser()
        }
    }

    const logoutUser = () => {
        setLoggedUser(null)
        localStorage.removeItem('userToken')
        setIsLoading(false)
    }

    useEffect(() => {
        authenticateUser()
    }, [])

    return (
        <AuthContext.Provider value={{ loggedUser, loginUser, authenticateUser, logoutUser, isLoading }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProviderWrapper }