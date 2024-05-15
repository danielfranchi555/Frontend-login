import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import schema from "./schema";
import { useEffect } from "react";

const Form = ({
  dataUpdate,
  update,
  setSelectedUser,
  selectedUser,
  setUpdate,
  getUser,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const submit = async (data) => {
    const id = selectedUser.id_users;
    const { nombre, apellido, direccion } = data;
    if (update) {
      try {
        const resp = await fetch(`http://localhost:3001/api/users/${id}`, {
          method: "PUT",
          body: JSON.stringify({ nombre, apellido, direccion }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await resp.json();
        if (!resp.ok) {
          console.log("error al mandar los datos");
        }
        console.log(data);
        reset();
        getUser();
      } catch (error) {
        console.log({ message: error });
      }
    } else {
      try {
        const resp = await fetch(`http://localhost:3001/api/users`, {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!resp.ok) {
          console.log("error al mandar los datos", resp.status);
        }

        console.log("Datos enviados correctamente", {
          nombre,
          apellido,
          direccion,
          id_users,
        });
        reset();
      } catch (error) {
        console.log({ message: error });
      }
    }
  };

  useEffect(() => {
    if (selectedUser) {
      setValue("nombre", selectedUser.nombre);
      setValue("apellido", selectedUser.apellido);
      setValue("direccion", selectedUser.direccion);
    }
    console.log(selectedUser);
  }, [selectedUser]);

  const updateNot = () => {
    setUpdate(false);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(submit)}
      className="w-[100%] h-auto bg-white shadow-xl rounded-md flex flex-col gap-2 px-4 py-4"
    >
      <h2 className="text-center font-bold text-2xl">Formulario</h2>
      <Input
        name="nombre"
        type="text"
        placeholder="Nombre"
        {...register("nombre")}
      />
      <span className="text-[13px] text-red-700 ">
        {errors.nombre?.message && <p>{errors.nombre?.message}</p>}
      </span>
      <Input
        name="apellido"
        type="text"
        placeholder="Apellido"
        {...register("apellido")}
      />
      <span className="text-[13px] text-red-700 ">
        {errors.apellido?.message && <p>{errors.apellido?.message}</p>}
      </span>
      <Input
        name="direccion"
        type="text"
        placeholder="Direccion"
        {...register("direccion")}
      />
      <span className="text-[13px] text-red-700 ">
        {errors.direccion?.message && <p>{errors.direccion?.message}</p>}
      </span>

      {update ? (
        <>
          <button type="sumbit" className="bg-[#5D5FEF] text-white py-2">
            Editar
          </button>
          <button
            onClick={() => updateNot()}
            className="bg-white border border-red-500 py-2 text-red-500 "
          >
            Cancelar
          </button>
        </>
      ) : (
        <button type="sumbit" className="bg-[#5D5FEF] text-white py-2">
          Enviar
        </button>
      )}
    </form>
  );
};

export default Form;
