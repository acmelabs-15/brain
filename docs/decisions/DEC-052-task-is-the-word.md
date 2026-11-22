---
id: DEC-052
status: accepted # proposed | accepted | superseded by DEC-NNN
kind: decision # architecture exactly when all three adr-test answers are true
adr-test:
  hard-to-reverse: true
  surprising: false
  real-trade-off: true
from: IDEA-015#33 # a row (IDEA-NNN#NN, SPEC-NNN#NN), an idea or spec (IDEA-NNN, SPEC-NNN), or user
evidence: [] # the RES files this decision rests on
decided: 2026-11-22 by Peter
---
# DEC-052: A line of a map or a plan is a task

An idea's map and a spec's plan are tables with the same six columns, but Brain calls a line of both a "row" and only a plan's line a task, while Peter and the views mod say "task" for both. Peter decided that "task" is the one word everywhere: in the glossary, the files and the mod. He expects the change to take several package releases, because not every place can change at once; until then "row" stays in the places not yet changed, and the glossary changes with the first of them. The idea task type that is named `task` today needs a new name. This rejects "task" in the mod only, which keeps two words for one thing, and "row" everywhere, which is a word Peter does not use.
