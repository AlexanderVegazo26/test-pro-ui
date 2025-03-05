# TypeScript Guide

## Overview
TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.

## Key Concepts

### Type System
- **Basic Types**: string, number, boolean, array, tuple, enum, any, void, null, undefined
- **Union Types**: `type | type`
- **Intersection Types**: `type & type`
- **Type Aliases**: `type Name = ...`
- **Interfaces**: `interface Name {...}`
- **Generics**: `function example<T>(arg: T): T {...}`

### Type Safety
- **Type Inference**: TypeScript can infer types when not explicitly defined
- **Type Assertions**: `value as Type` or `<Type>value`
- **Type Guards**: `typeof`, `instanceof`, custom type predicates
- **Non-null Assertion**: `value!` (use sparingly)

### Advanced Types
- **Mapped Types**: Transform existing types into new ones
- **Conditional Types**: Types that depend on a condition
- **Utility Types**: `Partial<T>`, `Required<T>`, `Pick<T, K>`, `Omit<T, K>`, etc.

## TypeScript with React
- **Component Props**: Define interfaces for component props
- **useState with Types**: `useState<Type>(initialValue)`
- **Event Handling**: Use proper event types like `React.ChangeEvent<HTMLInputElement>`
- **Children Props**: `React.ReactNode` or `React.ReactElement`

## Best Practices
1. Avoid using `any` type when possible
2. Use interfaces for object shapes that will be implemented or extended
3. Use type aliases for unions, primitives, and tuples
4. Leverage TypeScript's utility types
5. Write self-documenting code with descriptive types
6. Use strict mode in `tsconfig.json`

## Common Issues and Solutions
- **Type 'X' is not assignable to type 'Y'**: Check for type compatibility
- **Object is possibly undefined**: Use optional chaining (`?.`) or type guards
- **Property does not exist on type**: Ensure the property is defined in the interface/type
- **Type 'any'**: Replace with more specific types

## Configuration
Key settings in `tsconfig.json`:
```json
{
  "compilerOptions": {
    "strict": true,
    "esModuleInterop": true,
    "lib": ["dom", "dom.iterable", "esnext"],
    "jsx": "preserve",
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "target": "es5"
  }
}
``` 