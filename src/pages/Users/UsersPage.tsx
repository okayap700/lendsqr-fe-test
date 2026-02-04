/**Users page component
 * Displays the users table, filters, and navigation to user details
 */

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { format } from "date-fns";

import { fetchUsers } from "../../services/userService";
import { saveUserToStorage } from "../../utils/storage";

import { type User } from "../../types/user";

import styles from "./UsersPage.module.scss";

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
        <div className={styles.usersPage}>
          <h1 className={styles.title}>Users</h1>
          {/* Summary cards row */}
          <div className={styles.summaryCards}>
            <div>
              <img src="src\assets\users.svg" alt="" />
              <span>USERS</span>
              <h2>2,453</h2>
            </div>

            <div>
              <img src="src\assets\activeUsers.svg" alt="" />
              <span>ACTIVE USERS</span>
              <h2>2,453</h2>
            </div>

            <div>
              <img src="src\assets\usersWithLoans.svg" alt="" />
              <span>USERS WITH LOANS</span>
              <h2>12,453</h2>
            </div>

            <div>
              <img src="src\assets\usersWithSavings.svg" alt="" />
              <span>USERS WITH SAVINGS</span>
              <h2>102,453</h2>
            </div>
          </div>

          {/*Users Table*/}
          <div className={styles.tableWrapper}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>ORGANIZATION <img src="src/assets/dropdownIcon.svg" alt="" /></th>
                  <th>USERNAME <img src="src/assets/dropdownIcon.svg" alt="" /></th>
                  <th>EMAIL <img src="src/assets/dropdownIcon.svg" alt="" /></th>
                  <th>PHONE NUMBER <img src="src/assets/dropdownIcon.svg" alt="" /></th>
                  <th>DATE JOINED <img src="src/assets/dropdownIcon.svg" alt="" /></th>
                  <th>STATUS <img src="src/assets/dropdownIcon.svg" alt="" /></th>
                </tr>
              </thead>

              <tbody>
                {users.slice(0,9).map((user) => (
                   <tr
                   key={user.id}
                   onClick={() => handleUserClick(user)}
                   className={styles.row}>
                     <td>{user.organization}</td>
                     <td>{user.personalInfo.firstName} {user.personalInfo.lastName}</td>
                     <td>{user.personalInfo.email}</td>
                     <td>{user.personalInfo.phoneNumber}</td>
                     <td>{user.dateJoined ? format(new Date(user.dateJoined), "MMM dd, yyyy hh:mm a") : "" }</td>
                     <td>
                      <div className={styles.statusCell}>
                        <span className={`${styles.pill} ${styles[user.status]}`}>{user.status}</span>
                        {/* <span className={`${styles.pill} ${styles[user.status.charAt(0).toUpperCase() + user.status.slice(1)]}`}>{user.status}</span> */}
                        <img src="src/assets/moreIcon.svg" alt="" />
                      </div>
                     </td>
                   </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
    );
}