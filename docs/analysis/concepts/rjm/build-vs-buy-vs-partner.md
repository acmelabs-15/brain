---
package: rjm
name: Build vs buy vs partner
slug: build-vs-buy-vs-partner
kind: technique
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

# Build vs buy vs partner

## Definition — verbatim
> "**Challenge the build instinct.** Explore alternatives before recommending custom work." — .claude/agents/roadmap.md:21

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/roadmap.md | 21 | used here | Decision heuristic requiring teams to challenge the default instinct to write custom code. |

## Consumes
Capability requirements, commercial off-the-shelf options, and partner integration possibilities.

## Produces
Evaluation reports and recommendations selecting between custom software development, third-party software purchases, or partner integrations.

## When applied
Invoked whenever a new strategic capability is proposed before committing engineering capacity to custom implementation.

## Sub-concepts
none

## Part of
roadmap

## Implementation status
clean

## Design notes
Build vs buy vs partner counteracts engineering bias toward custom software creation. By mandating an exploration of off-the-shelf and partner solutions before authoring custom code, it conserves developmental resources for genuine core differentiators.
