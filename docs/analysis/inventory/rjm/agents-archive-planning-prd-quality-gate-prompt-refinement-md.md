---
package: rjm
path: .agents/archive/planning/PRD-quality-gate-prompt-refinement.md
type: agent
bytes: 4940
unit: inv-rjm-53
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .agents/archive/planning/PRD-quality-gate-prompt-refinement.md, sha256: 2ce12204e8fcce359f0ece469370f710f3e9518ba9576a232239d592753fd963}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .agents/archive/planning/PRD-quality-gate-prompt-refinement.md

## Purpose — required, verbatim
> "The AI PR Quality Gate was issuing false CRITICAL_FAIL verdicts for documentation-only PRs." — .agents/archive/planning/PRD-quality-gate-prompt-refinement.md:10
(no explicit purpose statement)

## Design intent — required
Defines prompt refinement and context-aware evaluation rules for AI PR Quality Gates to eliminate false CRITICAL_FAIL verdicts on documentation-only pull requests. Implements PR type classification (DOCS, CODE, WORKFLOW, CONFIG, MIXED), expected patterns documentation, affirmative directives, and a Pester test suite (`tests/QualityGatePrompts.Tests.ps1`) to prevent regressions across QA, security, devops, and orchestrator prompts.

## Phase — required
none (internal PRD artifact under .agents/archive/planning/, representing rjm:spec / rjm:plan activities)

## Inputs — required
- Issue #357 bug report regarding false CRITICAL_FAIL on DOCS-only PRs (`.agents/archive/planning/PRD-quality-gate-prompt-refinement.md:3`)
- Root cause analysis from `/.agents/analysis/003-quality-gate-comment-caching-rca.md` (`.agents/archive/planning/PRD-quality-gate-prompt-refinement.md:114`)
- Test suite decision record `/.agents/architecture/ADR-023-quality-gate-prompt-testing.md` (`.agents/archive/planning/PRD-quality-gate-prompt-refinement.md:115`)
- Prompt engineering patterns from single-turn reference `/.claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md` (`.agents/archive/planning/PRD-quality-gate-prompt-refinement.md:116`)
- Pull requests #462, #437, #438, #458 used for validation (`.agents/archive/planning/PRD-quality-gate-prompt-refinement.md:76-79`)

## Outputs — required
- Updates to `pr-quality-gate-qa.md` (`.agents/archive/planning/PRD-quality-gate-prompt-refinement.md:32`)
- Updates to `pr-quality-gate-security.md` (`.agents/archive/planning/PRD-quality-gate-prompt-refinement.md:33`)
- Updates to `pr-quality-gate-devops.md` (`.agents/archive/planning/PRD-quality-gate-prompt-refinement.md:34`)
- Updates to `.claude/agents/orchestrator.md` (`.agents/archive/planning/PRD-quality-gate-prompt-refinement.md:40`)
- Updates to `templates/agents/orchestrator.shared.md` (`.agents/archive/planning/PRD-quality-gate-prompt-refinement.md:41`)
- Pester regression test suite `tests/QualityGatePrompts.Tests.ps1` (`.agents/archive/planning/PRD-quality-gate-prompt-refinement.md:47`)

## Invokes — required
- doc pr-quality-gate-qa.md — .agents/archive/planning/PRD-quality-gate-prompt-refinement.md:32
- doc pr-quality-gate-security.md — .agents/archive/planning/PRD-quality-gate-prompt-refinement.md:33
- doc pr-quality-gate-devops.md — .agents/archive/planning/PRD-quality-gate-prompt-refinement.md:34
- agent .claude/agents/orchestrator.md — .agents/archive/planning/PRD-quality-gate-prompt-refinement.md:40
- template templates/agents/orchestrator.shared.md — .agents/archive/planning/PRD-quality-gate-prompt-refinement.md:41
- script tests/QualityGatePrompts.Tests.ps1 — .agents/archive/planning/PRD-quality-gate-prompt-refinement.md:47
- doc 003-quality-gate-comment-caching-rca.md — .agents/archive/planning/PRD-quality-gate-prompt-refinement.md:114
- doc ADR-023-quality-gate-prompt-testing.md — .agents/archive/planning/PRD-quality-gate-prompt-refinement.md:115
- reference prompt-engineering-single-turn.md — .agents/archive/planning/PRD-quality-gate-prompt-refinement.md:116

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `PRD` — .agents/archive/planning/PRD-quality-gate-prompt-refinement.md:1 — used here
- `AI PR Quality Gate` — .agents/archive/planning/PRD-quality-gate-prompt-refinement.md:10 — used here
- `CRITICAL_FAIL` — .agents/archive/planning/PRD-quality-gate-prompt-refinement.md:10 — used here
- `Root cause analysis` — .agents/archive/planning/PRD-quality-gate-prompt-refinement.md:10 — used here
- `PR Type Detection` — .agents/archive/planning/PRD-quality-gate-prompt-refinement.md:20 — defined here
- `Expected Patterns` — .agents/archive/planning/PRD-quality-gate-prompt-refinement.md:21 — defined here
- `Context-Aware CRITICAL_FAIL` — .agents/archive/planning/PRD-quality-gate-prompt-refinement.md:22 — defined here
- `Affirmative Directives` — .agents/archive/planning/PRD-quality-gate-prompt-refinement.md:23 — defined here
- `Error Normalization` — .agents/archive/planning/PRD-quality-gate-prompt-refinement.md:24 — defined here
- `Task Type Triage` — .agents/archive/planning/PRD-quality-gate-prompt-refinement.md:40 — defined here
- `Reliability Principles` — .agents/archive/planning/PRD-quality-gate-prompt-refinement.md:40 — defined here
- `Conditional Sections` — .agents/archive/planning/PRD-quality-gate-prompt-refinement.md:55 — used here
- `Category-Based Generalization` — .agents/archive/planning/PRD-quality-gate-prompt-refinement.md:56 — used here
- `Scope Limitation` — .agents/archive/planning/PRD-quality-gate-prompt-refinement.md:58 — used here
- `Contrastive Examples` — .agents/archive/planning/PRD-quality-gate-prompt-refinement.md:60 — used here
- `Delegation > Memory` — .agents/archive/planning/PRD-quality-gate-prompt-refinement.md:66 — defined here
- `Freshness First` — .agents/archive/planning/PRD-quality-gate-prompt-refinement.md:67 — defined here
- `Plan Before Execute` — .agents/archive/planning/PRD-quality-gate-prompt-refinement.md:68 — defined here
- `Regression Test Suite` — .agents/archive/planning/PRD-quality-gate-prompt-refinement.md:81 — defined here
- `File Category Classification` — .agents/archive/planning/PRD-quality-gate-prompt-refinement.md:85 — defined here
- `DOCS-Only Handling` — .agents/archive/planning/PRD-quality-gate-prompt-refinement.md:87 — defined here
- `Cross-Prompt Consistency` — .agents/archive/planning/PRD-quality-gate-prompt-refinement.md:90 — defined here
- `Invoke-Pester` — .agents/archive/planning/PRD-quality-gate-prompt-refinement.md:96 — used here

## Structure
- # PRD: AI PR Quality Gate Prompt Refinement — .agents/archive/planning/PRD-quality-gate-prompt-refinement.md:1
- ## Problem Statement — .agents/archive/planning/PRD-quality-gate-prompt-refinement.md:8
- ## Solution Summary — .agents/archive/planning/PRD-quality-gate-prompt-refinement.md:16
- ## Changes Made — .agents/archive/planning/PRD-quality-gate-prompt-refinement.md:26
- ### Quality Gate Prompts — .agents/archive/planning/PRD-quality-gate-prompt-refinement.md:28
- ### Orchestrator Prompts — .agents/archive/planning/PRD-quality-gate-prompt-refinement.md:36
- ### Verification Infrastructure — .agents/archive/planning/PRD-quality-gate-prompt-refinement.md:43
- ## Prompt Engineering Patterns Applied — .agents/archive/planning/PRD-quality-gate-prompt-refinement.md:49
- ### Single-Turn Patterns — .agents/archive/planning/PRD-quality-gate-prompt-refinement.md:51
- ### Reliability Principles (Orchestrator) — .agents/archive/planning/PRD-quality-gate-prompt-refinement.md:62
- ## Validation Results — .agents/archive/planning/PRD-quality-gate-prompt-refinement.md:70
- ## Regression Test Suite — .agents/archive/planning/PRD-quality-gate-prompt-refinement.md:81
- ### Running Tests — .agents/archive/planning/PRD-quality-gate-prompt-refinement.md:92
- ## Success Metrics — .agents/archive/planning/PRD-quality-gate-prompt-refinement.md:102
- ## References — .agents/archive/planning/PRD-quality-gate-prompt-refinement.md:111

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- missing-path · .agents/archive/planning/PRD-quality-gate-prompt-refinement.md:47 · References test file `tests/QualityGatePrompts.Tests.ps1` which does not exist in repository.
- internal-contradiction · .agents/archive/planning/PRD-quality-gate-prompt-refinement.md:115 · Markdown link text states `[ADR-021]` but targets `/.agents/architecture/ADR-023-quality-gate-prompt-testing.md`.
- doc-drift · .agents/archive/planning/PRD-quality-gate-prompt-refinement.md:32 · References `pr-quality-gate-qa.md`, `pr-quality-gate-security.md`, and `pr-quality-gate-devops.md` without specifying `.github/prompts/` directory path.

## Observations
Demonstrates early adoption of prompt engineering taxonomy (single-turn patterns: conditional sections, category-based generalization, contrastive examples) and records orchestrator reliability principles ("Delegation > Memory", "Freshness First", "Plan Before Execute") that influenced later ADRs (e.g. ADR-009, ADR-010, ADR-023).

## Context cost
4940 bytes, ~1200 tokens. Loads no external files.
