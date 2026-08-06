import styled from "styled-components"
import { useAuthStore } from "../../store/AuthStore";

export function HomeTemplate() {
    const {cerrarSesion} = useAuthStore();

    return (
        <Container>
            <span>Home Template</span>
            <button onClick={cerrarSesion}>cerrar</button>
        </Container>
    )
}

const Container = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  height:100vh;
`
