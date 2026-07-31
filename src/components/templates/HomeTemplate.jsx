import styled from "styled-components"
export function HomeTemplate() {
    return (
        <Container>
            <span>Home Template</span>
        </Container>
    )
}

const Container = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  height:100vh;
`
