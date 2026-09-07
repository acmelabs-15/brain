---
package: matt
name: general-purpose
slug: general-purpose
kind: name-only
package_phase: matt:Shaping
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/research.md, sha256: b57fee25e3a292ced5c8493242c8f05dedb02ad4a291bc7382b292bebd9ee136}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# general-purpose

## Definition — verbatim
(used, not defined)

> "The skill tells its caller to spin up a background agent but does not restrict the agent type, so the agent it spawns is a <code class=\"ah-code-inline\">general-purpose</code> one that holds the <code class=\"ah-code-inline\">Agent</code> tool and the same instructions, and fires them again." — external/research.md:38

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/research.md | 38 | used here | Describes the unrestricted default agent type spawned by research that causes recursive subagent execution. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
the-research-skill

## Implementation status
defects: other (external/research.md:38 notes unrestricted agent delegation causes recursive subagent execution)

## Design notes
An agent configuration type within Claude Code indicating an unspecialized subagent profile, classified as name-only because it is an agent harness setting rather than a development lifecycle concept.
