# My Link - Gemini CLI Project Guide

This file provides instructional context for Gemini CLI to ensure consistent and efficient collaboration.

## 1. Project Overview
- **Goal**: A personalized multi-link profile service (Linktree clone) for creators.
- **Tech Stack**:
  - **Framework**: Next.js 14 (App Router, TypeScript)
  - **Styling**: Tailwind CSS 4, PostCSS
  - **UI Library**: Shadcn UI (Radix UI)
  - **Icons**: Hugeicons
  - **Backend**: Firebase (Google Auth, Firestore - Planned)
- **Architecture**:
  - `/app`: Pages and layouts (Next.js App Router).
  - `/components`: UI components (`/ui` for Shadcn).
  - `/lib`: Utilities (`utils.ts`).
  - `/docs`: PRD, user scenarios, and wireframes.

## 2. Key Commands
- **Dev**: `npm run dev`
- **Build**: `npm run build`
- **Lint**: `npm run lint`
- **Typecheck**: `npm run typecheck`
- **Format**: `npm run format`
- **Add UI**: `npx shadcn@latest add [component-name]`

## 3. Development Conventions

### 3.1 General Rules
- **Language**: Use **English** for all responses, plans, and documentation to optimize token usage.
- **File References**: Always prefix filenames with `@` (e.g., `@package.json`, `@app/page.tsx`).
- **Commits**: Provide detailed commit messages in English.
- **Validation**: Always run `npm run build` to verify changes before finalizing.
- **Inquiry**: Ask for clarification if requirements are ambiguous; do not assume.

### 3.2 UI/UX Principles (Wireframe-based)
- **Layout**: Mobile-first, **Center Aligned** design.
- **Editing**: Implement **Inline Editing** for profiles and links (no extra modals for editing).
- **Public View (`/[displayName]`)**: Identity section + link list; open links in `_blank`.
- **Admin Dashboard**: Link management with toggle (ON/OFF), delete confirmation, and automatic favicon fetching via Google Favicon API.

### 3.3 Coding Style
- Prefer Shadcn UI components.
- Use Tailwind CSS 4 utility classes.
- Support Dark Mode via `next-themes`.

## 4. Workflow
1. **Research**: Analyze `@docs/` and existing code.
2. **Strategy**: Propose a plan in English.
3. **Execution**: Implement changes and validate with `npm run build`.
4. **Commit**: Save changes with a descriptive message.
