---
package: rjm
name: ArgumentHintViolation
slug: argumenthintviolation
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/validate_argument_hint.py, sha256: dcebf02783a325f6f9bbecd680faf59a4b10fcb221a48721e06358a43f855b4c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# ArgumentHintViolation

## Definition — verbatim
(used, not defined)

> "class ArgumentHintViolation:" — scripts/validation/validate_argument_hint.py:43

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/validate_argument_hint.py | 43 | defined here | Dataclass representing an unsafe argument-hint frontmatter value with path, location, and remediation. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
A dataclass identifier in scripts/validation/validate_argument_hint.py representing a frontmatter validation error, classified as name-only per D-023.
