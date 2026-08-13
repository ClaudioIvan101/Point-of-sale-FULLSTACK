import { supabase } from "./supabase"
import {Swatl} from "sweetalert2" 
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
    }
    
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