---
id: DEC-050
status: accepted # proposed | accepted | superseded by DEC-NNN
kind: decision # architecture exactly when all three adr-test answers are true
adr-test:
  hard-to-reverse: false
  surprising: false
  real-trade-off: true
from: IDEA-016 # a row (IDEA-NNN#NN, SPEC-NNN#NN), an idea or spec (IDEA-NNN, SPEC-NNN), or user
evidence: [RES-073] # the RES files this decision rests on
decided: 2026-11-21 by Peter
---
# DEC-050: IDEA-016 aligns status and waits

Peter decided that IDEA-016 widens from the `blocked-by` field to the alignment of status and waits across ideas, specs, phases, an idea's rows and a spec's rows: their status values, a status stored in the frontmatter of ideas and specs, and one way for "blocked by" to work for all of them. It is a change to Brain's record format on every host, so it stays out of the Claude Code views spec (DEC-031). This rejects a separate new idea, which would keep IDEA-016 small, and work inside IDEA-015. Its cost is that IDEA-016 grows, and IDEA-015's views, whose columns follow the status values (DEC-035), wait on what IDEA-016 settles.
