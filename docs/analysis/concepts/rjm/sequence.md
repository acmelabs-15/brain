---
package: rjm
name: _SEQUENCE
slug: sequence
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/pre_pr_sequence.py, sha256: d485d238eadb8460ddeba05d06d352d2f8586addf3723d2bedd2c510f1cf49d2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# _SEQUENCE

## Definition — verbatim
(used, not defined)

> "The sequence is data. ``_SEQUENCE`` is a tuple of ``_Gate`` rows read top to" — scripts/validation/pre_pr_sequence.py:17

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/pre_pr_sequence.py | 17 | defined here | Module-level tuple defining the ordered collection of validation gate specifications. |

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
`_SEQUENCE` is a Python module-level constant identifier holding the tuple of pre-PR validation gates rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
