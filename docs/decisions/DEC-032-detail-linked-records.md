---
id: DEC-032
status: accepted # proposed | accepted | superseded by DEC-NNN
kind: decision # architecture exactly when all three adr-test answers are true
adr-test:
  hard-to-reverse: false
  surprising: false
  real-trade-off: false
from: IDEA-015#11 # a row (IDEA-NNN#NN, SPEC-NNN#NN), an idea or spec (IDEA-NNN, SPEC-NNN), or user
evidence: [RES-073] # the RES files this decision rests on
decided: 2026-11-20 by Peter
---
# DEC-032: The detail view lists and opens every linked record

Peter asked, on 2026-11-20, to "see all of the research/decision docs referenced in the idea/spec/task", so an item's detail view lists every decision and research record that the item links to (a map row's Result, an idea's `result:`, a spec's `sources:`, a plan's `## Decisions` lines; RES-073) and opens each record's text in the view. The agent added, as a cheap and reversible choice, the records whose `from:` names the item, because research still in progress has no Result link yet.
