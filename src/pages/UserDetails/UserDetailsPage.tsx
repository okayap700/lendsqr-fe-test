/*  User details page component
    shows detailed information of selected user
 */

import { useNavigate } from "react-router-dom";

import styles from "./UserDetailsPage.module.scss";
import { use } from "react";

export default function UserDetailsPage() {
    const navigate = useNavigate();

    const user = getUserFromStorage();                     // retrieves selected use record from browser cache

    // redircts back if no such user exists
    if (!user) {
        return (
            <div className={styles.error}>
                <p>No user data found.</p>
                <button onClick={() => navigate("/users")}>Go Back</button>
            </div>
        );
    }


    return (
        <div className={styles.userDetailsPage}>
            {/*Back navigation */}
            <p
            className={styles.backLink}
            onClick={() => navigate("/users")}>← Back to Users</p>

            {/* Page header */}
            <div className={styles.header}>
                <h1>User Details</h1>
                <div className={styles.actions}>
                    <button className={styles.blacklist}>Blacklist User</button>
                    <button className={styles.activate}>Activate User</button>
                </div>
            </div>

            {/* User summary card */}
            <div className={styles.summaryCard}>
                <div className={styles.profile}>
                    <div className={styles.avatar}>{user.personalInfo.firstName.charAt(0)}</div>
                    <div>
                        <h2>{user.personalInfo.firstName} {user.personalInfo.lastName}</h2>
                        <p>{user.id}</p>
                    </div>
                </div>

                {/* Tier */}
                <div className={styles.tier}>
                    <p>User's Tier</p>
                    <div className={styles.stars}>{"★".repeat(user.tier)}{"☆".repeat(3 - user.tier)}</div>
                </div>
                
                {/* Account */}
                <div className={styles.account}>
                    <h3>N{user.educationEmployment.income.max.toLocaleString()}</h3>
                    <p>{user.personalInfo.bvn} / {user.organization}</p>
                </div>
            </div>

            {/* Tabs */}
            <div className={styles.tabs}>
                <span className={styles.activeTab}>
                    General Details
                </span>
                <span>Documents</span>
                <span>Bank Details</span>
                <span>Loans</span>
                <span>Savings</span>
                <span>App and System</span>
            </div>

            {/* General Details Section */}
            <div className={styles.detailsCard}>
                {/* Personal Info */}
                <section>
                    <h4>Personal Information</h4>

                    <div className={styles.grid}>
                        <div>
                            <p className={styles.label}>Full Name</p>
                            <p className={styles.value}>{user.personalInfo.firstName} {user.personalInfo.lastName}</p>
                        </div>

                        <div>
                            <p className={styles.label}>Phone Number</p>
                            <p className={styles.value}>{user.personalInfo.phoneNumber}</p>
                        </div>

                        <div>
                            <p className={styles.label}>Email</p>
                            <p className={styles.value}>{user.personalInfo.email}</p>
                        </div>

                        <div>
                            <p className={styles.label}>BVN</p>
                            <p className={styles.value}>{user.personalInfo.bvn}</p>
                        </div>

                        <div>
                            <p className={styles.label}>Gender</p>
                            <p className={styles.value}>{user.personalInfo.gender}</p>
                        </div>

                        <div>
                            <p className={styles.label}>Marital Status</p>
                            <p className={styles.value}>{user.personalInfo.maritalStatus ?? "N/A"}</p>
                        </div>

                        <div>
                            <p className={styles.label}>Residence</p>
                            <p className={styles.value}>{user.personalInfo.residence ?? "N/A"}</p>
                        </div>
                    </div>
                </section>

                {/* Employment */}
                <section>
                    <h4>Education and Employment</h4>
                    <div className={styles.grid}>
                        <div>
                            <p className={styles.label}>Level of Education</p>
                            <p className={styles.value}>{user.educationEmployment.level ?? "N/A"}</p>
                        </div>

                        <div>
                            <p className={styles.label}>Employment</p>
                            <p className={styles.value}>{user.educationEmployment.employment}</p>
                        </div>

                        <div>
                            <p className={styles.label}>Sector</p>
                            <p className={styles.value}>{user.educationEmployment.sector ?? "N/A"}</p>
                        </div>

                        <div>
                            <p className={styles.label}>Duration</p>
                            <p className={styles.value}>{user.educationEmployment.durationInYears ?? 0} years</p>
                        </div>

                        <div>
                            <p className={styles.label}>Monthly Income</p>
                            <p className={styles.value}>{user.educationEmployment.income.max.toLocaleString()}</p>
                        </div>

                        <div>
                            <p className={styles.label}>Loan Repayment</p>
                            <p className={styles.value}>{user.educationEmployment.repayment}</p>
                        </div>
                    </div>
                </section>

                {/* Socials */}
                <section>
                    <h4>Socials</h4>

                    <div className={styles.grid}>
                        <div>
                            <p className={styles.label}>Twitter</p>
                            <p className={styles.value}>{user.socials.twitter ?? "N/A"}</p>
                        </div>

                        <div>
                            <p className={styles.label}>Facebook</p>
                            <p className={styles.value}>{user.socials.facebook ?? "N/A"}</p>
                        </div>

                        <div>
                            <p className={styles.label}>Instagram</p>
                            <p className={styles.value}>{user.socials.instagram ?? "N/A"}</p>
                        </div>
                    </div>
                </section>

                {/* Guarantor */}
                <section>
                    <h4>Guarantor</h4>

                    {user.gurarantor.map((g, index) => (
                        <div key={index} className={styles.grid}>
                            <div>
                                <p className={styles.label}>Full Name</p>
                                <p className={styles.value}>{g.firstName} {g.lastName}</p>
                            </div>

                            <div>
                                <p className={styles.label}>Phone Number</p>
                                <p className={styles.value}>{g.phoneNumber}</p>
                            </div>
                            
                            <div>
                                <p className={styles.label}>Email</p>
                                <p className={styles.value}>{g.email}</p>
                            </div>

                            <div>
                                <p className={styles.label}>Relationship</p>
                                <p className={styles.value}>{g.relationship}</p>
                            </div>
                        </div>
                    ))}
                </section>
            </div>
        </div>
    );
}