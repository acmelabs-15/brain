---
id: DEC-035
status: accepted # proposed | accepted | superseded by DEC-NNN
kind: decision # architecture exactly when all three adr-test answers are true
adr-test:
  hard-to-reverse: false
  surprising: false
  real-trade-off: true
from: IDEA-015#07 # a row (IDEA-NNN#NN, SPEC-NNN#NN), an idea or spec (IDEA-NNN, SPEC-NNN), or user
evidence: [RES-073] # the RES files this decision rests on
decided: 2026-11-20 by Peter
---
# DEC-035: Board columns for each item type

Peter decided that the specs board's columns are states worked out from the spec's plan rows: Not planned (no rows), Planned (none started), Building, In review (a checkpoint row is in progress or next), and Done (no open or in-progress row). A spec stores no status and Brain records no verify, review or ship stage (RES-073), so this rejects the six lifecycle stages, which need a new stored field. The agent chose the other boards' columns as cheap, reversible choices: the ideas board uses the idea statuses define, specced, done and parked; a rows board uses the row statuses, with open split into ready (on the frontier) and waiting, and superseded in its own column; and a spec's rows board groups its cards in lanes by phase.
