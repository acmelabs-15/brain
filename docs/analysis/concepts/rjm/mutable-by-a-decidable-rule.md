---
package: rjm
name: Mutable by a decidable rule
slug: mutable-by-a-decidable-rule
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

# Mutable by a decidable rule

## Definition — verbatim
> "- **Mutable by a decidable rule**: Whether you may edit an accepted ADR depends on whether it has been implemented." — .claude/skills/adr-generator/references/adr-best-practices.md:10

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/adr-generator/references/adr-best-practices.md | 10 | defined here | Defined as an ADR characteristic establishing objective implementation-status criteria for when in-place edits are permitted versus requiring supersession. |

## Consumes
Implementation status of the decision and stakeholder consensus.

## Produces
Decidable routing between an in-place edit and authoring a new superseding ADR.

## When applied
Applied whenever an existing accepted ADR needs revision, clarification, or retraction.

## Sub-concepts
bounded-in-place-edits

## Part of
adr-lifecycle

## Implementation status
clean

## Design notes
An architectural governance pattern in rjm resolving the tension between rigid append-only immutability and uncontrolled document mutation. By tethering mutability to whether any code implementing the decision has merged, it establishes an objective operational boundary: pre-implementation decisions can be revised in place, whereas post-implementation changes must author a new superseding record.
