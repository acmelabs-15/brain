---
id: DEC-045
status: accepted # proposed | accepted | superseded by DEC-NNN
kind: decision # architecture exactly when all three adr-test answers are true
adr-test:
  hard-to-reverse: false
  surprising: false
  real-trade-off: true
from: IDEA-015#19 # a row (IDEA-NNN#NN, SPEC-NNN#NN), an idea or spec (IDEA-NNN, SPEC-NNN), or user
evidence: [RES-075] # the RES files this decision rests on
decided: 2026-11-20 by Peter
---
# DEC-045: History is the commit list of an item's files

Peter decided that a detail view's history is the list of commits that touched the item's files, each with its date, short SHA and message, following renames; a task or a question shows the commits of its idea or plan file, and a spec merges its three files. RES-075 measured about 20 to 40 ms per item and found that only 9 commits in this repo changed a table row, so this rejects a row-level history read from the table at each commit. The view's changes are the files' git status (DEC-044).
