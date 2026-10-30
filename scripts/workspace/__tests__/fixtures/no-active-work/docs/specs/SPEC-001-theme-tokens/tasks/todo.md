---
spec: SPEC-001
---
# SPEC-001 todo: Colour tokens for a light and a dark theme

One block per row of `plan.md`, under the row's number. The row in `plan.md` holds the status and the rows that block it.

## Task 01: Move every colour literal to a token

**Description:** Replace each colour literal in the app's CSS with a token from `tokens.css`.

**Acceptance criteria:**
- [x] No colour literal remains outside `tokens.css`

**Verification:**
- [x] `bun run check` passes

**Files likely touched:**
- `src/theme/tokens.css`

**Scope:** M

## Task 02: Give each token its dark value

**Description:** Add a dark value to each token, chosen by the `prefers-color-scheme` media feature.

**Acceptance criteria:**
- [x] Each token has a light and a dark value

**Verification:**
- [x] `bun test src/theme` passes

**Files likely touched:**
- `src/theme/tokens.css`

**Scope:** S

## Checkpoint 03: Both themes pass the contrast check
- [x] `bun run check` passes
- [x] The user reviewed both themes
