---
id: DEC-037
status: accepted # proposed | accepted | superseded by DEC-NNN
kind: decision # architecture exactly when all three adr-test answers are true
adr-test:
  hard-to-reverse: false
  surprising: true
  real-trade-off: true
from: IDEA-015#22 # a row (IDEA-NNN#NN, SPEC-NNN#NN), an idea or spec (IDEA-NNN, SPEC-NNN), or user
evidence: [] # the RES files this decision rests on
decided: 2026-11-20 by Peter
---
# DEC-037: The mod reads every Brain version's format

Peter decided that the mod knows every place in an idea, spec, plan, task or record file where each piece of information it shows can be, for each version of the Brain plugin, and looks in the first place, then in the next, until it finds the information. The mod then reads the file formats of every Brain version, not only the current one, while Brain's own check and migration still treat old formats as files to migrate. The list of places for each version is a fact for research, IDEA-015#25.
