import styled from "styled-components";
import { ConfiguracionesTemplate } from "../components/templates/ConfiguracionesTemplate";
import { useModulosStore } from "../store/ModulosStore";
import { useQuery } from "@tanstack/react-query";
import { Spinner } from "../components/moleculas/Spinner";
export function Configuraciones() {
    const { mostrarModulos } = useModulosStore();
    const { data, isLoading, error } = useQuery(
        {
            queryKey: "mostrar modulos", queryFn: mostrarModulos,
            retry: 1
        })
    if (isLoading) return <Spinner />
    if (error) return <span>Error</span>
    return (
        <ConfiguracionesTemplate />
    );
}