import { createContext, useEffect, useState } from "react"
import {supabase} from "../supabase/supabase"

const AuthContext= createContext();

export const AuthContextProvider = ({children}) => {
   const [user, setUser] = useState({})
   useEffect(()=> {
   const {data} = supabase.auth.onAuthStateChange(async(event, session) => {
     console.log("event", event);
     console.log("session", session);
   }); 
   return ()=> {
    data.subscription;
   }
   }, [])
   return (
    <AuthContext.Provider value={{user}}>
      {
        children
      }
    </AuthContext.Provider>
   )
} 