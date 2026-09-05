---
unit: inv-addy-39
phase: 1
package: addy
session: 001
subagent_returned: complete
---

# Unit inv-addy-39

## Files assigned
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy/skills/ci-cd-and-automation/SKILL.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy/skills/code-review-and-quality/SKILL.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy/skills/code-simplification/SKILL.md`

## Outputs produced
- `docs/analysis/inventory/addy/skills-ci-cd-and-automation-skill-md.md` (7246 bytes)
- `docs/analysis/inventory/addy/skills-code-review-and-quality-skill-md.md` (8797 bytes)
- `docs/analysis/inventory/addy/skills-code-simplification-skill-md.md` (5956 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit inv-addy-39 covers three core engineering skills in the Addy package: `ci-cd-and-automation` (placed in `addy:Ship`), `code-review-and-quality` (placed in `addy:Review`), and `code-simplification` (placed in `addy:Review`).
- Inter-skill and cross-unit relationships:
  - `skills/ci-cd-and-automation/SKILL.md` invokes `debugging-and-error-recovery` on test failures, and is invoked by `CLAUDE.md`, `README.md`, `skills/using-agent-skills/SKILL.md`, and `skills/constraint-driven-development/SKILL.md`.
  - `skills/code-review-and-quality/SKILL.md` invokes `security-and-hardening`, `performance-optimization`, `references/security-checklist.md`, and `references/performance-checklist.md`. It is invoked by slash commands `/review` (`commands/review.toml`), `/code-simplify` (`commands/code-simplify.toml`), the `code-reviewer` agent (`agents/code-reviewer.md`), and referenced across `skills/git-workflow-and-versioning/SKILL.md`, `skills/using-agent-skills/SKILL.md`, `skills/constraint-driven-development/SKILL.md`, `references/definition-of-done.md`, and `references/orchestration-patterns.md`.
  - `skills/code-simplification/SKILL.md` is invoked by `/code-simplify` (`commands/code-simplify.toml`), `using-agent-skills`, `definition-of-done.md`, and referenced by `code-review-and-quality`. It adapts the Anthropic Claude Code Simplifier plugin concept into a model-agnostic workflow.
- None of this unit's files appear in `docs/analysis/manifest/addy-duplicates.md` (no duplicate or variant pairs).
- All three skills ship no standalone scripts; their script sections are recorded as `none`.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~10,400 tokens (45,432 bytes across 3 files); approximate tokens of output written: ~5,100 tokens (21,999 bytes across 3 cards).
