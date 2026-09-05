---
unit: inv-rjm-5
phase: 1
package: rjm
session: 006
subagent_returned: complete
---

# Unit inv-rjm-5

## Files assigned
- [x] sources/rjm/.agents/architecture/ADR-005-powershell-only-scripting.md (9895 bytes, 260 lines)
- [x] sources/rjm/.agents/architecture/ADR-006-thin-workflows-testable-modules.md (25942 bytes, 445 lines)

## Outputs produced
- docs/analysis/inventory/rjm/agents-architecture-adr-005-powershell-only-scripting-md.md (6728 bytes)
- docs/analysis/inventory/rjm/agents-architecture-adr-006-thin-workflows-testable-modules-md.md (9979 bytes)
- docs/analysis/inventory/rjm/_units/inv-rjm-5.md (2477 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `.agents/architecture/ADR-005-powershell-only-scripting.md` established PowerShell as the sole scripting standard across the repository (.ps1, .psm1) to resolve token waste and testing fragmentation caused by agents repeatedly generating bash/Python during PR #60. It defined strict exception procedures with path-safety (CWE-22) validation for SkillForge developer tools and Anthropic SDK hooks. On 2026-01-17, ADR-005 was superseded by ADR-042 (Python Migration Strategy, in unit inv-rjm-6) as Python became an indispensable ecosystem dependency for AI/ML tools.
- `.agents/architecture/ADR-006-thin-workflows-testable-modules.md` established the thin-workflows architecture, restricting GitHub Actions workflow YAML files to thin orchestration (<100 lines) while isolating business and parsing logic in testable modules covered by unit tests (≥80% coverage) to shorten the slow OODA loop from minutes in CI to seconds locally. On 2026-04-28, it was amended to permit pure-data YAML configuration for multi-tool build pipelines (REQ-003) under seven strict conditions (including CWE-22, CWE-502, CWE-1333 defenses and schema validation). On 2026-04-29, Round 3 amendment further removed the rules severity gate.

## Blocked or uncertain
none

## Time and size
Approximate source tokens: ~8,960 tokens (35,837 bytes across 2 files).
Approximate output tokens: ~4,600 tokens (18,350 bytes across 2 cards and 1 unit report).
