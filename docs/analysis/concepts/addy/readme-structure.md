---
package: addy
name: README Structure
slug: readme-structure
kind: template
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

# README Structure

## Definition — verbatim
> "Every project should have a README that covers:" — skills/documentation-and-adrs/SKILL.md:202

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/documentation-and-adrs/SKILL.md | 200 | defined here | Heading for the project README layout template detailing Quick Start, Commands, Architecture, and Contributing sections. |

## Consumes
Project name, description, setup instructions, command table, architectural overview, and contributing guidelines.

## Produces
A standardized top-level `README.md` enabling quick orientation and onboarding.

## When applied
Applied when initializing a repository or standardizing onboarding documentation.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
`README Structure` standardizes the primary entry point of a codebase into predictable sections (Quick Start, Commands, Architecture, Contributing), providing essential operational instructions that allow both developers and autonomous agents to immediately build, test, and run the project.
