# Spec: billing

Module `billing` of `CAPABILITY-MAP.md`. Depends on `accounts`. Status: approved on 2026-08-21.

## Objective
Record each customer's usage, build an invoice for each billing period, and charge it through the payment provider, with retries.

## Tech Stack
Bun 1.4, TypeScript, Postgres 17, the payment provider's REST API.

## Commands
- `bun test src/usage src/invoices src/charges`
- `bun run check`

## Boundaries
- Always: one invoice per customer per billing period.
- Ask first: a change to the retry schedule.
- Never: charge an invoice twice.

## Success Criteria
- A month of usage gives one invoice per customer.
- A failed charge is retried, and no invoice is charged twice.
