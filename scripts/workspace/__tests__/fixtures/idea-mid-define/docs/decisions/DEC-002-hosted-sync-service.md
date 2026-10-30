---
id: DEC-002
status: accepted
kind: architecture
adr-test:
  hard-to-reverse: true
  surprising: true
  real-trade-off: true
from: IDEA-001#04
evidence: [RES-001]
decided: 2026-10-24 by Sam
---
# DEC-002: Sync through a hosted service fed by the store's change feed

Notes sync through a hosted service that reads the local store's change feed (RES-001). Considered: peer-to-peer sync on the local network, rejected because two devices are rarely online at once; a sync server of our own, rejected because the team runs no new server.
