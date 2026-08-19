import { createContext, useContext, useEffect, useRef, useState } from "react"
import { supabase } from "../supabase/supabase"
import { InsertarAdmin, MostrarUsuarios } from "../supabase/crudUsuarios";
import { InsertarEmpresa, MostrarEmpresa } from "../supabase/crudEmpresa";
import { MostrarTipoDocumentos } from "../supabase/crudTipoDocumentos";
import { MostrarRolesPorNombre } from "../supabase/crudRol";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const isInsertingRef = useRef(false);

  useEffect(() => {
    const { data } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (session == null) {
        setUser(null);
      } else {
        setUser(session?.user);
        if (!isInsertingRef.current) {
          isInsertingRef.current = true;
          await insertarDatos(session?.user.id, session?.user.email);
          isInsertingRef.current = false;
        }
      }
    });
    return () => {
      data.subscription.unsubscribe();
    };
  }, []);

  const insertarDatos = async (id_auth, correo) => {
    const response = await MostrarUsuarios({ id_auth: id_auth });
    if (!response) {
      let responseEmpresa = await MostrarEmpresa({ id_auth: id_auth });
      if (!responseEmpresa) {
        responseEmpresa = await InsertarEmpresa({
          nombre: "Empresa",
          id_auth: id_auth,
        });
      }
      if (!responseEmpresa?.id) return;

      const responseTipoDocumentos = await MostrarTipoDocumentos({
        id_empresa: responseEmpresa.id,
      });
      const responserol = await MostrarRolesPorNombre({ nombre: "superadmin" });
      const pUser = {
        id_auth: id_auth,
        id_rol: responserol?.id,
        id_tipodocumento: responseTipoDocumentos?.[0]?.id,
        correo: correo,
        fecharegistro: new Date(),
      };
      await InsertarAdmin(pUser);
    }
  };
  return (
    <AuthContext.Provider value={{ user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
