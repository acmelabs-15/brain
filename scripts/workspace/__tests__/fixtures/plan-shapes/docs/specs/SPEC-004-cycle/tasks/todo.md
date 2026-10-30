---
spec: SPEC-004
---
# SPEC-004 todo: Undo and redo

One block per row of `plan.md`, under the row's number. The row in `plan.md` holds the status and the rows that block it.

## Task 01: Record each edit

**Description:** Keep each edit in a history list.

**Acceptance criteria:**
- [ ] Each edit adds one entry

**Verification:**
- [ ] `bun test src/history` passes

**Files likely touched:**
- `src/history/record.ts`

**Scope:** S

## Task 02: Undo an edit

**Description:** Undo the last edit in the history.

**Acceptance criteria:**
- [ ] Undo restores the text before the last edit

**Verification:**
- [ ] `bun test src/history` passes

**Files likely touched:**
- `src/history/undo.ts`

**Scope:** S

## Task 03: Redo an edit

**Description:** Redo the last edit that undo took back.

**Acceptance criteria:**
- [ ] Redo after undo restores the edit

**Verification:**
- [ ] `bun test src/history` passes

**Files likely touched:**
- `src/history/redo.ts`

**Scope:** S

## Task 04: Clear the history on save

**Description:** Empty the history when the user saves.

**Acceptance criteria:**
- [ ] After a save, undo does nothing

**Verification:**
- [ ] `bun test src/history` passes

**Files likely touched:**
- `src/history/record.ts`

**Scope:** XS
