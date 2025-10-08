import { User, UserListItem, UserUpdatePayload } from '../types/user-types';
import { ApiResponse } from '../types/conditional-types';
import { UserId, ValidatedEmail, createUserId, createValidatedEmail } from '../types/branded-types';

export class UserService {
  private mockUsers: User[] = [
    {
      id: 1,
      username: 'john_doe',
      firstName: 'John',
      lastName: 'Doe',
      age: 28,
      gender: 'male',
      email: 'john@example.com',
      phone: '+1234567890',
      isActive: true,
      createdAt: new Date('2024-01-15'),
      lastLoginAt: new Date('2024-12-01')
    },
    {
      id: 2,
      username: 'jane_smith',
      firstName: 'Jane',
      lastName: 'Smith',
      age: 32,
      gender: 'female',
      email: 'jane@example.com',
      phone: '+1234567891',
      isActive: true,
      createdAt: new Date('2024-02-20'),
      lastLoginAt: new Date('2024-11-30')
    },
    {
      id: 3,
      username: 'inactive_user',
      firstName: 'Inactive',
      lastName: 'User',
      age: 45,
      gender: 'other',
      email: 'inactive@example.com',
      phone: '+1234567892',
      isActive: false,
      createdAt: new Date('2024-03-10')
    }
  ];

  async getUsers(): Promise<ApiResponse<UserListItem[]>> {
    try {
      const userList: UserListItem[] = this.mockUsers.map(user => ({
        id: user.id,
        username: user.username,
        email: user.email,
        isActive: user.isActive
      }));

      return {
        data: userList,
        status: 'success',
        timestamp: Date.now()
      };
    } catch (error) {
      return {
        error: 'Failed to fetch users',
        status: 'error',
        timestamp: Date.now()
      };
    }
  }

  async getUserById(id: UserId): Promise<ApiResponse<User | null>> {
    try {
      const user = this.mockUsers.find(u => u.id === id) || null;
      return {
        data: user,
        status: 'success',
        timestamp: Date.now()
      };
    } catch (error) {
      return {
        error: 'Failed to fetch user',
        status: 'error',
        timestamp: Date.now()
      };
    }
  }

  async updateUser(id: UserId, updates: UserUpdatePayload): Promise<ApiResponse<User>> {
    try {
      const userIndex = this.mockUsers.findIndex(u => u.id === id);
      if (userIndex === -1) {
        return {
          error: 'User not found',
          status: 'error',
          timestamp: Date.now()
        };
      }

      this.mockUsers[userIndex] = { ...this.mockUsers[userIndex], ...updates };
      return {
        data: this.mockUsers[userIndex],
        status: 'success',
        timestamp: Date.now()
      };
    } catch (error) {
      return {
        error: 'Failed to update user',
        status: 'error',
        timestamp: Date.now()
      };
    }
  }

  validateEmail(email: string): ValidatedEmail | null {
    return createValidatedEmail(email);
  }

  parseUserId(id: number): UserId | null {
    return createUserId(id);
  }
}