---
id: DEC-005
status: accepted
kind: decision
adr-test:
  hard-to-reverse: false
  surprising: true
  real-trade-off: true
from: user
evidence: []
decided: 2026-10-29 by Peter
---
# DEC-005: The specs folder of a first install

DEC-003 made the root `specs/` the default specs folder, and a first install, the run that creates `docs/agents/workspace.md`, wrote it without a look at the repo. A first install now keeps `docs/specs/` when that folder already holds a `SPEC-NNN-<slug>/` folder, which `brain new-doc SPEC` wrote there on 0.10.0 and 0.11.0 in a repo with no `workspace.md`, and nothing moves. Otherwise, when the root `specs/` holds other files, such as API specs or test specs, setup-brain asks the user where brain's specs go (`docs/specs/` recommended, a folder the user names, or `specs/` anyway) instead of mixing brain's specs in with them. This refines DEC-003 and does not replace it: every other repo still gets `specs/`.
