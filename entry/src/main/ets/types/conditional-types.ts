export type IsString<T> = T extends string ? true : false;

export type IsOptional<T, K extends keyof T> = undefined extends T[K] ? true : false;

export type IsArray<T> = T extends any[] ? true : false;

export type ApiResponse<T> =
  | { data: T; status: 'success'; timestamp: number }
    | { error: string; status: 'error'; timestamp: number };

export type ValidatedField<T, K extends keyof T> = T[K] extends string | number
  ? {
    field: K;
    value: T[K];
    isValid: boolean;
    errors: string[];
    validatedAt: Date;
  }
  : never;

export type StringFields<T> = {
  [K in keyof T]: T[K] extends string ? K : never;
}[keyof T];

export type NumberFields<T> = {
  [K in keyof T]: T[K] extends number ? K : never;
}[keyof T];