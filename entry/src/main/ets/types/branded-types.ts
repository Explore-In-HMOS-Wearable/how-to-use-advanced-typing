// Branded type base
declare const __brand: unique symbol;

export type Brand<T, B> = T & { [__brand]: B };

// Domain identifiers
export type UserId = Brand<number, 'UserId'>;

export type Username = Brand<string, 'Username'>;

export type EmailAddress = Brand<string, 'EmailAddress'>;

export type PhoneNumber = Brand<string, 'PhoneNumber'>;

// Validation states
export type ValidatedEmail = Brand<string, 'ValidatedEmail'>;

export type SanitizedInput = Brand<string, 'SanitizedInput'>;

export type EncryptedPassword = Brand<string, 'EncryptedPassword'>;

// Time-based types
export type Timestamp = Brand<number, 'Timestamp'>;

export type Age = Brand<number, 'Age'>;

// Type constructors
export function createUserId(value: number): UserId {
  return value as UserId;
}

export function createUsername(value: string): Username | null {
  if (value.length >= 3 && value.length <= 20) {
    return value as Username;
  }
  return null;
}

export function createValidatedEmail(email: string): ValidatedEmail | null {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) ? (email as ValidatedEmail) : null;
}

export function createAge(value: number): Age | null {
  return (value >= 0 && value <= 150) ? value as Age : null;
}

export function createTimestamp(): Timestamp {
  return Date.now() as Timestamp;
}

// Type guards
export function isUserId(value: any): value is UserId {
  return typeof value === 'number' && value > 0;
}

export function isValidatedEmail(value: any): value is ValidatedEmail {
  return typeof value === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}