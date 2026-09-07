---
package: rjm
name: TIER_QUERIED:
slug: tier-queried
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/context-gather/SKILL.md, sha256: 73ed9f6423ee4e10ff21aaa759ad92eea62f7f0af0923aef4e19e296bc883904}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# TIER_QUERIED:

## Definition — verbatim
(used, not defined)

> "TIER_QUERIED: <tier>" — .claude/skills/context-gather/SKILL.md:72

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/context-gather/SKILL.md | 72 | defined here | Output format marker emitted once per queried knowledge tier (forgetful, serena, context7, deepwiki, web). |

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
clean

## Design notes
TIER_QUERIED: is a structured stdout logging prefix emitted by context-gather to trace searched knowledge sources rather than an independent lifecycle concept.
