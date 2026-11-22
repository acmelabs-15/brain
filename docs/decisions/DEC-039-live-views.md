---
id: DEC-039
status: accepted # proposed | accepted | superseded by DEC-NNN
kind: decision # architecture exactly when all three adr-test answers are true
adr-test:
  hard-to-reverse: false
  surprising: false
  real-trade-off: false
from: IDEA-015#13 # a row (IDEA-NNN#NN, SPEC-NNN#NN), an idea or spec (IDEA-NNN, SPEC-NNN), or user
evidence: [RES-074] # the RES files this decision rests on
decided: 2026-11-20 by Peter
---
# DEC-039: The views update while the agent works

Peter wants the panel to show what the agent is doing while it touches many things at once (DEC-027), and he accepted RES-074, which shows a pane that stays open beside a running turn and re-draws when the agent writes a record. So the views update while the agent changes records in the same session. The agent chose the mechanism as a cheap, reversible choice: the mod watches the workspace folders through `watchPaths` and `classic.FileChanged`, and polls file times where the built-in guard stops a user's mod's `classic.*` hooks.
