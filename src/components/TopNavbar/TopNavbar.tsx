/*  top navigation bar component
    housing search, notification, profile
 */

import styles from "./TopNavbar.module.scss";

export default function TopNavbar () {
    return (
        <header className={styles.navbar}>
            <div className={styles.navItems}>
                {/* Logo section */}
                <div className={styles.logo}>
                    <p>
                    <img src="src/assets/logo.svg" alt="" />lendsqr
                    </p>
                </div>

                {/* Search bare */}
                <div className={styles.search}>
                    <input placeholder="Search for anything" />
                    <button><img src="src/assets/searchIcon.svg" alt="" /></button>
                </div>

                {/* Profile section */}
                <div className={styles.profile}>
                    <a href="#docs" className={styles.docs}>Docs</a>

                    <div className={styles.notification}>
                        <img src="src/assets/notificationIcon.svg" alt="" />
                    </div>
                    <div className={styles.userSection}>
                        <img src="src/assets/avatar.png" alt="" className={styles.avatar}/>
                        <span className="employee">Adedeji</span>
                        <span className={styles.dropdownIcon}><img src="src/assets/dropdownIcon_single_solid.svg" alt="" /></span>
                    </div>
                </div>
            </div>
        </header>
    );
}