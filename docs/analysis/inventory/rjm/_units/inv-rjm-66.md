---
unit: inv-rjm-66
phase: 1
package: rjm
session: 004
subagent_returned: complete
---

# Unit inv-rjm-66

## Files assigned
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/agents/dependency-auditor.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/agents/devops.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/agents/explainer.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/agents/high-level-advisor.md`

## Outputs produced
- `docs/analysis/inventory/rjm/claude-agents-dependency-auditor-md.md` (5128 bytes)
- `docs/analysis/inventory/rjm/claude-agents-devops-md.md` (7773 bytes)
- `docs/analysis/inventory/rjm/claude-agents-explainer-md.md` (4908 bytes)
- `docs/analysis/inventory/rjm/claude-agents-high-level-advisor-md.md` (7554 bytes)
- `docs/analysis/inventory/rjm/_divergence/claude-agents-dependency-auditor-md--templates-agents-dependency-auditor-shared-md.md` (1701 bytes)
- `docs/analysis/inventory/rjm/_divergence/claude-agents-explainer-md--templates-agents-explainer-shared-md.md` (1665 bytes)
- `docs/analysis/inventory/rjm/_divergence/claude-agents-high-level-advisor-md--templates-agents-high-level-advisor-shared-md.md` (4661 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit inv-rjm-66 covers four key specialized agents in package `rjm`:
  - `dependency-auditor`: supply-chain security scanner covering .NET, npm, pip/uv, and cargo ecosystems with release gating exit codes (Exit 0, 1, 3).
  - `devops`: CI/CD automation specialist governing 12-factor alignment, GitHub Actions best practices, build time targets, and local CI simulation.
  - `explainer`: technical documentation specialist targeting junior developers (Grade 9 reading level) and INVEST user stories with a mandatory prose self-check audit.
  - `high-level-advisor`: strategic advisor that delivers ruthless single-P0 verdicts and untrusted-data boundaries to resolve decision paralysis and agent conflict.
- Duplication ledger variants resolved:
  - VARIANT V7 (`.claude/agents/dependency-auditor.md` ↔ `templates/agents/dependency-auditor.shared.md`, 94% shared): Divergence card written with 1 hunk (`harness-substitution`).
  - VARIANT V9 (`.claude/agents/explainer.md` ↔ `templates/agents/explainer.shared.md`, 93% shared): Divergence card written with 1 hunk (`harness-substitution`).
  - VARIANT V23 (`.claude/agents/high-level-advisor.md` ↔ `templates/agents/high-level-advisor.shared.md`, 86% shared): Divergence card written with 6 hunks (3 `harness-substitution`, 3 `content`).
- Common defects across agents:
  - `devops.md` (lines 31, 202) and `high-level-advisor.md` (lines 82, 160) both cite `.claude/skills/memory/scripts/search_memory.py`, which is missing from `.claude/skills/` (lives in `src/copilot-cli/skills/memory/scripts/search_memory.py`).
  - `explainer.md` (line 16) cites `.claude/skills/prose-self-check/SKILL.md`, which is missing from `.claude/skills/` (lives in `src/copilot-cli/skills/prose-self-check/`).

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~9,250 tokens (37,014 bytes across 4 source files, plus variant template inspections); approximate tokens of output written: ~8,400 tokens (33,390 bytes across 7 inventory and divergence deliverables, plus unit report).
