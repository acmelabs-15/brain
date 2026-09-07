---
package: rjm
name: Anti-Obsolescence Patterns
slug: anti-obsolescence-patterns
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/TRANSFORMATION_NOTES.md, sha256: ed538bcdcb7377b8c5b9ab335a0ce75698821bc9502b9d13e51b1bb66e4bc608}
  - {path: .claude/skills/skillforge/references/evolution-timelessness.md, sha256: 8df03e8ec69ae99547b2b687ecbc9bd7e8618f1a74e84f3300b4001da7819da8}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Anti-Obsolescence Patterns

## Definition — verbatim
> "## Anti-Obsolescence Patterns" — .claude/skills/skillforge/references/evolution-timelessness.md:25

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/references/evolution-timelessness.md | 25 | defined here | Defines a table of Do/Don't practices (principles over implementations, documenting WHY, extension points). |
| .claude/skills/skillforge/TRANSFORMATION_NOTES.md | 42 | used here | Lists Anti-Obsolescence Patterns as extracted content relocated from SKILL.md to references/evolution-timelessness.md. |

## Consumes
Proposed skill architecture and implementation choices.

## Produces
Recommended patterns and prohibited anti-patterns for durable skill authoring.

## When applied
Applied during skill design and refactoring to eliminate hardcoded implementations and coupling.

## Sub-concepts
none

## Part of
evolution-lens

## Implementation status
clean · defects: orphan, internal-contradiction, doc-drift

## Design notes
A pairing of constructive practices (design around principles, document the WHY, include extension points) with prohibited anti-patterns (hardcoding implementations, direct coupling, pinning versions) to guide skill authoring.
