---
package: addy
name: inline standards
slug: inline-standards
kind: reference
package_phase: addy:Ship
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/ci-cd-and-automation.md, sha256: 2e149360f286dd6f40d73eec2e358a38676a2b41821ea97aa76c3288e7a6777f}
  - {path: external/git-workflow-and-versioning.md, sha256: 5e099b35e9a7d6f08b9168d86d7e4ba061dbfc5e02fe7508c3f584ff361acdb4}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# inline standards

## Definition — verbatim
(used, not defined)
> "Architecture Decision Records, API docs, inline standards - document the why." — external/ci-cd-and-automation.md:12

## Also called — verbatim
> "Inline Documentation" — skills/documentation-and-adrs/SKILL.md:102

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/ci-cd-and-automation.md | 12 | used here | Listed in related skill summary for documentation-and-adrs |
| external/git-workflow-and-versioning.md | 12 | used here | Cited under documentation-and-adrs card in the Ship skills section |

## Consumes
Complex, non-obvious code paths, known gotchas, subtle edge cases, workaround rationales.

## Produces
In-code comments explaining architectural reasons, non-obvious constraints, and known pitfalls rather than mechanical syntax.

## When applied
When writing code where the intent, constraint, or workaround is not immediately evident from the implementation.

## Sub-concepts
none

## Part of
`none`

## Implementation status
clean

## Design notes
Inline standards govern the practice of documenting code intent within source files, emphasizing that comments should elucidate "why" a solution was chosen and call out known gotchas rather than describing "what" the code is doing.
