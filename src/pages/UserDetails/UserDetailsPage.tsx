/*  User details page component
    shows detailed information of selected user
 */

import { useNavigate } from "react-router-dom";

import { getUserFromStorage } from "../../utils/storage"

import styles from "./UserDetailsPage.module.scss";


export default function UserDetailsPage() {
    const navigate = useNavigate();

    const user = getUserFromStorage();                 // retrieves selected use record from browser cache

    // redircts back if no such user exists
    if (!user) {
        return (
            <div className={styles.error}>
                <p>User's record not found.</p>
                <button onClick={() => navigate("/users")}>Go Back</button>
            </div>
        );
    }


    return (
        <div className={styles.container}>
            {/*Back navigation */}
            <p
            className={styles.backBtn}
            onClick={() => navigate(-1)}><img src="../src/assets/backArrow.svg" alt="" /> Back to Users</p>

            {/* Page header */}
            <div className={styles.header}>
                <h1>User Details</h1>
                <div className={styles.Buttons}>
                    <button className={styles.blacklistBtn}>BLACKLIST USER</button>
                    <button className={styles.activateBtn}>ACTIVATE USER</button>
                </div>
            </div>

            {/* User summary card */}
            <div className={styles.summaryCard}>
                <div className={styles.topInfo}>
                    <div className={styles.userAvatar}><img src="../src/assets/userAvatar.svg" alt="" /></div>
                    <div className={styles.userName}>
                        <h2>{user.personalInfo.firstName} {user.personalInfo.lastName}</h2>
                        <p>{user.id}</p>
                    </div>

                    <div className={styles.vDivider} />
                {/* Tier */}
                    <div className={styles.userTier}>
                        <p>User's Tier</p>
                        <div className={styles.stars}>
                            {/* render solid stars equal to user tier */}
                            {[...Array(user.tier)].map((_, i) => (
                                <img key={`solid-$(i)`} src="../src/assets/starSolid.svg" alt="" />
                            ))}

                            {/* render outline star equal to total minus user tier */}
                            {[...Array(3 - user.tier)].map((_, i) => (
                                <img key={`outline-$(i)`} src="../src/assets/starOutline.svg" alt="" />
                            ))}
                        </div>
                    </div>
                    <div className={styles.vDivider} />
                    <div className={styles.bankDetails}>
                        <h2>{user.bankDetails.balance}</h2>
                        <p>{user.bankDetails.account}/{user.bankDetails.bankName}</p>
                    </div>                    
                </div>
                {/* Tabs */}
                <div className={styles.tabs}>
                    <span className={styles.activeTab}> General Details</span>
                    <span>Documents</span>
                    <span>Bank Details</span>
                    <span>Loans</span>
                    <span>Savings</span>
                    <span>App and System</span>
                </div>                
            </div>

            {/* General Details Section */}
            <div className={styles.detailsBody}>
                {/* Personal Info */}
                <section>
                    <h4>Personal Information</h4>

                    <div className={styles.infoGrid}>
                        <div className={styles.infoItem}>
                            <label className={styles.label}>Full Name</label>
                            <p className={styles.value}>{user.personalInfo.firstName} {user.personalInfo.lastName}</p>
                        </div>

                        <div className={styles.infoItem}>
                            <label className={styles.label}>Phone Number</label>
                            <p className={styles.value}>{user.personalInfo.phoneNumber}</p>
                        </div>

                        <div className={styles.infoItem}>
                            <label className={styles.label}>Email</label>
                            <p className={styles.value} style={{ textTransform:'lowercase'}}>{user.personalInfo.email}</p>
                        </div>

                        <div className={styles.infoItem}>
                            <label className={styles.label}>BVN</label>
                            <p className={styles.value}>{user.personalInfo.bvn}</p>
                        </div>

                        <div className={styles.infoItem}>
                            <label className={styles.label}>Gender</label>
                            <p className={styles.value}>{user.personalInfo.gender}</p>
                        </div>

                        <div className={styles.infoItem}>
                            <label className={styles.label}>Marital Status</label>
                            <p className={styles.value}>{user.personalInfo.maritalStatus ?? "N/A"}</p>
                        </div>

                        <div className={styles.infoItem}>
                            <label className={styles.label}>Number of Children</label>
                            <p className={styles.value}>{user.personalInfo.children ?? "N/A"}</p>
                        </div>                        

                        <div className={styles.infoItem}>
                            <label className={styles.label}>Type of Residence</label>
                            <p className={styles.value}>{user.personalInfo.residence ?? "N/A"}</p>
                        </div>
                    </div>
                </section>

                <div className={styles.hDivider} />

                {/* Employment */}
                <section>
                    <h4>Education and Employment</h4>
                    <div className={styles.infoGrid}>
                        <div>
                            <div className={styles.infoItem}>
                                <label className={styles.label}>Level of Education</label>
                                <p className={styles.value}>{user.educationEmployment.level ?? "N/A"}</p>
                            </div>

                            <div className={styles.infoItem}>
                                <label className={styles.label}>Office Email</label>
                                <p className={styles.value} style={{ textTransform: "lowercase"}}>{user.educationEmployment.officeMail ?? 0}</p>
                            </div>
                        </div>

                        <div style={{width: '250px'}}>
                            <div className={styles.infoItem}>
                                <label className={styles.label}>Employment Status</label>
                                <p className={styles.value}>{user.educationEmployment.employment}</p>
                            </div>

                            <div className={styles.infoItem}>
                                <label className={styles.label}>Monthly Income</label>
                                <p className={styles.value}>{user.educationEmployment.income}</p>
                            </div>
                        </div>

                        <div style={{width: '150px'}}>
                            <div className={styles.infoItem}>
                                <label className={styles.label}>Sector of Employment</label>
                                <p className={styles.value}>{user.educationEmployment.sector ?? "N/A"}</p>
                            </div>
                            
                            <div className={styles.infoItem}>
                                <label className={styles.label}>Loan Repayment</label>
                                <p className={styles.value}>{user.educationEmployment.repayment}</p>
                            </div>                        
                        </div>

                        <div className={styles.infoItem} style={{width: '150px'}}>
                            <label className={styles.label}>Duration of Employment</label>
                            <p className={styles.value}>{user.educationEmployment.duration ?? 0} years</p>
                        </div>
                    </div>
                </section>

                <div className={styles.hDivider} />

                {/* Socials */}
                <section>
                    <h4>Socials</h4>

                    <div className={styles.infoGrid}>
                        <div className={styles.infoItem}>
                            <label className={styles.label}>Twitter</label>
                            <p className={styles.value}>{user.socials.twitter ?? "N/A"}</p>
                        </div>

                        <div className={styles.infoItem}>
                            <label className={styles.label}>Facebook</label>
                            <p className={styles.value}>{user.socials.facebook ?? "N/A"}</p>
                        </div>

                        <div className={styles.infoItem}>
                            <label className={styles.label}>Instagram</label>
                            <p className={styles.value}>{user.socials.instagram ?? "N/A"}</p>
                        </div>
                    </div>
                </section>

                <div className={styles.hDivider} />

                {/* Guarantor */}
                <section>
                    <h4>Guarantor</h4>

                    {/* {Object.values(user.guarantor1).map((g: any, index) => (
                        <div key={index} className={styles.infoGrid}>
                            <div className={styles.infoItem}>
                                <label className={styles.label}>Full Name</label>
                                <p className={styles.value}>{g.firstName} {g.lastName}</p>
                            </div>

                            <div className={styles.infoItem}>
                                <label className={styles.label}>Phone Number</label>
                                <p className={styles.value}>{g.guarantorPhone}</p>
                            </div>
                            
                            <div className={styles.infoItem}>
                                <label className={styles.label}>Email</label>
                                <p className={styles.value}>{g.guarantorEmail}</p>
                            </div>

                            <div className={styles.infoItem}>
                                <label className={styles.label}>Relationship</label>
                                <p className={styles.value}>{g.relationship}</p>
                            </div>
                        </div>
                    ))} */}
                    <div className={styles.infoGrid}>

                        <div className={styles.infoItem}>
                            <label className={styles.label}>Full Name</label>
                            <p className={styles.value}>{user.guarantors.guarantor1.guarantorFirstname} {user.guarantors.guarantor1.guarantorLastname}</p>
                        </div>

                        <div className={styles.infoItem}>
                            <label className={styles.label}>Phone Number</label>
                            <p className={styles.value}>{user.guarantors.guarantor1.guarantorPhone}</p>
                        </div>
                        
                        <div className={styles.infoItem}>
                            <label className={styles.label}>Email</label>
                            <p className={styles.value } style={{ textTransform: "lowercase"}}>{user.guarantors.guarantor1.guarantorEmail}</p>
                        </div>

                        <div className={styles.infoItem}>
                            <label className={styles.label}>Relationship</label>
                            <p className={styles.value}>{user.guarantors.guarantor1.relationship}</p>
                        </div>
                    </div>
                </section>

                <div className={styles.hDivider} style={{ margin : "5px"}}/>

                <section>
                    <h4>Guarantor</h4>

                    {/* {Object.values(user.guarantor1).map((g: any, index) => (
                        <div key={index} className={styles.infoGrid}>
                            <div className={styles.infoItem}>
                                <label className={styles.label}>Full Name</label>
                                <p className={styles.value}>{g.firstName} {g.lastName}</p>
                            </div>

                            <div className={styles.infoItem}>
                                <label className={styles.label}>Phone Number</label>
                                <p className={styles.value}>{g.guarantorPhone}</p>
                            </div>
                            
                            <div className={styles.infoItem}>
                                <label className={styles.label}>Email</label>
                                <p className={styles.value}>{g.guarantorEmail}</p>
                            </div>

                            <div className={styles.infoItem}>
                                <label className={styles.label}>Relationship</label>
                                <p className={styles.value}>{g.relationship}</p>
                            </div>
                        </div>
                    ))} */}
                    <div className={styles.infoGrid}>

                        <div className={styles.infoItem}>
                            <label className={styles.label}>Full Name</label>
                            <p className={styles.value}>{user.guarantors.guarantor2.guarantorFirstname} {user.guarantors.guarantor2.guarantorLastname}</p>
                        </div>

                        <div className={styles.infoItem}>
                            <label className={styles.label}>Phone Number</label>
                            <p className={styles.value}>{user.guarantors.guarantor2.guarantorPhone}</p>
                        </div>
                        
                        <div className={styles.infoItem}>
                            <label className={styles.label}>Email</label>
                            <p className={styles.value } style={{ textTransform: "lowercase"}}>{user.guarantors.guarantor2.guarantorEmail}</p>
                        </div>

                        <div className={styles.infoItem}>
                            <label className={styles.label}>Relationship</label>
                            <p className={styles.value}>{user.guarantors.guarantor2.relationship}</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}