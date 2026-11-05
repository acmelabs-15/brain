---
id: DEC-007
status: accepted # proposed | accepted | superseded by DEC-NNN
kind: decision # architecture exactly when all three adr-test answers are true
adr-test:
  hard-to-reverse: false
  surprising: false
  real-trade-off: true
from: user # a row (IDEA-NNN#NN, SPEC-NNN#NN), an idea or spec (IDEA-NNN, SPEC-NNN), or user
evidence: [RES-037, RES-024] # the RES files this decision rests on
decided: 2026-11-05 by Peter
---
# DEC-007: The flow outline, with results written continuously

Peter confirmed the outline in section 1 of RES-037 as the target flow: any first word, `using-brain` evaluates the session, then first run, migration or current, then one or several things to work on, then the stages. He changed one rule. Work writes to disk continuously while it runs, not only when it finishes, so a crash loses little; a writer may delete or recompose freely, and the end of a row or task is only a polish and a validation. A research sub-agent needs no separate progress file. Its research record is the living note: it updates the record all the time, `status: in-progress` shows the work is not done, and the record also holds what the agent intends to do next, so the parent can look there and a restart knows where the work was heading. This rejects writing a result once at the end, because a sub-agent takes a long time to write and an interrupted one loses what it held.
