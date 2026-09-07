---
package: rjm
name: Confirmation
slug: confirmation
kind: template
package_phase: rjm:Review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/critique/ADR-023-debate-log.md, sha256: f199ea3783f0e058dc4704243dd7f91d0f4a44c0437d4bff41bf2731a65f9013}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Confirmation

## Definition — verbatim
(used, not defined)

> "| P1 | Missing Confirmation section |" — .agents/critique/ADR-023-debate-log.md:30

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/critique/ADR-023-debate-log.md | 30 | used here | Identified by Architect as a missing P1 section in draft ADR-023. |

## Consumes
Accepted architectural decision, implementation criteria, test and validation strategies.

## Produces
Actionable verification mechanism (test suite, automated gate, metrics) ensuring the architectural decision is implemented as specified.

## When applied
Required section in MADR 4.0 architectural decision records to define verification conditions.

## Sub-concepts
none

## Part of
madr-4-0

## Implementation status
defects: internal-contradiction

## Design notes
Confirmation is a mandatory MADR 4.0 template section that defines actionable verification criteria to demonstrate that an accepted architectural decision is correctly realized in code. Without it, architectural decisions risk becoming unenforced documentation without empirical validation.
