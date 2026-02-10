/*  display menu links on the side */
import { Link, NavLink } from "react-router-dom";

import styles from "./Sidebar.module.scss";

export default function Sidebar() {
    return (
        <aside className={styles.sidebar}>

            {/* Navigation section */}
            <div className={styles.switchOrg}>
                <img src="src/assets/briefcaseIcon.svg" alt="" />
                <span>Switch Organization</span>
                <img src="src/assets/dropdownIcon_single.svg" alt="" className={styles.chevron}/>
            </div>

            <div className={styles.navGroup}>
                <span className={styles.navItem}><img src="src/assets/home.svg" alt="" />Dashboard</span>
            </div>

            {/* Customers section */}
            <div className={styles.section}>
                <p className={styles.sectionTitle}>CUSTOMERS</p>
                <span><NavLink to="/users" className={styles.navItem}><img src="src/assets/users_minor.svg" alt=""/>Users</NavLink></span>
                <span><span className={styles.navItem}><img src="src/assets/guarantors.svg" alt="" />Guarantors</span></span>
                <span><span className={styles.navItem}><img src="src/assets/loans.svg" alt="" />Loans</span></span>
                <span><span className={styles.navItem}><img src="src/assets/decision_models.svg" alt="" />Decision Models</span></span>
                <span><span className={styles.navItem}><img src="src/assets/savings.svg" alt="" />Savings</span></span>
                <span><span className={styles.navItem}><img src="src/assets/whitelist.svg" alt="" />Whitelist</span></span>
                <span><span className={styles.navItem}><img src="src/assets/karma.svg" alt="" />Karma</span></span>
            </div>

            {/* Bussinesses section */}
            <div className={styles.section}>
                <p className={styles.sectionTitle}>BUSINESSES</p>
                <span><span className={styles.navItem}><img src="src/assets/organization.svg" alt="" />Organization</span></span>
                <span><span className={styles.navItem}><img src="src/assets/loan_products.svg" alt="" />Loan Products</span></span>
                <span><span className={styles.navItem}><img src="src/assets/savings_products.svg" alt="" />Savings Products</span></span>
                <span><span className={styles.navItem}><img src="src/assets/fees_and_charges.svg" alt="" />Fees and Charges</span></span>
                <span><span className={styles.navItem}><img src="src/assets/transactions.svg" alt="" />Transactions</span></span>
                <span><span className={styles.navItem}><img src="src/assets/services.svg" alt="" />Services</span></span>
                <span><span className={styles.navItem}><img src="src/assets/service_acount.svg" alt="" />Service Acount</span></span>
                <span><span className={styles.navItem}><img src="src/assets/settlements.svg" alt="" />Settlements</span></span>
                <span><span className={styles.navItem}><img src="src/assets/reports.svg" alt="" />Reports</span></span>
            </div>

            {/* Settimgs section */}
            <div className={styles.section}>
                <p className={styles.sectionTitle}>SETTINGS</p>
                <span><span className={styles.navItem}><img src="src/assets/preferences.svg" alt="" />Preferences</span></span>
                <span><span className={styles.navItem}><img src="src/assets/fees_and_pricing.svg" alt="" />Fees and Pricing</span></span>
                <span><span className={styles.navItem}><img src="src/assets/audit_logs.svg" alt="" />Audit Logs</span></span>
            </div>
        </aside>
    );
}

