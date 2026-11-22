---
id: DEC-026
status: accepted # proposed | accepted | superseded by DEC-NNN
kind: decision # architecture exactly when all three adr-test answers are true
adr-test:
  hard-to-reverse: false
  surprising: false
  real-trade-off: true
from: IDEA-015#05 # a row (IDEA-NNN#NN, SPEC-NNN#NN), an idea or spec (IDEA-NNN, SPEC-NNN), or user
evidence: [] # the RES files this decision rests on
decided: 2026-11-20 by Peter
---
# DEC-026: The views only show items

Peter decided that the Brain views read the workspace and change nothing: the user asks the agent in the session to do any work. Everything Peter described is for seeing items, and Brain's rules keep every map-row and plan-row write with the main session and its decision or research record. This rejects a view that hands an item to the agent, which can come in a later idea, and a view that edits records, which would go around those write rules.
