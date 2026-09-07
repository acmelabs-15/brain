---
unit: cc-rjm-49
phase: 2
package: rjm
session: 016
subagent_returned: complete
---

# Unit cc-rjm-49

## Files assigned
- [x] sources/rjm/.agents/archive/planning/PR-60/003-pr-60-plan-critique.md
- [x] sources/rjm/.agents/archive/planning/PR-60/005-consolidated-agent-review-summary.md
- [x] sources/rjm/.agents/archive/planning/PRD-quality-gate-prompt-refinement.md
- [x] sources/rjm/.claude/agents/critic.md
- [x] sources/rjm/.claude/agents/issue-feature-review.md
- [x] sources/rjm/.claude/agents/orchestrator.md
- [x] sources/rjm/.claude/skills/adr-generator/references/quality-checklist.md
- [x] sources/rjm/.claude/skills/cva-analysis/references/SKILL_SPEC.md
- [x] sources/rjm/.claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md
- [x] sources/rjm/.claude/skills/retrospective/references/diagnosis-and-actions.md
- [x] sources/rjm/.claude/skills/review/references/devops.md
- [x] sources/rjm/.claude/skills/review/references/qa.md
- [x] sources/rjm/.claude/skills/review/references/security.md
- [x] sources/rjm/.claude/skills/skillforge/references/multi-lens-framework.md
- [x] sources/rjm/.claude/skills/work-operating-model/SKILL.md
- [x] sources/rjm/.claude/skills/work-operating-model/references/entry-contract.md
- [x] sources/rjm/.claude/skills/work-operating-model/references/layer-questions.md
- [x] sources/rjm/scripts/security/invoke_security_retrospective.py
- [x] sources/rjm/src/claude/orchestrator.md
- [x] sources/rjm/templates/agents/critic.shared.md
- [x] sources/rjm/templates/agents/issue-feature-review.shared.md
- [x] sources/rjm/templates/agents/orchestrator.shared.md
- [x] sources/rjm/templates/agents/roadmap.shared.md

## Outputs produced
- docs/analysis/concepts/rjm/evaluation-criteria.md (2568 bytes)
- docs/analysis/concepts/rjm/feasibility.md (2435 bytes)
- docs/analysis/concepts/rjm/risk-management.md (1716 bytes)
- docs/analysis/concepts/rjm/dependencies.md (3166 bytes)
- docs/analysis/concepts/rjm/test-verification.md (2148 bytes)
- docs/analysis/concepts/rjm/powershell-conversion-scope.md (1952 bytes)
- docs/analysis/concepts/rjm/exit-code-contract.md (1804 bytes)
- docs/analysis/concepts/rjm/pester-5-x.md (1344 bytes)
- docs/analysis/concepts/rjm/pr-60-consolidated-agent-review-summary.md (1549 bytes)
- docs/analysis/concepts/rjm/consensus.md (1867 bytes)
- docs/analysis/concepts/rjm/extreme-scrutiny-reviews.md (1928 bytes)
- docs/analysis/concepts/rjm/merge-blocking.md (1824 bytes)
- docs/analysis/concepts/rjm/security-regex-patterns.md (1896 bytes)
- docs/analysis/concepts/rjm/token-security.md (1820 bytes)
- docs/analysis/concepts/rjm/github-output-injection.md (1928 bytes)
- docs/analysis/concepts/rjm/token-scope-confusion.md (1871 bytes)
- docs/analysis/concepts/rjm/race-condition.md (1808 bytes)
- docs/analysis/concepts/rjm/merge-readiness-assessment.md (1901 bytes)
- docs/analysis/concepts/rjm/critical-path.md (1906 bytes)
- docs/analysis/concepts/rjm/root-cause-analysis.md (3360 bytes)
- docs/analysis/concepts/rjm/pr-type-detection.md (2541 bytes)
- docs/analysis/concepts/rjm/expected-patterns.md (2485 bytes)
- docs/analysis/concepts/rjm/context-aware-critical-fail.md (1831 bytes)
- docs/analysis/concepts/rjm/affirmative-directives.md (2432 bytes)
- docs/analysis/concepts/rjm/error-normalization.md (2482 bytes)
- docs/analysis/concepts/rjm/task-type-triage.md (1855 bytes)
- docs/analysis/concepts/rjm/reliability-principles.md (2802 bytes)
- docs/analysis/concepts/rjm/conditional-sections.md (2224 bytes)
- docs/analysis/concepts/rjm/category-based-generalization.md (2344 bytes)
- docs/analysis/concepts/rjm/scope-limitation.md (2218 bytes)
- docs/analysis/concepts/rjm/_units/cc-rjm-49.md (this report)

## Scripts executed
- scripts/synthesis/quote-check.ts, `bun scripts/synthesis/quote-check.ts <30 cards>`, exit code 0 (30 PASS, 0 FAIL)
- scripts/synthesis/memo.ts, `bun scripts/synthesis/memo.ts stamp-unit cc-rjm-49 --model "Gemini 3.8 Flash" --effort high`, exit code 0 (30 cards stamped, 56 inputs)
- scripts/synthesis/coverage.ts, `bun scripts/synthesis/coverage.ts --quiet`, exit code 1 (orphan cards 0, empty required 0; failures are pending index update for other units)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- All 30 concepts assigned to cc-rjm-49 were authored in this session.
- Concepts span planning archives (PR-60 remediation review critique and consolidated review summary), prompt refinement PRDs, work operating models, core orchestrator and review agent prompts, prompt engineering research references, and security retrospective tooling.
- Multi-occurrence concepts:
  - `Evaluation Criteria` (3 occurrences): Defined across planning critique (`003-pr-60-plan-critique.md`) and feature review agent prompts (`issue-feature-review.md` and shared template).
  - `Feasibility` (3 occurrences): Evaluated in plan critique and defined as a core review axis in critic agent prompts (`critic.md` and shared template).
  - `Dependencies` (5 occurrences): Evaluated as a plan critique dimension, defined as Layer 3 in work-operating-model SKILL/questions/schema, and defined in epic roadmap structures.
  - `Test Verification` (2 occurrences): Defined as Condition 1 in PR-60 plan critique and referenced as blocking condition C1 in consolidated review summary.
  - `PowerShell Conversion Scope` (2 occurrences): Defined as Condition 2 in PR-60 plan critique and referenced as blocking condition C2 in consolidated review summary.
  - `Root cause analysis` (5 occurrences): Cited in PRD prompt refinement, CVA analysis skill spec, retrospective diagnostic analysis, Skillforge multi-lens framework (5 Whys), and security retrospective scripts.
  - `PR Type Detection` (3 occurrences): Defined in PRD prompt refinement, QA review reference, and security review reference.
  - `Expected Patterns` (3 occurrences): Defined in PRD prompt refinement, DevOps review reference, and QA review reference.
  - `Affirmative Directives` (2 occurrences): Defined in PRD prompt refinement and prompt engineering reference.
  - `Error Normalization` (2 occurrences): Defined in PRD prompt refinement and prompt engineering reference.
  - `Reliability Principles` (4 occurrences): Defined in PRD prompt refinement, orchestrator agent (canonical and src mirror), and shared orchestrator template.
  - `Conditional Sections` (2 occurrences): Used in PRD prompt refinement and defined in ADR quality checklist.
  - `Category-Based Generalization` (2 occurrences): Used in PRD prompt refinement and defined in prompt engineering reference.
  - `Scope Limitation` (2 occurrences): Used in PRD prompt refinement and defined in prompt engineering reference.
- Concepts classified as `kind: name-only` per D-023:
  - `PowerShell Conversion Scope`: Planning condition heading specific to PR-60 migration.
  - `Pester 5.x`: External test framework name.
  - `PR #60 Consolidated Agent Review Summary`: Document title of an archived review artifact.
- Lifecycle concepts:
  - Gates: `Test Verification`, `Consensus`, `MERGE BLOCKING`, `Context-Aware CRITICAL_FAIL`.
  - Checklists: `Evaluation Criteria`, `Feasibility`, `Risk Management`, `Dependencies`, `Token Security`, `Merge Readiness Assessment`, `Expected Patterns`, `Conditional Sections`.
  - Techniques: `extreme scrutiny reviews`, `Critical Path`, `Root cause analysis`, `PR Type Detection`, `Task Type Triage`.
  - Patterns: `Exit Code Contract`, `Security Regex Patterns`, `GITHUB_OUTPUT Injection`, `Token Scope Confusion`, `Race Condition`, `Affirmative Directives`, `Error Normalization`, `Reliability Principles`, `Category-Based Generalization`, `Scope Limitation`.

## Blocked or uncertain
none

## Time and size
Approximate tokens of source read: ~55,000 tokens across 23 source files and cited inventory entries; approximate tokens of output written: ~12,500 tokens across 30 concept cards and this unit report.
