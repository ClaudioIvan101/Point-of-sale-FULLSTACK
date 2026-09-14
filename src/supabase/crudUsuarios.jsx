import { supabase } from "./supabase";

const tabla = "usuarios"
export async function MostrarUsuarios(p) {
    const { data } = await supabase.from(tabla)
        .select().eq("id_auth", p.id_auth).maybeSingle();
    return data;
}

export async function InsertarUsuario(p) {
    const { data, error } = await supabase.from(tabla).insert(p);
    if (error) {
        console.log("error", error);
        return error;
    }
    return data;
}

export async function InsertarAdmin(p) {
    const { data, error } = await supabase
        .from(tabla)
        .insert(p)
        .select();
    if (error) {
        console.log("error", error);
        return error;
    }
    return data;
}

export async function ObtenerIdAuthSupabase() {
    const { data: { session } } = await supabase.auth.getSession();
    if (session != null) {
        const { user } = session;
        const idAuth = user.id;
        return idAuth;
    } else {
        console.log("No hay sesion")
    }
}