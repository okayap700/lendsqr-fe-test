/** Defines all application routes */

import { Routes, Route } from "react-router-dom";

import LoginPage from "../pages/Login/LoginPage";
import DashboardPage from "../pages/Dashboard/DashboardPage";
import UsersPage from "../pages/Users/UsersPage";
import UserDetailsPage from "../pages/UserDetails/UserDetailsPage";

export default function AppRoutes () {
    return (
        <Routes>
            <Route path="/" element={<LoginPage />}/>
            <Route path="/dashboard" element={<DashboardPage />}/>
            <Route path="/users" element={<UsersPage />}/>
            <Route path="/users/:id" element={<UserDetailsPage/>} />
        </Routes>
    );
}