---
package: rjm
name: adapter seams
slug: adapter-seams
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/software-engineering-library/references/clean-architecture.md, sha256: 05a2908c6aa793da85f31319368e04967eb1f225e7c32f9dc628f654bba8183a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# adapter seams

## Definition — verbatim
> "- Framework and driver code is invisible to the rest of the system except through adapter seams." — .claude/skills/software-engineering-library/references/clean-architecture.md:45

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/clean-architecture.md | 45 | used here | Boundary interfaces isolating framework and driver code from the rest of the system. |

## Consumes
Framework drivers and adapter interface definitions.

## Produces
Isolated execution boundaries preventing infrastructure leakage.

## When applied
Applied when integrating external libraries, CLI runners, or network transports into an application.

## Sub-concepts
plain-types-at-the-seam

## Part of
interface-adapters, frameworks-and-drivers

## Implementation status
clean

## Design notes
Adapter seams establish strict encapsulation perimeters that prevent third-party framework details, ORMs, and network protocols from leaking into application logic. In rjm, adapter seams ensure that external changes to GitHub APIs or MCP protocols are contained entirely within adapters.
