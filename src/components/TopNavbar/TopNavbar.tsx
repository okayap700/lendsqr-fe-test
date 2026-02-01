/*  top navigation bar component
    housing search, notification, profile
 */

import styles from "./TopNavbar.module.scss";

export default function TopNavbar () {
    return (
        <header className={styles.navbar}>
            {/* Search bare */}
            <div className={styles.search}>
                <input placeholder="Search for anything" />
                <button>🔍</button>
            </div>

            {/* Profile section */}
            <div className={styles.profile}>
                <span className={styles.bell}>🔔</span>
                <span className="employee">{/* Logged in employee */}</span>
            </div>
        </header>
    );
}