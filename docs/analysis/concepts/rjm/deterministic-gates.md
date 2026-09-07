---
package: rjm
name: deterministic gates
slug: deterministic-gates
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-065-orchestrator-as-router.md, sha256: 6a3ba03173f31558031822da39be98be2a5f8335c4f4e9dfb530f7f9255b3c13}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# deterministic gates

## Definition — verbatim
(used, not defined)

> "routing gates), #1726 (deterministic gates): all point at the same shift" — .agents/architecture/ADR-065-orchestrator-as-router.md:114

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-065-orchestrator-as-router.md | 114 | used here | Cites issue #1726 representing the system-wide transition from prompt-level judgment to deterministic gates. |

## Consumes
Code artifacts, test results, and deterministic schema outputs.

## Produces
Binary pass/fail enforcement verdicts.

## When applied
Applied at workflow transition boundaries, pre-push, and CI pipeline stages.

## Sub-concepts
none

## Part of
quality-gates

## Implementation status
defects: missing-path

## Design notes
A core architectural discipline in rjm that replaces conversational or LLM-judged validation with code-enforced, binary gates. Deterministic gates ensure that policy compliance, quality thresholds, and invariants are verified objectively without relying on model discretion.
