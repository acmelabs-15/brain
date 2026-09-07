---
package: rjm
name: Progressive Disclosure Pattern
slug: progressive-disclosure-pattern
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/TRANSFORMATION_NOTES.md, sha256: ed538bcdcb7377b8c5b9ab335a0ce75698821bc9502b9d13e51b1bb66e4bc608}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Progressive Disclosure Pattern

## Definition — verbatim
> "## Progressive Disclosure Pattern Applied" — .claude/skills/skillforge/TRANSFORMATION_NOTES.md:123

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/TRANSFORMATION_NOTES.md | 123 | defined here | Heading introducing the architectural pattern separating concise lazy-loaded skill documentation from deep reference files. |

## Consumes
Monolithic documentation and skills exceeding context line limits.

## Produces
Structured modular documentation separating quick start workflows in primary documents from deep guidance in reference files.

## When applied
Applied when authoring or refactoring skills to maintain token efficiency and comply with file line limits.

## Sub-concepts
none

## Part of
skillforge

## Implementation status
defects: orphan, internal-contradiction, doc-drift

## Design notes
An architectural design pattern in rjm skill development where primary skill documentation is kept concise and lazy-loaded, deferring comprehensive deep-dive guidance, frameworks, and checklists into auxiliary reference files to optimize token efficiency and prevent context bloat.
