import styled, {ThemeProvider} from "styled-components"
import {GlobalStyles, MyRoutes, Sidebar, AuthContextProvider, Login} from "./index"
import { Device } from "./styles/breakpoints"
import { useThemeStore } from "./store/ThemeStore"
import { useState } from "react";
import { useLocation } from "react-router-dom";

function App() {
  const  [sidebarOpen, setSidebarOpen] = useState(false);
  const {pathname} = useLocation();
  const {themeStyle} = useThemeStore();
  return (
     <ThemeProvider theme={themeStyle}>
      <AuthContextProvider> 
        {
        pathname != "/login"?( 
        <Container className={sidebarOpen === true ? "active": ""}>
        <GlobalStyles/>
        <section className="contentSidebar">
          <Sidebar state={sidebarOpen} setState={() => setSidebarOpen(!sidebarOpen)}/>
        </section>
        <section className="contentMenuambur">
          <span>Menu</span>
        </section>
        <section className="contentRouters">
          <MyRoutes/>
        </section>
      </Container>):(<Login/>)
        }
     
      </AuthContextProvider>
  
     </ThemeProvider>
  )
}

const Container = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  background-color: #f7f7f7;
  color: ${({theme}) => theme.text};
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
    &.active{
    grid-template-columns: 260px 1fr;
    }
    .contentSidebar {
      display: initial;
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
