/**Users page component
 * Displays the users table, filters, and navigation to user details
 */

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { fetchUsers } from "../../services/userService";
import { saveUserToStorage } from "../../utils/storage";

import { type User } from "../../types/user";

import styles from "./UserPage.module.scss";

export default function UsersPage() {
    const [users, setUsers] = useState<User[]>([]);         // stores fetched users
    const [loading, setLoading] = useState(true);           // tracks loading

    const navigate = useNavigate();

    //load user records from mock API on page mount
    useEffect(() => {
        async function loadUsers() {
            const data = await fetchUsers();
            setUsers(data);
            setLoading(false);
        }

        loadUsers();
    }, []);

    //handle click of user row
    function handleUserClick(user: User) {
        saveUserToStorage(user);
        navigate(`/users/${user.id}`);
    }

    if (loading) { return <p className={styles.loading}>Loading users...</p>; }

    return (
        <div>Users page</div>
    );
}