---
unit: inv-rjm-24
phase: 1
package: rjm
session: 003
subagent_returned: complete
---

# Unit inv-rjm-24

## Files assigned
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.agents/architecture/ADR-064-commands-to-skills-migration.md
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.agents/architecture/ADR-065-orchestrator-as-router.md
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.agents/architecture/ADR-066-hook-fail-open-reconciliation.md

## Outputs produced
- docs/analysis/inventory/rjm/agents-architecture-adr-064-commands-to-skills-migration-md.md (7389 bytes)
- docs/analysis/inventory/rjm/agents-architecture-adr-065-orchestrator-as-router-md.md (5835 bytes)
- docs/analysis/inventory/rjm/agents-architecture-adr-066-hook-fail-open-reconciliation-md.md (7878 bytes)
- docs/analysis/inventory/rjm/_units/inv-rjm-24.md (unit report)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- ADR-064 establishes why `/review` was already a skill while other lifecycle stages (`/spec`, `/plan`, `/build`, `/test`, `/ship`) were initially `.claude/commands/*.md`, and sets the architectural precedent to migrate all commands to skills for cross-harness parity (Claude Code and GitHub Copilot CLI).
- ADR-065 establishes the architectural thesis from "LLMs as Ghosts not Animals", replacing anthropomorphic supervisory prompts with deterministic routing, sub-agent `success_criterion` frontmatter schemas, and code-level retries.
- ADR-066 provides comprehensive reconciliation of hook failure semantics across ADR-008, ADR-033, ADR-035, and ADR-062, reversing the universal fail-open default following incident #2205 (33-day customer outage). It defines a three-tier hook taxonomy (invariant gates, integration points, advisory hooks) and exposes critical harness discrepancies: Claude Code PreToolUse blocking events do not block on exit 1, requiring exit 2 for fail-closed behavior.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~11375 tokens (45500 bytes).
Approximate tokens of output written: ~5925 tokens (23700 bytes).
