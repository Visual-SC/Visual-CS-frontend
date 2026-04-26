---
description: "Create a React/TypeScript/Tailwind component with structured folder architecture"
argument-hint: "componentName and props description"
agent: "agent"
tools: ["create_file", "edit"]
model: GPT-4o
---

Create a new React component named `${input:componentName}` with the following props: `${input:props}`.

Follow these conventions based on the project's structure and guidelines:

## Component Folder Structure

Create a folder with the component name containing the following structure:

```
ComponentName/
├── data.ts          
├── types.ts         
├── ComponentName.tsx    
├── UseComponentName.tsx (optional)
```

## File Descriptions

### types.ts
Contains type definitions for:
- Component initialization data types
- External data source types
- General component props types

Example:
```typescript
export interface ComponentNameProps {
  label: string;
  children: ReactNode;
}

export interface DataProps {
  name: string;
}
```

### data.ts
Contains component initialization data, presentational data, and data from external sources.

Example:
```typescript
import type { DataProps } from "./types";

export const ComponentNameData: DataProps[] = [
  {
    name: "data-1"
  },
  {
    name: "data-2"
  }
];
```

### ComponentName.tsx
Main React component file containing:
- UI logic and rendering logic
- Imports types from `types.ts`
- Imports initialization data from `data.ts`
- **STRICT REQUIREMENT**: Uses only Tailwind v4 utility classes (or latest version)
- **NO custom CSS** or styles outside of Tailwind are permitted

Example:
```tsx
import React, { ReactNode } from "react";
import type { ComponentNameProps } from "./types";
import { ComponentNameData } from "./data";

const ComponentName: React.FC<ComponentNameProps> = ({ label, children }) => {
  return (
    <div>
      <h1 className="">{label}</h1>
      <p className="">{children}</p>
      {ComponentNameData.map((item, index) => (
        <div key={index}>
          {/* Rendering logic for initialization data */}
        </div>
      ))}
    </div>
  );
};

export default ComponentName;
```

### UseComponentName.tsx (Optional)
Custom hook file containing component-specific logic. Only create this file if:
- The component logic in `ComponentName.tsx` becomes too complex
- Code proportion requires separation of concerns
- **NOT created by default** unless explicitly specified in the prompt

## Component Creation Rules

1. **Empty Component Creation**: Components are created empty initially
2. **Minimal Files**: Only create `types.ts`, `data.ts`, and `ComponentName.tsx` by default
3. **Hook File**: `UseComponentName.tsx` is NOT created unless explicitly requested
4. **Tailwind Only**: Absolutely no CSS files or custom styles outside Tailwind
5. **TypeScript**: All files must use proper TypeScript typing
6. **Naming Convention**: Use PascalCase for component and file names

## Important Constraints

- ❌ Do NOT create custom `.css` files
- ❌ Do NOT use inline styles outside Tailwind utility classes
- ❌ Do NOT create `UseComponentName.tsx` unless requested
- ✅ DO use Tailwind v4 (or latest) utility classes exclusively
- ✅ DO maintain strict TypeScript typing
- ✅ DO follow the folder structure exactly

Generate the component following these guidelines strictly.