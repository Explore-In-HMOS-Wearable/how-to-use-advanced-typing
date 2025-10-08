// Event handler naming
export type EventHandler<T extends string> = `on${Capitalize<T>}`;

export type UserEventHandlers = {
  [K in 'create' | 'update' | 'delete' | 'select' as EventHandler<K>]: (user: any) => void;
};

// API endpoint generation
export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

export type ApiEndpoint<Resource extends string, Method extends HttpMethod> =
  `${Lowercase<Method>}_${Resource}`;

export type UserEndpoints = {
  [K in HttpMethod as ApiEndpoint<'user', K>]: string;
};


// Field naming conventions
export type DatabaseField<Entity extends string, Field extends string> =
  `${Entity}_${Field}`;

export type CacheKey<Entity extends string, Operation extends string> =
  `cache_${Entity}_${Operation}_${string}`;

// Status types
export type LoadingState<T extends string> = `${T}_loading` | `${T}_success` | `${T}_error`;

export type UserOperationStates = LoadingState<'fetch' | 'create' | 'update' | 'delete'>;

// Validation message keys
export type ValidationKey<Field extends string> = `validation_${Field}_${string}`;

export type UserValidationKeys = ValidationKey<'email' | 'username' | 'password'>;