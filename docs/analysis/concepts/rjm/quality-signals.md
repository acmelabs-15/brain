---
package: rjm
name: Quality signals
slug: quality-signals
kind: checklist
package_phase: cross-phase
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

# Quality signals

## Definition — verbatim
> "- Quality signals: follows style guide (no filler, data over adjectives)" — scripts/eval/eval-agents.py:13

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/eval-agents.py | 13 | defined here | Defined as an evaluation scoring dimension assessing style guide compliance. |

## Consumes
Agent response text and style guide rules.

## Produces
Evaluation scores measuring absence of filler and preference for concrete data over adjectives.

## When applied
Applied during agent evaluation runs scoring output quality.

## Sub-concepts
none

## Part of
evaluation-rubric

## Implementation status
defects: missing-path

## Design notes
An evaluation checklist dimension in `eval-agents.py` measuring conciseness, absence of conversational filler, and grounding in verifiable data.
