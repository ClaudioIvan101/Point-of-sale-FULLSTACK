import { supabase } from "./supabase";

const tabla = "usuarios"
export async function MostrarUsuarios (p) { 
 const {data} = await supabase.from(tabla)
 .select().eq("id_auth", p.id_auth).maybeSingle();
}