// Core user interface
export interface User {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  age: number;
  gender: 'male' | 'female' | 'other' | 'prefer_not_to_say';
  email: string;
  phone: string;
  isActive: boolean;
  createdAt: Date;
  lastLoginAt?: Date;
}

// Basic utility types
export type UserUpdatePayload = Partial<User>;
export type UserRegistrationForm = Omit<User, 'id' | 'isActive' | 'createdAt' | 'lastLoginAt'>;
export type UserListItem = Pick<User, 'id' | 'username' | 'email' | 'isActive'>;
export type UserSearchResult = Pick<User, 'id' | 'username' | 'firstName' | 'lastName'>;
export type RequiredUserFields = Required<Pick<User, 'username' | 'email'>>;
export type ReadonlyUserProfile = Readonly<User>;

// Field mapping and filtering
export type UserFieldLabels = Record<keyof User, string>;
export type PublicGender = Exclude<User['gender'], 'prefer_not_to_say'>;
export type ContactMethod = keyof Pick<User, 'email' | 'phone'>;

// Async operation types
export type UserResponse = Awaited<Promise<User>>;
export type UserListResponse = Awaited<Promise<User[]>>;