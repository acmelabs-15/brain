---
package: rjm
name: Enabling point
slug: enabling-point
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/software-engineering-library/references/working-with-legacy-code.md, sha256: c60a6eb46d697b79a4517c521499b3db023b8198e336e3fc74fd340d85aa8467}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Enabling point

## Definition — verbatim
> "**Enabling point**: the location where you decide which behavior the seam selects. For a parameter seam, the enabling point is the call site." — .claude/skills/software-engineering-library/references/working-with-legacy-code.md:26

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/working-with-legacy-code.md | 26 | defined here | Defined in core vocabulary as the location where the behavior selected by a seam is decided. |

## Consumes
Architectural seams and parameter configurations.

## Produces
Call-site collaborator selection between test fakes and production implementations.

## When applied
Configured at call sites or test setup locations whenever activating seam-controlled behavior.

## Sub-concepts
none

## Part of
seam

## Implementation status
clean

## Design notes
An enabling point is the distinct location where the specific behavior governed by a seam is chosen. In rjm, an obvious enabling point (such as a call site passing an explicit collaborator) makes collaborator substitution transparent between test suites and production code.
