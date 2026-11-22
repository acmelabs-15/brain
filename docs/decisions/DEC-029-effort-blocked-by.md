---
id: DEC-029
status: accepted # proposed | accepted | superseded by DEC-NNN
kind: decision # architecture exactly when all three adr-test answers are true
adr-test:
  hard-to-reverse: true
  surprising: false
  real-trade-off: true
from: IDEA-015#20 # a row (IDEA-NNN#NN, SPEC-NNN#NN), an idea or spec (IDEA-NNN, SPEC-NNN), or user
evidence: [RES-073] # the RES files this decision rests on
decided: 2026-11-20 by Peter
---
# DEC-029: Effort waits live in a blocked-by frontmatter field

Peter decided that a wait between efforts is recorded as a "blocked by" property in the frontmatter of each idea and spec, naming the ideas and specs it waits on; the roadmap and the top-level board draw the dependency graph between efforts from it. Today "Blocked by" names only rows inside one map or plan, and waits between efforts exist only in prose (RES-073). This rejects a Blocked by cell that names another effort's row, and no field at all. The key's spelling (the agent proposes `blocked-by`, in the kebab case of `adr-test`'s keys) and the change's place, this spec or its own idea, are left to IDEA-015#23 and the spec.
