import { supabase } from "./supabase";

const tabla = "modulos";
export async function MostrarModulos(p) {
    const { data, error } = await supabase
        .from(tabla)
        .select()
    if (error) {
        Swal.fire({
            icon: "error",
            title: "UPS!",
            text: error.message,
        });
        return;
    }
    return data;
}