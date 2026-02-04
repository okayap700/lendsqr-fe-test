/** Defines all application routes */

import { Routes, Route, Navigate } from "react-router-dom";

import LoginPage from "../pages/Login/LoginPage";
// import DashboardPage from "../pages/Dashboard/DashboardPage";
import UsersPage from "../pages/Users/UsersPage";
import UserDetailsPage from "../pages/UserDetails/UserDetailsPage";
import Layout from "../components/Layout/Layout";

export default function AppRoutes () {
    return (
        <Routes>
            {/* login  */}
            <Route path="/login" element={<LoginPage />} />

            {/* Redirect "/" to dashboard */}
            <Route path="/" element={<LoginPage />}/>

            {/* Redirect empty path to login */}
            <Route path="*" element={<Navigate to="/login" />} />

            {/* Dashboard
            <Route path="/dashboard" element={<Layout><DashboardPage /></Layout>}/> */}

            {/* Users */}
            <Route path="/users" element={<Layout><UsersPage /></Layout>} />

            {/* User Details */}
            <Route path="/users/:id" element={<Layout><UserDetailsPage /></Layout>} />
        </Routes>
    );
}