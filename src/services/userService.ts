/* Provides API functions for fetching user data
    single source of truth for user-related network requests
*/

import { type User } from  "../types/user";

const USERS_API_URL = "/data/generated.json";               // mock api endpoint

//fetches all users from the mock api
export async function fetchUsers(): Promise<User[]> {
    try{
        const response = await fetch(USERS_API_URL);

        if (!response.ok) {
            throw new Error("Failed to fetch users");
        }

        //parse response into typed objects and return list[]
        const users: User[] = await response.json();
        return users
    } catch (error) {
        return [];
    }
}

//fetch single user by ID from existing list
export function getUserById(users: User[], id: string): User | undefined {
    return users.find((user) => user.id === id);            //finds user with id matching
}
