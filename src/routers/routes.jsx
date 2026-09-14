import { Routes, Route, BrowserRouter } from "react-router-dom"
import { Home, Login, ProtectedRoute, UserAuth } from "../index"
import { Configuraciones } from "../pages/Configuraciones";
import { Categorias } from "../pages/Categorias";
import { useUsuariosStore } from "../store/UsuariosStore";
import { useQuery } from "@tanstack/react-query";
import { Spinner } from "../components/moleculas/Spinner";
export function MyRoutes() {

    const { user } = UserAuth();
    const { datausaurios, mostrarusuarios } = useUsuariosStore();
    const { isLoading, error } = useQuery({ queryKey: ["mostrar usuarios", datausaurios], queryFn: () => { mostrarusuarios } })
    const { } = useQuery({ queryKey: ["mostrar usuarios", datausaurios?.id], queryFn: () => { MostrarEmpresaXidUsuario({ id_usuario: datausaurios?.id }) } })
    const { dataempresa, mostrarEmpresa } = useEmpresaStore();
    const { isLoading: loadingEmpresa, error: errorEmpresa } = useQuery({
        queryKey: ["mostrar empresa", datausaurios?.id],
        queryFn: () => mostrarEmpresa({ id_usuario: datausaurios?.id }),
        enabled: !!datausaurios
    })
    if (isLoading) {
        return (<>
            <Spinner />
        </>)
    }
    if (error) {
        Swal.fire({
            icon: "error",
            title: "UPS!",
            text: "Ocurrio un error al cargar los datos",
        });
    }
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