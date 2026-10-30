---
spec: SPEC-002
---
# SPEC-002 todo: A theme switch in the app

One block per row of `plan.md`, under the row's number. The row in `plan.md` holds the status and the rows that block it.

## Task 01: Add the switch to the settings page

**Description:** A switch with the choices system, light and dark, which sets the theme at once.

**Acceptance criteria:**
- [x] Each choice sets the theme at once

**Verification:**
- [x] `bun test src/settings` passes

**Files likely touched:**
- `src/settings/ThemeSwitch.tsx`

**Scope:** S

## Task 02: Keep the choice in a cookie

**Description:** Superseded by task 03: the server has no use for the choice, so it stays out of a cookie.

**Acceptance criteria:**
- [ ] The choice survives a reload

**Verification:**
- [ ] `bun test src/settings` passes

**Files likely touched:**
- `src/settings/ThemeSwitch.tsx`

**Scope:** XS

## Task 03: Keep the choice in local storage

**Description:** Save the choice in local storage and read it at start.

**Acceptance criteria:**
- [x] The choice survives a reload
- [x] With no saved choice, the switch shows "system"

**Verification:**
- [x] `bun test src/settings` passes

**Files likely touched:**
- `src/settings/ThemeSwitch.tsx`

**Scope:** XS

## Checkpoint 04: Ready for review
- [x] `bun run check` passes
- [x] The user reviewed the switch on staging
