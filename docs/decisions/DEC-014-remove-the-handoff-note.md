---
id: DEC-014
status: accepted # proposed | accepted | superseded by DEC-NNN
kind: decision # architecture exactly when all three adr-test answers are true
adr-test:
  hard-to-reverse: false
  surprising: false
  real-trade-off: true
from: user # a row (IDEA-NNN#NN, SPEC-NNN#NN), an idea or spec (IDEA-NNN, SPEC-NNN), or user
evidence: [RES-006, RES-024, RES-037] # the RES files this decision rests on
decided: 2026-11-05 by Peter
---
# DEC-014: Remove docs/STATUS.md

Peter decided that `docs/STATUS.md` goes: "it's not an accurate snapshot of the actual status". Its seed and every reader and writer go with it, and `brain status` computes every line from the rows and the records. A step only the user can run becomes a do row that names the exact command, and it blocks the rows that wait on it, as Peter confirmed. The text of notes in older repos is a matter for the migration. This rejects a note of free text only, which stays a second file to rewrite at each task end, and it rejects keeping the note as it is, where a stale `Next:` line hides the rows.
