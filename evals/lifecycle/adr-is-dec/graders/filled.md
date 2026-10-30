---
type: regex
target:
  source: file
  path: docs/decisions/DEC-001-orders-event-sourcing.md
pattern: '<(?:decision or architecture|true or false|IDEA-NNN#NN|name|title|1-3 sentences:[^>\n]*)>'
match: not_contains
---
