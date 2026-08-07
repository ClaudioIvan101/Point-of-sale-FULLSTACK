import styled from "styled-components"
import { useAuthStore } from "../../store/AuthStore";
import { UserAuth } from "../../context/AuthContext";
export function HomeTemplate() {
    const {cerrarSesion} = useAuthStore();
    const {user} = UserAuth();

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
