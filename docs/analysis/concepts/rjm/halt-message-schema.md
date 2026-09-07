---
package: rjm
name: Halt Message Schema
slug: halt-message-schema
kind: template
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/specs/requirements/REQ-016-spec-step0-first-principles-gate.md, sha256: bada92fac80c619ad829da39e28a6a11b87601aa8487d5f8cfd46edbb0d7637b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Halt Message Schema

## Definition — verbatim
> "### Halt Message Schema" — .agents/specs/requirements/REQ-016-spec-step0-first-principles-gate.md:220

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/specs/requirements/REQ-016-spec-step0-first-principles-gate.md | 220 | defined here | Defines the structured five-part schema required for all Step 0 halt messages. |

## Consumes
halt-triggers

## Produces
halt-message

## When applied
> "When any trigger fires, the halt message MUST contain:" — .agents/specs/requirements/REQ-016-spec-step0-first-principles-gate.md:222

## Sub-concepts
none

## Part of
halt-triggers

## Implementation status
defects: doc-drift, missing-path

## Design notes
A standardized communication schema specifying five mandatory fields (trigger ID, question label, verbatim author answer, failed test rule, deferral instruction) emitted whenever a Step 0 halt trigger fires. This structure provides machine-readable error context and clear remediation instructions for the author to correct deficient inputs.
