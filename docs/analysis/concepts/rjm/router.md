---
package: rjm
name: router
slug: router
kind: role
package_phase: rjm:autoplan
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/autoplan/SKILL.md, sha256: 96706c2d86a99a812a776ad92981eeeaabd975776e4eeb30b7ba6809cfe18fd9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# router

## Definition — verbatim
> "type: router" — .claude/skills/autoplan/SKILL.md:11

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/autoplan/SKILL.md | 11 | defined here | Skill metadata type classification designating autoplan as an automated request dispatcher. |

## Consumes
Unstructured user requests, issue URLs, or ambiguous commands (do it, handle it).

## Produces
Intent classifications, target stack detections, and concrete delegation routes to specialized skills, agents, or commands.

## When applied
Activated automatically on ambiguous requests or explicit /autoplan invocations.

## Sub-concepts
none

## Part of
autoplan

## Implementation status
clean

## Design notes
`router` designates autoplan's functional architectural role: an automated dispatcher that intercepts open-ended user requests and routes them to the correct skill or agent without requiring manual catalog selection.
