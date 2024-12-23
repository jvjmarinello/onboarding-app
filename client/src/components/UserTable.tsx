import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Loader from "./Loader";
import { getUsers } from "@/services/user"; 

const UserTable = () => {

  const [users, setUsers] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const users = await getUsers();
        setUsers(users);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setTimeout(() => setIsLoading(false), 1000)
      }
    };

    fetchUsers();
  }, []); 

  if (isLoading) {
    return (
      <Loader />
    )
  }

  return (
    users &&
    <Table>
      <TableCaption>List of registered users and their information.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Email</TableHead>
          <TableHead className="min-w-[20rem]">About Me</TableHead>
          <TableHead className="w-fit whitespace-nowrap">Birth Date</TableHead>
          <TableHead className="w-fit whitespace-nowrap">Street</TableHead>
          <TableHead className="w-fit whitespace-nowrap">City</TableHead>
          <TableHead className="w-fit whitespace-nowrap">State</TableHead>
          <TableHead className="w-fit whitespace-nowrap">Zip</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((user, index) => (
          <TableRow key={index}>
            <TableCell className="font-medium">{user.email}</TableCell>
            <TableCell className="min-w-[20rem]">{user.aboutMe}</TableCell>
            <TableCell className="w-fit whitespace-nowrap">{user.birthdate}</TableCell>
            <TableCell className="w-fit whitespace-nowrap">{user.street}</TableCell>
            <TableCell className="w-fit whitespace-nowrap">{user.city}</TableCell>
            <TableCell className="w-fit whitespace-nowrap">{user.state}</TableCell>
            <TableCell className="w-fit whitespace-nowrap">{user.zip}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default UserTable;
