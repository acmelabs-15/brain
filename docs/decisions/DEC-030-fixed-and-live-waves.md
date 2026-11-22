---
id: DEC-030
status: accepted # proposed | accepted | superseded by DEC-NNN
kind: decision # architecture exactly when all three adr-test answers are true
adr-test:
  hard-to-reverse: false
  surprising: true
  real-trade-off: true
from: IDEA-015#24 # a row (IDEA-NNN#NN, SPEC-NNN#NN), an idea or spec (IDEA-NNN, SPEC-NNN), or user
evidence: [RES-073] # the RES files this decision rests on
decided: 2026-11-20 by Peter
---
# DEC-030: Details show fixed waves and the live wave

Peter decided that each task's and phase's detail shows its fixed wave, worked out from the Blocked by edges of all the plan's rows, done or not, so the number stays as work goes on; the spec's detail also marks the live wave, the rows that can start now, as `brain plan` prints it. A wave's status follows from its rows: open, in progress or done. Waves come from task and checkpoint edges, not from phases, so a phase's detail names every wave its tasks are in; and `brain plan` waves hold only rows still to do, which is why fixed numbers can differ from what it prints. This rejects live waves alone, which give a finished task no wave, and fixed waves alone, which hide what can start now.
