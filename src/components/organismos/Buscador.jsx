import styled from "styled-components";
import { Icono } from "../atomos/Icono";
import { v } from "../../styles/variables";
export function Buscador({ placeholder }) {
    return (
        <Container>
            <input type="text" placeholder={placeholder} />
            <Icono $color="255,255,255" bgcolor={v.colorPrincipal}>
                <v.iconobusqueda />
            </Icono>
        </Container>
    )
}
const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 16px;

    input {
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 4px;
        font-size: 16px;
    }
    `;