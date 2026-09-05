---
unit: inv-rjm-1
phase: 1
package: rjm
session: 006
subagent_returned: complete
---

# Unit inv-rjm-1

## Files assigned
- [x] sources/rjm/.agents/AGENT-SYSTEM.md (53992 bytes, 1909 lines, sha256 c11a55e17a0f0d0eca7936fc3ba2f3a071fcedf37fcf1a462a65a77831259641)

## Outputs produced
- docs/analysis/inventory/rjm/agents-agent-system-md.md (16840 bytes)
- docs/analysis/inventory/rjm/_units/inv-rjm-1.md (2136 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `.agents/AGENT-SYSTEM.md` serves as the primary system-level architecture and operations manual for `rjm`.
- It defines 20 specialized agents, 4 primary agent roles (`strategic`, `coordinator`, `executor`, `support`), 7 workflow topologies (Quick Fix, Standard Development, Strategic Decision, Ideation, Impact Analysis, Learning Extraction, Spec Layer), routing matrices, steering file configuration, and quality gates.
- Several defects were documented:
  - `src/claude/spec-generator.md` is cataloged as an agent prompt file, but is actually implemented as a skill at `.claude/skills/spec-generator/SKILL.md`.
  - Double parent traversal `../../src/claude/orchestrator.md` from `.agents/` escapes repo root.
  - `.agents/roadmap/backlog.md` and `.agents/steering/csharp-patterns.md` do not exist.
  - Model assignment table lists `sonnet` for orchestrator, implementer, and critic, conflicting with `model: opus` in their respective prompt definitions.
  - Section numbering duplicates `2.5` for Strategy Agents and Agent Coordination.
  - Roles table lists an uncataloged `debug` agent as an executor example.

## Blocked or uncertain
none

## Time and size
Approximate source read: ~13,500 tokens (53,992 bytes).
Approximate output written: ~4,200 tokens (16,840 bytes in card + report).
