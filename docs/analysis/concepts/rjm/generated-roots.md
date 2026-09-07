---
package: rjm
name: GENERATED_ROOTS
slug: generated-roots
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validation/check_doc_interpreter_portability.py, sha256: 62a3182550bff6eb7dfc04ce073fb53feb78bd52cde315062b3a2fe1543f8ac1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# GENERATED_ROOTS

## Definition — verbatim
(used, not defined)

> "GENERATED_ROOTS: tuple[str, ...] = (" — scripts/validation/check_doc_interpreter_portability.py:171

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_doc_interpreter_portability.py | 171 | defined here | Constant tuple specifying directory roots for generated files excluded from scanning. |

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
A Python tuple constant in `check_doc_interpreter_portability.py` defining generated file directory paths excluded from scope, classified as name-only per D-023.
