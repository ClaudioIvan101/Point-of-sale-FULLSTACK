import styled from "styled-components";
import { CategoriasTemplate } from "../components/templates/CategoriasTemplate";
import { useQuery } from "@tanstack/react-query";
import { useCategoriasStore } from "../store/CategoriasStore";
import { useUsuarioStore } from "../store/UsuarioStore";
import { useEmpresaStore } from "../store/EmpresaStore";
import { Spinner } from "../components/moleculas/Spinner";


export function Categorias() {
    const { dataempresa } = useEmpresaStore();
    const { mostrarCategorias } = useCategoriasStore();
    const { data, isLoading, error } = useQuery({
        queryKey: ["mostrar categorias", dataempresa?.id],
        queryFn: () => mostrarCategorias({ id_empresa: dataempresa?.id }),
        enabled: !!dataempresa
    });

    if (isLoading) {
        return (<>
            <Spinner />
        </>)
    }

    if (error) {
        Swal.fire({
            icon: "error",
            title: "UPS!",
            text: "Ocurrio un error al mostrar las categorias"
        })
        return;
    }
    return (
        <CategoriasTemplate />
    );
}