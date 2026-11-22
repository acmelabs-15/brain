---
id: DEC-047
status: accepted # proposed | accepted | superseded by DEC-NNN
kind: decision # architecture exactly when all three adr-test answers are true
adr-test:
  hard-to-reverse: false
  surprising: false
  real-trade-off: false
from: IDEA-015#15 # a row (IDEA-NNN#NN, SPEC-NNN#NN), an idea or spec (IDEA-NNN, SPEC-NNN), or user
evidence: [RES-072, RES-074, RES-075] # the RES files this decision rests on
decided: 2026-11-21 by Peter
---
# DEC-047: What success looks like for the views

Peter accepted this success line, with the command named `/brain:session` (DEC-048): in a Claude Code session in a Brain repo, `/brain:session` opens the panel within a second; the board shows the repo's ideas or specs, a spec's phases, or an item's tasks in their columns, the 9 migrated specs included; a focused card shows, inside the board, what it waits on and what waits on it; Enter opens its detail view with its sections, linked records, git status and commits; and while the agent writes records, the panel redraws within a second. The times rest on about 60 ms for the data (RES-072), redraws of up to 30 a second (RES-074), and 60 to 150 ms for a detail view's git data (RES-075).
