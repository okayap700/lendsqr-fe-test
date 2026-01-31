export interface User {
    id: string;
    tier: 1 | 2 | 3;
    organization: string;
    dateJoined: string;
    status: "active" | "pending" | "inactive" | "blacklisted";
    personalInfo: {
        lastName: string;
        firstName: string;
        phoneNumber: string;
        email: string;
        bvn: string;
        gender: "male" | "female" | "nonbinary";
        maritalStatus: "single" | "married" | "divorced" | null;
        children: number;
        residence: "parents" | "rented" | "owned" | null;
    };
    educationEmployment: {
        level: string | null;
        employment: "unemployed" | "employed" | "self-employed" | "retired";
        sector: string | null;
        durationInYears: number | null;
        officeMail: string | null;
        // income: "below ₦50,000" | "₦50,000 - ₦100,000" | "₦100,000 - ₦200,000" | "₦200,000 - ₦400,000" | "₦400,000 - ₦1,000,000" | "above ₦1,000,000";
        repayment: string;
        income: {
            min: number;
            max: number;
        }
    };
    socials: {
        twitter: string | null;
        facebook: string | null;
        instagram: string | null;
    };
    guarantor: UserGuarantor[];
}

interface UserGuarantor {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    email: string;
    relationship: string;
}