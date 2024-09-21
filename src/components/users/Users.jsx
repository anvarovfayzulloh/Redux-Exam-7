import { Link } from 'react-router-dom';
import { useGetUsersQuery } from '../../redux/api/userApi';
import { Button } from 'antd';

const Users = () => {
    const { data, isLoading } = useGetUsersQuery();
    const users = data?.data;

    if (isLoading) {
        return <p className="flex items-center justify-center h-screen text-gray-500">Loading...</p>;
    }

    return (
        <div className="container max-w-[1440px] mx-auto w-full flex items-center justify-center py-10">
            <div className="grid grid-cols-3 max-w-[980px] gap-6 w-full px-4">
                {users ? (
                    users.map((user) => (
                        <div to={`/details/${user.id}`} key={user.id} className="flex flex-col items-center pb-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 border border-gray-200" >
                            <Link to={`/details/${user.id}`} className="flex flex-col items-center w-full px-6 pt-6 pb-4">
                            <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} className="w-24 h-24 rounded-full mb-4 object-cover border-2 border-gray-300" />
                            <h2 className="text-lg font-semibold text-gray-800">
                                {user.first_name} {user.last_name}
                            </h2>
                            <p className="text-gray-600">{user.email}</p>
                            </Link>
                            <Button type="primary" danger>Delete</Button>
                        </div>
                    ))
                ) : (
                    <p>null</p>
                )}
            </div>
        </div>
    );
};

export default Users;
