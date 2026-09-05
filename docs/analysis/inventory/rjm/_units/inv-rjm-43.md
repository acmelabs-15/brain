---
unit: inv-rjm-43
phase: 1
package: rjm
session: 004
subagent_returned: complete
---

# Unit inv-rjm-43

## Files assigned
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.agents/architecture/ADR-098-agent-role-metadata-replaces-tier-hierarchy.md`

## Outputs produced
- `docs/analysis/inventory/rjm/agents-architecture-adr-098-agent-role-metadata-replaces-tier-hierarchy-md.md` (12301 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Assigned file is `.agents/architecture/ADR-098-agent-role-metadata-replaces-tier-hierarchy.md` (32,140 bytes), a major architectural governance decision in `rjm` retiring the unenforced four-tier hierarchy (`expert`, `manager`, `builder`, `integration`) across 186 agent definitions in six trees.
- Resolves contradictions between documentation in `.agents/AGENT-SYSTEM.md` section 2.5 and individual agent prompt handoff protocols (which explicitly denied delegation for 7 of 9 upper-tier agents).
- Replaces `tier:` with inert descriptive `role:` metadata (`strategic`, `coordinator`, `executor`, `support`), while establishing that invocation authority is governed by platform tool containment (e.g. `Task` tool presence) rather than frontmatter metadata or prose hierarchies.
- ADR-098 anchors coordination and conflict escalation to ADR-009 (`ADR-009-parallel-safe-multi-agent-design.md`), quoting its aggregation table and consensus protocol verbatim per `.claude/rules/canonical-source-mirror.md`.
- Records a Standing Dissent and Re-evaluation Triggers, including the requirement that descriptive metadata must remain completely inert in runtime enforcement to avoid reintroducing an artificial rank hierarchy.
- Directly connects with other units covering `.agents/AGENT-SYSTEM.md`, `docs/orchestrator-routing-algorithm.md`, ADR-009, ADR-078, and downstream bridge exports (`scripts/openclaw_bridge.py`).

## Blocked or uncertain
none

## Time and size
Approximate source read: ~8,035 tokens (32,140 bytes across 1 file).
Approximate output written: ~3,075 tokens (12,301 bytes across 1 inventory card).
