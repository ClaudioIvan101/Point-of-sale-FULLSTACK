import { supabase } from "./supabase";

const tabla = "roles"
export async function MostrarRolesPorNombre(p) {
    const { data, error } = await supabase
        .from(tabla).
        select()
        .eq("nombre", p.nombre)
        .maybeSingle();
    if (error) {
        console.log("error", error);
        return error;
    }
    return data;
}

export async function MostrarRoles(p) {
    const { data, error } = await supabase
        .from(tabla).
        select()
        .eq("id_empresa", p.id_empresa)
        .eq("activo", true);
    if (error) {
        console.log("error", error);
        return error;
    }
    return data;
}