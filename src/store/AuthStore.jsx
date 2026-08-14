import {create} from "zustand"
import { supabase } from "../supabase/supabase"
import { MostrarUsuarios } from "../index";
export const useAuthStore = create((set) => ({
   loginGoogle: async () => {
    const {data, error} = await supabase.auth.signInWithOAuth({
        provider:'google'
    });
    if(data) {
        await MostrarUsuarios({id_auth:data})
    }
   },
   cerrarSesion: async () => {
    await supabase.auth.signOut();
   }
}))