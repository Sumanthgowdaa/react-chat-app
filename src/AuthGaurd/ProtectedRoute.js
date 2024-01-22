import {Navigate, Outlet} from 'react-router-dom'
import React ,{useContext} from 'react'

import { AuthContext } from '../Context/AuthContext'

function ProtectedRoute() {
    const context = useContext(AuthContext)
    const currentUser = context.currentUser
    
  return (
    <React.Fragment>
      {
        currentUser ? <Outlet/> : <Navigate to = {`/login`}/>
      }
    </React.Fragment>
  )
}

export default ProtectedRoute
