---
package: rjm
name: gstack /autoplan
slug: gstack-autoplan
kind: reference
package_phase: rjm:autoplan
implementation_in_scope: false
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/autoplan/SKILL.md, sha256: 96706c2d86a99a812a776ad92981eeeaabd975776e4eeb30b7ba6809cfe18fd9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# gstack /autoplan

## Definition — verbatim
> "inspiration: gstack /autoplan (garrytan/gstack autoplan/SKILL.md.tmpl)" — .claude/skills/autoplan/SKILL.md:12

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/autoplan/SKILL.md | 12 | used here | Upstream design inspiration cited in metadata for request classification and automatic routing. |

## Consumes
Upstream pattern design for skill routing.

## Produces
Conceptual design foundation for lazy catalog routing and zero-configuration dispatch.

## When applied
Cited as design provenance in autoplan metadata.

## Sub-concepts
none

## Part of
autoplan

## Implementation status
clean

## Design notes
`gstack /autoplan` represents the external design lineage of `autoplan`, adopting the concept of a single lazy entry point that routes user requests to downstream skill chains with default parameters.
