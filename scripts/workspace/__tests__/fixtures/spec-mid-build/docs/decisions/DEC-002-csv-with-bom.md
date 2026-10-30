---
id: DEC-002
status: accepted
kind: decision
adr-test:
  hard-to-reverse: false
  surprising: true
  real-trade-off: true
from: IDEA-001#03
evidence: [RES-001]
decided: 2026-10-11 by Sam
---
# DEC-002: Export CSV in UTF-8 with a byte order mark

CSV needs no new dependency, and every app in RES-001 opens it. The byte order mark makes Excel read UTF-8, so customer names keep their accents. Considered: the XLSX format, rejected because it needs a library.
