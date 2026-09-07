---
package: rjm
name: JudgeVerdict
slug: judgeverdict
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/_oneshot_bench_core.py, sha256: ca0711a16c6783ec1ee13ffd37a3eae9dcc589eeb8dd2d79f2101029e9bb876a}
  - {path: scripts/eval/eval-oneshot-vs-shipped.py, sha256: 62ac458c5ee7b965983f33a0e1e246f63f3ad282ba8d2094dcb67e825c4e5f52}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# JudgeVerdict

## Definition — verbatim
(used, not defined)

> "class JudgeVerdict:" — scripts/eval/_oneshot_bench_core.py:184

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/_oneshot_bench_core.py | 184 | defined here | Dataclass representing parsed evaluation results and edge case findings for a single fixture from the judge. |
| scripts/eval/eval-oneshot-vs-shipped.py | 37 | used here | Imported from _oneshot_bench_core to represent individual fixture evaluation outcomes. |

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
JudgeVerdict is a Python dataclass representing parsed judge results in _oneshot_bench_core.py rather than an operational lifecycle concept, classified as name-only per D-023.
