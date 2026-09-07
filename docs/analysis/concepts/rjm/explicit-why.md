---
package: rjm
name: Explicit WHY
slug: explicit-why
kind: technique
package_phase: rjm:Phase 2: Specification
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/references/specification-template.md, sha256: 463bda085a9759fe1a448be4947b6f2877a8b635abd3c189c1372d14897c44c9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Explicit WHY

## Definition — verbatim
> "Every decision includes its rationale" — .claude/skills/skillforge/references/specification-template.md:10

## Also called — verbatim
> "- **Explicit WHY:** Every decision includes its rationale" — .claude/skills/skillforge/references/specification-template.md:10

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/references/specification-template.md | 10 | used here | Defines the meta-prompting principle mandating that every architectural decision record its rationale. |

## Consumes
Architectural decisions, rule choices, and design trade-offs.

## Produces
Contextual rationale tags (`<why>`, `<rationale>`) embedded within specifications.

## When applied
When documenting decisions and requirements within a skill specification.

## Sub-concepts
none

## Part of
meta-prompting-principles

## Implementation status
clean

## Design notes
Mandates that all architectural choices and constraints include their underlying reasoning so downstream executing agents understand the intent rather than blindly following instructions.
