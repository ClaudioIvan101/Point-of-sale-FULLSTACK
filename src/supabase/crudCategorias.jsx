import { supabase } from "./supabase"
import {Swatl} from "sweetalert2" 

const tabla="categorias";
// p es simplemente el parametro de la funcion
export async function InsertarCategorias(p,file) { 
    const {error, data} = await supabase.rpc("insertarcategorias", p);
    if(error) { 
        Swal.fire({
            icon: "error",
            title: "UPS!",
            text: "Ocurrio un error inesperado en categoria",
          });
          return;
    }
    const img = file.size;
    if(img!=undefined) {
        const nuevo_id = data;
        const urlImagen = await subirImagen(nuevo_id, file);
        const iconoeditar = {
            icono:urlImagen.publicUrl,
            id: nuevo_id
        }
    }
    editarIconoCategorias(iconoeditar);
    
}

async function subirImagen(idcategoria) {
    const ruta  = "categorias/" + idcategoria;
    const {data,error} = await supabase
    .storage
    .from('imagenes')
    .upload(ruta, file, {
        cacheControl: '0',
        upsert: true
    })
    if(data){ 
       const {data:urlImagen} = await supabase
       .storage.from("imagenes").getPublicUrl(ruta);      
        return urlImagen;
    }
    if(error) { 
        Swal.fire({
            icon: "error",
            title: "UPS!",
            text: "Ocurrio un error en la imagen",
          });
          return;
    }
}
// editar imagen 

async function editarIconoCategorias(p) {
   const {error} = await supabase
   .from("categorias")
   .update(p)
   .eq("id", p.id);
   if(error) { 
    Swal.fire({
        icon: "error",
        title: "UPS!",
        text: "Ocurrio un error inesperado en categoria",
      });
      return;
}
}

export async function MostrarCategorias(p) {
    const {data} = await supabase.from(tabla)
    .select().eq("id_empresa", p.id_empresa)
    .order("id", {ascending: false});
    return data;
}