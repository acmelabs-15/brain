---
id: DEC-051
status: accepted # proposed | accepted | superseded by DEC-NNN
kind: architecture # architecture exactly when all three adr-test answers are true
adr-test:
  hard-to-reverse: true
  surprising: true
  real-trade-off: true
from: IDEA-016#07 # a row (IDEA-NNN#NN, SPEC-NNN#NN), an idea or spec (IDEA-NNN, SPEC-NNN), or user
evidence: [RES-073] # the RES files this decision rests on
decided: 2026-11-21 by Peter
---
# DEC-051: One shared set of status values

Peter decided that ideas, specs and the rows of ideas and specs share one set of status values, open, in-progress, done, parked and superseded, each with the same meaning on every item, because the glossary keeps one word per concept: today "resolved" on rows and "done" on ideas name the same concept, "define" is a stage name rather than a status, and "specced" is done with `result:` naming the spec. States that other data gives, such as ready, waiting and in review, are worked out and never stored. Existing records reach the new values through Brain's migration, which renames the old values and leaves none behind (IDEA-014). This rejects each item keeping its own words under shared categories, which would add a second concept to learn, and was first recommended partly to avoid renames, a reason Peter ruled out: the best design wins over the easiest.
