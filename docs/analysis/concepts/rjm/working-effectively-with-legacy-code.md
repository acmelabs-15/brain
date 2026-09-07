---
package: rjm
name: Working Effectively with Legacy Code
slug: working-effectively-with-legacy-code
kind: reference
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

# Working Effectively with Legacy Code

## Definition — verbatim
> "This rule encodes Michael Feathers' techniques from _Working Effectively with Legacy Code_." — .claude/skills/software-engineering-library/references/working-with-legacy-code.md:4

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/working-with-legacy-code.md | 4 | used here | Cited as the foundational source text whose legacy refactoring techniques and safety rules are codified for the multi-agent system. |

## Consumes
none

## Produces
Seam identification techniques, characterization testing patterns, and safe refactoring strategies.

## When applied
Referenced whenever modifying untested, aged, or regression-prone code surfaces.

## Sub-concepts
- legacy-code
- characterization-test
- seam
- enabling-point
- sprout-method
- wrap-method
- dependency-breaking-technique

## Part of
software-engineering-library

## Implementation status
clean

## Design notes
Michael Feathers' foundational treatise on software maintenance provides the conceptual basis in rjm for safely altering existing systems without test coverage. It governs the sequencing of changes by requiring behavioral locking via characterization tests and seams before modifying code.
