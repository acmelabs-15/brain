---
package: addy
name: Documentation for Agents
slug: documentation-for-agents
kind: technique
package_phase: addy:Ship
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/documentation-and-adrs/SKILL.md, sha256: b867bb80fb681257c7625ae59a0dfd849b1fc0f0a2f0338e7923f38030df9793}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Documentation for Agents

## Definition — verbatim
> "Special consideration for AI agent context:" — skills/documentation-and-adrs/SKILL.md:252

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/documentation-and-adrs/SKILL.md | 250 | defined here | Section heading outlining the deliberate creation and maintenance of context files (rules, specs, ADRs, gotchas) for AI coding agents. |

## Consumes
Repository conventions, architectural decisions, feature specifications, and known edge-case traps.

## Produces
Context artifacts tailored for autonomous agent ingestion, including `CLAUDE.md`, rule sets, specs, and inline gotchas.

## When applied
Applied when establishing and maintaining repository documentation to ensure AI coding agents operate effectively within system constraints.

## Sub-concepts
spec-files, known-gotchas

## Part of
none

## Implementation status
clean

## Design notes
`Documentation for Agents` acknowledges that AI coding agents require explicit, high-signal context—such as project rule files, active specifications, and past ADRs—to avoid repeating settled debates, violating unstated constraints, or falling into known implementation traps.
