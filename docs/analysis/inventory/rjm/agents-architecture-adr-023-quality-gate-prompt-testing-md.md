---
package: rjm
path: .agents/architecture/ADR-023-quality-gate-prompt-testing.md
type: agent
bytes: 7125
unit: inv-rjm-10
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .agents/architecture/ADR-023-quality-gate-prompt-testing.md, sha256: 322d7c82f609f03ec83b27f780338a015a2cc551d5f0a566cf4c6da6abe6530d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .agents/architecture/ADR-023-quality-gate-prompt-testing.md

## Purpose — required, verbatim
> "The AI PR Quality Gate prompts (`pr-quality-gate-qa.md`, `pr-quality-gate-security.md`, `pr-quality-gate-devops.md`) control critical CI/CD decision-making." — .agents/architecture/ADR-023-quality-gate-prompt-testing.md:26

## Design intent — required
Decides to validate AI quality gate prompts using automated Pester structural unit tests (`tests/QualityGatePrompts.Tests.ps1`) rather than manual sample-PR reviews or runtime AI response tests. Enforces prompt structural integrity—such as required sections, file category mappings, PR type classification, and DOCS-only CRITICAL_FAIL exemptions—within automated CI pipelines in under 10 seconds. Explicitly documents the architectural limitation that structural tests cannot evaluate runtime LLM behavioral interpretation or verdict correctness.

## Phase — required
none

## Inputs — required
AI PR Quality Gate markdown prompts (`.github/prompts/pr-quality-gate-qa.md`, `pr-quality-gate-security.md`, `pr-quality-gate-devops.md`), regression scenarios from Issue #357 (false CRITICAL_FAIL on DOCS-only PRs), and Pester test framework capabilities.

## Outputs — required
PowerShell Pester test suite (`tests/QualityGatePrompts.Tests.ps1`) with 84 assertions across 7 categories, and CI gate requiring tests to pass on prompt changes.

## Invokes — required
- doc pr-quality-gate-qa.md — .agents/architecture/ADR-023-quality-gate-prompt-testing.md:26
- doc pr-quality-gate-security.md — .agents/architecture/ADR-023-quality-gate-prompt-testing.md:26
- doc pr-quality-gate-devops.md — .agents/architecture/ADR-023-quality-gate-prompt-testing.md:26
- script tests/QualityGatePrompts.Tests.ps1 — .agents/architecture/ADR-023-quality-gate-prompt-testing.md:73
- doc ADR-005 — .agents/architecture/ADR-023-quality-gate-prompt-testing.md:159
- doc ADR-006 — .agents/architecture/ADR-023-quality-gate-prompt-testing.md:160
- doc ADR-010 — .agents/architecture/ADR-023-quality-gate-prompt-testing.md:161

## Invoked by — required
- doc .agents/architecture/README.md — .agents/architecture/README.md:109

## Concepts named — required, verbatim
- `AI PR Quality Gate` — .agents/architecture/ADR-023-quality-gate-prompt-testing.md:26 — used here
- `False CRITICAL_FAIL` — .agents/architecture/ADR-023-quality-gate-prompt-testing.md:28 — defined here
- `False PASS` — .agents/architecture/ADR-023-quality-gate-prompt-testing.md:29 — defined here
- `Pester Structural Tests` — .agents/architecture/ADR-023-quality-gate-prompt-testing.md:55 — defined here
- `Runtime AI Response Tests` — .agents/architecture/ADR-023-quality-gate-prompt-testing.md:62 — defined here
- `DOCS-only exemptions` — .agents/architecture/ADR-023-quality-gate-prompt-testing.md:78 — defined here
- `Golden corpus testing` — .agents/architecture/ADR-023-quality-gate-prompt-testing.md:138 — used here
- `Prompt injection resilience` — .agents/architecture/ADR-023-quality-gate-prompt-testing.md:139 — used here
- `Thin workflows` — .agents/architecture/ADR-023-quality-gate-prompt-testing.md:160 — used here

## Structure
- # ADR-023: Quality Gate Prompt Structural Validation — .agents/architecture/ADR-023-quality-gate-prompt-testing.md:22
- ## Context and Problem Statement — .agents/architecture/ADR-023-quality-gate-prompt-testing.md:24
- ## Decision Drivers — .agents/architecture/ADR-023-quality-gate-prompt-testing.md:38
- ## Considered Options — .agents/architecture/ADR-023-quality-gate-prompt-testing.md:46
- ### Option 1: Manual Testing (Status Quo) — .agents/architecture/ADR-023-quality-gate-prompt-testing.md:48
- ### Option 2: Pester Structural Tests (Chosen) — .agents/architecture/ADR-023-quality-gate-prompt-testing.md:55
- ### Option 3: Runtime AI Response Tests — .agents/architecture/ADR-023-quality-gate-prompt-testing.md:62
- ## Decision Outcome — .agents/architecture/ADR-023-quality-gate-prompt-testing.md:69
- ### Limitations (Critical) — .agents/architecture/ADR-023-quality-gate-prompt-testing.md:82
- ### Test Execution Requirements — .agents/architecture/ADR-023-quality-gate-prompt-testing.md:88
- ## Consequences — .agents/architecture/ADR-023-quality-gate-prompt-testing.md:103
- ### Positive — .agents/architecture/ADR-023-quality-gate-prompt-testing.md:105
- ### Negative — .agents/architecture/ADR-023-quality-gate-prompt-testing.md:112
- ### Neutral — .agents/architecture/ADR-023-quality-gate-prompt-testing.md:118
- ## Confirmation — .agents/architecture/ADR-023-quality-gate-prompt-testing.md:123
- ## Out of Scope — .agents/architecture/ADR-023-quality-gate-prompt-testing.md:132
- ## Reversibility Assessment — .agents/architecture/ADR-023-quality-gate-prompt-testing.md:143
- ## Compliance Notes — .agents/architecture/ADR-023-quality-gate-prompt-testing.md:155
- ## Test Categories — .agents/architecture/ADR-023-quality-gate-prompt-testing.md:163
- ## References — .agents/architecture/ADR-023-quality-gate-prompt-testing.md:176

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- missing-path · .agents/architecture/ADR-023-quality-gate-prompt-testing.md:73 · References test suite `tests/QualityGatePrompts.Tests.ps1` which does not exist in the repository (noted as an unresolved blocker in Issue #77).

## Observations
Highlighting the boundary between structural prompt linting and behavioral evaluation is an essential insight for agent development lifecycles. Later superseded in evaluation methodology by ADR-057 (scenario-based LLM evaluation).

## Context cost
7125 bytes, ~1750 tokens. Loads no external files.
