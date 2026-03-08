/* Provides API functions for fetching user data
    single source of truth for user-related network requests
*/

import axios from "axios";
import { type User } from  "../types/user";

const USERS_API_URL = "/data/db.json";               // mock api endpoint

//fetches all users from the mock api
export async function fetchUsers(): Promise<User[]> {
    try{
        const response = await axios.get(USERS_API_URL);

        // if (!response.ok) {
        //     throw new Error("Couldn't fetch users: Check Network Settings");
        // }

        //parse response into typed objects and return list[]
        const users: User[] = await response.data.users;
        return users
    } catch (error) {
        console.log(error);
        throw new Error("Couldn't fetch users: Check Network Settings");
    }
}

//fetch single user by ID from existing list
export function getUserById(users: User[], id: string): User | undefined {
    
    return users.find((user) => user.id === id);            //finds user with id matching
}
