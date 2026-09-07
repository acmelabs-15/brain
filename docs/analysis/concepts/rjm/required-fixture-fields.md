---
package: rjm
name: REQUIRED_FIXTURE_FIELDS
slug: required-fixture-fields
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/_oneshot_bench_core.py, sha256: ca0711a16c6783ec1ee13ffd37a3eae9dcc589eeb8dd2d79f2101029e9bb876a}
  - {path: scripts/eval/eval_skill_router.py, sha256: 3aa5d1334db711e7d16cda841dd34bdde659def740f1f217a3ee4055d8a30b70}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# REQUIRED_FIXTURE_FIELDS

## Definition — verbatim
(used, not defined)

> "REQUIRED_FIXTURE_FIELDS = (" — scripts/eval/_oneshot_bench_core.py:32

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/_oneshot_bench_core.py | 32 | defined here | Tuple defining required JSON keys for one-shot bug fix evaluation fixtures. |
| scripts/eval/eval_skill_router.py | 83 | defined here | Set defining mandatory dictionary keys for skill routing benchmark fixtures. |

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
defects: doc-drift, orphan

## Design notes
REQUIRED_FIXTURE_FIELDS is a configuration schema constant used across evaluation scripts to validate test fixture JSON keys rather than an SDLC lifecycle concept, classified as name-only per D-023.
