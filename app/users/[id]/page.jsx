"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import api from "@/lib/api";

export default function UserPage({ params }) {
  const { id } = params;
  const router = useRouter();

  const [user, setUser] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // Fetch single user
  useEffect(() => {
    api.get(`/users/${id}`).then((res) => {
      setUser(res.data);
      setName(res.data.name);
      setEmail(res.data.email);
    });
  }, [id]);

  // Update User (Optimistic)
  const updateUser = async () => {
    const updatedUser = { ...user, name, email };
    setUser(updatedUser); // UI update first

    await api.put(`/users/${id}`, updatedUser);
    alert("User Updated");
  };

  // Delete User (Optimistic)
  const deleteUser = async () => {
    router.push("/users"); // redirect first
    await api.delete(`/users/${id}`);
  };

  if (!user) return <p>Loading...</p>;

  return (
    <div>
      <h2>User Detail</h2>

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <br /><br />

      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <br /><br />

      <button onClick={updateUser}>Update</button>
      <button onClick={deleteUser} style={{ marginLeft: 10 }}>
        Delete
      </button>
    </div>
  );
}
