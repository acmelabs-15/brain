---
id: DEC-031
status: accepted # proposed | accepted | superseded by DEC-NNN
kind: decision # architecture exactly when all three adr-test answers are true
adr-test:
  hard-to-reverse: false
  surprising: false
  real-trade-off: true
from: IDEA-015#23 # a row (IDEA-NNN#NN, SPEC-NNN#NN), an idea or spec (IDEA-NNN, SPEC-NNN), or user
evidence: [RES-073] # the RES files this decision rests on
decided: 2026-11-20 by Peter
---
# DEC-031: The blocked-by field gets its own idea

Peter decided that the `blocked-by` frontmatter field from DEC-029 is defined and built in its own idea, IDEA-016, and that IDEA-015's views wait on it. The field changes templates, the frontmatter schema, `brain check` and the skills that write ideas and specs on every host, while the views mod runs only on Claude Code, and the field gives value alone. This rejects one spec for both; its cost is that the views spec cannot finish before the field ships.
