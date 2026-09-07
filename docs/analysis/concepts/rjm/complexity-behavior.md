---
package: rjm
name: COMPLEXITY_BEHAVIOR
slug: complexity-behavior
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/eval-agents.py, sha256: 48eee5226245d9a269beecb305d41e7bdad5e7fd995e93a3da23d8c3c33bce4e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# COMPLEXITY_BEHAVIOR

## Definition — verbatim
(used, not defined)

> "COMPLEXITY_BEHAVIOR = {" — scripts/eval/eval-agents.py:573

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/eval-agents.py | 573 | defined here | Mapping defining expected agent conversational behaviors across Cynefin complexity categories. |

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
defects: missing-path

## Design notes
An internal Python dictionary constant (`COMPLEXITY_BEHAVIOR`) in `eval-agents.py` specifying behavioral scoring criteria across Cynefin domains, classified as `name-only` per D-023.
