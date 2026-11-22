---
id: DEC-038
status: superseded by DEC-040 # proposed | accepted | superseded by DEC-NNN
kind: decision # architecture exactly when all three adr-test answers are true
adr-test:
  hard-to-reverse: false
  surprising: false
  real-trade-off: true
from: IDEA-015#06 # a row (IDEA-NNN#NN, SPEC-NNN#NN), an idea or spec (IDEA-NNN, SPEC-NNN), or user
evidence: [RES-073] # the RES files this decision rests on
decided: 2026-11-20 by Peter
---
# DEC-038: The board has a type filter and three levels

Peter decided, after comparing Jira's plan, board and details views, that one board view renders three levels: all ideas and specs, filtered to both types, ideas only or specs only; one spec's phases as cards, maybe with each phase's tasks inside its card as Jira shows a story's subtasks; and one idea's or spec's rows as cards. A specced idea and its spec stay two linked cards, and there is still one list view, one board view and one detail view (from DEC-034). This replaces DEC-034's rule that the board shows one item type at a time. The agent chose, as cheap and reversible choices, the same type filter on the list view, and a phase's state worked out from its tasks and checkpoint as DEC-035 does for a spec.
