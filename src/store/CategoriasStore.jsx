import create from "zustand"
import { MostrarCategorias } from "../supabase/crudCategorias"
import { EliminarCategoria } from "../supabase/crudCategorias"
import { EditarCategoria } from "../supabase/crudCategorias"

export const useCategoriasStore = create((set, get) => ({
    buscador: "",
    setBuscador: (buscador) => set({ buscador }),

    dataCategorias: [],
    setDataCategorias: (data) => set({ dataCategorias: data }),
    categoriaItemSelect: [],
    parametros: {
        id_empresa: ""
    },

    mostrarCategorias: async (p) => {
        const response = await MostrarCategorias(p)
        set({ parametros: p })
        set({ dataCategorias: response });
        set({ categoriaItemSelect: response[0] })
        return response;
    },

    selectCategoria: (p) => {
        set({ categoriaItemSelect: p });
    },
    insertarCategorias: async (p, file) => {
        await Insertcategorias(p, file)
        const { mostrarCategorias } = get();
        const { parametros } = get();
        set(mostrarCategorias(parametros))
    },
    eliminarCategoria: async (p) => {
        await EliminarCategoria(p);
        const { mostrarCategorias } = get();
        const { parametros } = get();
        set(mostrarCategorias(parametros))
    },
    editarCategoria: async (p, fileold, filenew) => {
        await EditarCategoria(p, fileold, filenew)
        const { mostrarCategorias } = get();
        const { parametros } = get();
        set(mostrarCategorias(parametros))
    },
    buscarCategoria: async (p) => {
        const response = await BuscarCategorias(p);
        set({ dataCategorias: response });
        return response;
    },
}))