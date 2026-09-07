---
package: rjm
name: KANO
slug: kano
kind: technique
package_phase: rjm:roadmap
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/roadmap.md, sha256: 7ed4de246b37a0747c8dc4f6ac71820ed8753daf2d7045ed0726790977fb5de2}
  - {path: README.md, sha256: ca72955c7f43ad2e17a21064c0dfe9a7b2b594b958a130f1af308ad413640d7f}
  - {path: docs/agent-catalog.md, sha256: a391804348b3a3554b1f37ba0878075da91fc7b25816414afaa5dbaad915a067}
  - {path: scripts/eval/eval-agents.py, sha256: 48eee5226245d9a269beecb305d41e7bdad5e7fd995e93a3da23d8c3c33bce4e}
  - {path: templates/agents/roadmap.shared.md, sha256: fd92ee8e3cf1daac90afd929e18eef500c446fc015b43703096a4dffb49592b1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# KANO

## Definition — verbatim
> "Classify features by satisfaction-to-investment curve:" — .claude/agents/roadmap.md:43

## Also called — verbatim
"KANO Model" — .claude/agents/roadmap.md:41

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/roadmap.md | 3 | used here | Listed in roadmap agent description as foundational prioritization model alongside RICE. |
| docs/agent-catalog.md | 41 | used here | Catalog entry documenting roadmap agent's capability to score features using KANO. |
| README.md | 295 | defined here | Orchestrator workflow invoking roadmap to evaluate candidate features with KANO. |
| scripts/eval/eval-agents.py | 349 | used here | Evaluation script test case asserting KANO scoring in roadmap outputs. |
| templates/agents/roadmap.shared.md | 3 | used here | Shared roadmap agent template specifying KANO classification. |

## Consumes
User feedback, product feature descriptions, and competitive baseline analysis.

## Produces
Categorization of backlog features into Must-Have, Performance, Delighter, and Indifferent buckets, dictating investment strategies.

## When applied
Applied alongside RICE scoring during product roadmapping and quarterly prioritization.

## Sub-concepts
none

## Part of
prioritization-frameworks

## Implementation status
clean

## Design notes
The KANO model classifies features according to their emotional impact on customer satisfaction relative to engineering investment. In rjm, it ensures teams fulfill non-negotiable baselines (Must-Haves) and measure Performance gains while aggressively cutting Indifferent items.
