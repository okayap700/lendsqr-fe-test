/*  Main app layout wrapper
    providing sidebar */

import { type ReactNode } from "react";

import Sidebar from "../Sidebar/Sidebar";
import TopNavbar from "../TopNavbar/TopNavbar";

import styles from "./Layout.module.scss";

interface LayoutProps {
    children: ReactNode;                // rendered content
}

export default function Layout({ children }: LayoutProps) {
    return (
        <div className={styles.layout}>
            {/* Sidebar navigation menu*/}
            <Sidebar />
            <div className={styles.mainContent}>
                {/* Top navigation bar */}
                <TopNavbar />
                
                {/* Page body content */}
                <div className={styles.pageContent}>
                    {children}
                </div>
            </div>
        </div>
    );
}

