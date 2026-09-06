---
unit: inv-rjm-99
phase: 1
package: rjm
session: 005
subagent_returned: complete
---

# Unit inv-rjm-99

## Files assigned
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/CLAUDE.md`

## Outputs produced
- `docs/analysis/inventory/rjm/claude-skills-claude-md.md` (7865 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit inv-rjm-99 covers `.claude/skills/CLAUDE.md`, the directory-level conventions file automatically loaded by Claude Code when working in `.claude/skills/`.
- Architectural significance:
  - Establishes frontmatter schemas, prompt size ceilings (warning at 300 lines, error at 501+ lines), progressive disclosure patterns, and model selection policies (defaulting to harness-inherited models, requiring cost rationale for `haiku` rolling alias per ADR-080).
  - Contains significant historical documentation drift regarding scripting languages: still documents PowerShell modules (`.psm1`), PowerShell scripts (`.ps1`), and Pester tests (`.Tests.ps1`) for skills, despite repository-wide migration to Python-first per ADR-042 (confirmed by `scripts/AGENTS.md:14-19` and zero `.ps1`/`.psm1` files existing in `.claude/skills/`).
  - Omits prompt byte ceiling (target 20,480 bytes, warn 12,288 bytes, error 24,576 bytes) enforced by `scripts/validation/skill_size.py:10-12`.
- Not in duplication ledger (`docs/analysis/manifest/rjm-duplicates.md`); no divergence card required.

## Blocked or uncertain
none

## Time and size
Source read: 4296 bytes (~1074 tokens). Outputs written: 7865 bytes (~1966 tokens) for inventory card, plus unit report.
