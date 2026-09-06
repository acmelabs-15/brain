---
unit: inv-rjm-151
phase: 1
package: rjm
session: 006
subagent_returned: complete
---

# Unit inv-rjm-151

## Files assigned
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/review/references/decision-rigor.md
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/review/references/devops.md
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/review/references/observability.md
- [x] /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/review/references/qa.md

## Outputs produced
- docs/analysis/inventory/rjm/claude-skills-review-references-decision-rigor-md.md (9196 bytes)
- docs/analysis/inventory/rjm/claude-skills-review-references-devops-md.md (9989 bytes)
- docs/analysis/inventory/rjm/claude-skills-review-references-observability-md.md (7775 bytes)
- docs/analysis/inventory/rjm/claude-skills-review-references-qa-md.md (8929 bytes)
- docs/analysis/inventory/rjm/_units/inv-rjm-151.md (3701 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit `inv-rjm-151` is part 2 of the `.claude/skills/review` skill inventory, covering 4 of the 11 Stage-2 canonical review axis prompts (`decision-rigor.md`, `devops.md`, `observability.md`, and `qa.md`), totalling 49,688 source bytes. Sibling units cover part 1 (`inv-rjm-150`: `agent-safety.md`, `analyst.md`, `architect.md`, `code-quality.md`), part 3 (`inv-rjm-152`: `reliability.md`, `roadmap.md`, `security.md`, `spec-compliance.md`), part 4 (`inv-rjm-153`: `scripts/validate_findings_scope.py`, `scripts/validate_review_marker.py`), and part 5 (`inv-rjm-154`: `SKILL.md`).
- Architectural alignment:
  - All four references implement the canonical Stage-2 review axis contract specified in `.claude/skills/review/SKILL.md` (lines 25-38, 77-95). Each reference is discovered dynamically from `.claude/skills/review/references/*.md` without hardcoding in the skill body.
  - All four files share a mandatory manipulation-resistance control (`Context Mode Enforcement`, lines 12-35 in each file) that forbids `PASS` whenever `CONTEXT_MODE` is not `full` (i.e. `summary` or `partial`), preventing PR authors from evading review by triggering diff truncation.
  - All four files mandate dual output: human-readable analysis ending with a parseable `Final Verdict: [TOKEN]` line (regex-matched by `.claude/lib/ai_review_common/verdict.py` and merged by `merge_verdicts`), followed by a fenced JSON block matching `.agents/schemas/pr-quality-gate-output.schema.json`.
  - Vendor portability: All four files include an HTML comment declaring that upstream-only dependencies (`.agents/governance/AI-REVIEW-MODEL-POLICY.md` and `.agents/schemas/pr-quality-gate-output.schema.json`) do not block execution in vendored installs because the contracts and fallback schemas are provided inline.
- Duplication ledger: None of the 4 files in this unit appear in `docs/analysis/manifest/rjm-duplicates.md` (no exact aliases or variant divergence cards required).

## Blocked or uncertain
none

## Time and size
- Approximate tokens of source read: ~12,500 tokens (49,688 bytes across 4 assigned files) plus ~6,100 tokens of context read (`.claude/skills/review/SKILL.md`, 24,362 bytes).
- Approximate tokens of output written: ~9,000 tokens (35,889 bytes across 4 inventory cards + unit report).
