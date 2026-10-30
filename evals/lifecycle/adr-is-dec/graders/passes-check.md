---
type: regex
target:
  source: file
  path: docs/decisions/DEC-001-orders-event-sourcing.md
pattern: '^-{3}\nid: DEC-001(?: +#.*)?\nstatus: (?:accepted|superseded by DEC-\d{3})(?: +#.*)?\nkind: (?:decision|architecture)(?: +#.*)?\nadr-test:(?: +#.*)?\n  hard-to-reverse: (?:true|false)(?: +#.*)?\n  surprising: (?:true|false)(?: +#.*)?\n  real-trade-off: (?:true|false)(?: +#.*)?\nfrom: (?:(?:IDEA|SPEC)-\d{3}(?:#\d{2})?|user)(?: +#.*)?\n(?:evidence: \[(?:RES-\d{3}(?:, *RES-\d{3})*)?\](?: +#.*)?\n)?decided: \d{4}-\d{2}-\d{2} by [^\s<>#][^<>#\n]*?(?: +#.*)?\n-{3}\n(?:(?!# ).*\n)*# DEC-001: .*\S'
---

No grader can run `brain check`, so this pattern holds the DEC schema's rules for this file, in the field order `brain new-doc` writes: each frontmatter field and its value, no other field, and an H1 that opens with the record's ID. It also asks for `status: accepted` (or superseded), because the prompt's decision is already made. `scripts/evals/__tests__/adr-is-dec.test.ts` compares it with the schema on a set of filled and broken records.
