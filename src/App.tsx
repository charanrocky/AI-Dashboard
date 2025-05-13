import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import AvatarCard from "./components/AvatarCard";
import CreateAvatarModal from "./components/CreateAvatarModal";

interface User {
  id: number;
  firstName: string;
  lastName: string;
  image: string;
}

const App = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetch("https://dummyjson.com/users?limit=3")
      .then((res) => res.json())
      .then((data) => setUsers(data.users));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-8">
      <Header username="Sai Charan" />

      <div className="grid gap-6 mt-8 sm:grid-cols-2 lg:grid-cols-3">
        {users.map((user) => (
          <AvatarCard key={user.id} user={user} />
        ))}
      </div>

      <button
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-6 right-6 bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition"
      >
        + Create New Avatar
      </button>

      {isModalOpen && (
        <CreateAvatarModal onClose={() => setIsModalOpen(false)} />
      )}
    </div>
  );
};

export default App;
