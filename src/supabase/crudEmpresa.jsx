import { supabase } from "../index"
import { Swatl } from "sweetalert2"

const tabla = "empresa";

export async function InsertarEmpresa(p) {
    const { data, error } = await supabase.from(tabla)
        .insert(p).select().maybeSingle();

    if (error) {
        Swal.fire({
            icon: "error",
            title: "UPS!",
            text: "Ocurrio un error al insertar la empresa",
        });
        return;
    }
    return data; 

}