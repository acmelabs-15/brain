---
unit: inv-rjm-17
phase: 1
package: rjm
session: 003
subagent_returned: complete
---

# Unit inv-rjm-17

## Files assigned
- [x] `.agents/architecture/ADR-044-copilot-cli-frontmatter-compatibility.md`
- [x] `.agents/architecture/ADR-045-framework-extraction-via-plugin-marketplace.md`
- [x] `.agents/architecture/ADR-046-planning-agent-rename.md`

## Outputs produced
- `docs/analysis/inventory/rjm/agents-architecture-adr-044-copilot-cli-frontmatter-compatibility-md.md` (8127 bytes)
- `docs/analysis/inventory/rjm/agents-architecture-adr-045-framework-extraction-via-plugin-marketplace-md.md` (6852 bytes)
- `docs/analysis/inventory/rjm/agents-architecture-adr-046-planning-agent-rename-md.md` (5003 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- ADR-044 documents the response to an upstream Copilot CLI 0.0.398+ frontmatter validation regression that broke CI multi-agent reviews. The record was later superseded in full by ADR-094 (`.agents/architecture/ADR-094-govern-copilot-cli-compatibility.md`).
- ADR-045 documents the architecture and 4-plugin design (`core-agents`, `framework-skills`, `session-protocol`, `quality-gates`) for extracting the reusable multi-agent framework into `rjmurillo/awesome-ai`, conditioned on prior completion of ADR-042 (PowerShell-to-Python migration).
- ADR-046 renamed three planning agents (`planner` → `milestone-planner`, `task-generator` → `task-decomposer`, `task-planner` → `backlog-generator`) following an action-object taxonomy, while preserving `.claude/skills/planner/` intact.

## Blocked or uncertain
none

## Time and size
Approximate source read: 38431 bytes (~9608 tokens). Approximate output written: 19982 bytes (~4995 tokens) across 3 inventory cards, plus unit report.
