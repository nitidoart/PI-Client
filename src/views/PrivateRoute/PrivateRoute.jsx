import { Outlet, Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../../auth/AuthProvider'

export const PrivateRoute = ({children}) => {

    const auth = useAuth();

    const {state} = useLocation();

    return (
        <div>
            {/* {auth.isAuthenticated ? <Outlet /> : <Navigate to="/" />} */}
            {state?.logged ? children : <Navigate to="/" />}
        </div>
    )
}




