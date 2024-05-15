"use client";
import Form from "@/components/ui/Form/Form";
import TableUsers from "@/components/ui/TableUsers/TableUsers";
import { useEffect, useState } from "react";

export default function Home() {
  const [selectedUser, setSelectedUser] = useState(null);
  const [update, setUpdate] = useState(false);
  const [dataUpdate, setDataUpdate] = useState({
    nombre: "",
    apellido: "",
    direccion: "",
  });
  const [users, setUsers] = useState([]);

  const getUser = async () => {
    const resp = await fetch("http://localhost:3001/api/users");
    const data = await resp.json();
    setUsers(data);
    console.log(users);
  };

  const handleEditUser = (user) => {
    setUpdate(true);
    setSelectedUser(user);
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <main className=" flex w-[90%]  mx-auto h-[100vh] items-center justify-center gap-4">
      <div className="w-[60%]">
        <TableUsers
          getUser={getUser}
          users={users}
          handleEditUser={handleEditUser}
        />
      </div>
      <div className="w-[40%]">
        <Form
          dataUpdate={dataUpdate}
          update={update}
          selectedUser={selectedUser}
          setSelectedUser={setSelectedUser}
          setUpdate={setUpdate}
          getUser={getUser}
        />
      </div>
    </main>
  );
}
