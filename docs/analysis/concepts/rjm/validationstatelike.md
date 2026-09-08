---
package: rjm
name: _ValidationStateLike
slug: validationstatelike
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

# _ValidationStateLike

## Definition — verbatim
(used, not defined)

> "class _ValidationStateLike(Protocol):" — scripts/validation/pre_pr_sequence.py:119

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/pre_pr_sequence.py | 119 | defined here | Protocol class defining the structural interface for validation state tracking total and skipped counts. |

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
`_ValidationStateLike` is a Python typing Protocol class identifier for validation state tracking rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
