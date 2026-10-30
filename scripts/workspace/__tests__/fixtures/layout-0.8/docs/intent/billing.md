# Intent: bill customers for their usage

Confirmed by Sam on 2026-08-01 after an interview of six questions.

- **Outcome:** each customer gets one invoice a month for their usage, and pays it by SEPA direct debit.
- **User:** small businesses on the usage plan.
- **Why now:** invoices are built by hand in a spreadsheet today.
- **Success:** every invoice for a month goes out on the first, and no invoice is charged twice.
- **Constraint:** Postgres only; no new datastore.
- **Out of scope:** card payments; tax rules outside the EU.
