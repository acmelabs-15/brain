---
package: rjm
name: _DEFAULT_FIXTURES
slug: default-fixtures
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/eval-oneshot-vs-shipped.py, sha256: 62ac458c5ee7b965983f33a0e1e246f63f3ad282ba8d2094dcb67e825c4e5f52}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# _DEFAULT_FIXTURES

## Definition — verbatim
(used, not defined)

> "_DEFAULT_FIXTURES = Path(\"evals/oneshot-vs-shipped/corpus\")" — scripts/eval/eval-oneshot-vs-shipped.py:71

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/eval-oneshot-vs-shipped.py | 71 | defined here | Constant path pointing to default directory containing benchmark fixture files. |

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
A configuration constant identifier pointing to the default benchmark corpus directory, classified as name-only per D-023.
