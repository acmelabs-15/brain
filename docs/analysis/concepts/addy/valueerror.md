---
package: addy
name: ValueError
slug: valueerror
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: evals/cases/test-driven-development.json, sha256: b038011ea007a91aee8b92cb0fca7493c92f4027e2a6560d674bb4977fe4bf56}
  - {path: evals/fixtures/test-driven-development-ecosystem/ledger.py, sha256: ce6c0ab49c7297b86934e138c18425e52592fe3d0c31cb0048ce7c6cd159e106}
  - {path: evals/fixtures/test-driven-development-ecosystem/test_ledger.py, sha256: e6b0a010a846f2a21af829bc6b99f5f92d50608c7539c5176f40a86848c78dbb}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# ValueError

## Definition — verbatim
(used, not defined)
> "supported; anything else raises ValueError." — evals/fixtures/test-driven-development-ecosystem/ledger.py:8

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| evals/cases/test-driven-development.json | 59 | references | Specified in an evaluation prompt as the expected error raised when a debit drives the balance negative. |
| evals/fixtures/test-driven-development-ecosystem/ledger.py | 8 | references | Raised in Python fixture implementation when an unsupported entry type is encountered. |
| evals/fixtures/test-driven-development-ecosystem/test_ledger.py | 14 | references | Asserted in unit test verifying invalid entries raise ValueError. |

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
ValueError is a standard Python built-in exception identifier used in evaluation test fixture code rather than a development lifecycle concept.
