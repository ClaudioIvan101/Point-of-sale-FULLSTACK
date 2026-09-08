import styled from "styled-components";
import { Title } from "../atomos/Title";
import { Btn1 } from "../moleculas/Btn1";
import { Buscador } from "../organismos/Buscador";
import { v } from "../../styles/variables";

export function CategoriasTemplate() {
    return (
        <Container>
            <section className="area1">
                <Title>Categorias</Title>
                <Btn1 titulo="Nuevo" bgcolor={v.colorPrincipal} icono={<v.iconoagregar />}></Btn1>
            </section>
            <section className="area2">
                <Buscador placeholder="Buscar" />
            </section>
            <section className="main">

            </section>
        </Container>
    );
}

const Container = styled.div`
    height: calc(100vh - 30px);
    color: #000000;
    padding: 16px;
    display: grid;
    grid-template: 
    "area1" 100px 
    "area2" 100px 
    "main" auto;
    .area1{ 
        grid-area: area1;
        background: red;
        display:flex;
        justify-content:end;
        align-items:center;
        gap:16px;
        padding-right: 16px;
    } 
    .area2{ 
        grid-area: area2;
        background: yellow;
        display:flex;
        justify-content:end;
        align-items:center;
        gap:16px;
        padding-right: 16px;
    } 
    .main{ 
        grid-area: main;
        background: green;
    }
`;