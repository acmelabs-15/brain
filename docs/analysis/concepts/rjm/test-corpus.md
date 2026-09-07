---
package: rjm
name: test_corpus
slug: test-corpus
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# test_corpus

## Definition — verbatim
(used, not defined)

> "def test_corpus(repo_root: Path) -> str:" — scripts/validation/check_skill_contract_tests.py:92

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_skill_contract_tests.py | 92 | defined here | Concatenates all test source contents under tests/ to verify skill contracts are tested. |

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
defects: orphan

## Design notes
A test suite concatenation helper function in `scripts/validation/check_skill_contract_tests.py`, classified as `name-only` per D-023.
