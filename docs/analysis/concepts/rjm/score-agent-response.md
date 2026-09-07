---
package: rjm
name: score_agent_response
slug: score-agent-response
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

# score_agent_response

## Definition — verbatim
(used, not defined)

> "def score_agent_response(" — scripts/eval/eval-agents.py:599

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/eval-agents.py | 599 | defined here | Function evaluating an agent response across role adherence, actionability, quality, and appropriateness. |

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
A Python scoring function (`score_agent_response`) in `eval-agents.py` invoking LLM judge evaluation against role and complexity expectations, classified as `name-only` per D-023.
