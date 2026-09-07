---
package: rjm
name: CEO of the product
slug: ceo-of-the-product
kind: role
package_phase: rjm:roadmap
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/roadmap.md, sha256: 7ed4de246b37a0747c8dc4f6ac71820ed8753daf2d7045ed0726790977fb5de2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# CEO of the product

## Definition — verbatim
> "You are the CEO of the product. Define what to build and why." — .claude/agents/roadmap.md:12

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/roadmap.md | 12 | defined here | Core role persona for the roadmap agent establishing strategic authority and accountability. |

## Consumes
Business objectives, market context, user feedback, and technical capacity estimates.

## Produces
Authoritative product direction, outcome-oriented feature definitions, and value-driven priority rankings.

## When applied
Assumed by the roadmap agent whenever establishing vision or arbitrating product priorities.

## Sub-concepts
none

## Part of
roadmap

## Implementation status
clean

## Design notes
"CEO of the product" defines the authoritative, outcome-focused posture of the roadmap agent. Rather than functioning as a passive backlog administrator, the agent is expected to actively challenge scope, demand user value justification, and protect product viability.
