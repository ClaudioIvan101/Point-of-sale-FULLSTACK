import { create } from "zustand"
import { InsertarEmpresa, MostrarEmpresa } from "../index"

export const useEmpresaStore = create((set) => ({
      dataempresa: [],
      mostrarEmpresa: async () => {
            const response = await MostrarEmpresa();
            set({ dataempresa: response });
            return response;
      },
      insertarempresa: async (p) => {
            const response = await InsertarEmpresa(p);
            console.log("respuesta empresa: ", response);
      }
})) 