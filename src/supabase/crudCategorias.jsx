import { supabase } from "./supabase"
import {Swatl} from "sweetalert2" 
export async function InsertarCategorias(p,file) { 
    const {error, data} = await supabase.rpc("insertarcategorias", p);
    if(error) { 
        Swal.fire({
            icon: "error",
            title: "UPS!",
            text: "Ocurrio un error inesperado",
          });
    }
}