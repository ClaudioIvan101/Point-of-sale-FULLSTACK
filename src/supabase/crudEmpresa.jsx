import { supabase } from "./supabase";
import Swal from "sweetalert2";

const tabla = "empresa";

export async function MostrarEmpresa(p) {
    const { data } = await supabase.from(tabla)
        .select()
        .eq("id_auth", p.id_auth)
        .maybeSingle();
    return data;
}

export async function InsertarEmpresa(p) {
    const { data, error } = await supabase.from(tabla)
        .insert(p).select().maybeSingle();

    if (error) {
        if (error.code !== "23505") {
            Swal.fire({
                icon: "error",
                title: "UPS!",
                text: "Ocurrio un error al insertar la empresa",
            });
        }
        return;
    }
    return data; 

}