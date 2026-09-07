---
package: rjm
name: build_judge_prompt
slug: build-judge-prompt
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

# build_judge_prompt

## Definition — verbatim
(used, not defined)

> "def build_judge_prompt(fixture: Fixture, agent_fix: str) -> str:" — scripts/eval/_oneshot_bench_core.py:152

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/_oneshot_bench_core.py | 152 | defined here | Function constructing the judge comparison prompt contrasting the agent fix against the shipped fix. |
| scripts/eval/eval-oneshot-vs-shipped.py | 40 | used here | Imported from _oneshot_bench_core to construct prompts for LLM judge evaluation calls. |

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
build_judge_prompt is a prompt assembly function in _oneshot_bench_core.py formatting judge inputs for comparing proposals against ground truth rather than an SDLC lifecycle concept, classified as name-only per D-023.
