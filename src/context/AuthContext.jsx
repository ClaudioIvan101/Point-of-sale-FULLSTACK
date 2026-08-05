import { createContext, useEffect, useState } from "react"

const AuthContext= createContext();

export const AuthContextProvider = ({children}) => {
   const [user, setUser] = useState({})
   useEffect(()=> {
   const {data} = supabase.auth.onAuthStateChange(async(event, session) => {
     console.log(event);
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