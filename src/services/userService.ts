/* Fetch the full list of users from the API.
    Returns strongly typed user records
*/

import { User } from  "../types/user";

export async function fetchUsers(): Promise<User[]> {
    const res = await fetch(USERS_API);

    if (!res.ok) {
        throw new Error('Failed to fetch users');
    }

    return res.json();
}

