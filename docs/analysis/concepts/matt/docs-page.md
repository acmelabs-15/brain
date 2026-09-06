---
package: matt
name: docs page
slug: docs-page
kind: artifact
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/writing-docs.md, sha256: f1a008576e185e5ff232e45504886273948a9323a7ace26652816f2b2bd38922}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# docs page

## Definition — verbatim
> "Every skill in `engineering/` and `productivity/` has a human-facing **docs page** at `docs/<bucket>/<skill-name>.md`." — .agents/writing-docs.md:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/writing-docs.md | 3 | defined here | Defines the purpose, location, and publishing contract for human-facing documentation pages. |

## Consumes
Skill capabilities, trigger boundaries, common questions, and system positioning.

## Produces
Human-facing documentation markdown files published online to aihero.dev.

## When applied
Authored whenever a promoted skill in engineering/ or productivity/ is created, updated, or renamed.

## Sub-concepts
fixed frame, defining constraint, Common questions, It's working if, Where it fits

## Part of
writing-docs

## Implementation status
clean

## Design notes
The standardized human-facing documentation artifact accompanying every promoted skill. Designed to reduce developer cognitive load, it describes what a skill does, when to reach for it, and where it fits into the broader system without replicating runbooks.
