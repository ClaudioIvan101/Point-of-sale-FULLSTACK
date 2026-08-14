import { createContext, useContext, useEffect, useState} from "react"
import {supabase} from "../supabase/supabase"
import { MostrarUsuarios } from "../supabase/crudUsuarios";
import { InsertarEmpresa } from "../supabase/crudEmpresa";

const AuthContext= createContext();

export const AuthContextProvider = ({children}) => {
   const [user, setUser] = useState({})
   useEffect(()=> {
   const {data} = supabase.auth.onAuthStateChange(async(event, session) => {
    if(session == null ) {
      setUser(null);
    } else {
      setUser(session?.user);
      insertarDatos(session?.user.id)
    }
   }); 
   return ()=> {
    data.subscription;
   }
   }, [])

   const insertarDatos = async(id_auth) => {
    const response = await MostrarUsuarios({id_auth:id_auth});
    if(response) {
    }else {

    }
   }

   return (
    <AuthContext.Provider value={{user}}>
      {
        children
      }
    </AuthContext.Provider>
   )
};

export const UserAuth = () => {
  return useContext(AuthContext);
 }; 
