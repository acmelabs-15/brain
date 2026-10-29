---
spec: SPEC-002
---
# SPEC-002 todo: Import contacts from four formats

One block per row of `plan.md`, under the row's number. The row in `plan.md` holds the status and the rows that block it.

## Task 01: Add the contact model

**Description:** A contact with a name, email addresses and phone numbers.

**Acceptance criteria:**
- [x] A contact holds a name, emails and phones

**Verification:**
- [x] `bun test src/contacts` passes

**Files likely touched:**
- `src/contacts/contact.ts`

**Scope:** S

## Task 02: Import contacts from CSV

**Description:** Read a CSV file with a header row into contacts.

**Acceptance criteria:**
- [ ] Each CSV row becomes one contact

**Verification:**
- [ ] `bun test src/import` passes

**Files likely touched:**
- `src/import/csv.ts`
- `src/import/index.ts`

**Scope:** S

## Task 03: Import contacts from vCard

**Description:** Read a vCard file into contacts.

**Acceptance criteria:**
- [ ] Each card becomes one contact

**Verification:**
- [ ] `bun test src/import` passes

**Files likely touched:**
- `src/import/vcard.ts`
- `src/import/index.ts`

**Scope:** S

## Task 04: Import contacts from JSON

**Description:** Read a JSON list of contacts.

**Acceptance criteria:**
- [ ] Each list item becomes one contact

**Verification:**
- [ ] `bun test src/import` passes

**Files likely touched:**
- `src/import/json.ts`
- `package.json`

**Scope:** S

## Task 05: Import contacts from a spreadsheet

**Description:** Read the first sheet of a spreadsheet file into contacts.

**Acceptance criteria:**
- [ ] Each sheet row below the header becomes one contact

**Verification:**
- [ ] `bun test src/import` passes

**Files likely touched:**
- `src/import/sheet.ts`
- `package.json`
- `src/import/index.ts`

**Scope:** M

## Task 06: Pick the importer from the file type

**Description:** Choose the importer from the file's extension.

**Acceptance criteria:**
- [ ] Each of the four extensions picks its importer

**Verification:**
- [ ] `bun test src/import` passes

**Files likely touched:**
- `src/import/pick.ts`
- `src/import/index.ts`

**Scope:** S
