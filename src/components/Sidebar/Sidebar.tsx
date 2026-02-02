/*  display menu links on the side */
import { NavLink } from "react-router-dom";

import styles from "./Sidebar.module.scss";

export default function Sidebar() {
    return (
        <aside className={styles.sidebar}>

            {/* Navigation links */}
            <nav className={styles.navLinks}>
                <NavLink to="/dashboard">Dashboard</NavLink>
                <NavLink to="/users">Users</NavLink>
                <NavLink to="/settings">Settings</NavLink>
            </nav>
        </aside>
    );
}

