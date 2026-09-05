---
unit: inv-rjm-65
phase: 1
package: rjm
session: 004
subagent_returned: complete
---

# Unit inv-rjm-65

## Files assigned
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/agents/code-reviewer.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/agents/code-simplifier.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/agents/comment-analyzer.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/agents/critic.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/agents/debug.md`

## Outputs produced
- `docs/analysis/inventory/rjm/claude-agents-code-reviewer-md.md` (6602 bytes)
- `docs/analysis/inventory/rjm/claude-agents-code-simplifier-md.md` (4968 bytes)
- `docs/analysis/inventory/rjm/claude-agents-comment-analyzer-md.md` (4835 bytes)
- `docs/analysis/inventory/rjm/claude-agents-critic-md.md` (8237 bytes)
- `docs/analysis/inventory/rjm/claude-agents-debug-md.md` (4055 bytes)
- `docs/analysis/inventory/rjm/_divergence/claude-agents-code-reviewer-md--templates-agents-code-reviewer-shared-md.md` (4453 bytes)
- `docs/analysis/inventory/rjm/_divergence/claude-agents-code-simplifier-md--templates-agents-code-simplifier-shared-md.md` (2889 bytes)
- `docs/analysis/inventory/rjm/_divergence/claude-agents-comment-analyzer-md--templates-agents-comment-analyzer-shared-md.md` (2663 bytes)
- `docs/analysis/inventory/rjm/_divergence/claude-agents-critic-md--templates-agents-critic-shared-md.md` (6122 bytes)
- `docs/analysis/inventory/rjm/_divergence/claude-agents-debug-md--templates-agents-debug-shared-md.md` (2277 bytes)
- `docs/analysis/inventory/rjm/_units/inv-rjm-65.md` (unit report)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit inv-rjm-65 covers 5 Claude Code agent definitions under `.claude/agents/`:
  - `code-reviewer.md` (10695 bytes, 157 lines): Read-only code review specialist running on Haiku with high confidence threshold (>=80) and prompt injection detection.
  - `code-simplifier.md` (6182 bytes, 119 lines): Post-coding refinement specialist running on Sonnet with strict behavior preservation invariance.
  - `comment-analyzer.md` (6610 bytes, 112 lines): Comment accuracy auditor running on Sonnet with ranked triage precedence (Update > Remove > Preserve).
  - `critic.md` (20780 bytes, 258 lines): Pre-implementation adversarial plan and spec reviewer running on Opus with multi-persona evaluation (Naive Reader, Hostile Expert, Cynic) and Brandolini's Law burden shifting.
  - `debug.md` (2839 bytes, 73 lines): Systematic four-phase bug hunter running on Opus requiring concrete reproduction before fix implementation.
- Duplication ledger interactions:
  - All 5 assigned files are members of VARIANT pairs with corresponding `templates/agents/*.shared.md` files:
    - V15 (`.claude/agents/code-reviewer.md` ↔ `templates/agents/code-reviewer.shared.md`, 89% shared, 3 hunks)
    - V16 (`.claude/agents/critic.md` ↔ `templates/agents/critic.shared.md`, 89% shared, 3 hunks)
    - V17 (`.claude/agents/debug.md` ↔ `templates/agents/debug.shared.md`, 88% shared, 1 hunk)
    - V18 (`.claude/agents/code-simplifier.md` ↔ `templates/agents/code-simplifier.shared.md`, 88% shared, 1 hunk)
    - V20 (`.claude/agents/comment-analyzer.md` ↔ `templates/agents/comment-analyzer.shared.md`, 87% shared, 1 hunk)
  - Complete divergence cards for all 5 variant pairs have been created under `docs/analysis/inventory/rjm/_divergence/` with exact verbatim hunks matching `rjm-duplicates.md`, satisfying `coverage.ts` R11(b) requirements.
- Defects recorded via METHOD.md §4 checklist:
  - `missing-path` at `.claude/agents/critic.md:84`: cites `.claude/skills/decision-critic/references/critical-thinking-brandolinis-law.md` which does not exist (the actual file exists under `src/copilot-cli/skills/decision-critic/references/critical-thinking-brandolinis-law.md`).
  - `missing-path` at `.claude/agents/critic.md:46`: cites an internal wiki entry for regex token boundaries, but no `wiki/` directory exists in the repository.
  - `doc-drift` at `.claude/agents/comment-analyzer.md:111`: recommends next handoff to "pr-review agent", but no agent named `pr-review.md` exists in `.claude/agents/`.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~11,775 tokens (47,106 bytes, 719 lines across 5 files).
Approximate tokens of output written: ~12,200 tokens across 5 inventory cards, 5 divergence cards, and 1 unit report.
