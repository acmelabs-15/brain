---
package: rjm
name: intentional coupling
slug: intentional-coupling
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/golden-principles/references/design-code-qualities.md, sha256: 3f725917bb08c6f90372aa8e213ca67b77c85509e21932dffb1059c8fe8119ac}
  - {path: .claude/skills/quality-grades/references/code-qualities.md, sha256: 1cb2ffdd03dafea65f186e78090ca3fbf0b85317d2b68d08d42bfebb7e45eb4b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# intentional coupling

## Definition — verbatim
> "Goal: intentional coupling (documented, necessary) over accidental coupling (unplanned side effects)." — .claude/skills/golden-principles/references/design-code-qualities.md:36

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/golden-principles/references/design-code-qualities.md | 36 | defined here | Stated as the primary coupling objective: documented, necessary connections between components. |
| .claude/skills/quality-grades/references/code-qualities.md | 37 | defined here | Stated as the design goal to eliminate unexpected side effects in favor of deliberate architectural dependencies. |

## Consumes
System requirements, documented interfaces, and domain boundaries.

## Produces
Deliberate, maintainable connections between routines and classes that have explicit rationales.

## When applied
Applied throughout system design and code reviews to ensure all inter-module dependencies are justified and documented.

## Sub-concepts
none

## Part of
the-five-qualities

## Implementation status
defects: missing-path

## Design notes
An architectural design goal where dependencies between software units are deliberately chosen, strictly necessary, and clearly documented, ensuring that modifications have predictable impacts without surprising ripple effects.
