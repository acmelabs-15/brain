---
unit: inv-rjm-86
phase: 1
package: rjm
session: 005
subagent_returned: complete
---

# Unit inv-rjm-86

## Files assigned
- [x] sources/rjm/.claude/skills/ai-agents-research-frontier/SKILL.md
- [x] sources/rjm/.claude/skills/ai-agents-research-methodology/SKILL.md

## Outputs produced
- docs/analysis/inventory/rjm/claude-skills-ai-agents-research-frontier-skill-md.md (11946 bytes)
- docs/analysis/inventory/rjm/claude-skills-ai-agents-research-methodology-skill-md.md (15180 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `rjm:ai-agents-research-frontier` and `rjm:ai-agents-research-methodology` establish the pre-spec research lifecycle and problem prioritization that feeds into the lifecycle commands (specifically preceding `/spec` via the `buy-vs-build-framework` Quick tier capability gate).
- PR #1989 retrospective (`.agents/retrospective/2026-05-10-pr-1989-recursive-failure.md`) is a foundational anchor artifact across both skills, illustrating how unverified root-cause assumptions and uncalibrated detector thresholds cause compound failures.
- Both skills accurately note the deletion of the `EVENT=` telemetry emitter (`push_guard_base.py`) and guard maturity tier classifier under ADR-084 (issue #5154), cautioning against assuming an automated guard evolution loop exists.
- Both skills enforce verification-based governance where every requirement and claim must leave an inspectable artifact rather than relying on assertion or model consensus.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~9345 tokens (37383 bytes); approximate tokens of output written: ~6780 tokens (27126 bytes).
