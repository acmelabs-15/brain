---
id: DEC-042
status: accepted # proposed | accepted | superseded by DEC-NNN
kind: decision # architecture exactly when all three adr-test answers are true
adr-test:
  hard-to-reverse: false
  surprising: false
  real-trade-off: true
from: IDEA-015#21 # a row (IDEA-NNN#NN, SPEC-NNN#NN), an idea or spec (IDEA-NNN, SPEC-NNN), or user
evidence: [RES-073] # the RES files this decision rests on
decided: 2026-11-20 by Peter
---
# DEC-042: The board picks an item type and a scope

Peter decided that the board has an item-type selector, ideas, specs, phases or tasks, and that for phases or tasks the user then picks, from a search list like Jira's linked-item picker, the idea or spec they belong to: phases come from one spec, tasks from one idea (its questions) or one spec. The columns follow the type: ideas use the idea statuses and specs the spec states with Migrated (DEC-035, DEC-036); phases use the parallel waves; tasks use the task statuses. This replaces DEC-040's three levels and keeps the rest of it: ideas and specs never share a board, a specced idea and its spec are two linked cards, there is one list view, one board view and one detail view, and a phase card may hold its tasks. The agent chose, as cheap and reversible choices: a phase's wave comes from the phase graph, where phase B waits on phase A when a task of B waits on A's checkpoint, which matches Peter's words that phases define the parallel waves; the list view has the same selector and scope; and opening a card's phases or tasks sets the board's type and scope, as a shortcut.
