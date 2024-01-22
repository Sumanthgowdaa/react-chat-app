import React, { createContext, useState } from 'react'

// context instance
export const AuthContext = createContext()

function AuthProvider(props) {
    const { children } = props
    const [currentUser,setCurrentUser] = useState(false)

    
    let data = {
        currentUser
    }
  return (
    <AuthContext.Provider value={ data } >
        {
            children
        }
    </AuthContext.Provider>
  )
}

export default AuthProvider
