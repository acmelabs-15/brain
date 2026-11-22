---
id: DEC-027
status: accepted # proposed | accepted | superseded by DEC-NNN
kind: decision # architecture exactly when all three adr-test answers are true
adr-test:
  hard-to-reverse: false
  surprising: false
  real-trade-off: false
from: IDEA-015#04 # a row (IDEA-NNN#NN, SPEC-NNN#NN), an idea or spec (IDEA-NNN, SPEC-NNN), or user
evidence: [] # the RES files this decision rests on
decided: 2026-11-20 by Peter
---
# DEC-027: Why the views matter now

Peter gave the reason for the views: Brain runs many ideas and specs at once, and in a product they relate to and depend on each other, so the user needs views that show the whole project's state at any moment. A resizable panel beside the working session also lets the user follow what the agent does while it touches many things at once. Today's `brain status` gives five lines of text, which do not give that picture.
