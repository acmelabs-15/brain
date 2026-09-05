---
package: rjm
path: .agents/architecture/ADR-004-pre-commit-hook-architecture.md
type: agent
bytes: 7448
unit: inv-rjm-4
deprecated: false
in_scope_via: inv-rjm-4
aliases: []
memo_inputs:
  - {path: .agents/architecture/ADR-004-pre-commit-hook-architecture.md, sha256: 21cb07ccb9600037b38affef2d592fa4a386f76cc157eaed35428bf41391bdee}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# .agents/architecture/ADR-004-pre-commit-hook-architecture.md

## Purpose — required, verbatim
> "As the ai-agents repository has evolved, the `.githooks/pre-commit` hook has accumulated multiple validation responsibilities:" — .agents/architecture/ADR-004-pre-commit-hook-architecture.md:27 (no explicit purpose statement)

## Design intent — required
Documents the architecture of .githooks/pre-commit as the primary local validation orchestration point in ai-agents. It establishes guidelines for dividing checks between pre-commit (fast, local, auto-fixable, security-hardened) and CI (slow, complex, network-bound), categorizes validations into BLOCKING, WARNING, and AUTO-FIX tiers, and configures PSScriptAnalyzer for PowerShell analysis. Also records its subsequent supersession by ADR-086 (Lefthook orchestration) on 2026-07-20.

## Phase — required
cross-phase

## Inputs — required
Existing .githooks/pre-commit hook script and accumulated validation responsibilities (lines 27-37), .PSScriptAnalyzerSettings.psd1 configuration (line 159), Session 36 variable interpolation incident (line 167), and OWASP guidelines for secure shell scripting (line 181).

## Outputs — required
Hook structure definition (lines 115-126), PSScriptAnalyzer configuration rules (lines 159-165), validation categorization guidelines (lines 130-145), and bypass instructions (lines 148-155).

## Invokes — required
- doc ADR-001 — .agents/architecture/ADR-004-pre-commit-hook-architecture.md:171
- doc ADR-005 — .agents/architecture/ADR-004-pre-commit-hook-architecture.md:172
- doc ADR-086 — .agents/architecture/ADR-004-pre-commit-hook-architecture.md:17

## Invoked by — required
- agent ADR-086 — .agents/architecture/ADR-086-lefthook-local-hook-orchestration.md:381

## Concepts named — required, verbatim
- `ADR-004` — .agents/architecture/ADR-004-pre-commit-hook-architecture.md:12 — defined here
- `Validation Orchestration Point` — .agents/architecture/ADR-004-pre-commit-hook-architecture.md:12 — defined here
- `PSScriptAnalyzer` — .agents/architecture/ADR-004-pre-commit-hook-architecture.md:30 — used here
- `Fail-fast` — .agents/architecture/ADR-004-pre-commit-hook-architecture.md:54 — defined here
- `Warn-only` — .agents/architecture/ADR-004-pre-commit-hook-architecture.md:55 — defined here
- `Auto-fix` — .agents/architecture/ADR-004-pre-commit-hook-architecture.md:56 — defined here
- `BLOCKING` — .agents/architecture/ADR-004-pre-commit-hook-architecture.md:135 — defined here
- `WARNING` — .agents/architecture/ADR-004-pre-commit-hook-architecture.md:136 — defined here
- `AUTO-FIX` — .agents/architecture/ADR-004-pre-commit-hook-architecture.md:137 — defined here

## Structure
- # ADR-004: Pre-Commit Hook as Validation Orchestration Point — .agents/architecture/ADR-004-pre-commit-hook-architecture.md:12
- ## Status — .agents/architecture/ADR-004-pre-commit-hook-architecture.md:14
- ## Date — .agents/architecture/ADR-004-pre-commit-hook-architecture.md:21
- ## Context — .agents/architecture/ADR-004-pre-commit-hook-architecture.md:25
- ## Decision — .agents/architecture/ADR-004-pre-commit-hook-architecture.md:44
- ## Rationale — .agents/architecture/ADR-004-pre-commit-hook-architecture.md:59
- ### Alternatives Considered — .agents/architecture/ADR-004-pre-commit-hook-architecture.md:61
- ### Trade-offs — .agents/architecture/ADR-004-pre-commit-hook-architecture.md:70
- ## Consequences — .agents/architecture/ADR-004-pre-commit-hook-architecture.md:89
- ### Positive — .agents/architecture/ADR-004-pre-commit-hook-architecture.md:91
- ### Negative — .agents/architecture/ADR-004-pre-commit-hook-architecture.md:98
- ### Neutral — .agents/architecture/ADR-004-pre-commit-hook-architecture.md:105
- ## Implementation Notes — .agents/architecture/ADR-004-pre-commit-hook-architecture.md:110
- ### Current Hook Structure — .agents/architecture/ADR-004-pre-commit-hook-architecture.md:112
- ### Guidelines for New Validations — .agents/architecture/ADR-004-pre-commit-hook-architecture.md:128
- ### Bypass Instructions — .agents/architecture/ADR-004-pre-commit-hook-architecture.md:147
- ### PowerShell Script Analysis Configuration — .agents/architecture/ADR-004-pre-commit-hook-architecture.md:157
- ## Related Decisions — .agents/architecture/ADR-004-pre-commit-hook-architecture.md:169
- ## References — .agents/architecture/ADR-004-pre-commit-hook-architecture.md:175

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- missing-path · .agents/architecture/ADR-004-pre-commit-hook-architecture.md:27 Hook script ".githooks/pre-commit" does not exist in repository.
- missing-path · .agents/architecture/ADR-004-pre-commit-hook-architecture.md:159 Configuration file ".PSScriptAnalyzerSettings.psd1" does not exist in repository.

## Observations
Superseded by ADR-086 on 2026-07-20 due to local hook orchestration migrating to Lefthook. Formulates the distinction between pre-commit checks (<2s execution, local, auto-fixable) versus CI pipelines (slow, complex, network/security-sensitive), and establishes three blocking tiers: BLOCKING, WARNING, and AUTO-FIX.

## Context cost
7,448 bytes, ~1,850 tokens.
