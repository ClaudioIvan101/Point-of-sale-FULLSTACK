import { Routes, Route, BrowserRouter } from "react-router-dom"
import { Home, Login, ProtectedRoute, UserAuth } from "../index"
import { Configuraciones } from "../pages/Configuraciones";
import { Categorias } from "../pages/Categorias";
export function MyRoutes() {

    const { user } = UserAuth();
    return (
        <Routes>
            <Route element={<ProtectedRoute user={user} redirectTo="/login" />}>
                <Route path="/" element={<Home />} />
                <Route path="/configuracion" element={<Configuraciones />} />
                <Route path="/configuracion/categorias" element={<Categorias />} />
            </Route>

            <Route path="/login" element={<Login />} />

        </Routes>
    )
}