---
package: rjm
name: Bounded in-place edits
slug: bounded-in-place-edits
kind: pattern
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/adr-generator/references/adr-best-practices.md, sha256: 62f0e939ebf8455bdf6f0ff1d882d21e551b1d1bcfc532a863ef80f68a0675f2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Bounded in-place edits

## Definition — verbatim
> "Clarifications editable any time; Consequences updatable during implementation; replace in place only if never implemented and stakeholders agree; once any implementation occurred, supersede." — .claude/skills/adr-generator/references/adr-best-practices.md:33

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/adr-generator/references/adr-best-practices.md | 33 | defined here | Adopted as the project's ADR mutability policy governing in-place edits versus supersession. |

## Consumes
Implementation status, stakeholder agreement, and proposed ADR revisions.

## Produces
Permitted in-place updates to clarifications/consequences or triggers creation of a superseding ADR.

## When applied
Applied when editing, refining, or deprecating existing architectural decisions.

## Sub-concepts
none

## Part of
adr-lifecycle

## Implementation status
clean

## Design notes
The core architectural mutability policy adopted in rjm, adapted from the UK Government Digital Service (GDS Way). It establishes clear operational boundaries based on implementation progress: non-semantic clarifications and evolving consequences can always be refined in place, but once any code implementing the decision merges, changes to the core decision require authoring a new superseding ADR.
