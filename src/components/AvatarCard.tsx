import React from "react";

type Props = {
  user: {
    firstName: string;
    lastName: string;
    image: string;
  };
};

const AvatarCard = ({ user }: Props) => (
  <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all transform hover:scale-105 p-6 max-w-xs mx-auto">
    {/* Avatar Image */}
    <img
      src={user.image}
      alt={user.firstName}
      className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-indigo-500 shadow-lg"
    />

    {/* User Name */}
    <h3 className="text-xl font-semibold text-center text-gray-800">
      {user.firstName} {user.lastName}
    </h3>

    {/* Edit Button */}
    <div className="flex justify-center mt-6">
      <button className="bg-blue-600 text-white text-sm px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
        Edit
      </button>
    </div>
  </div>
);

export default AvatarCard;
