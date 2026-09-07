---
package: rjm
name: aspirational
slug: aspirational
kind: gate
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

# aspirational

## Definition — verbatim
> "WHEN Question 1 (Demand Reality) is aspirational as defined by the operational test below" — .agents/specs/requirements/REQ-016-spec-step0-first-principles-gate.md:81

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/specs/requirements/REQ-016-spec-step0-first-principles-gate.md | 81 | defines | Operational failure condition for Question 1 having fewer than three requesters, future tense, or generic terms. |

## Consumes
Answer text provided for Question 1 (Demand Reality).

## Produces
Binary determination (aspirational vs. validated) causing gate halt if aspirational.

## When applied
During Step 0 Question 1 evaluation in `/spec`.

## Sub-concepts
none

## Part of
demand-reality

## Implementation status
defects: doc-drift, missing-path

## Design notes
An operational test in REQ-016 defining demand as aspirational if fewer than three requesters are named, future tense/conditional mood is used, or generic descriptors are employed, blocking ungrounded features.
