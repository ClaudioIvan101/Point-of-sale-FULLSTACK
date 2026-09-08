import styled from "styled-components";
import { CategoriasTemplate } from "../components/templates/CategoriasTemplate";
import { useQuery } from "@tanstack/react-query";
import { useCategoriasStore } from "../store/CategoriasStore";
import { useUsuarioStore } from "../store/UsuarioStore";
import { useEmpresaStore } from "../store/EmpresaStore";


export function Categorias() {
    const { empresaSelect } = useEmpresaStore();
    const { mostrarCategorias } = useCategoriasStore();
    const { data } = useQuery({ queryKey: ["mostrar categorias", empresaSelect], queryFn: () => mostrarCategorias({ id_empresa: empresaSelect }) });
    return (
        <CategoriasTemplate />
    );
}