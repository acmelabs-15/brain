---
package: rjm
path: .agents/critique/ADR-023-debate-log.md
type: agent
bytes: 3538
unit: inv-rjm-53
in_scope_via: .agents/architecture/ADR-023-quality-gate-prompt-testing.md:184
aliases: []
memo_inputs:
  - {path: .agents/critique/ADR-023-debate-log.md, sha256: f199ea3783f0e058dc4704243dd7f91d0f4a44c0437d4bff41bf2731a65f9013}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .agents/critique/ADR-023-debate-log.md

## Purpose — required, verbatim
> "# ADR Debate Log: ADR-023 Quality Gate Prompt Testing" — .agents/critique/ADR-023-debate-log.md:1
(no explicit purpose statement)

## Design intent — required
Captures the multi-agent architectural review and debate for ADR-023 (Quality Gate Prompt Structural Validation). Records critical pushback from 6 specialist agents (Analyst, Architect, Critic, Independent-Thinker, Security, High-Level-Advisor) establishing that static Pester tests evaluate only prompt structure rather than runtime LLM behavioral interpretation, mandating explicit scope limitation, MADR section completion, and test count reduction.

## Phase — required
none (architecture governance debate artifact under .agents/critique/)

## Inputs — required
- Draft ADR-023 (referred to internally as ADR-021) proposing Pester testing for AI PR quality gate prompts (`.agents/critique/ADR-023-debate-log.md:1, 93, 125`)
- Issue #357 bug context (`.agents/critique/ADR-023-debate-log.md:78, 97`)
- Issue #77 blocker regarding QA agent running Pester tests (`.agents/critique/ADR-023-debate-log.md:16`)
- PR #465 matrix aggregation fix (`.agents/critique/ADR-023-debate-log.md:17`)
- ADR-010 quality gates reference (`.agents/critique/ADR-023-debate-log.md:32`)

## Outputs — required
- Review outcome verdict: `needs-revision` (`.agents/critique/ADR-023-debate-log.md:7`)
- P0, P1, and P2 required changes list for ADR-023 revision (`.agents/critique/ADR-023-debate-log.md:105-122`)
- Explicit limitation mandate: "Structural tests do not validate runtime AI interpretation" (`.agents/critique/ADR-023-debate-log.md:108`)

## Invokes — required
- agent Analyst — .agents/critique/ADR-023-debate-log.md:11
- agent Architect — .agents/critique/ADR-023-debate-log.md:21
- agent Critic — .agents/critique/ADR-023-debate-log.md:34
- agent Independent-Thinker — .agents/critique/ADR-023-debate-log.md:46
- agent Security — .agents/critique/ADR-023-debate-log.md:58
- agent High-Level-Advisor — .agents/critique/ADR-023-debate-log.md:71
- doc ADR-010 — .agents/critique/ADR-023-debate-log.md:32

## Invoked by — required
- doc .agents/architecture/ADR-023-quality-gate-prompt-testing.md — .agents/architecture/ADR-023-quality-gate-prompt-testing.md:184

## Concepts named — required, verbatim
- `ADR Debate Log` — .agents/critique/ADR-023-debate-log.md:1 — defined here
- `ADR-023` — .agents/critique/ADR-023-debate-log.md:1 — used here
- `needs-revision` — .agents/critique/ADR-023-debate-log.md:7 — defined here
- `Phase 0 - Related Work` — .agents/critique/ADR-023-debate-log.md:11 — used here
- `Considered Options` — .agents/critique/ADR-023-debate-log.md:28 — used here
- `Decision Outcome` — .agents/critique/ADR-023-debate-log.md:29 — used here
- `Confirmation` — .agents/critique/ADR-023-debate-log.md:30 — used here
- `validate structure, not AI behavior` — .agents/critique/ADR-023-debate-log.md:51 — defined here
- `Get-FileCategory` — .agents/critique/ADR-023-debate-log.md:52 — used here
- `mutation testing` — .agents/critique/ADR-023-debate-log.md:54 — used here
- `efficacy testing` — .agents/critique/ADR-023-debate-log.md:65 — defined here
- `Prompt injection resilience` — .agents/critique/ADR-023-debate-log.md:66 — used here
- `golden test corpus` — .agents/critique/ADR-023-debate-log.md:69 — used here
- `testing the map, not the territory` — .agents/critique/ADR-023-debate-log.md:76 — defined here
- `Conflict Resolution` — .agents/critique/ADR-023-debate-log.md:81 — defined here
- `Consensus Points` — .agents/critique/ADR-023-debate-log.md:95 — defined here
- `Reversibility assessment` — .agents/critique/ADR-023-debate-log.md:115 — used here
- `convergence check` — .agents/critique/ADR-023-debate-log.md:126 — defined here

## Structure
- # ADR Debate Log: ADR-023 Quality Gate Prompt Testing — .agents/critique/ADR-023-debate-log.md:1
- ## Summary — .agents/critique/ADR-023-debate-log.md:3
- ## Agent Reviews — .agents/critique/ADR-023-debate-log.md:9
- ### Analyst (Phase 0 - Related Work) — .agents/critique/ADR-023-debate-log.md:11
- ### Architect — .agents/critique/ADR-023-debate-log.md:21
- ### Critic — .agents/critique/ADR-023-debate-log.md:34
- ### Independent-Thinker — .agents/critique/ADR-023-debate-log.md:46
- ### Security — .agents/critique/ADR-023-debate-log.md:58
- ### High-Level-Advisor — .agents/critique/ADR-023-debate-log.md:71
- ## Conflict Resolution — .agents/critique/ADR-023-debate-log.md:81
- ### Conflict 1: ADR Structure vs Scope Reduction — .agents/critique/ADR-023-debate-log.md:83
- ### Conflict 2: Test Count (84 vs 25-30) — .agents/critique/ADR-023-debate-log.md:87
- ### Conflict 3: Runtime Testing — .agents/critique/ADR-023-debate-log.md:91
- ## Consensus Points — .agents/critique/ADR-023-debate-log.md:95
- ## Required Changes — .agents/critique/ADR-023-debate-log.md:103
- ### P0 (Blocking) — .agents/critique/ADR-023-debate-log.md:105
- ### P1 (Required) — .agents/critique/ADR-023-debate-log.md:110
- ### P2 (Recommended) — .agents/critique/ADR-023-debate-log.md:118
- ## Next Steps — .agents/critique/ADR-023-debate-log.md:123

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- internal-contradiction · .agents/critique/ADR-023-debate-log.md:93 · Document refers to target decision as `ADR-021` ("Out of scope for ADR-021") despite heading specifying `ADR-023 Quality Gate Prompt Testing`.
- internal-contradiction · .agents/critique/ADR-023-debate-log.md:125 · Next Steps item 1 instructs "Update ADR-021 with required changes" rather than ADR-023.

## Observations
Captures key architectural critiques regarding AI system testing: the distinction between testing prompt structure (syntax/headers) and testing AI behavior/efficacy ("testing the map, not the territory"). Shows rjm's structured debate protocol resolving conflicts between agents with explicit priority levels (P0, P1, P2) and next steps.

## Context cost
3538 bytes, ~900 tokens. Loads no external files directly.
