---
id: DEC-033
status: accepted # proposed | accepted | superseded by DEC-NNN
kind: decision # architecture exactly when all three adr-test answers are true
adr-test:
  hard-to-reverse: false
  surprising: false
  real-trade-off: false
from: IDEA-015#10 # a row (IDEA-NNN#NN, SPEC-NNN#NN), an idea or spec (IDEA-NNN, SPEC-NNN), or user
evidence: [RES-073] # the RES files this decision rests on
decided: 2026-11-20 by Peter
---
# DEC-033: What the detail view shows for each item

From Peter's messages of 2026-11-20, the detail view shows: for an idea, its ID, title, status, result, Intent and Destination, its rows with their dependency graph, and its own dependencies; for a spec, its ID, title and state, what it delivers when all is done, its Success Criteria, its tasks grouped by phase with their checkpoints, the dependency graph of its phases, and its waves with their status (DEC-030); for a row, its ID, title, type, status, Blocked by and result, and for a plan row also its wave and that wave's status. Every item also lists its linked records (DEC-032). A spec has no Intent or Destination (RES-073), so the agent chose, as cheap and reversible display choices, to show the spec's Objective as "what it delivers" and a plan row's task block (Description, Acceptance criteria, Verification, Files likely touched, Scope) in its detail.
