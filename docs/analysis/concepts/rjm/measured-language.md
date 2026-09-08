---
package: rjm
name: Measured language
slug: measured-language
kind: pattern
package_phase: rjm:strategic
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: templates/agents/independent-thinker.shared.md, sha256: d39a26dc51ed779d9e333fc8af268ed6f0afc7f1d40688c970a4a1ba9ddd93b8}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Measured language

## Definition — verbatim
> "- **Measured language**: Avoid hyperbole; state confidence levels explicitly" — templates/agents/independent-thinker.shared.md:40

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| templates/agents/independent-thinker.shared.md | 40 | defines | Communication requirement to eliminate exaggeration and declare explicit confidence bounds. |

## Consumes
Agent analysis findings and draft evaluations.

## Produces
Objective, quantified critique without hyperbole or emotional exaggeration.

## When applied
Applied whenever articulating technical criticisms, risk assessments, or alternative proposals.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path

## Design notes
A communication pattern for analytical critique that bans exaggeration and emotional hyperbole, requiring agents to calibrate assertions with explicit confidence levels to preserve technical credibility.
