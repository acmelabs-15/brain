---
package: addy
name: reports all descriptions when command twins drift
slug: reports-all-descriptions-when-command-twins-drift
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validate-commands-test.js, sha256: 15759574e8a6348693096681343602b6d63d3ab8fb2db90b308e2ca83ac08ab2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# reports all descriptions when command twins drift

## Definition — verbatim
(used, not defined)
> "test('reports all descriptions when command twins drift', () => {" — scripts/validate-commands-test.js:100

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validate-commands-test.js | 100 | defines | Unit test asserting that description mismatches among command twins print all conflicting descriptions in CI output. |

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
Test case title verifying diagnostic reporting behavior for drifted command descriptions rather than an independent lifecycle concept.
