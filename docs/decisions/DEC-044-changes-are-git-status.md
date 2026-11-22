---
id: DEC-044
status: accepted # proposed | accepted | superseded by DEC-NNN
kind: decision # architecture exactly when all three adr-test answers are true
adr-test:
  hard-to-reverse: false
  surprising: false
  real-trade-off: true
from: IDEA-015#28 # a row (IDEA-NNN#NN, SPEC-NNN#NN), an idea or spec (IDEA-NNN, SPEC-NNN), or user
evidence: [RES-075] # the RES files this decision rests on
decided: 2026-11-20 by Peter
---
# DEC-044: An item's changes are its files' git status

Peter decided that the views show an item's changes "as simple as using the git status": each of the item's files with its git status letter, as an editor's source-control changes list shows it, with no per-row change log and no line diff inside the views. Git status shows uncommitted changes, so it includes edits made before the session and leaves out changes committed during it; the views therefore need no session start point and no start snapshot (RES-075). The agent chose, as a cheap and reversible choice, to show the same letter on a card whose files have uncommitted changes, so the board shows what the agent is touching (DEC-027).
