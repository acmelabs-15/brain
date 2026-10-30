---
spec: SPEC-003
---
# SPEC-003 todo: A settings page

One block per row of `plan.md`, under the row's number. The row in `plan.md` holds the status and the rows that block it.

## Task 01: Store the settings

**Description:** Keep the settings in one file in the user's config folder.

**Acceptance criteria:**
- [ ] A saved setting is in the file

**Verification:**
- [ ] `bun test src/settings` passes

**Files likely touched:**
- `src/settings/store.ts`

**Scope:** S

## Task 02: Read the settings

**Description:** Read the settings file, with a default for each missing setting.

**Acceptance criteria:**
- [ ] A missing setting reads as its default

**Verification:**
- [ ] `bun test src/settings` passes

**Files likely touched:**
- `src/settings/store.ts`
- `src/settings/read.ts`

**Scope:** S

## Checkpoint 03: The settings store works
- [ ] `bun run check` passes

## Task 04: Draw the settings page

**Description:** A page with one field per setting.

**Acceptance criteria:**
- [ ] Each setting has a field

**Verification:**
- [ ] `bun test src/pages` passes

**Files likely touched:**
- `src/pages/settings.tsx`

**Scope:** S

## Task 05: Save from the settings page

**Description:** The page's Save button writes each field through the store.

**Acceptance criteria:**
- [ ] Save writes every changed field

**Verification:**
- [ ] `bun test src/pages` passes

**Files likely touched:**
- `src/pages/settings.tsx`
- `src/settings/store.ts`

**Scope:** S

## Checkpoint 06: The settings page works
- [ ] `bun run check` passes
- [ ] The user saves a setting on the page
