---
package: rjm
name: Open Requirement 1
slug: open-requirement-1
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-087-held-out-validated-improvement.md, sha256: f599d484b96816678b0f4d3b72e55cf2794d3a10a1c5de1b212e4d3f920aa513}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Open Requirement 1

## Definition — verbatim
(used, not defined)

> "Open Requirement 1" — .agents/architecture/ADR-087-held-out-validated-improvement.md:566

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-087-held-out-validated-improvement.md | 566 | defined here | Reference label designating the prerequisite for a trusted controller to own task definitions and results. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
open-requirements

## Implementation status
defects: doc-drift, internal-contradiction, missing-path

## Design notes
An architectural specification heading and identifier in ADR-087 designating the first open requirement (a trusted controller that owns task definitions, scoring, and results), recorded as a name-only concept per D-023 rather than an operational lifecycle entity.
