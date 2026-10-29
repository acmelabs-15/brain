---
type: regex
target: files
pattern: '(?:^|/)(?:ADR-?\d|\d{4}-|DEC-(?!001-orders-event-sourcing\.md$))[^/\n]*\.md$'
flags: im
match: not_contains
---
