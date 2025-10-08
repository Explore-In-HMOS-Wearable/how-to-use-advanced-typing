// Deep transformations
export type DeepReadonly<T> = {
  readonly [K in keyof T]: T[K] extends object ? DeepReadonly<T[K]> : T[K];
};

export type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K];
};

// Field wrapping
export type ValidatedFields<T> = {
  [K in keyof T]: {
    value: T[K];
    isValid: boolean;
    errors: string[];
    touched: boolean;
  };
};

export type LoadingFields<T> = {
  [K in keyof T]: {
    value: T[K];
    isLoading: boolean;
    lastUpdated: Date;
  };
};

// Nullable transformations
export type Nullable<T> = {
  [K in keyof T]: T[K] | null;
};

export type OptionalNullable<T> = {
  [K in keyof T]?: T[K] | null;
};

// Field state management
export type FieldState<T> = {
  [K in keyof T]: {
    value: T[K];
    originalValue: T[K];
    isDirty: boolean;
    isValid: boolean;
    validationErrors: string[];
  };
};