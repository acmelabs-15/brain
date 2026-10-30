---
spec: SPEC-001
---
# SPEC-001 todo: Export invoices as CSV

One block per row of `plan.md`, under the row's number. The row in `plan.md` holds the status and the rows that block it.

## Task 01: Write one invoice as a CSV row

**Description:** A function that turns one invoice into one CSV row, with the fields of DEC-001 in their order.

**Acceptance criteria:**
- [x] `toCsvRow` returns the six fields of DEC-001, in order
- [x] Amounts carry two decimals and a dot

**Verification:**
- [x] `bun test src/export` passes

**Files likely touched:**
- `src/export/csv.ts`
- `src/export/__tests__/csv.test.ts`

**Scope:** S

## Task 02: Export every invoice in a date range

**Description:** Stream every invoice in a date range through `toCsvRow`, after a header row and the byte order mark of DEC-002.

**Acceptance criteria:**
- [x] `exportRange` writes the byte order mark, the header row, then one row per invoice
- [x] An empty range gives the header row only

**Verification:**
- [x] `bun test src/export` passes

**Files likely touched:**
- `src/export/range.ts`
- `src/export/__tests__/range.test.ts`

**Scope:** M

## Checkpoint 03: Export works end to end
- [x] `bun run check` passes
- [x] A range of 500 invoices exports in under two seconds

## Task 04: Add the Export button to the invoices page

**Description:** A button in the page header (DEC-003) that downloads the range on screen as a CSV file.

**Acceptance criteria:**
- [x] The button sits in the page header
- [ ] A click downloads the file for the range on screen

**Verification:**
- [ ] `bun test src/pages/invoices` passes

**Files likely touched:**
- `src/pages/invoices/ExportButton.tsx`
- `src/pages/invoices/__tests__/ExportButton.test.tsx`

**Scope:** S

## Task 05: Quote customer names that hold commas or quotes

**Description:** Quote a text field that holds a comma, a quote or a line break, and double each quote inside it.

**Acceptance criteria:**
- [ ] A name with a comma, a quote or a line break survives a round trip

**Verification:**
- [ ] `bun test src/export` passes

**Files likely touched:**
- `src/export/csv.ts`

**Scope:** XS

## Task 06: Show progress for an export of more than 1,000 invoices

**Description:** Show a progress bar while a long export streams, so the page never looks stuck.

**Acceptance criteria:**
- [ ] An export of more than 1,000 invoices shows its progress

**Verification:**
- [ ] `bun test src/pages/invoices` passes

**Files likely touched:**
- `src/pages/invoices/ExportButton.tsx`

**Scope:** S

## Checkpoint 07: Ready for review
- [ ] `bun run check` passes
- [ ] The user reviews the export on staging
