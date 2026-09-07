---
package: rjm
name: INVEST criteria
slug: invest-criteria
kind: technique
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/agent-catalog.md, sha256: a391804348b3a3554b1f37ba0878075da91fc7b25816414afaa5dbaad915a067}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# INVEST criteria

## Definition — verbatim
(used, not defined)

> "Uses explicit language, INVEST criteria for user stories, and unambiguous acceptance criteria." — docs/agent-catalog.md:26

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/agent-catalog.md | 26 | used here | Documented as the story decomposition rubric used by the explainer agent when drafting user stories. |

## Consumes
Unstructured product requirements, feature ideas, and customer requests.

## Produces
Scoped user stories characterized by independence, estimability, and verifiable acceptance criteria.

## When applied
Applied by the explainer agent when authoring product requirement documents and user-facing specifications.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
INVEST criteria represent a quality standard utilized by rjm's explainer agent to evaluate and shape user stories (Independent, Negotiable, Valuable, Estimable, Small, Testable). Applying these criteria ensures that requirements are scoped small enough for autonomous agents to plan, implement, and verify without cross-story entanglements.
