---
spec: SPEC-001
sources: [IDEA-001, DEC-001, DEC-002, RES-001]
---
# SPEC-001: Export invoices as CSV

## Objective
The user picks a date range on the invoices page and downloads its invoices as one CSV file, with the six fields of DEC-001, in the format of DEC-002.

## Tech Stack
Bun 1.4, TypeScript, the app's existing React invoices page. No new dependency.

## Commands
- `bun test src/export`: the export tests.
- `bun run check`: typecheck, lint and every test.

## Project Structure
- `src/export/csv.ts`: one invoice to one CSV row.
- `src/export/range.ts`: every invoice in a date range, streamed.
- `src/pages/invoices/ExportButton.tsx`: the button.

## Code Style
Small exported functions, one comment line above each.

## Testing Strategy
`bun:test`, tests in `__tests__/` beside the file. Seams: `toCsvRow` and `exportRange`.

## Boundaries
- Always: quote every text field.
- Ask first: a new dependency.
- Never: write a file on the server.

## User Stories
1. As a business owner, I want to export a quarter of invoices, so that my accountant gets them in a spreadsheet.

## Out of scope
Importing invoices.

## Prior-art tests
`src/reports/__tests__/totals.test.ts`.

## Success Criteria
- A quarter of invoices opens in Excel, Numbers and LibreOffice Calc with no prompt.
- A customer name with a comma or a quote survives the round trip.

## Open Questions
None.
