---
package: rjm
path: .agents/architecture/ADR-005-powershell-only-scripting.md
type: agent
bytes: 9895
unit: inv-rjm-5
deprecated: false
in_scope_via: inv-rjm-5
aliases: []
memo_inputs:
  - {path: .agents/architecture/ADR-005-powershell-only-scripting.md, sha256: 84b5be344ee19a27919489767dca75fedec8bf5c092e92501e7897bdba6eb167}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# .agents/architecture/ADR-005-powershell-only-scripting.md

## Purpose — required, verbatim
> "During PR #60 implementation, agents repeatedly generated bash and Python scripts despite:" — .agents/architecture/ADR-005-powershell-only-scripting.md:20 (no explicit purpose statement)

## Design intent — required
Establishes PowerShell as the exclusive scripting standard across the repository (.ps1, .psm1) and forbids agents from generating bash or Python scripts. Solves token waste, tooling inconsistency, and testing fragmentation caused by agents repeatedly attempting bash or Python implementations before failing over to PowerShell. Enforces a single testing framework (Pester) and consistent cross-platform execution via PowerShell Core (pwsh). While superseded later by ADR-042 (Python migration), it preserves exceptions for SkillForge developer tools and Anthropic SDK Claude Code hooks.

## Phase — required
cross-phase

## Inputs — required
PR #60 AI workflow implementation (lines 14, 20, 236), existing PowerShell build and install infrastructure (lines 21-25, 38-44), Pester testing framework (lines 23, 39, 56), Serena memory user-preference-no-bash-python (line 135), PR #760 SkillForge exception request (lines 142-161), PR #908 Claude Code Hooks exception request (lines 163-184), and ADR-042 Python Migration Strategy (lines 7, 256).

## Outputs — required
Scripting policy mandating PowerShell (.ps1, .psm1) for all repository scripts (lines 50-61, 115-116), code review rejection rule for .sh and .py files (line 137), validation checklist (lines 244-252), and documented exceptions for SkillForge developer tools (lines 142-161) and Anthropic SDK hooks (lines 163-184).

## Invokes — required
- agent ADR-006 — .agents/architecture/ADR-005-powershell-only-scripting.md:228
- agent ADR-042 — .agents/architecture/ADR-005-powershell-only-scripting.md:256
- skill github — .agents/architecture/ADR-005-powershell-only-scripting.md:239

## Invoked by — required
- agent ADR-004 — .agents/architecture/ADR-004-pre-commit-hook-architecture.md:172
- agent ADR-006 — .agents/architecture/ADR-006-thin-workflows-testable-modules.md:235
- agent ADR-042 — .agents/architecture/ADR-042-python-migration-strategy.md:152

## Concepts named — required, verbatim
- `ADR-005` — .agents/architecture/ADR-005-powershell-only-scripting.md:2 — defined here
- `PowerShell-Only Scripting Standard` — .agents/architecture/ADR-005-powershell-only-scripting.md:12 — defined here
- `Pester` — .agents/architecture/ADR-005-powershell-only-scripting.md:23 — used here
- `PowerShell Core` — .agents/architecture/ADR-005-powershell-only-scripting.md:41 — used here
- `pwsh` — .agents/architecture/ADR-005-powershell-only-scripting.md:41 — used here
- `user-preference-no-bash-python` — .agents/architecture/ADR-005-powershell-only-scripting.md:135 — used here
- `SkillForge` — .agents/architecture/ADR-005-powershell-only-scripting.md:142 — used here
- `CWE-22` — .agents/architecture/ADR-005-powershell-only-scripting.md:155 — used here
- `validate_path_safety()` — .agents/architecture/ADR-005-powershell-only-scripting.md:159 — used here
- `CodeQL` — .agents/architecture/ADR-005-powershell-only-scripting.md:159 — used here
- `Anthropic SDK` — .agents/architecture/ADR-005-powershell-only-scripting.md:167 — used here
- `ADR-042` — .agents/architecture/ADR-005-powershell-only-scripting.md:7 — used here
- `ADR-006` — .agents/architecture/ADR-005-powershell-only-scripting.md:221 — used here

## Structure
- # ADR-005: PowerShell-Only Scripting Standard — .agents/architecture/ADR-005-powershell-only-scripting.md:12
- ## Context and Problem Statement — .agents/architecture/ADR-005-powershell-only-scripting.md:18
- ## Decision Drivers — .agents/architecture/ADR-005-powershell-only-scripting.md:36
- ## Considered Options — .agents/architecture/ADR-005-powershell-only-scripting.md:48
- ### Option 1: PowerShell-Only (CHOSEN) — .agents/architecture/ADR-005-powershell-only-scripting.md:50
- ### Option 2: Bash-First with PowerShell Fallback — .agents/architecture/ADR-005-powershell-only-scripting.md:67
- ### Option 3: Python for Complex Logic — .agents/architecture/ADR-005-powershell-only-scripting.md:82
- ### Option 4: Best Tool for the Job — .agents/architecture/ADR-005-powershell-only-scripting.md:97
- ## Decision Outcome — .agents/architecture/ADR-005-powershell-only-scripting.md:113
- ### Rationale — .agents/architecture/ADR-005-powershell-only-scripting.md:117
- ### Enforcement — .agents/architecture/ADR-005-powershell-only-scripting.md:133
- ### Exceptions — .agents/architecture/ADR-005-powershell-only-scripting.md:140
- #### 1. SkillForge Developer Tools (Approved 2026-01-04) — .agents/architecture/ADR-005-powershell-only-scripting.md:142
- #### 2. Claude Code Hooks with LLM Integration (Approved 2026-01-14) — .agents/architecture/ADR-005-powershell-only-scripting.md:163
- ## Consequences — .agents/architecture/ADR-005-powershell-only-scripting.md:197
- ### Positive — .agents/architecture/ADR-005-powershell-only-scripting.md:199
- ### Negative — .agents/architecture/ADR-005-powershell-only-scripting.md:208
- ### Neutral — .agents/architecture/ADR-005-powershell-only-scripting.md:217
- ## Related Decisions — .agents/architecture/ADR-005-powershell-only-scripting.md:226
- ## References — .agents/architecture/ADR-005-powershell-only-scripting.md:234
- ## Validation — .agents/architecture/ADR-005-powershell-only-scripting.md:244

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- missing-path · .agents/architecture/ADR-005-powershell-only-scripting.md:124 Referenced PowerShell module ".github/scripts/AIReviewCommon.psm1" does not exist in repository.
- missing-path · .agents/architecture/ADR-005-powershell-only-scripting.md:240 Referenced session log ".agents/sessions/2025-12-18-session-15-pr-60-response.md" does not exist in repository.

## Observations
Superseded by ADR-042 on 2026-01-17, which migrated the repository standard to Python-first due to Python becoming a prerequisite for AI/ML integration and Anthropic SDK usage, inverting the original token-efficiency rationale. ADR-005's exception mechanisms (narrow scope, explicit security conditions including CWE-22 validation) later served as the model for ADR-053 (ADR Exception Criteria).

## Context cost
9,895 bytes, ~2,470 tokens.
