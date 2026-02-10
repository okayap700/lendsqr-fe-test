/** Defines all application routes */

import { Routes, Route, Navigate } from "react-router-dom";

import LoginPage from "../pages/Login/LoginPage";
// import DashboardPage from "../pages/Dashboard/DashboardPage";
import UsersPage, { UserProvider } from "../pages/Users/UsersPage";
import UserDetailsPage from "../pages/UserDetails/UserDetailsPage";
import Layout from "../components/Layout/Layout";

export default function AppRoutes () {
    return (
        <UserProvider>
        <Routes>
            {/* login  */}
            <Route path="/login" element={<LoginPage />} />

            {/* Redirect "/" to dashboard */}
            <Route path="/" element={<LoginPage />}/>

            {/* Redirect empty path to login */}
            <Route path="*" element={<Navigate to="/login" />} />

            <Route element={<Layout />}>
                {/* Users */}
                <Route path="/users" element={<UsersPage />} />

                {/* User Details */}
                <Route path="/users/:id" element={<UserDetailsPage />} />
            </Route>
        </Routes>
        </UserProvider>
    );
}