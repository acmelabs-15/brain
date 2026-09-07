---
package: rjm
name: EXIT_ERR
slug: exit-err
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/drift_collect_details.py, sha256: 417fbff30ed3205ffd3118787599df92da6d149f4f69f525ea042ee7bba377b9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# EXIT_ERR

## Definition — verbatim
(used, not defined)

> "EXIT_ERR = 1" — scripts/ci/drift_collect_details.py:31

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/drift_collect_details.py | 31 | defined here | Exit code constant returned on failure during drift detail collection. |

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
An exit status constant for error conditions in CI drift collection rather than an operational lifecycle concept.
