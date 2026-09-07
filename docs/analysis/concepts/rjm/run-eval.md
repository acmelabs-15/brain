---
package: rjm
name: run_eval
slug: run-eval
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/eval-reviewer-asymmetry.py, sha256: c7751b7daf8566fcc141421c962287c577ed89966f15bf95cb39ac32b26ced9b}
  - {path: scripts/eval/eval_skill_router.py, sha256: 3aa5d1334db711e7d16cda841dd34bdde659def740f1f217a3ee4055d8a30b70}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# run_eval

## Definition — verbatim
(used, not defined)

> "def run_eval(plan: list[dict[str, Any]], api_key: str) -> dict[str, Any]:" — scripts/eval/eval_skill_router.py:419

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/eval_skill_router.py | 419 | defined here | Core loop executing router evaluation over all fixtures across before/after prompt variants. |
| scripts/eval/eval-reviewer-asymmetry.py | 318 | defined here | Main evaluation loop executing repeated trials comparing control and treatment reviewer prompts. |

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
A Python eval runner function identifier implemented across multiple evaluation scripts to orchestrate test fixture execution loops and accuracy aggregation, classified as name-only per D-023.
