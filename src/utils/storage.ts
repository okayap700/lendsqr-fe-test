/** Handles saving and getting user details from localStorage
 * supports the userDetails page requirement
 */

import { type User } from "../types/user";

// const USER_KEY = "selectedUser";
const STORAGE_KEY = "lendsqr_selected_user";

// Save info of seleced user
export function saveUserToStorage(user: User) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
}

// fetch user infoform browser storage
export function getUserFromStorage(): User | null {
    const storedUser = localStorage.getItem(STORAGE_KEY);

    if (!storedUser) return null;

    return JSON.parse(storedUser) as User;
}