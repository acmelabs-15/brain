---
package: rjm
path: .agents/governance/PROJECT-CONSTRAINTS.md
type: agent
bytes: 11602
unit: inv-rjm-55
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .agents/governance/PROJECT-CONSTRAINTS.md, sha256: b992b592ba20b20faca1f1a120ff4068e3d5197e07ca22bb39b33135d4ec4686}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .agents/governance/PROJECT-CONSTRAINTS.md

## Purpose — required, verbatim
> "Single source of truth for project constraints. Index-style document pointing to authoritative sources." — .agents/governance/PROJECT-CONSTRAINTS.md:9

## Design intent — required
Index-style single source of truth for repository-wide development, architectural, and workflow constraints. It consolidates scattered rules into deterministic categories (language, skill usage, workflows, commits, session protocols, security, and frontmatter syntax), explicitly mandating retrieval-led reasoning over pre-training biases and linking each constraint to authoritative ADRs and automated verification mechanisms. Without it, autonomous agents and contributors would violate critical operational rules (such as creating prohibited bash scripts, inline tool arrays failing on Copilot CLI, or writing untestable workflow logic in YAML) through reliance on outdated or generic training data.

## Phase — required
cross-phase

## Inputs — required
- Session start initialization: "Read at session start. When in doubt, click through to Source for full rationale." — .agents/governance/PROJECT-CONSTRAINTS.md:11
- Decision type categorization: "Identify decision type (language, workflow, etc.)" — .agents/governance/PROJECT-CONSTRAINTS.md:28
- Preceding architecture decision records: ADR-005, ADR-006, ADR-014, ADR-040, ADR-042.
- Memory retrieval stores: Serena memory files `usage-mandatory` (.agents/governance/PROJECT-CONSTRAINTS.md:62) and `code-style-conventions` (.agents/governance/PROJECT-CONSTRAINTS.md:115).
- Git status and commit history: `git rev-list --count HEAD ^origin/main` (.agents/governance/PROJECT-CONSTRAINTS.md:121) and `git diff --stat origin/main` (.agents/governance/PROJECT-CONSTRAINTS.md:122).

## Outputs — required
none

## Invokes — required
- doc ADR-005-powershell-only-scripting.md — .agents/governance/PROJECT-CONSTRAINTS.md:45
- doc ADR-042-python-migration-strategy.md — .agents/governance/PROJECT-CONSTRAINTS.md:46
- script scripts/check_skill_exists.py — .agents/governance/PROJECT-CONSTRAINTS.md:58
- doc ADR-006-thin-workflows-testable-modules.md — .agents/governance/PROJECT-CONSTRAINTS.md:86
- script .github/scripts/measure_workflow_coalescing.py — .agents/governance/PROJECT-CONSTRAINTS.md:100
- doc .github/AGENTS.md — .agents/governance/PROJECT-CONSTRAINTS.md:101
- script scripts/validation/pr_commit_count.py — .agents/governance/PROJECT-CONSTRAINTS.md:121
- doc session-logs.md — .agents/governance/PROJECT-CONSTRAINTS.md:151
- reference security-practices.md — .agents/governance/PROJECT-CONSTRAINTS.md:166
- doc 002-project-constraints-consolidation.md — .agents/governance/PROJECT-CONSTRAINTS.md:266

## Invoked by — required
- doc AGENTS.md — AGENTS.md:10
- doc WORKFLOW-VALIDATION.md — docs/WORKFLOW-VALIDATION.md:230
- doc customization.md — docs/customization.md:150
- doc 002-project-constraints-consolidation.md — .agents/analysis/002-project-constraints-consolidation.md:1

## Concepts named — required, verbatim
- `Project Constraints` — .agents/governance/PROJECT-CONSTRAINTS.md:1 — defined here
- `Single source of truth` — .agents/governance/PROJECT-CONSTRAINTS.md:9 — defined here
- `RETRIEVAL-LED REASONING` — .agents/governance/PROJECT-CONSTRAINTS.md:15 — defined here
- `Language Constraints` — .agents/governance/PROJECT-CONSTRAINTS.md:35 — defined here
- `Skill Usage Constraints` — .agents/governance/PROJECT-CONSTRAINTS.md:54 — defined here
- `Workflow Constraints` — .agents/governance/PROJECT-CONSTRAINTS.md:76 — defined here
- `Commit Constraints` — .agents/governance/PROJECT-CONSTRAINTS.md:106 — defined here
- `PR Scope Constraints` — .agents/governance/PROJECT-CONSTRAINTS.md:117 — defined here
- `Session Protocol Constraints` — .agents/governance/PROJECT-CONSTRAINTS.md:141 — defined here
- `Security Constraints` — .agents/governance/PROJECT-CONSTRAINTS.md:158 — defined here
- `YAML Frontmatter Constraints` — .agents/governance/PROJECT-CONSTRAINTS.md:184 — defined here
- `Validation Checklist` — .agents/governance/PROJECT-CONSTRAINTS.md:230 — defined here
- `RFC 2119` — .agents/governance/PROJECT-CONSTRAINTS.md:5 — used here
- `Python-first` — .agents/governance/PROJECT-CONSTRAINTS.md:48 — used here
- `conventional commit format` — .agents/governance/PROJECT-CONSTRAINTS.md:113 — used here
- `SHA pinning` — .agents/governance/PROJECT-CONSTRAINTS.md:168 — used here
- `block-style arrays` — .agents/governance/PROJECT-CONSTRAINTS.md:188 — used here
- `Existing Violations (Grandfathered)` — .agents/governance/PROJECT-CONSTRAINTS.md:244 — defined here
- `Retrospective agent` — .agents/governance/PROJECT-CONSTRAINTS.md:254 — used here

## Structure
- Project Constraints
- Purpose
- RETRIEVAL-LED REASONING
- Language Constraints
- Skill Usage Constraints
- Workflow Constraints
- Commit Constraints
- PR Scope Constraints
- Session Protocol Constraints
- Security Constraints
- YAML Frontmatter Constraints
- Validation Checklist
- Existing Violations (Grandfathered)
- Maintenance
- Related Documents

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- cross-file-contradiction · .agents/governance/PROJECT-CONSTRAINTS.md:180 · Line 180 specifies "Exceptions: None. All third-party actions must be SHA-pinned." which conflicts with GP-006 in .agents/governance/golden-principles.md allowing first-party actions/* version tags with Dependabot (also noted in src/copilot-cli/skills/ai-agents-change-control/references/incident-history.md:29).

## Observations
- Retrieval-led reasoning enforcement: Explicitly warns autonomous agents against relying on pre-training assumptions regarding language, skill usage, workflows, and commits, mandating on-demand retrieval of authoritative repository documentation.
- Tool exposure syntax cross-compatibility: Prohibits inline YAML arrays in frontmatter because GitHub Copilot CLI with CRLF line endings fails on them, mandating block-style hyphen-bulleted lists for tool declarations.
- Maintenance ownership: Assigns ongoing ownership to the retrospective agent for quarterly review aligned with agent consolidation reviews.

## Context cost
11602 bytes, ~2900 tokens. When invoked, references 10 external documents and scripts across architecture, governance, and CI/CD validation.
