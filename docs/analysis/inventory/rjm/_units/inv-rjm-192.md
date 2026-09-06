---
unit: inv-rjm-192
phase: 1
package: rjm
session: 007
subagent_returned: complete
---

# Unit inv-rjm-192

## Files assigned
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/docs/ideation-workflow.md
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/docs/installation.md
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/docs/markdown-linting.md
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/docs/orchestrator-routing-algorithm.md
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/docs/project-structure.md

## Outputs produced
- docs/analysis/inventory/rjm/docs-ideation-workflow-md.md (4133 bytes)
- docs/analysis/inventory/rjm/docs-installation-md.md (4267 bytes)
- docs/analysis/inventory/rjm/docs-markdown-linting-md.md (4236 bytes)
- docs/analysis/inventory/rjm/docs-orchestrator-routing-algorithm-md.md (6397 bytes)
- docs/analysis/inventory/rjm/docs-project-structure-md.md (3059 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `docs/ideation-workflow.md` details the pre-spec funnel leading directly into `/spec` (`docs/workflow-commands.md`), invoking `analyst`, `high-level-advisor`, `independent-thinker`, `critic`, `roadmap`, `explainer`, `task-decomposer`, `architect`, `devops`, `security`, and `qa`.
- `docs/orchestrator-routing-algorithm.md` documents the ADR-009 conflict resolution alignment where only `architect > implementer` is weighted (`CONFLICT_VOTE_WEIGHTS`), eliminating previous invented precedence tables (issue #5130, PR #5177), and confirms `high-level-advisor` as the escalation arbiter.
- `docs/project-structure.md` defines `.agents/` as the destination for plans/ADRs/session logs and `.serena/` for curated memories, while noting that `templates/agents/*.shared.md` is the source of truth for platform-generated agent files. Two `missing-path` defects were identified in `docs/project-structure.md`: `CRITICAL-CONTEXT.md` (line 19) and `test/` (line 54).
- `docs/markdown-linting.md` reflects ADR-001 requirements, with a minor legacy `doc-drift` referring to the repo as `vs-code-agents`.

## Blocked or uncertain
none

## Time and size
Approximate source read: 48,323 bytes (~12,200 tokens). Approximate output written: 22,092 bytes across 5 inventory cards (~5,600 tokens).
