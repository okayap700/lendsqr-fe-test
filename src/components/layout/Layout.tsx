/*  Main app layout wrapper
    providing sidebar */

import { type ReactNode } from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "../Sidebar/Sidebar";
import TopNavbar from "../TopNavbar/TopNavbar";

import styles from "./Layout.module.scss";

interface LayoutProps {
    children?: ReactNode;                // rendered content
}

export default function Layout({ children }: LayoutProps) {
    return (
        <div className={styles.layoutWrapper}>
            {/* TopNavbar at top level */}
            <TopNavbar />

            <div className={styles.layoutBody}>
                {/* sidebar beside content */}
                <Sidebar />
            
                <main className={styles.mainContent}>
                    {/*  table showing users */}
                    {children}
                    <Outlet />
                </main>
            </div>
        </div>
    );
}

