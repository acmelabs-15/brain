---
unit: inv-rjm-107
phase: 1
package: rjm
session: 005
subagent_returned: complete
---

# Unit inv-rjm-107

## Files assigned
- [x] `.claude/skills/context-optimizer/references/rule-audit-procedure.md`
- [x] `.claude/skills/context-optimizer/references/vibe-engineering.md`

## Outputs produced
- `docs/analysis/inventory/rjm/claude-skills-context-optimizer-references-rule-audit-procedure-md.md` (13773 bytes)
- `docs/analysis/inventory/rjm/claude-skills-context-optimizer-references-vibe-engineering-md.md` (6928 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `.claude/skills/context-optimizer/references/vibe-engineering.md` references the 7-step interaction protocol from Google Chrome Engineering and Addy Osmani's `agent-skills` repository, connecting `rjm` to `addy` in the lifecycle synthesis.
- `.claude/skills/context-optimizer/references/rule-audit-procedure.md` provides the empirical audit procedure and eval test harness specifications that operationalize the doctrine defined in `model-context-doctrine.md` (part 1 of this skill) and connects to `rule-audit-evidence.md`, `rule-audit-instrument.md`, and `rule-audit-parser-forensics.md` (part 2 of this skill).
- The procedure establishes an important lifecycle distinction: always-on context changes require replicated empirical eval verification (sign tests over fixed 4 runs on Opus 5 and Sol 5.6), whereas authoring guidance is a design decision that does not require model evals.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~9,250 tokens (39,637 bytes across 2 source files, plus 18,729 bytes of parent SKILL.md read for context).
Approximate tokens of output written: ~4,800 tokens (20,701 bytes across 2 inventory cards, plus unit report).
