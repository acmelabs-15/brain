---
type: regex
target:
  source: file
  path: docs/decisions/DEC-003-keep-the-ledger-in-postgres.md
pattern: '^-{3}\nid: DEC-003\nmigrated: 0\.8\nkind: architecture\ndecided: \d{4}-\d{2}-\d{2}\n-{3}\n# Keep the ledger in Postgres\n\nInvoices and charges need transactions across tables, and the team already runs Postgres for accounts\. We considered an event store, and rejected it because no one on the team has run one in production\.\n$'
---

The 0.8 ADR `docs/decisions/0001-keep-the-ledger-in-postgres.md` becomes a decision record with the next free number after the capability map's DEC-002. Its frontmatter holds only what the migrate mode knows: the ID, `migrated: 0.8`, `kind: architecture` (an ADR is an architecture decision) and the date of its first commit. Its body is the 0.8 file, byte for byte.
