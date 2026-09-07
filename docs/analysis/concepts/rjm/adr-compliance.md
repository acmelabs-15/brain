---
package: rjm
name: ADR compliance
slug: adr-compliance
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-049-pre-pr-validation-gates.md, sha256: e9fca386ce2c9bfe87b801d629d7ebf2d44a14111a1bb6906e8e07b991006470}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# ADR compliance

## Definition — verbatim
(used, not defined)

> "| ADR compliance | All referenced ADRs valid | Architecture governance |" — .agents/architecture/ADR-049-pre-pr-validation-gates.md:50

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-049-pre-pr-validation-gates.md | 50 | used here | Listed as a mandatory check in the pre-PR validation gate table requiring all referenced ADRs to be valid. |

## Consumes
ADR references cited in code, commits, and PR descriptions.

## Produces
Validation verdict verifying that all cited ADRs exist and remain accepted.

## When applied
Evaluated during pre-PR validation and architecture governance checks.

## Sub-concepts
none

## Part of
pre-pr-validation-gates

## Implementation status
defects: missing-path

## Design notes
An architectural governance verification gate that ensures all ADRs referenced within code, documentation, or pull request metadata exist, are valid, and have their required constraints satisfied before a change can be submitted.
