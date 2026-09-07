---
package: rjm
name: Build vs Buy vs Partner vs Defer
slug: build-vs-buy-vs-partner-vs-defer
kind: technique
package_phase: rjm:plan
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/roadmap.md, sha256: 7ed4de246b37a0747c8dc4f6ac71820ed8753daf2d7045ed0726790977fb5de2}
  - {path: templates/agents/roadmap.shared.md, sha256: fd92ee8e3cf1daac90afd929e18eef500c446fc015b43703096a4dffb49592b1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Build vs Buy vs Partner vs Defer

## Definition — verbatim
> "2. **Frame as four options**: build, buy, partner, defer." — .claude/agents/roadmap.md:133

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/roadmap.md | 128 | defined here | Defined as a four-way evaluation framework applied when considering custom software development. |
| templates/agents/roadmap.shared.md | 134 | defined here | Defined in the shared roadmap template for architectural sourcing decisions. |

## Consumes
Engineering proposals to build new software capabilities or internal tools.

## Produces
A formal decision selecting between in-house construction, commercial procurement, integration partnership, or backlog deferral.

## When applied
Applied whenever the roadmap agent evaluates requests or proposals to build new functionality.

## Sub-concepts
- tco-test

## Part of
- roadmap

## Implementation status
defects: doc-drift

## Design notes
In rjm, Build vs Buy vs Partner vs Defer expands binary build-or-buy debates into a complete four-way evaluation framework. Operating with default skepticism toward custom software development, it forces agents to consider partnerships and deferrals alongside commercial purchase and internal builds to optimize resource allocation.
