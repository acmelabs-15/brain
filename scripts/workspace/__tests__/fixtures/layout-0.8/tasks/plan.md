# Implementation Plan: Billing

Spec: `spec/SPEC-billing.md`.

## Overview
Record usage, turn a billing period of usage into an invoice, then charge the invoice through the payment provider.

## Architecture Decisions
- The ledger lives in Postgres: `docs/decisions/0001-keep-the-ledger-in-postgres.md`.
- A billing period is a calendar month: `docs/decisions/DEC-001-bill-by-calendar-month.md`.

## Task List

### Phase 1: Usage and invoices
- [x] Task 1: Record usage events
- [x] Task 2: Build an invoice from a billing period of usage

### Checkpoint: Usage and invoices
- [x] Tests pass, builds clean

### Phase 2: Charges
- [ ] Task 3: Charge an invoice through the payment provider
- [ ] Task 4: Retry a failed charge

### Checkpoint: Complete
- [ ] All acceptance criteria met
- [ ] Ready for review

## Risks and Mitigations
| Risk | Impact | Mitigation |
|------|--------|------------|
| The provider's test mode differs from live mode | Med | One live charge of one cent before launch |

## Open Questions
- Does a failed charge suspend the customer?
