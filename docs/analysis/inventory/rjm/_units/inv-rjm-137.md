---
unit: inv-rjm-137
phase: 1
package: rjm
session: 006
subagent_returned: complete
---

# Unit inv-rjm-137

## Files assigned
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/pre-mortem/references/mental-models-galls-law.md
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/pre-mortem/references/strategy-ooda-loop.md
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/pre-mortem/scripts/pre-mortem.py
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/pre-mortem/SKILL.md
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/pre-mortem/templates/risk-inventory.md

## Outputs produced
- docs/analysis/inventory/rjm/claude-skills-pre-mortem-references-mental-models-galls-law-md.md (3372 bytes)
- docs/analysis/inventory/rjm/claude-skills-pre-mortem-references-strategy-ooda-loop-md.md (3488 bytes)
- docs/analysis/inventory/rjm/claude-skills-pre-mortem-scripts-pre-mortem-py.md (5544 bytes)
- docs/analysis/inventory/rjm/claude-skills-pre-mortem-skill-md.md (7144 bytes)
- docs/analysis/inventory/rjm/claude-skills-pre-mortem-templates-risk-inventory-md.md (4045 bytes)
- docs/analysis/inventory/rjm/_units/inv-rjm-137.md (4722 bytes)

## Scripts executed
- `.claude/skills/pre-mortem/scripts/pre-mortem.py`, `python3 sources/rjm/.claude/skills/pre-mortem/scripts/pre-mortem.py --inventory-path nonexistent.md`, exit code 1
- `.claude/skills/pre-mortem/scripts/pre-mortem.py`, `python3 sources/rjm/.claude/skills/pre-mortem/scripts/pre-mortem.py --inventory-path sources/rjm/.claude/skills/pre-mortem/templates/risk-inventory.md --validate`, exit code 10
- `.claude/skills/pre-mortem/scripts/pre-mortem.py`, `python3 sources/rjm/.claude/skills/pre-mortem/scripts/pre-mortem.py --inventory-path <(cat << 'EOF' ... EOF) --validate`, exit code 0
- `.claude/skills/pre-mortem/scripts/pre-mortem.py`, `python3 sources/rjm/.claude/skills/pre-mortem/scripts/pre-mortem.py --bad-flag`, exit code 2 (argparse error)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit `inv-rjm-137` completes the full inventory for the `pre-mortem` skill within `rjm` (5 source files: 2 references, 1 script, 1 skill definition, 1 template; 28,358 total bytes).
- Lifecycle integration: `pre-mortem` is a core cross-phase risk identification instrument. It is directly invoked:
  - In `rjm:build` via `.claude/commands/build.md:36` before making code changes ("A 5-minute pre-mortem is cheaper than a 10-round bot review").
  - In `rjm:spec` via `.claude/commands/spec.md:165` and `spec-prior-art-schema.md:297` (subagent critic explicitly invokes `pre-mortem` to augment PRD Failure Modes).
  - In `rjm:plan` via `.claude/commands/plan.md:24` (analyst subagent runs pre-mortem on proposed plans).
  - In `rjm:review` via `.claude/skills/review/references/decision-rigor.md:52`.
- Gating and defect notes:
  - `pre-mortem.py` enforces section headers, score validity (1-5), and the presence of mitigations for Critical and High risks (score >= 8). However, line 105 allows any single `**Prevention:**` line to satisfy `has_mitigation`, enabling documents missing `Detection` or `Response` to exit 0. `SKILL.md:290` explicitly acknowledges this gap and prescribes an audit rule requiring manual verification of the full triad.
  - Argparse exits with code 2 on missing required or invalid options, contradicting script docstring and SKILL.md claims that exit code 1 represents invalid arguments.
  - Related skills table in `SKILL.md:319-320` references `milestone-planner` and `architect`, but both exist solely as `.claude/agents/*.md` rather than `.claude/skills/*/SKILL.md`.
  - Both reference files (`mental-models-galls-law.md:2` and `strategy-ooda-loop.md:2`) cite frontmatter paths under `wiki/concepts/`, which do not exist in the repository.
  - Template `risk-inventory.md` has no direct links/invocations from `SKILL.md` (which embeds an inline copy), rendering the template file an orphan.
- Duplication ledger: None of this unit's 5 files appear in `docs/analysis/manifest/rjm-duplicates.md`. No divergence cards were required.

## Blocked or uncertain
none

## Time and size
- Approximate tokens of source read: ~7,100 tokens (28,358 bytes across 5 assigned files).
- Approximate tokens of output written: ~6,200 tokens across 5 inventory cards and 1 work-unit report.
