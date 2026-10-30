---
id: IDEA-001
status: specced
---
# IDEA-001: Export invoices for the accountant

## Intent
- Outcome: the user exports a date range of invoices as a file their accountant opens.
- User: small-business owners who send invoices to an outside accountant each quarter.
- Why now: accountants ask for the data in a spreadsheet, and users copy it by hand.
- Success: a quarter of invoices opens in the accountant's spreadsheet app with no fix-up.
- Constraint: no new dependency for the file format.
- Out of scope: importing invoices.

Confirmed by Sam on 2026-10-12.

## Destination
A spec for the invoice export: its fields, its file format and its place in the app.

## Notes
Every session loads ask-user-question, domain-modeling and context-engineering.

## Map
| # | Question | Type | Status | Blocked by | Result |
|---|---|---|---|---|---|
| 01 | Which fields does an exported invoice hold? | interview | resolved | — | DEC-001 |
| 02 | Which spreadsheet apps open a CSV file without a prompt? | research | resolved | — | RES-001 |
| 03 | CSV, or a spreadsheet app's own format? | interview | resolved | 02 | DEC-002 |

## Not yet specified

## Out of scope
- Importing invoices.
