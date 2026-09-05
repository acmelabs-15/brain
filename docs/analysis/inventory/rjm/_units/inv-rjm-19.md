---
unit: inv-rjm-19
phase: 1
package: rjm
session: 003
subagent_returned: complete
---

# Unit inv-rjm-19

## Files assigned
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.agents/architecture/ADR-052-template-strategy.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.agents/architecture/ADR-053-adr-exception-criteria.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.agents/architecture/ADR-054-local-security-scanning.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.agents/architecture/ADR-055-github-actions-runner-selection.md`

## Outputs produced
- `docs/analysis/inventory/rjm/agents-architecture-adr-052-template-strategy-md.md` (7629 bytes)
- `docs/analysis/inventory/rjm/agents-architecture-adr-053-adr-exception-criteria-md.md` (4803 bytes)
- `docs/analysis/inventory/rjm/agents-architecture-adr-054-local-security-scanning-md.md` (6115 bytes)
- `docs/analysis/inventory/rjm/agents-architecture-adr-055-github-actions-runner-selection-md.md` (7874 bytes)
- `docs/analysis/inventory/rjm/_units/inv-rjm-19.md` (2865 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- ADR-052 (Claude-first template strategy) supersedes ADR-036 in governance, but ADR-036 remains the operative synchronization procedure until ADR-052's migration plan merges (`implemented: false`). Downstream generators like `build/generate_agent_catalog.py` still read `templates/agents/` as their system of record.
- ADR-053 establishes the Chesterton's Fence governance criteria requiring explicit rationale quotes for ADR exceptions, verified in CI by the architect agent (`src/claude/architect.md`).
- ADR-054 amends internal skill scanning (`.claude/skills/security-scan/scripts/scan_vulnerabilities.py`) to narrow away from CWE-22 (path traversal) due to regex false positives on `Path(__file__)`, delegating path traversal to CodeQL in CI while retaining CWE-78 (command injection) locally.
- ADR-055 establishes the ARM-first runner policy (`ubuntu-24.04-arm`) and notes complex provenance: it was renumbered from ADR-032 via PR #1604, superseding ADR-024 and ADR-025, and minting the `# ADR-055 Exception:` marker to replace legacy retired markers (`# ADR-032 Exception:`, `# ADR-024 Exception:`, `# ADR-014 Exception:`).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~10500 tokens (47448 bytes across 4 source files). Approximate tokens of output written: ~6500 tokens across 4 inventory cards and this unit report.
