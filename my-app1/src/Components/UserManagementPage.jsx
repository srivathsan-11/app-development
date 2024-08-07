import React, { useContext, useEffect, useState } from 'react';
import { getData } from '../JSON/DB'; // Removed deleteData and updateData imports
import { useNavigate } from 'react-router-dom';
import '../Assets/UserManagementPage.css';
import { Context } from './Globedata';
import axios from 'axios';

const UserManagementPage = () => {
    const [users, setUsers] = useState([]);
    const [editMode, setEditMode] = useState(null);
    const [updatedUser, setUpdatedUser] = useState({});
    const navigate = useNavigate();
    const { userData, setUserData, LogOut } = useContext(Context);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const res = await getData();
            setUsers(res.data);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    const handleEdit = (user) => {
        setEditMode(user.id);
        setUpdatedUser(user);
    };

    const handleSave = async (id) => {
        try {
            const response = await axios.put(`http://127.0.0.1:1230/User/Update/${id}`, updatedUser);
            console.log('User update response:', response.data);
            setUsers(users.map(user => (user.id === id ? updatedUser : user)));
            setEditMode(null);
            alert('User updated successfully');
        } catch (error) {
            console.error('Error updating user:', error);
            alert('Failed to update user');
        }
    };

    const handleDelete = async (id) => {
        try {
            const response = await axios.delete(`http://127.0.0.1:1230/DeleteUser/${id}`);
            console.log('User delete response:', response.data);
            setUsers(users.filter(user => user.id !== id));
            alert('User deleted successfully');
        } catch (error) {
            console.error('Error deleting user:', error);
            alert('Failed to delete user');
        }
    };

    return (
        <div className="user-management-container">
            <h1>User Management</h1>
            <table className="user-table">
                <thead>
                    <tr>
                        <th>Full Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Gender</th>
                        <th>State</th>
                        <th>Country</th>
                        <th>Language</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>
                                {editMode === user.id ? (
                                    <input 
                                        type="text" 
                                        value={updatedUser.name} 
                                        onChange={(e) => setUpdatedUser({ ...updatedUser, name: e.target.value })} 
                                    />
                                ) : (
                                    user.name
                                )}
                            </td>
                            <td>
                                {editMode === user.id ? (
                                    <input 
                                        type="text" 
                                        value={updatedUser.email} 
                                        onChange={(e) => setUpdatedUser({ ...updatedUser, email: e.target.value })} 
                                    />
                                ) : (
                                    user.email
                                )}
                            </td>
                            <td>
                                {editMode === user.id ? (
                                    <input 
                                        type="text" 
                                        value={updatedUser.role} 
                                        onChange={(e) => setUpdatedUser({ ...updatedUser, role: e.target.value })} 
                                    />
                                ) : (
                                    user.role
                                )}
                            </td>
                            <td>
                                {editMode === user.id ? (
                                    <input 
                                        type="text" 
                                        value={updatedUser.gender} 
                                        onChange={(e) => setUpdatedUser({ ...updatedUser, gender: e.target.value })} 
                                    />
                                ) : (
                                    user.gender
                                )}
                            </td>
                            <td>
                                {editMode === user.id ? (
                                    <input 
                                        type="text" 
                                        value={updatedUser.state} 
                                        onChange={(e) => setUpdatedUser({ ...updatedUser, state: e.target.value })} 
                                    />
                                ) : (
                                    user.state
                                )}
                            </td>
                            <td>
                                {editMode === user.id ? (
                                    <input 
                                        type="text" 
                                        value={updatedUser.country} 
                                        onChange={(e) => setUpdatedUser({ ...updatedUser, country: e.target.value })} 
                                    />
                                ) : (
                                    user.country
                                )}
                            </td>
                            <td>
                                {editMode === user.id ? (
                                    <input 
                                        type="text" 
                                        value={updatedUser.languages} 
                                        onChange={(e) => setUpdatedUser({ ...updatedUser, languages: e.target.value })} 
                                    />
                                ) : (
                                    user.languages
                                )}
                            </td>
                            <td>
                                {editMode === user.id ? (
                                    <>
                                        <button onClick={() => handleSave(user.id)}>Save</button>
                                        <button onClick={() => setEditMode(null)}>Cancel</button>
                                    </>
                                ) : (
                                    <>
                                        <button onClick={() => handleEdit(user)}>Edit</button>
                                        <button onClick={() => handleDelete(user.id)}>Delete</button>
                                    </>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button onClick={() => navigate('/ProfilePage')}>Back to Profile</button>
        </div>
    );
};

export default UserManagementPage;
