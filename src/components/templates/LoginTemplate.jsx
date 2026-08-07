import styled, {ThemeProvider} from "styled-components"
import {InputText2, Title, Btnsave, Icono, Linea, Footer, useAuthStore} from "../../index"
import {v} from "../../styles/variables"
import {Device} from "../../styles/breakpoints"

export function LoginTemplate() {
      const {loginGoogle} = useAuthStore()
     return (
       <Container>
        <ContentLogo>
          <img src={v.logo} alt="Logo"/>
          <span>FacilPoint</span>
        </ContentLogo>
            <div className ="card">
               <Title $paddingbottom={"20px"}>Bienvenido</Title>
               <form>
                 <InputText2>
                 <input className="form__field" placeholder="Ingrese su correo" type="text"/>
                 </InputText2>
                 <InputText2>
                 <input className="form__field" type="password"/>
                 </InputText2>
                 <Btnsave titulo={"INGRESAR"} bgcolor={"#49e"} color="255,255,255" width={"100%"}></Btnsave>
               </form>
               <Linea>
                <span>0</span>
               </Linea>
               <Btnsave funcion={loginGoogle} titulo={"Google"} bgcolor={"#fff"} icono={<v.iconogoogle/>} ></Btnsave>
            </div>
            <Footer/>
       </Container>
     )
}

const Container = styled.main`
display: flex;
background: #fff;
height: 100vh;
justify-content:center;
align-items:center;
flex-direction: column;
padding: 0 10px;
color: ${({theme}) => theme.text};
  .card {
    height: 100%;
    width: 100%;
    display: flex;
    text-align: center;
    flex-direction: column;
    justify-content: center;
    border-radius: 10px;
    padding: 20px;
    margin: 20px;
    @media ${Device.tablet} {
      width: 400px;
    }
}
`;
const ContentLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  img{
    width: 20%;
  }
  span{
    font-size: 24px;
    font-weight: 600;
    margin-left: 10px;
  }
`;