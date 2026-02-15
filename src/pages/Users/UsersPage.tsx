/**Users page component
 * Displays the users table, filters, and navigation to user details
 */

import { useEffect, useState, createContext, type ReactNode, useContext} from "react";
import { useNavigate } from "react-router-dom";

import { format } from "date-fns";

import { fetchUsers } from "../../services/userService";
import { saveUserToStorage } from "../../utils/storage";

import { type User } from "../../types/user";

import styles from "./UsersPage.module.scss";

export const UserContext = createContext<{ users: User[] } | null>(null);


// Conteext provider for easy navigation
export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const data = await fetchUsers();
        setUsers(data);
      } catch (error) {
        // return(<div>Failed to fetch Users</div>)
      }
    };

    loadUsers();
  }, [users.length]);

  return (<UserContext.Provider value={{ users }}>{children}</UserContext.Provider>)
};


// Page component
export default function UsersPage() {
    // const [users, setUsers] = useState<User[]>([]);         // stores fetched users
    const context = useContext(UserContext);
    
    if(!context) return null;       // for if context is used outside provider
    const { users } = context;
    ;
    const [loading, setLoading] = useState(users.length === 0);           // tracks loading
    const [currentPage, setCurrentPage] = useState (1);
    const [usersPerPage, setUsersPerPage] = useState(9);

    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [isMoreOpen, setMoreOpen] = useState<string | null>(null);

    const toggleFilter = () => {
      setIsFilterOpen(!isFilterOpen);
    };

    const toggleMore = (userId: string) => {
      setMoreOpen(isMoreOpen === userId ? null : userId);
    }

    const navigate = useNavigate();

    const totalPages = Math.ceil(users.length / usersPerPage);
    const currentUsers = users.slice((currentPage - 1) * usersPerPage, currentPage * usersPerPage);

    //generate pagination numbers (in the way of 1, 2, 3, ... 15, 16)
    const getPaginationRange = () => {
        const range = [];
        if (totalPages <= 5) {
          for (let i = 1; i <= totalPages; i++ ) range.push(i);
        } else {
        // logic for 1 2 3 ... 15 16
        if (currentPage < 4) {
          range.push(1, 2, 3, '...', totalPages, totalPages - 1);
        } else if (currentPage > totalPages - 3) {
          range.push(1, 2, '...', totalPages - 2, totalPages - 1, totalPages);
        } else {
          range.push(1, '...', currentPage, '...', totalPages);
        }   
      } 
      return range;
    };

    const goToNextPage = () => {
      if (currentPage < totalPages) setCurrentPage((previousPage) => previousPage +1 );
    };

    const goToPreviousPage = () => {
      if (currentPage > 1) setCurrentPage((previousPage) => previousPage - 1);
    };

    // load user records from mock API on page mount
    useEffect(() => {

      //if users already exist in context, stop loading 
      if (users.length > 0) setLoading(false);
        // async function loadUsers() {
        //     const data = await fetchUsers();
        //     setUsers(data);
        //     setLoading(false);
        // }

        // loadUsers();
    }, [users]);

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
                <th>ORGANIZATION <img src="src/assets/dropdownIcon.svg" alt="" onClick={toggleFilter} />
                  {isFilterOpen && (
                    <div className={styles.filterPopup}>
                      <form>
                        <div className={styles.filterGroup}>
                          <label>Organization</label>
                          <select name="" id="">
                            <option value="">Select</option>
                            <option value="">Lendstr</option>
                            <option value="">Kredi Bank</option>
                            <option value="">Irorun</option>
                          </select>
                        </div>
                        <div className={styles.filterGroup}>
                          <label>Username</label>
                          <input type="text" placeholder="User" />
                        </div>
                        <div className={styles.filterGroup}>
                          <label>Email</label>
                          <input type="email" placeholder="Email" />
                        </div>
                        <div className={styles.filterGroup}>
                          <label>Date</label>
                          <select name="" id="">
                            <option value="">Date</option>
                            <option value="">Lendstr</option>
                            <option value="">Kredi Bank</option>
                            <option value="">Irorun</option>
                          </select>
                        </div>
                        <div className={styles.filterGroup}>
                          <label>Phone Number</label>
                          <input type="email" placeholder="Email" />
                        </div>
                        <div className={styles.filterGroup}>
                          <label>Satus</label>
                          <select name="" id="">
                            <option value="">Select</option>
                            <option value="">Active</option>
                            <option value="">Inactive</option>
                            <option value="">Pending</option>
                            <option value="">Blacklisted</option>
                          </select>
                        </div>
                        <div className={styles.filterActions}>
                          <span>
                            <button type="button" className={styles.resetBtn}>Reset</button>
                            <button type="submit" className={styles.submitBtn}>Filter</button>
                          </span>
                        </div>
                      </form>
                    </div>
                  )}
                </th>
                <th>USERNAME <img src="src/assets/dropdownIcon.svg" alt="" /></th>
                <th>EMAIL <img src="src/assets/dropdownIcon.svg" alt="" /></th>
                <th>PHONE NUMBER <img src="src/assets/dropdownIcon.svg" alt="" /></th>
                <th>DATE JOINED <img src="src/assets/dropdownIcon.svg" alt="" /></th>
                <th>STATUS <img src="src/assets/dropdownIcon.svg" alt="" /></th>
              </tr>
            </thead>

            <tbody>
              {currentUsers.map((user: User) => (
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
                      <img
                        className={styles.moreIcon}
                        src="src/assets/moreIcon.svg"
                        alt=""
                        onClick={(e) => {
                          e.stopPropagation();       // to prevent row click spilling
                          toggleMore(user.id);
                        }}
                      />
                      {isMoreOpen === user.id && (
                        // <form action="" className={styles.moreMenu}>
                          <div
                            className={styles.moreMenu}
                            onClick={(e) => {e.stopPropagation(); }}>
                            {user.status === "active" && <p>
                              <span className={styles.menuItem}> <img src="src/assets/viewDetailsIcon.svg" alt="" /> View Details</span>
                              <span className={styles.menuItem}><img src="src/assets/activateUserIcon.svg" alt="" /> Blacklist User</span>
                            </p>  }
                            {user.status === "blacklisted" && <p>
                              <span className={styles.menuItem}> <img src="src/assets/viewDetailsIcon.svg" alt="" /> View Details</span>
                              <span className={styles.menuItem}> <img src="src/assets/blacklistUserIcon.svg" alt="" />Activate User</span>
                            </p>  }
                            {user.status === "pending" && <p>
                              <span className={styles.menuItem}> <img src="src/assets/viewDetailsIcon.svg" alt="" /> View Details</span>
                              <span className={styles.menuItem}> <img src="src/assets/activateUserIcon.svg" alt="" /> Activate User</span>
                              <span className={styles.menuItem}> <img src="src/assets/blacklistUserIcon.svg" alt="" /> Blacklist User</span>
                            </p>  }
                            {user.status === "inactive" && <p>
                              <span className={styles.menuItem}> <img src="src/assets/viewDetailsIcon.svg" alt="" /> View Details</span>
                              <span className={styles.menuItem}> <img src="src/assets/activateUserIcon.svg" alt="" /> Activate User</span>
                              <span className={styles.menuItem}> <img src="src/assets/blacklistUserIcon.svg" alt="" /> Blacklist User</span>
                            </p>  }
                          </div>
                        // {/* </form> */}
                      )}
                    </div>
                    </td>
                  </tr>
              ))}
            </tbody>
          </table>

        </div>
        {/* <span>
          <button onClick={ goToPreviousPage } disabled= { currentPage === 1 }><img src="src/assets/previousPageBtn.svg" alt="" /></button>
          <button onClick={ goToNextPage } disabled={ currentPage === totalPages }><img src="src/assets/nextPageBtn.svg" alt="" /></button>
        </span> */}

        <div className={styles.paginationContainer}>
          {/* leftside with dropdown */}
          <div className={styles.paginationLeft}>
            <span>Showing</span>
            <div className={styles.selectWrapper}>
              <select
                value={usersPerPage}
                onChange={
                  (e) => {setUsersPerPage(Number(e.target.value));
                    setCurrentPage(1);                  //reset to page 1 on resize
                  }}>
                    <option value={10}>10</option>
                    <option value={50}>50</option>
                    <option value={100}>100</option>
              </select>
            </div>
            <span>out of {users.length}</span>
          </div>
            
          {/* right side: page numbers */}
          <div className={styles.paginationRight}>
            <button
              onClick={ goToPreviousPage }   // () => setCurrentPage(prev => Math.max(prev - 1, 1))
              disabled={currentPage === 1}
              className={styles.arrowBtn}
            ><img src="src/assets/next" alt="" /></button>
            {getPaginationRange().map((page, index) => (
              <button
                key={index}
                onClick={() => typeof page === 'number' && setCurrentPage(page)}
                className={`${styles.pageBtn} ${currentPage === page ? styles.activePage : ''} ${typeof page !== 'number' ? styles.ellipsis : ''}`}>{page}</button>
            ))}

            <button 
              onClick={ goToNextPage }      // () => setCurrentPage(prev => Math.min(prev + 1, totalPages))
              disabled={currentPage === totalPages}
              className={styles.arrowBtn}> <img src="src/assets/nextArrow.svg" alt="" /> </button>
          </div>
        </div>
      </div>
    );
}