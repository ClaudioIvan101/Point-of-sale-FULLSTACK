import styled, {ThemeProvider} from "styled-components"
import {GlobalStyles, MyRoutes, Sidebar} from "./index"
import { Device } from "./styles/breakpoints"
import { useThemeStore } from "./store/ThemeStore"
function App() {
  const {themeStyle} = useThemeStore;
  return (
     <ThemeProvider theme={themeStyle}>
      <Container>
        <GlobalStyles/>
        <section className="contentSidebar">
          <Sidebar/>
        </section>
        <section className="contentMenuambur">
          <span>Menu</span>
        </section>
        <section className="contentRouters">
          <MyRoutes/>
        </section>
      </Container>
  
     </ThemeProvider>
  )
}

const Container = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  background-color: #f7f7f7;
  .contentSidebar {
    display: none;
  }
  .contentMenuambur {
    position:absolute;
    background-color: rgba(18, 175, 44, 0.5);
  }
  .contentRouters {
    background-color: rgba(172, 6, 6, 0.5);
    grid-column: 1;
    width: 100%;
  }
  @media ${Device.tablet} {
    grid-template-columns: 88px 1fr;
    .contentSidebar {
      display: initial;
      background-color: rgba(18, 175, 44, 0.5);
  }; 
  .contentMenuambur {
    display: none;
  };
  .contentRouters {
    grid-column: 2;
  }
}
`;
export default App
