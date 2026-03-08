/*  display menu links on the side */
import { NavLink } from "react-router-dom";

import styles from "./Sidebar.module.scss";

export default function Sidebar() {
    return (
        <aside className={styles.sidebar}>

            {/* Navigation section */}
            <div className={styles.switchOrg}>
                <img src="/assets/briefcaseIcon.svg" alt="" />
                <span>Switch Organization</span>
                <img src="/assets/dropdownIcon_single.svg" alt="" className={styles.chevron}/>
            </div>

            <div className={styles.navGroup}>
                <span className={styles.navItem}><img src="/assets/home.svg" alt="" />Dashboard</span>
            </div>

            {/* Customers section */}
            <div className={styles.section}>
                <p className={styles.sectionTitle}>CUSTOMERS</p>
                <NavLink style={{ background:"rgba(57, 205, 204, 0.06)", opacity:"1", borderLeft:'3px solid #39cdcc'}} to="/users" className={styles.navItem}><img src="/assets/users_minor.svg" alt="" style={{ filter:'grayscale(0)'}}/><span>Users</span></NavLink>
                <NavLink to="/" className={styles.navItem}><img src="/assets/guarantors.svg" alt="" /><span>Guarantors</span></NavLink >
                <NavLink to="/" className={styles.navItem}><img src="/assets/loans.svg" alt="" /><span>Loans</span></NavLink >
                <NavLink to="/" className={styles.navItem}><img src="/assets/decision_models.svg" alt="" /><span>Decision Models</span></NavLink >
                <NavLink to="/" className={styles.navItem}><img src="/assets/savings.svg" alt="" /><span>Savings</span></NavLink >
                <NavLink to="/" className={styles.navItem}><img src="/assets/whitelist.svg" alt="" /><span>Whitelist</span></NavLink >
                <NavLink to="/" className={styles.navItem}><img src="/assets/karma.svg" alt="" /><span>Karma</span></NavLink>
            </div>

            {/* Bussinesses section */}
            <div className={styles.section}>
                <p className={styles.sectionTitle}>BUSINESSES</p>
                <span className={styles.navItem}><img src="/assets/organization.svg" alt="" /><span>Organization</span></span>
                <span className={styles.navItem}><img src="/assets/loan_products.svg" alt="" /><span>Loan Products</span></span>
                <span className={styles.navItem}><img src="/assets/savings_products.svg" alt="" /><span>Savings Products</span></span>
                <span className={styles.navItem}><img src="/assets/fees_and_charges.svg" alt="" /><span>Fees and Charges</span></span>
                <span className={styles.navItem}><img src="/assets/transactions.svg" alt="" /><span>Transactions</span></span>
                <span className={styles.navItem}><img src="/assets/services.svg" alt="" /><span>Services</span></span>
                <span className={styles.navItem}><img src="/assets/service_account.svg" alt="" /><span>Service Account</span></span>
                <span className={styles.navItem}><img src="/assets/settlements.svg" alt="" /><span>Settlements</span></span>
                <span className={styles.navItem}><img src="/assets/reports.svg" alt="" /><span>Reports</span></span>
            </div>

            {/* Settimgs section */}
            <div className={styles.section}>
                <p className={styles.sectionTitle}>SETTINGS</p>
                <span className={styles.navItem}><img src="/assets/preferences.svg" alt="" /><span>Preferences</span></span>
                <span className={styles.navItem}><img src="/assets/fees_and_pricing.svg" alt="" /><span >Fees and Pricing</span></span>
                <span className={styles.navItem}><img src="/assets/audit_logs.svg" alt="" /><span>Audit Logs</span></span>
            </div>
        </aside>
    );
}

