---
id: DEC-043
status: accepted # proposed | accepted | superseded by DEC-NNN
kind: decision # architecture exactly when all three adr-test answers are true
adr-test:
  hard-to-reverse: false
  surprising: false
  real-trade-off: true
from: IDEA-015#14 # a row (IDEA-NNN#NN, SPEC-NNN#NN), an idea or spec (IDEA-NNN, SPEC-NNN), or user
evidence: [RES-072, RES-074] # the RES files this decision rests on
decided: 2026-11-20 by Peter
---
# DEC-043: Views on Claude Code only, for now

Peter decided that, for now, the views exist only on Claude Code, where a mod runs, and that Codex and Gemini CLI users keep `brain status`; a fallback for them can be its own idea later. This follows DEC-010's call for IDEA-013's prompt, and the JSON command that the mod reads its data from (RES-072) runs on any host, which keeps a later text or HTML fallback cheap. This rejects a `brain` command that prints the board as text and one that writes a static HTML page.
