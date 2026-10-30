# RES-001: Which payment provider retries a failed SEPA charge?

Date: 2026-08-20. Status: evidence gathered.

## Question

Which payment provider supports SEPA direct debit and retries a failed charge on its own?

## Findings

- Provider A supports SEPA direct debit and retries a failed charge up to four times (https://a.example.com/docs/retries, read 2026-08-20).
- Provider B supports SEPA direct debit but leaves retries to the caller (https://b.example.com/docs/sepa, read 2026-08-20).
- Neither provider retries a charge that failed for a closed account.
