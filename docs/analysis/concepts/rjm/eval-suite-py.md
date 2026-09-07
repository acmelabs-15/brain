---
package: rjm
name: eval-suite.py
slug: eval-suite-py
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/eval-agents.py, sha256: 48eee5226245d9a269beecb305d41e7bdad5e7fd995e93a3da23d8c3c33bce4e}
  - {path: scripts/eval/eval-knowledge-integration.py, sha256: cb592498e314781566e1d645748d3885e0715382ee8a49446d0045cdfa3a733f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# eval-suite.py

## Definition — verbatim
(used, not defined)

> "The eval-suite.py orchestrator routes to the correct evaluator automatically." — scripts/eval/eval-agents.py:7

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/eval-agents.py | 7 | used here | Referenced in header docstring as the orchestrator script routing evaluation jobs. |
| scripts/eval/eval-knowledge-integration.py | 7 | used here | Referenced in header docstring as the orchestrator routing to knowledge evaluation. |

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
defects: missing-path, doc-drift

## Design notes
A script filename referenced in docstrings as the evaluation suite orchestrator router, classified as `name-only` per D-023.
