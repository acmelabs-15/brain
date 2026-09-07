---
package: rjm
name: Tally
slug: tally
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/check_codeql_sarif.py, sha256: e20a24e447806fac29fce1245d20683d67b25fda571e06fd6ee6c5d1ac359c13}
  - {path: scripts/validation/check_adr_lifecycle.py, sha256: 20aa2406f41d31ba7c7d8bb17271a66eb7e885f5f0588593869fba84920ca738}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Tally

## Definition — verbatim
(used, not defined)

> "class Tally:" — scripts/ci/check_codeql_sarif.py:36

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/check_codeql_sarif.py | 36 | defined here | Data class accumulating rule run statistics, finding counts, and error tallies from SARIF reports. |
| scripts/validation/check_adr_lifecycle.py | 871 | defined here | Function counting violation totals by severity and rule code. |

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
A class and function identifier (`Tally`) tracking violation and issue counts recorded during inventory analysis, classified as `name-only` per D-023.
