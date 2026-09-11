import { create } from "zustand";
import { MostrarUsuarios } from "../supabase/crudUsuario";

export const useUsuariosStore = create((set) => ({
    dataModulos: [],
    mostrarModulos: async () => {
        const response = await MostrarModulos();
        set({ dataModulos: response });
        return response;
    },
}))