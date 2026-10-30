# Spec: accounts

Module `accounts` of `CAPABILITY-MAP.md`. Status: approved on 2026-08-02.

## Objective
A customer signs up, signs in, and stores one set of payment details.

## Tech Stack
Bun 1.4, TypeScript, Postgres 17.

## Commands
- `bun test src/accounts`
- `bun run check`

## Boundaries
- Always: store payment details only as the provider's token.
- Never: log a token.

## Success Criteria
- A customer signs up and signs in.
- Payment details stay at the provider; the app keeps the token only.
