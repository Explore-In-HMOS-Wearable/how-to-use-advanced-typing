import { User } from './user-types';

// Function signature extractions
declare function createUser(userData: Omit<User, 'id' | 'createdAt'>, options?: { validateEmail: boolean }): Promise<User>;
declare function updateUser(id: number, updates: Partial<User>): Promise<User>;
declare function getUserById(id: number): Promise<User | null>;

export type CreateUserParams = Parameters<typeof createUser>;
export type CreateUserData = CreateUserParams[0];
export type CreateUserOptions = CreateUserParams[1];
export type UpdateUserParams = Parameters<typeof updateUser>;
export type CreateUserResult = ReturnType<typeof createUser>;
export type GetUserResult = ReturnType<typeof getUserById>;

// Non-nullable variations
export type GuaranteedUser = NonNullable<User>;
export type VerifiedEmail = NonNullable<User['email']>;
export type ActiveUser = User & { isActive: true };