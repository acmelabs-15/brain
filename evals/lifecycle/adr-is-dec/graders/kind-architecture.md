---
type: regex
target:
  source: file
  path: docs/decisions/DEC-001-orders-event-sourcing.md
pattern: '^kind: architecture(?: +#.*)?\nadr-test:(?: +#.*)?\n  hard-to-reverse: true(?: +#.*)?\n  surprising: true(?: +#.*)?\n  real-trade-off: true(?: +#.*)?$'
flags: m
---
