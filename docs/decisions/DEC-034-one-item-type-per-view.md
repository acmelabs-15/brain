---
id: DEC-034
status: superseded by DEC-038 # proposed | accepted | superseded by DEC-NNN
kind: decision # architecture exactly when all three adr-test answers are true
adr-test:
  hard-to-reverse: false
  surprising: false
  real-trade-off: true
from: IDEA-015#06 # a row (IDEA-NNN#NN, SPEC-NNN#NN), an idea or spec (IDEA-NNN, SPEC-NNN), or user
evidence: [RES-073] # the RES files this decision rests on
decided: 2026-11-20 by Peter
---
# DEC-034: Each view shows one item type at a time

Peter decided that there is one list view, one board view and one detail view, and that each renders one item type at a time: ideas, specs, or the rows of one idea or spec (an idea's questions, a spec's tasks and checkpoints), with the type chosen like a filter. A specced idea and its spec are two cards linked to each other: the idea card links to its specs, and the spec card to the ideas in its `sources:`. This rejects one card per piece of work, where a specced idea folds into its spec, and one board that mixes ideas and specs; the roadmap view keeps every idea and spec on one view (DEC-028).
