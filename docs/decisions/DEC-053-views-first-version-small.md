---
id: DEC-053
status: accepted # proposed | accepted | superseded by DEC-NNN
kind: decision # architecture exactly when all three adr-test answers are true
adr-test:
  hard-to-reverse: false
  surprising: false
  real-trade-off: true
from: IDEA-015#33 # a row (IDEA-NNN#NN, SPEC-NNN#NN), an idea or spec (IDEA-NNN, SPEC-NNN), or user
evidence: [] # the RES files this decision rests on
decided: 2026-11-22 by Peter
---
# DEC-053: The first version of the views mod stays close to the mocks

After two long days in which the scope of the views work grew, Peter decided that the first version of the mod stays close to the present mocks in the Design document "Brain views", and that the larger changes come later as small increments over several releases. Its details view shows no waves, changes or history; DEC-030, DEC-044 and DEC-045 are not rejected and wait for a later increment. The standardization that the mod drives (status, blocks, the word "task", a fixed place for a task's working result) also comes in small steps, because a large scope in one run is what Peter wants to avoid.
