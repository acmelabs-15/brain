---
id: DEC-040
status: superseded by DEC-042 # proposed | accepted | superseded by DEC-NNN
kind: decision # architecture exactly when all three adr-test answers are true
adr-test:
  hard-to-reverse: false
  surprising: false
  real-trade-off: true
from: IDEA-015#26 # a row (IDEA-NNN#NN, SPEC-NNN#NN), an idea or spec (IDEA-NNN, SPEC-NNN), or user
evidence: [RES-073] # the RES files this decision rests on
decided: 2026-11-20 by Peter
---
# DEC-040: The board shows ideas or specs, never both, for now

Peter decided that, for now, the board renders either ideas or specs, never both, and that its columns are that type's own states (DEC-035, DEC-036); a board that mixes the two types is set aside for later. The rest of DEC-038 stands, so this record replaces it whole: one board view renders all ideas or all specs, chosen by a filter; one spec's phases as cards, maybe with each phase's tasks inside its card; and one idea's or spec's rows as cards. A specced idea and its spec are two linked cards, and there is one list view, one board view and one detail view. The roadmap still shows ideas and specs together. The agent chose, as cheap and reversible choices, the same ideas-or-specs filter on the list view, and a phase's state worked out from its tasks and checkpoint as DEC-035 does for a spec.
