---
package: rjm
name: Advisory / steering / precondition hook
slug: advisory-steering-precondition-hook
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-066-hook-fail-open-reconciliation.md, sha256: b677a98214b04cc65d69de89ab5b1398d8edd089df1c9eda27c996023800ee29}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Advisory / steering / precondition hook

## Definition — verbatim
> "3. **Advisory / steering / precondition hook** (injects context, nudges a preference, or checks a soft precondition, and does NOT block a specific unsafe action). Fail OPEN." — .agents/architecture/ADR-066-hook-fail-open-reconciliation.md:113

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-066-hook-fail-open-reconciliation.md | 113 | defined here | Defines Class 3 hooks that provide non-blocking steering or soft context and must fail open to avoid wedging agent execution loops. |

## Consumes
Contextual hints, agent state, and soft preferences.

## Produces
Injected context or non-blocking advisory notes surfaced to stderr.

## When applied
Fired during session start or tool calls to provide non-blocking steering guidance.

## Sub-concepts
none

## Part of
hook-classification-model

## Implementation status
defects: doc-drift, missing-path

## Design notes
Class 3 of ADR-066's three-class hook taxonomy. Advisory hooks inject guidance, nudge preferences, or evaluate soft preconditions without defending critical invariants. They must fail open on internal errors to ensure they never wedge live agent execution loops without delivering safety benefits.
