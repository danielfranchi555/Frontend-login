import z from "zod";

const schema = z.object({
  nombre: z.string().min(2, { message: "Este campo es requerido" }),
  apellido: z.string().min(4, { message: "Este campo es requerido" }),
  direccion: z.string().min(4, { message: "Este campo es requerido" }),
});

export default schema;
