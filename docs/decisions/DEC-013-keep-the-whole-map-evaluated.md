---
id: DEC-013
status: accepted # proposed | accepted | superseded by DEC-NNN
kind: decision # architecture exactly when all three adr-test answers are true
adr-test:
  hard-to-reverse: false
  surprising: false
  real-trade-off: true
from: user # a row (IDEA-NNN#NN, SPEC-NNN#NN), an idea or spec (IDEA-NNN, SPEC-NNN), or user
evidence: [] # the RES files this decision rests on
decided: 2026-11-05 by Peter
---
# DEC-013: Keep the whole map evaluated and the questions flowing

Peter set how an interview runs. The whole map is evaluated all the time, not only the row that just resolved: after every decision, every answered question and every research result, every open row is checked for an answer that already exists, for a row it can merge with, and for an edge that no longer holds. Rows are ordered for flow: a question whose answer starts research goes early, the interview moves to the next question while that research runs, and when the research returns the interview finishes the row in hand and then comes back. This rejects choosing the next row only by how many rows wait on it, and it rejects sitting idle while research runs. interview-me's loop still states the old rule, so that skill changes in a later build.
