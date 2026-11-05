---
id: DEC-010
status: accepted # proposed | accepted | superseded by DEC-NNN
kind: decision # architecture exactly when all three adr-test answers are true
adr-test:
  hard-to-reverse: false
  surprising: false
  real-trade-off: true
from: IDEA-003#47 # a row (IDEA-NNN#NN, SPEC-NNN#NN), an idea or spec (IDEA-NNN, SPEC-NNN), or user
evidence: [RES-035, RES-037] # the RES files this decision rests on
decided: 2026-11-05 by Peter
---
# DEC-010: A session opens with a question

In Peter's ideal, a new conversation opens by itself with an ask-user-question prompt, before the user types anything. It offers to pick up an active item when one exists, to work on a bug, to start something new, or anything else. Where a host cannot start a turn on its own, brain waits for the first prompt. Whether the prompt can open on Claude Code is untested, and IDEA-003#54 settles that.
