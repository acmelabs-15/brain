---
package: rjm
name: Claude Code plugin marketplace
slug: claude-code-plugin-marketplace
kind: pattern
package_phase: rjm:Ship
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/projects/v0.4.0/PLAN.md, sha256: baac365e5ebb496bc12b222f22255687cd233cfaa43be637433f2d3f8a898570}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Claude Code plugin marketplace

## Definition — verbatim
(used, not defined)

> "published as a Claude Code plugin marketplace." — .agents/projects/v0.4.0/PLAN.md:21

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/projects/v0.4.0/PLAN.md | 21 | used here | Defined as the target distribution format for extracting the awesome-ai multi-agent framework. |

## Consumes
Plugin packages, directory schemas, and marketplace catalog definitions (marketplace.json).

## Produces
A discoverable and installable catalog of Claude Code plugins.

## When applied
Used when packaging and distributing multi-agent skills, commands, and agents to consumer projects.

## Sub-concepts
none

## Part of
awesome-ai

## Implementation status
defects: missing-path, doc-drift

## Design notes
The Claude Code plugin marketplace pattern enables modular distribution and installation of agent capabilities, hooks, and skills across repositories via standard marketplace catalogs without manual file cloning.
