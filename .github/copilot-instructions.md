# Copilot Instructions for Visual-CS-frontend

## Project snapshot
- Stack: React 19 + TypeScript + Vite 7 + Tailwind CSS v4 plugin + Zustand + GSAP.
- Entry point is `src/main.tsx`; app shell and routing are composed in `src/App.tsx`.
- This is a frontend prototype for an accessible restaurant/cafe menu (see `README.md`).

## Architecture and data flow (important)
- `src/App.tsx` renders persistent layout elements (`Header`, `BurguerButton`, `BgScreen`, `AsideHeader`) outside `<Routes>`.
- Page-level content is switched inside React Router routes (`/` -> `Menu`, `/acerca-de` placeholder).
- Mobile/navigation UI state is centralized in Zustand store `src/context/UXContext/useAppUX.ts`:
  - state: `asideHeader`, `activeSection`
  - actions: `openAsideHeader`, `closeAsideHeader`, `toggleAsideHeader`, `setActiveSection`
- Cross-component communication for menu visibility is via store selectors (not prop drilling through many layers).

## File and component patterns
- Keep feature-local typing in `types.ts` next to the component (examples: `components/Header/types.ts`, `elements/BurguerButton/types.ts`).
- Prefer data-driven rendering for nav/menu items (example: `components/Header/data.ts` mapped in `Header.tsx`).
- Current code uses relative imports only; no path aliases are configured in TS/Vite.
- Preserve existing folder names even if unusual (example: `src/elements/BgScreen.tsx/`).

## Styling conventions used here
- Tailwind v4 theme tokens are defined in `src/App.css` using `@theme` custom properties.
- Use existing custom utilities/tokens first (e.g., `text-mont-p-16`, breakpoints like `desktop:`, `horizontal-tablet:`) before introducing new styles.
- Shared fonts/colors/breakpoints come from `App.css`; avoid adding ad-hoc hardcoded values unless matching an existing local pattern.

## Animation conventions
- GSAP with React is used in `src/pages/Menu/Menu.tsx`.
- Register plugins once (`gsap.registerPlugin(Flip)`), scope animations with `useGSAP(..., { scope })`, and tie updates to explicit dependencies.

## Developer workflows
- Install: `npm install`
- Dev server: `npm run dev`
- Production build: `npm run build` (runs `tsc -b` then `vite build`)
- Lint: `npm run lint`
- Preview build: `npm run preview`
- There is currently no test script configured in `package.json`.

## Guardrails for edits
- Keep changes minimal and consistent with existing patterns in neighboring files.
- When adding routes, update both desktop (`Header`) and mobile (`AsideHeader`) navigation if applicable.
- Reuse `useAppUX` store for UX state that affects multiple layout components.
- Keep TypeScript strict-mode clean (`noUnusedLocals`, `noUnusedParameters` are enabled).