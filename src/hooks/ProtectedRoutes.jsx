import { Navigate } from "react-router-dom"

export const ProtectedRoute = ({user, redirectTo, children }) => {
    if(user==null) return <Navigate replaceto={redirectTo}></Navigate>;
    return children?children:<Outlet/>
}