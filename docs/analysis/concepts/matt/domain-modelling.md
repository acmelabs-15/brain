---
package: matt
name: domain modelling
slug: domain-modelling
kind: technique
package_phase: matt:engineering
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude-plugin/marketplace.json, sha256: 83e889fed719fc92dc17a4accc69beed7d6c28bc87ec064b515a90a030f72e13}
  - {path: .claude-plugin/plugin.json, sha256: e531ddc6560515397ac32d93334fa3eb586b6b6bcc2e472c3646641fd3d2b951}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# domain modelling

## Definition — verbatim
(used, not defined)
> "Matt Pocock's agent skills for real engineering: grilling, spec/ticket flows, TDD, code review, domain modelling and more. Plug-and-play, not vibe coding." — .claude-plugin/plugin.json:4

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude-plugin/marketplace.json | 12 | defined here | Catalog description citing domain modelling as a primary engineering skill. |
| .claude-plugin/plugin.json | 4 | defined here | Manifest description citing domain modelling as a core capability. |

## Consumes
Domain concepts, entity ambiguities, business logic rules, and architectural trade-offs.

## Produces
Canonical glossary entries in `CONTEXT.md`, context mappings in `CONTEXT-MAP.md`, and Architecture Decision Records in `docs/adr/`.

## When applied
When establishing or clarifying domain terminology, resolving conflicting definitions, or documenting hard-to-reverse architectural choices.

## Sub-concepts
context-map-md, adr

## Part of
mattpocock-skills

## Implementation status
clean

## Design notes
`domain modelling` represents the systematic elicitation and documentation of ubiquitous language and architecture decisions in `matt`. Implemented primarily through the `domain-modeling` skill and the `grill-with-docs` workflow, it ensures agents and human engineers share consistent project vocabulary and architectural boundaries.
