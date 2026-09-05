---
unit: inv-rjm-16
phase: 1
package: rjm
session: 003
subagent_returned: complete
---

# Unit inv-rjm-16

## Files assigned
- [x] `.agents/architecture/ADR-041-codeql-integration.md`
- [x] `.agents/architecture/ADR-042-python-migration-strategy.md`
- [x] `.agents/architecture/ADR-043-scoped-tool-execution.md`

## Outputs produced
- `docs/analysis/inventory/rjm/agents-architecture-adr-041-codeql-integration-md.md` (9236 bytes)
- `docs/analysis/inventory/rjm/agents-architecture-adr-042-python-migration-strategy-md.md` (7978 bytes)
- `docs/analysis/inventory/rjm/agents-architecture-adr-043-scoped-tool-execution-md.md` (7082 bytes)
- `docs/analysis/inventory/rjm/_units/inv-rjm-16.md` (2168 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- ADR-041 established a multi-tier CodeQL integration strategy with a 6-month re-evaluation clause; on 2026-07-21, an amendment formally retired Tier 3 (automatic PostToolUse hook) because it was dead code and unregistered in active dispatch surfaces.
- ADR-042 superseded ADR-005 (PowerShell-only scripting) to mandate Python 3.10+ with `uv` for internal automation, while Amendment 1 scoped the mandate to internal automation and permitted TypeScript for external npm distribution surfaces (`@rjmurillo/ai-agents`).
- ADR-043 established scoped tool execution via `git diff` to prevent repository-wide formatting runs from polluting PRs (e.g. PR #908 bundling 53 unrelated memory files). An appended Correction Note (Issue #4401) clarified that `--no-globs` does not override `ignores`, referencing the active Python wrapper `scripts/validation/pre_pr.py --markdown-lint-only`.

## Blocked or uncertain
none

## Time and size
Approximate source read: 39,705 bytes (~9,900 tokens). Approximate output written: ~26,000 bytes (~6,500 tokens).
