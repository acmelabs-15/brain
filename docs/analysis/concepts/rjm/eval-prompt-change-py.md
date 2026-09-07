---
package: rjm
name: eval-prompt-change.py
slug: eval-prompt-change-py
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-057-prompt-behavioral-evaluation.md, sha256: 924e6f5e3f68c755ac189d1ade6220f4f904c62a74c32547df99dc5e58a64aa7}
  - {path: scripts/eval/eval-agents.py, sha256: 48eee5226245d9a269beecb305d41e7bdad5e7fd995e93a3da23d8c3c33bce4e}
  - {path: scripts/eval/eval-knowledge-integration.py, sha256: cb592498e314781566e1d645748d3885e0715382ee8a49446d0045cdfa3a733f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# eval-prompt-change.py

## Definition — verbatim
(used, not defined)

> "validation with before/after comparison, use eval-prompt-change.py (ADR-057 compliant)." — scripts/eval/eval-agents.py:6

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-057-prompt-behavioral-evaluation.md | 103 | used here | Cited as the script implementing `acceptance_gate()` and relaxed gate criteria. |
| scripts/eval/eval-agents.py | 6 | used here | Note directing prompt change validation with before/after comparison to `eval-prompt-change.py`. |
| scripts/eval/eval-knowledge-integration.py | 6 | used here | Header note referring prompt change validation tasks to `eval-prompt-change.py`. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
prompt-behavioral-evaluation

## Implementation status
defects: missing-path

## Design notes
`eval-prompt-change.py` is an evaluation script filename in `scripts/eval/` that executes before/after prompt evaluations under ADR-057, classified as `name-only` per D-023.
