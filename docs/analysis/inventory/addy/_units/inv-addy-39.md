---
unit: inv-addy-39
phase: 1
package: addy
session: 005
subagent_returned: complete
---

# Unit inv-addy-39

## Files assigned
- [x] sources/addy/skills/ci-cd-and-automation/SKILL.md (11332 bytes, 391 lines)
- [x] sources/addy/skills/code-review-and-quality/SKILL.md (20555 bytes, 397 lines)
- [x] sources/addy/skills/code-simplification/SKILL.md (13545 bytes, 332 lines)

## Outputs produced
- docs/analysis/inventory/addy/skills-ci-cd-and-automation-skill-md.md (8555 bytes)
- docs/analysis/inventory/addy/skills-code-review-and-quality-skill-md.md (9739 bytes)
- docs/analysis/inventory/addy/skills-code-simplification-skill-md.md (6434 bytes)
- docs/analysis/inventory/addy/_units/inv-addy-39.md (2735 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `skills/ci-cd-and-automation/SKILL.md` defines the core CI/CD pipeline automation workflow in the `addy:Ship` phase. It pairs with the external documentation card `external/ci-cd-and-automation.md` (unit inv-addy-14), evals test cases in `evals/cases/ci-cd-and-automation.json` (unit inv-addy-4), and evals fixtures in unit inv-addy-7. It integrates with `debugging-and-error-recovery` (inv-addy-40) for feeding CI failure output back into agent prompts.
- `skills/code-review-and-quality/SKILL.md` defines the five-axis code review methodology for the `addy:Review` phase, invoked by slash commands `/review` (`commands/review.toml` and `.claude/commands/review.md` in inv-addy-1) and the `code-reviewer` agent (`agents/code-reviewer.md` in inv-addy-2). It loads external reference checklists `references/security-checklist.md` and `references/performance-checklist.md` (both in inv-addy-3), and coordinates with peer review skills `code-simplification` (also in this unit), `security-and-hardening` (inv-addy-44), and `performance-optimization` (inv-addy-43).
- `skills/code-simplification/SKILL.md` provides the behavior-preserving complexity reduction methodology in `addy:Review`, invoked by `/code-simplify` (`commands/code-simplify.toml` and `.claude/commands/code-simplify.md` in inv-addy-1). It is paired with `code-review-and-quality` for reviewing simplified changes.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~11,358 tokens (45,432 bytes across 3 files)
Approximate tokens of output written: ~6,850 tokens (27,276 bytes across 4 deliverables)
