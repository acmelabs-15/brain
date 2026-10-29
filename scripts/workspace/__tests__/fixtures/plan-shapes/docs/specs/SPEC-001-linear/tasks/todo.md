---
spec: SPEC-001
---
# SPEC-001 todo: Publish notes as HTML

One block per row of `plan.md`, under the row's number. The row in `plan.md` holds the status and the rows that block it.

## Task 01: Parse the frontmatter of a note

**Description:** Read a note's frontmatter into its title, date and tags.

**Acceptance criteria:**
- [x] A note with frontmatter gives its title, date and tags

**Verification:**
- [x] `bun test src/notes` passes

**Files likely touched:**
- `src/notes/frontmatter.ts`
- `src/notes/__tests__/frontmatter.test.ts`

**Scope:** S

## Task 02: Render a note's Markdown as HTML

**Description:** Render the body of a note as an HTML page.

**Acceptance criteria:**
- [ ] Headings, lists and links render as HTML

**Verification:**
- [ ] `bun test src/notes` passes

**Files likely touched:**
- `src/notes/render.ts`
- `src/notes/__tests__/render.test.ts`

**Scope:** M

## Task 03: Write the site folder

**Description:** Write one HTML page per note into the site folder.

**Acceptance criteria:**
- [ ] The site folder holds one page per note

**Verification:**
- [ ] `bun test src/site` passes

**Files likely touched:**
- `src/site/write.ts`
- `src/site/__tests__/write.test.ts`

**Scope:** S

## Checkpoint 04: Ready for review
- [ ] `bun run check` passes
- [ ] The user reviews the site
