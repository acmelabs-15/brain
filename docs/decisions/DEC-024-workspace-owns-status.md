---
id: DEC-024
status: accepted # proposed | accepted | superseded by DEC-NNN
kind: decision
adr-test:
  hard-to-reverse: false
  surprising: false
  real-trade-off: true
from: user
evidence: [] # the RES files this decision rests on
decided: 2026-11-05 by Peter
---
# DEC-024: Workspace owns status guidance

Peter places status and session-recovery guidance in the workspace document, whose setup-brain template already owns the CLI and active-effort rules. The separate status skill is removed; the CLI remains, and Claude Code and Gemini keep thin status commands that point to the workspace procedure. This keeps manual access without a second workflow or duplicated instructions.
