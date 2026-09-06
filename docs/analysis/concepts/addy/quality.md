---
package: addy
name: quality
slug: quality
kind: checklist
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/doubt-driven-development.md, sha256: 14ed5d0c377737e6739c290e63818be735de2ce06f3bdff56b14cf7b4271a0fe}
  - {path: references/definition-of-done.md, sha256: d1c75d2ae65d2c7a9cd01f93fa8de63e00e75f2fe5d08be224d576157054dcee}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# quality

## Definition — verbatim
> "### Quality" — references/definition-of-done.md:28
> "- [ ] Code reveals intent through naming and structure; no comments needed to explain *what* it does" — references/definition-of-done.md:29

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/doubt-driven-development.md | 5 | used here | Tagged as a topic tag for doubt-driven development. |
| references/definition-of-done.md | 28 | defined here | Heading and checklist section establishing mandatory code quality standards. |

## Consumes
Implemented code, refactored logic, and variable naming.

## Produces
Evaluation against readability, non-duplication, dead code removal, and scope discipline standards.

## When applied
> "Code reveals intent through naming and structure; no comments needed to explain *what* it does" — references/definition-of-done.md:29

## Sub-concepts
none

## Part of
definition-of-done

## Implementation status
clean

## Design notes
A checklist section in the Definition of Done establishing concrete standards for clean code: intent revealed through naming and structure, zero duplicate business logic, zero dead code, and changes strictly scoped to the task.
