import styled, {ThemeProvider} from "styled-components"
import {InputText2, Title, Btnsave, Icono, Linea} from "../../index"
import {v} from "../../styles/variables"
export function LoginTemplate() {
     return (
       <Container>
           <section className="contentCard">
            <div className ="card">
               <Title>Bienvenido a FacilPoint</Title>
               <form>
                 <InputText2>
                 <input className="form__field" placeholder="Ingrese su correo" type="text"/>
                 </InputText2>

                 <InputText2>
                 <input className="form__field" type="password"/>
                 <Btnsave titulo={"INGRESAR"} bgcolor={"#49e"} color="255,255,255" width={"100%"}></Btnsave>
                 </InputText2>
               </form>
               <Linea>
                <span>0</span>
               </Linea>
               <Btnsave titulo={"Google"} bgcolor={"#fff"} icono={<v.iconogoogle/>} ></Btnsave>
            </div>
           </section>
       </Container>
     )
}

const Container = styled.main`
display: flex;
background: #48e;
height: 100vh;
justify-content:center;
align-items:center;
`