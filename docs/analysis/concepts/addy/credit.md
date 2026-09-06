---
package: addy
name: credit
slug: credit
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: evals/fixtures/test-driven-development-ecosystem/ledger.py, sha256: ce6c0ab49c7297b86934e138c18425e52592fe3d0c31cb0048ce7c6cd159e106}
  - {path: evals/fixtures/test-driven-development-ecosystem/test_ledger.py, sha256: e6b0a010a846f2a21af829bc6b99f5f92d50608c7539c5176f40a86848c78dbb}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# credit

## Definition — verbatim
(used, not defined)

> "    Entries are (kind, amount) tuples. Only \"credit\" entries are" — evals/fixtures/test-driven-development-ecosystem/ledger.py:7

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| evals/fixtures/test-driven-development-ecosystem/ledger.py | 7 | used here | Docstring describing credit transaction entry tuple handling in balance calculation |
| evals/fixtures/test-driven-development-ecosystem/test_ledger.py | 8 | used here | Unit test assertion verifying balance calculation with credit entry tuple |

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
Transaction entry type literal within an evaluation test fixture; not a development lifecycle concept.
