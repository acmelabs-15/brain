---
package: addy
name: meta-skill router
slug: meta-skill-router
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/comparison.md, sha256: 652e4df31f4bc1e1d456db768ee15c6cc5fdd6dee754d9dfccffe5ce1eac7194}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# meta-skill router

## Definition — verbatim
> "SDLC **phases** (Define to Ship) behind a meta-skill router" — docs/comparison.md:20

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/comparison.md | 20 | defines | Organizing router mechanism (using-agent-skills) directing tasks to appropriate lifecycle skills |

## Consumes
Unstructured developer requests and lifecycle phase mapping rules.

## Produces
Route determination directing the agent to the appropriate specialized lifecycle skill.

## When applied
Invoked when a task requires determining which lifecycle skill or command to activate.

## Sub-concepts
none

## Part of
agent-skills

## Implementation status
clean

## Design notes
The meta-skill router (manifested in using-agent-skills) serves as an orientation and routing guide that maps high-level developer intents across SDLC phases to specific underlying skills without acting as a runtime proxy.
