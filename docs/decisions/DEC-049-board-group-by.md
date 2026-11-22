---
id: DEC-049
status: accepted # proposed | accepted | superseded by DEC-NNN
kind: decision # architecture exactly when all three adr-test answers are true
adr-test:
  hard-to-reverse: false
  surprising: false
  real-trade-off: false
from: IDEA-015#31 # a row (IDEA-NNN#NN, SPEC-NNN#NN), an idea or spec (IDEA-NNN, SPEC-NNN), or user
evidence: [] # the RES files this decision rests on
decided: 2026-11-21 by Peter
---
# DEC-049: The board has a Group by select

Peter decided that the board has a "Group by" select like Jira's board: with one spec's tasks on the status board, choosing "phase" puts the cards in horizontal lanes, one per phase. This replaces the agent's earlier fixed lanes by phase for a spec's tasks (in DEC-035). The agent chose the rest as cheap and reversible choices: the default is no grouping; a spec's tasks can group by phase or by wave (DEC-030); an idea's questions can group by row type (interview, research, prototype, ideate, task); and the ideas, specs and phases boards offer no grouping.
