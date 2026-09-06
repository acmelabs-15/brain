---
unit: inv-rjm-98
phase: 1
package: rjm
session: 005
subagent_returned: complete
---

# Unit inv-rjm-98

## Files assigned
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/chaos-experiment/references/chaos-engineering-principles.md` (2454 bytes) — read in full
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/chaos-experiment/references/slo-sli-sla-reference.md` (2362 bytes) — read in full
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/chaos-experiment/scripts/CLAUDE.md` (170 bytes) — read in full
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/chaos-experiment/scripts/generate_experiment.py` (8678 bytes) — read in full
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/chaos-experiment/scripts/validate_experiment.py` (12417 bytes) — read in full
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/chaos-experiment/SKILL.md` (13080 bytes) — read in full
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/chaos-experiment/templates/experiment-template.md` (7127 bytes) — read in full

## Outputs produced
- `docs/analysis/inventory/rjm/claude-skills-chaos-experiment-references-chaos-engineering-principles-md.md` (4919 bytes)
- `docs/analysis/inventory/rjm/claude-skills-chaos-experiment-references-slo-sli-sla-reference-md.md` (3837 bytes)
- `docs/analysis/inventory/rjm/claude-skills-chaos-experiment-scripts-claude-md.md` (2722 bytes)
- `docs/analysis/inventory/rjm/claude-skills-chaos-experiment-scripts-generate-experiment-py.md` (6324 bytes)
- `docs/analysis/inventory/rjm/claude-skills-chaos-experiment-scripts-validate-experiment-py.md` (7902 bytes)
- `docs/analysis/inventory/rjm/claude-skills-chaos-experiment-skill-md.md` (8852 bytes)
- `docs/analysis/inventory/rjm/claude-skills-chaos-experiment-templates-experiment-template-md.md` (8056 bytes)
- `docs/analysis/inventory/rjm/_units/inv-rjm-98.md` (unit report)

## Scripts executed
- `.claude/skills/chaos-experiment/scripts/generate_experiment.py`:
  - `python3 sources/rjm/.claude/skills/chaos-experiment/scripts/generate_experiment.py --help` — exit 0
  - `python3 sources/rjm/.claude/skills/chaos-experiment/scripts/generate_experiment.py --name "API Gateway Resilience" --dry-run` — exit 0
- `.claude/skills/chaos-experiment/scripts/validate_experiment.py`:
  - `python3 sources/rjm/.claude/skills/chaos-experiment/scripts/validate_experiment.py --help` — exit 0
  - `python3 sources/rjm/.claude/skills/chaos-experiment/scripts/validate_experiment.py sources/rjm/.claude/skills/chaos-experiment/templates/experiment-template.md` — exit 0 (PASS, score: 80/100)
  - `python3 sources/rjm/.claude/skills/chaos-experiment/scripts/validate_experiment.py sources/rjm/.claude/skills/chaos-experiment/templates/experiment-template.md --strict` — exit 10 (FAIL, score: 80/100, 62 unresolved template placeholder errors)
  - `python3 sources/rjm/.claude/skills/chaos-experiment/scripts/validate_experiment.py nonexistent.md` — exit 10 (FileNotFoundError treated as validation error)
- Verification scripts executed in repo root:
  - `bun scripts/synthesis/quote-check.ts <7 cards>` — exit 0 (122 PASS, 0 FAIL)
  - `bun scripts/synthesis/coverage.ts` — exit 0 (clean, 0 failures)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- The `chaos-experiment` skill provides resilience testing capabilities invoked during `rjm:review` when PR changes introduce new failure modes (referenced from `.claude/skills/review/references/reliability.md:52`).
- Frontmatter in both reference files (`references/chaos-engineering-principles.md:2` and `references/slo-sli-sla-reference.md:2`) declares `source: wiki/concepts/Reliability/...`, but no `wiki/` directory exists in `sources/rjm` (`missing-path`).
- `validate_experiment.py` documents exit code 1 as "General failure", but line 417 `return 1` is unreachable dead code because all non-success outcomes populate `errors` and divert to line 415 `return 10` (`exit-code-mismatch`).
- `scripts/CLAUDE.md` is an exact byte duplicate (170 bytes, hash `dbfec62ab652ff10`) of 8 other claude-mem stubs across `sources/rjm`, captured in duplication ledger EXACT row 5.

## Blocked or uncertain
none

## Time and size
- Approximate tokens of source read: ~11,572 tokens (46,288 bytes)
- Approximate tokens of output written: ~11,000 tokens (~44,000 bytes)
