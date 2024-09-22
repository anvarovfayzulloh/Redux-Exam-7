import React, { useState } from 'react';
import { useUpdateUserMutation, useGetUsersQuery } from '../../../redux/api/userApi';
import { notification, Carousel } from 'antd';

const Update = () => {
    const [updateUser, { isLoading }] = useUpdateUserMutation();
    const { data } = useGetUsersQuery();
    const users = data?.data || [];

    const [name, setName] = useState('');
    const [job, setJob] = useState('');
    const [id, setId] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!id) {
            notification.error({ message: 'Please select a user' });
            return;
        }

        try {
            const result = await updateUser({ id, data: { name, job } }).unwrap();
            if (result) {
                notification.success({ message: 'User updated successfully' });
                setName('');
                setJob('');
                setId('');
            }
        } catch (error) {
            notification.error({ message: `User update failed: ${error?.data?.message || error.message}` });
        }
    };
    return (
        <div className="w-full flex flex-col lg:flex-row justify-center items-center h-screen bg-gray-100 space-y-6 lg:space-y-0 lg:space-x-6">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-full max-w-md space-y-4" >
                <h2 className="text-xl font-semibold text-gray-800">Update User</h2>
                <label htmlFor="user" className="block text-gray-700">Select User:</label>
                <select id="user" value={id} onChange={(e) => setId(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" >
                    <option value="" disabled>Select a user</option>
                    {users.map((user) => (
                        <option key={user.id} value={user.id}>
                            {user.first_name} {user.last_name}
                        </option>
                    ))}
                </select>
                <label htmlFor="name" className="block text-gray-700">Name:</label>
                <input id="name" required value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Enter your name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                <label htmlFor="job" className="block text-gray-700">Job:</label>
                <input id="job" required value={job} onChange={(e) => setJob(e.target.value)} type="text" placeholder="Enter your job" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                <button type="submit" disabled={isLoading} className={`w-full py-2 text-white rounded-md ${isLoading ? 'bg-blue-300 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'} focus:outline-none`}>
                    {isLoading ? 'Updating...' : 'Update'}
                </button>
            </form>
        </div>
    );
};

export default Update;
