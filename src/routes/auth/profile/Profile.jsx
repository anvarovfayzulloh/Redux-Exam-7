import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetDetailsQuery } from '../../../redux/api/userApi';

const Profile = () => {
  const { id } = useParams();
  const { data } = useGetDetailsQuery({ id });
  const user = data?.data;

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 p-6">
      {user ? (
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
          <img src={user?.avatar || 'https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small_2x/user-profile-icon-free-vector.jpg'}  className="w-40 h-40 rounded-full mx-auto mb-6 border-4 border-blue-500 object-cover shadow-md"/>
          <h1 className="text-3xl font-semibold text-gray-800 mb-2">
            {user.first_name} {user.last_name}
          </h1>
          <p className="text-gray-600 text-lg mb-4">{user.email}</p>
          <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200 shadow-md">
            Contact
          </button>
        </div>
      ) : (
        <p className="text-gray-500 text-lg">Loading...</p>
      )}
    </div>
  );
};

export default Profile;
