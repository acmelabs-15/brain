---
id: DEC-028
status: superseded by DEC-041 # proposed | accepted | superseded by DEC-NNN
kind: decision # architecture exactly when all three adr-test answers are true
adr-test:
  hard-to-reverse: false
  surprising: false
  real-trade-off: true
from: IDEA-015#17 # a row (IDEA-NNN#NN, SPEC-NNN#NN), an idea or spec (IDEA-NNN, SPEC-NNN), or user
evidence: [] # the RES files this decision rests on
decided: 2026-11-20 by Peter
---
# DEC-028: The plan view is a roadmap of all efforts

Peter decided that the "plan view" he asked for is a roadmap: every idea and spec on one view, in order, so that all of the snapshots together show the project's direction. This rejects a view of one spec's `tasks/plan.md` with its phases, and a two-level view with both. A roadmap in dependency order needs a way to record that one idea or spec waits on another, which Brain does not record today; IDEA-015#20 decides it.
