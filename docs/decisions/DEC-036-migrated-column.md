---
id: DEC-036
status: accepted # proposed | accepted | superseded by DEC-NNN
kind: decision # architecture exactly when all three adr-test answers are true
adr-test:
  hard-to-reverse: false
  surprising: false
  real-trade-off: true
from: IDEA-015#22 # a row (IDEA-NNN#NN, SPEC-NNN#NN), an idea or spec (IDEA-NNN, SPEC-NNN), or user
evidence: [RES-073] # the RES files this decision rests on
decided: 2026-11-20 by Peter
---
# DEC-036: Migrated specs get their own column

Peter decided that a spec migrated from layout 1 sits in its own "Migrated" column on the specs board, outside the plan-row states of DEC-035, because its old plan has no task rows that those states can read; all 9 specs in this repo are such specs (RES-073). With DEC-037, its detail and drill-in show what the mod can read from its older plan and todo files. This rejects converting the 9 plans, which setup-brain's migration does not do, as work outside the views.
