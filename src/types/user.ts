export interface User {
    id: string;
    tier: 1 | 2 | 3;
    organization: string;
    dateJoined: string;
    bankDetails: {
        bankName: string;
        account: string;
        balance: string;
    };
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
        duration: number | null;
        officeMail: string | null;
        income: "below ₦50,000" | "₦50,000 - ₦100,000" | "₦100,000 - ₦200,000" | "₦200,000 - ₦400,000" | "₦400,000 - ₦1,000,000" | "above ₦1,000,000";
        repayment: string;
    };
    socials: {
        twitter: string | null;
        facebook: string | null;
        instagram: string | null;
    };
    guarantors: {
        guarantor1: {
            guarantorFirstname: "Bass",
            guarantorLastname: "Rosales",
            guarantorPhone: "08044673075",
            guarantorEmail: "bassrosales@zogak.com",
            relationship: "Brother"
        };
        guarantor2: {
            guarantorFirstname: "Bass",
            guarantorLastname: "Rosales",
            guarantorPhone: "08044673075",
            guarantorEmail: "bassrosales@zogak.com",
            relationship: "Brother"
        };
    }
}