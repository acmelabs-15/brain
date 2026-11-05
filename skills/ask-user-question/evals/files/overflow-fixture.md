# Plan-destination fixture

The host supports the synchronous exclusive-choice schema: `questions` contains
one entry with `id`, `header`, `question`, and `options`. Each option contains
`label` and `description`. There are two or three options and the host supplies a
free-text answer path. There is no multi-select or text-question type.

The legacy plan could belong to any of these specs. Its contents do not settle the
choice. No file has moved. The stable IDs are:

| ID | Candidate |
|---|---|
| A | spec/SPEC-billing.md |
| B | spec/SPEC-invoices.md |
| C | spec/SPEC-refunds.md |
| D | spec/SPEC-tax.md |
| E | spec/SPEC-reports.md |
| none | Leave the plan in tasks/ until its destination is known. |

Selecting a spec moves the plan into that spec's task folder. Leaving it in place
defers that part of migration. The evidence favors no candidate.
