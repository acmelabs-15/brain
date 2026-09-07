---
package: rjm
name: optimize-artifact.py
slug: optimize-artifact-py
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/README.md, sha256: 0f391cb999a2e1691aac7a3e4e5464b79e3edfa407b876b8496bb3723c965df5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# optimize-artifact.py

## Definition — verbatim
(used, not defined)

> "| `optimize-artifact.py` | Held-out-gated edit loop for agents, rules, and hooks. Splits tasks, bounds how many times an edit may be measured against the held-out group, and applies patches. A budgeted comparison, not an access boundary; see the seam section below. Core in `_optimizer_core.py`, scorer adapters in `_optimizer_adapters.py`. | #3422 |" — scripts/eval/README.md:99

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/README.md | 99 | defined here | Documented in evaluation tooling table as the held-out-gated edit loop driver for prompt and rule optimization. |

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
defects: doc-drift, missing-path, script-bug

## Design notes
`optimize-artifact.py` is a Python CLI script file name providing held-out-gated optimization rails for prompts and rules rather than an SDLC lifecycle concept.
