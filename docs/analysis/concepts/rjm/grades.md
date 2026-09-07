---
package: rjm
name: GRADES
slug: grades
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/_oneshot_bench_core.py, sha256: ca0711a16c6783ec1ee13ffd37a3eae9dcc589eeb8dd2d79f2101029e9bb876a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# GRADES

## Definition — verbatim
(used, not defined)

> "GRADES = (\"FULL\", \"PARTIAL\", \"NONE\")" — scripts/eval/_oneshot_bench_core.py:30

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/_oneshot_bench_core.py | 30 | defined here | Constant defining the allowed grade strings ("FULL", "PARTIAL", "NONE") returned by the LLM benchmark judge. |

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
GRADES is a Python tuple constant in _oneshot_bench_core.py enumerating benchmark outcome classifications rather than an SDLC lifecycle concept, classified as name-only per D-023.
