# Tasks: Billing

## Task 1: Record usage events

**Description:** Store each usage event with its customer, its amount and its time.

**Acceptance criteria:**
- [x] A usage event is stored once, even when the client sends it twice

**Verification:**
- [x] Tests pass: `bun test src/usage`

**Dependencies:** None

**Files likely touched:**
- `src/usage/record.ts`

**Estimated scope:** Small: 1-2 files

## Task 2: Build an invoice from a billing period of usage

**Description:** Sum a customer's usage for one billing period into one invoice.

**Acceptance criteria:**
- [x] One invoice per customer per billing period

**Verification:**
- [x] Tests pass: `bun test src/invoices`

**Dependencies:** Task 1

**Files likely touched:**
- `src/invoices/build.ts`

**Estimated scope:** Small: 1-2 files

## Checkpoint: After Tasks 1-2
- [x] All tests pass
- [x] Review with human before proceeding

## Task 3: Charge an invoice through the payment provider

**Description:** Send one charge for an invoice's total and record the result.

**Acceptance criteria:**
- [ ] A paid invoice is never charged again

**Verification:**
- [ ] Tests pass: `bun test src/charges`

**Dependencies:** Task 2

**Files likely touched:**
- `src/charges/charge.ts`

**Estimated scope:** Medium: 3-5 files

## Task 4: Retry a failed charge

**Description:** Retry a failed charge, since the chosen provider leaves retries to the caller (RES-001).

**Acceptance criteria:**
- [ ] A failed charge is retried up to three times, a day apart

**Verification:**
- [ ] Tests pass: `bun test src/charges`

**Dependencies:** Task 3

**Files likely touched:**
- `src/charges/retry.ts`

**Estimated scope:** Small: 1-2 files
