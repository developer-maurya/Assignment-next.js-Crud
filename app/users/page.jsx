"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import api from "@/lib/api";

export default function UsersPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    api.get("/users").then((res) => {
      setUsers(res.data);
    });
  }, []);

  return (
    <div>
      <h1>Users List</h1>

      {users.map((user) => (
        <div
          key={user.id}
          style={{ border: "1px solid black", margin: 10, padding: 10 }}
        >
          <p><b>{user.name}</b></p>
          <p>{user.email}</p>
          <Link href={`/users/${user.id}`}>View</Link>
        </div>
      ))}
    </div>
  );
}
