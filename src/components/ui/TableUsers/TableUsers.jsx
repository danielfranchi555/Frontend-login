import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";

const TableUsers = ({ users, handleEditUser, getUser }) => {
  const deleteUser = async (id) => {
    try {
      const resp = await fetch(`http://localhost:3001/api/users/${id}`, {
        method: "DELETE",
      });
      if (!resp.ok) {
        console.log("error al elminar un usuario");
      }
      console.log("datos enviados correctamente");
      getUser();
    } catch (error) {
      console.log({ message: error });
    }
  };

  return (
    <div>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="">Id</TableHead>
            <TableHead>Nombre</TableHead>
            <TableHead>Apellido</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Dni</TableHead>
            <TableHead className="flex items-center justify-center">
              Delete
            </TableHead>
            <TableHead className="">Edit</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{user.id}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.lastname}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell className="flex items-center justify-center ">
                <MdDelete
                  className="cursor-pointer"
                  size={20}
                  onClick={() => deleteUser(user.id)}
                />
              </TableCell>
              <TableCell className="">
                <CiEdit
                  size={20}
                  className="cursor-pointer"
                  onClick={() => handleEditUser(user)}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TableUsers;
