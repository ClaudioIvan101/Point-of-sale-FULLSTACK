import { supabase } from "./supabase";

const tabla = "tipo_documento"
export async function MostrarTipoDocumentos(p) {
    const { data } = await supabase
        .from(tabla).
        select()
        .eq("id_empresa", p.id_empresa);
    return data;
}

export async function InsertarTipoDocumento(p) {
    const { data, error } = await supabase.from(tabla).insert(p);
    if (error) {
        console.log("error", error);
        return error;
    }
    return data;
}

export async function ActualizarTipoDocumento(p) {
    const { data, error } = await supabase.from(tabla).update(p).eq("id_tipodocumento", p.id_tipodocumento).select();
    if (error) {
        console.log("error", error);
        return error;
    }
    return data;
}