---
package: rjm
name: find_argument_hint_violations
slug: find-argument-hint-violations
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

# find_argument_hint_violations

## Definition — verbatim
(used, not defined)

> "def find_argument_hint_violations(paths: list[Path]) -> list[ArgumentHintViolation]:" — scripts/validation/validate_argument_hint.py:152

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/validate_argument_hint.py | 152 | defined here | Scanner function parsing markdown files to detect unsafe or unquoted argument-hint frontmatter entries. |

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
A validation scanner function identifier in scripts/validation/validate_argument_hint.py, classified as name-only per D-023.
