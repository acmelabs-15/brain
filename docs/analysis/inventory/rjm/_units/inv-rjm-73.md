---
unit: inv-rjm-73
phase: 1
package: rjm
session: 004
subagent_returned: complete
---

# Unit inv-rjm-73

## Files assigned
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/agents/security/references/powershell-security-checklist.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/agents/security/references/threat-model-template.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/agents/silent-failure-hunter.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/agents/skillbook.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/agents/task-decomposer.md`
- [x] `/Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/agents/type-design-analyzer.md`

## Outputs produced
- `docs/analysis/inventory/rjm/claude-agents-security-references-powershell-security-checklist-md.md` (5319 bytes)
- `docs/analysis/inventory/rjm/claude-agents-security-references-threat-model-template-md.md` (3132 bytes)
- `docs/analysis/inventory/rjm/claude-agents-silent-failure-hunter-md.md` (4883 bytes)
- `docs/analysis/inventory/rjm/claude-agents-skillbook-md.md` (3872 bytes)
- `docs/analysis/inventory/rjm/claude-agents-task-decomposer-md.md` (5209 bytes)
- `docs/analysis/inventory/rjm/claude-agents-type-design-analyzer-md.md` (4486 bytes)
- `docs/analysis/inventory/rjm/_divergence/claude-agents-skillbook-md--templates-agents-skillbook-shared-md.md` (2727 bytes)
- `docs/analysis/inventory/rjm/_divergence/claude-agents-silent-failure-hunter-md--templates-agents-silent-failure-hunter-shared-md.md` (2953 bytes)
- `docs/analysis/inventory/rjm/_divergence/claude-agents-type-design-analyzer-md--templates-agents-type-design-analyzer-shared-md.md` (3832 bytes)
- `docs/analysis/inventory/rjm/_divergence/claude-agents-task-decomposer-md--templates-agents-task-decomposer-shared-md.md` (8270 bytes)

## Scripts executed
none

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- Unit inv-rjm-73 analyzes 6 files from `.claude/agents/` in package `rjm` comprising 43,759 bytes and 1,003 lines across security references and specialized development/review agents.
- Four files have entries in the duplication ledger (`docs/analysis/manifest/rjm-duplicates.md`):
  - `.claude/agents/skillbook.md` ↔ `templates/agents/skillbook.shared.md` (V2, 95% shared, 1 hunk): frontmatter mapping to multi-platform toolsets (`tools_vscode`, `tools_copilot`).
  - `.claude/agents/silent-failure-hunter.md` ↔ `templates/agents/silent-failure-hunter.shared.md` (V11, 92% shared, 1 hunk): frontmatter mapping to multi-platform toolsets.
  - `.claude/agents/type-design-analyzer.md` ↔ `templates/agents/type-design-analyzer.shared.md` (V14, 91% shared, 2 hunks): frontmatter mapping and whitespace spacing in ratings block.
  - `.claude/agents/task-decomposer.md` ↔ `templates/agents/task-decomposer.shared.md` (V22, 86% shared, 6 hunks): frontmatter mapping, Claude Code tools section inclusion, Memory Protocol placement, Notes field in Task Definition Format, Mermaid syntax in Dependency Graph, and Execution Mindset section placement.
- Defects discovered via METHOD.md §4 checklist:
  - `missing-path` at `.claude/agents/skillbook.md:118` — References `scripts/Validate-MemoryIndex.ps1` which is not present in the repository.
  - `doc-drift` at `.claude/agents/security/references/threat-model-template.md:5` — Minimal 33-line outline template drifts from the comprehensive 211-line template at `.claude/skills/threat-modeling/templates/threat-model-template.md`.
  - `other` at `.claude/agents/silent-failure-hunter.md:1` and `.claude/agents/type-design-analyzer.md:1` — Two of the six freestanding PR review agents identified in `.agents/analysis/2003-claude-47-prompt-discipline-audit.md:458` lacking standard Handoff Protocol, completion criteria, failure-mode contract, or tool declaration blocks.
- Architectural insights:
  - `task-decomposer` defines an explicit 10% Threshold Rule for estimate reconciliation between high-level PRD/epic estimates and granular task sums, enforcing that discrepancies require updating source, documenting rationale, or flagging for review.
  - `type-design-analyzer` defines an objective scoring rubric mapping satisfied sub-criteria (0/4 to 4/4) directly to discrete numerical scores (1, 3, 5, 7, 10).
  - `silent-failure-hunter` defines a boundary-aware failure policy with specific false-positive reduction criteria for best-effort cleanup, optional telemetry, and service boundary error translation.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~11,000 tokens (43,759 bytes across 6 assigned files, plus 35,979 bytes across 4 shared template variants); approximate tokens of output written: ~12,500 tokens (44,683 bytes across 6 inventory cards and 4 divergence cards, plus ~3,200 bytes for unit report).
