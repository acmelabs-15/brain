---
package: matt
name: router
slug: router
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: CLAUDE.md, sha256: fa8a2aaf79ca544e92c76401fe2a862aba0583fe62c3a4908af6f20ebadeb89e}
  - {path: external/ask-matt.md, sha256: 1fcf73a516b42ad9b5ddb1faa24574aad7490f97099e7b4276c364f870582b2d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# router

## Definition — verbatim
> "[`ask-matt`](./skills/engineering/ask-matt/SKILL.md) is the router that maps every user-reachable skill and how they relate." — CLAUDE.md:21

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| CLAUDE.md | 21 | defined here | Identifies ask-matt as the router mapping all user-reachable skills and their relationships. |
| external/ask-matt.md | 25 | defined here | Explains that ask-matt acts as the router over repository skills recommending next actions. |

## Consumes
A developer's description of their current situation, task, or engineering roadblock.

## Produces
A recommended skill or sequence of skills along with decision points, without executing actions directly.

## When applied
Invoked when a developer needs guidance on which skill or workflow fits their situation.

## Sub-concepts
none

## Part of
ask-matt

## Implementation status
defects: doc-drift, orphan (unreferenced external documentation snapshot; CLAUDE.md em-dash drift)

## Design notes
A meta-skill architectural pattern where an orchestrating skill routes user queries to the appropriate specialized skills and workflows without modifying code, maintaining strict separation between navigation and execution.
