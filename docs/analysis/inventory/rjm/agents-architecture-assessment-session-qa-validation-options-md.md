---
package: rjm
path: .agents/architecture/ASSESSMENT-session-qa-validation-options.md
type: agent
bytes: 8029
unit: inv-rjm-49
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .agents/architecture/ASSESSMENT-session-qa-validation-options.md, sha256: aa0addafd86d94a96103609af0a4d8879cbe3b4ef76eb51d8d89b36ae6d138c4}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .agents/architecture/ASSESSMENT-session-qa-validation-options.md

## Purpose — required, verbatim
> "The pre-commit session validator requires QA reports for ALL sessions on branches with code changes, regardless of whether the individual session made code changes. This creates friction for investigation-only sessions." — .agents/architecture/ASSESSMENT-session-qa-validation-options.md:9

## Design intent — required
Analyzes an architectural overreach in the pre-commit session validator (`Validate-Session.ps1`), which enforced QA validation on all sessions when any code change existed on the branch, rather than scoping verification to sessions actually implementing feature changes. Evaluates four resolution options (Session-Level Change Detection, Explicit Investigation Mode, File-Based QA Exemption, QA Report Categories) against criteria of separation of concerns, maintainability, pattern fit, verification strength, implementation effort, and risk of misuse. Recommends Option 2 (`SKIPPED: investigation-only` declaration with staged code file verification), which was directly adopted as the architectural basis for ADR-034.

## Phase — required
cross-phase

## Inputs — required
- "SESSION-PROTOCOL.md Design Intent" — .agents/architecture/ASSESSMENT-session-qa-validation-options.md:13
- "An investigation session on a branch with prior code changes inherits QA requirements from work it did not perform." — .agents/architecture/ASSESSMENT-session-qa-validation-options.md:29
- "Session 106 case study demonstrates real-world friction" — .agents/architecture/ASSESSMENT-session-qa-validation-options.md:166

## Outputs — required
- Option evaluation matrix analyzing 4 architectural options (.agents/architecture/ASSESSMENT-session-qa-validation-options.md:33-41)
- Architectural recommendation:
  "Option 2 (Explicit Investigation Mode) with Option 3 as secondary verification." — .agents/architecture/ASSESSMENT-session-qa-validation-options.md:84
- Proposed validation logic pseudocode (.agents/architecture/ASSESSMENT-session-qa-validation-options.md:94-104)

## Invokes — required
- doc SESSION-PROTOCOL.md — .agents/architecture/ASSESSMENT-session-qa-validation-options.md:13
- script Validate-Session.ps1 — .agents/architecture/ASSESSMENT-session-qa-validation-options.md:145

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `verification-based enforcement` — .agents/architecture/ASSESSMENT-session-qa-validation-options.md:15 — used here
- `Observable checkpoints` — .agents/architecture/ASSESSMENT-session-qa-validation-options.md:17 — used here
- `QA validation` — .agents/architecture/ASSESSMENT-session-qa-validation-options.md:18 — used here
- `qa agent` — .agents/architecture/ASSESSMENT-session-qa-validation-options.md:18 — used here
- `Session-Level Change Detection` — .agents/architecture/ASSESSMENT-session-qa-validation-options.md:44 — defined here
- `Explicit Investigation Mode` — .agents/architecture/ASSESSMENT-session-qa-validation-options.md:54 — defined here
- `SKIPPED: docs-only` — .agents/architecture/ASSESSMENT-session-qa-validation-options.md:56 — used here
- `SKIPPED: investigation-only` — .agents/architecture/ASSESSMENT-session-qa-validation-options.md:56 — defined here
- `File-Based QA Exemption` — .agents/architecture/ASSESSMENT-session-qa-validation-options.md:66 — defined here
- `QA Report Categories` — .agents/architecture/ASSESSMENT-session-qa-validation-options.md:74 — defined here
- `investigation report` — .agents/architecture/ASSESSMENT-session-qa-validation-options.md:76 — defined here
- `validation report` — .agents/architecture/ASSESSMENT-session-qa-validation-options.md:76 — used here
- `analyst agent` — .agents/architecture/ASSESSMENT-session-qa-validation-options.md:78 — used here
- `Defense in depth` — .agents/architecture/ASSESSMENT-session-qa-validation-options.md:112 — used here

## Structure
- # Architectural Assessment: Session QA Validation Options — .agents/architecture/ASSESSMENT-session-qa-validation-options.md:1
- ## Summary — .agents/architecture/ASSESSMENT-session-qa-validation-options.md:7
- ## Design Intent Alignment Analysis — .agents/architecture/ASSESSMENT-session-qa-validation-options.md:11
- ### SESSION-PROTOCOL.md Design Intent — .agents/architecture/ASSESSMENT-session-qa-validation-options.md:13
- ### Current Implementation Gap — .agents/architecture/ASSESSMENT-session-qa-validation-options.md:21
- ## Option Evaluation Matrix — .agents/architecture/ASSESSMENT-session-qa-validation-options.md:31
- ### Option Analysis — .agents/architecture/ASSESSMENT-session-qa-validation-options.md:42
- ## Architectural Recommendation — .agents/architecture/ASSESSMENT-session-qa-validation-options.md:82
- ### Implementation Approach — .agents/architecture/ASSESSMENT-session-qa-validation-options.md:86
- ### Proposed Validation Logic — .agents/architecture/ASSESSMENT-session-qa-validation-options.md:92
- ### Rationale — .agents/architecture/ASSESSMENT-session-qa-validation-options.md:106
- ## Architectural Concerns — .agents/architecture/ASSESSMENT-session-qa-validation-options.md:114
- ### Concern 1: Session vs Branch Scope Mismatch — .agents/architecture/ASSESSMENT-session-qa-validation-options.md:116
- ### Concern 2: Pattern Proliferation — .agents/architecture/ASSESSMENT-session-qa-validation-options.md:127
- ### Concern 3: QA Agent Responsibility Boundary — .agents/architecture/ASSESSMENT-session-qa-validation-options.md:135
- ## Dependencies — .agents/architecture/ASSESSMENT-session-qa-validation-options.md:143
- ## Architectural Decision Required — .agents/architecture/ASSESSMENT-session-qa-validation-options.md:149
- ## Evidence Summary — .agents/architecture/ASSESSMENT-session-qa-validation-options.md:159

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- orphan — .agents/architecture/ASSESSMENT-session-qa-validation-options.md:1 — Not referenced or linked by any in-scope entry point or ADR, despite directly serving as the architectural assessment and basis for ADR-034.
- missing-path — .agents/architecture/ASSESSMENT-session-qa-validation-options.md:13 — References `SESSION-PROTOCOL.md` which has been retired and removed from the repository.
- missing-path — .agents/architecture/ASSESSMENT-session-qa-validation-options.md:145 — References `Validate-Session.ps1` which has been removed from the repository.
- missing-path — .agents/architecture/ASSESSMENT-session-qa-validation-options.md:166 — Line 166 cites "Analysis document" without providing a valid path or filename.

## Observations
Written on 2025-12-30 by the Architect Agent to address protocol friction identified in Session 106. Provides the direct trade-off evaluation and recommendation that was codified into ADR-034 (accepted on the same day). Illustrates the multi-agent architectural review workflow where specialist assessments precede formal ADR acceptance.

## Context cost
8029 bytes, approximately 2000 tokens.
