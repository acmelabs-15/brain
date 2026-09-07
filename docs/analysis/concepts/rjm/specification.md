---
package: rjm
name: Specification
slug: specification
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/cva-analysis/references/gof-pattern-selection.md, sha256: 34cc2ef5cd7eac203c23dca08b88810c37bf3dad586cbc5fddb859ea7ff50fb8}
  - {path: .claude/skills/software-engineering-library/references/enterprise-patterns.md, sha256: 8219d8bb13944fb6d863027165c2e719d3347dc576cd79ebb8be5b0519b2c593}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Specification

## Definition — verbatim
(used, not defined)

> "| Specification | What is the interface? | Strategy/Factory interfaces |" — .claude/skills/cva-analysis/references/gof-pattern-selection.md:41

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/cva-analysis/references/gof-pattern-selection.md | 41 | used here | Perspective answering "What is the interface?" mapped to Strategy and Factory interfaces in CVA. |
| .claude/skills/software-engineering-library/references/enterprise-patterns.md | 35 | used here | Pattern reference advising against passing query predicates across repository boundaries unless a Specification pattern is implemented. |

## Consumes
Conceptual domain abstractions, repository filtering requirements.

## Produces
Polymorphic interface contracts (Strategy and Factory interfaces) and composable domain query predicates.

## When applied
When formalizing conceptual abstractions into interface contracts or composing complex domain query filters in data access repositories.

## Sub-concepts
none

## Part of
three-perspectives

## Implementation status
defects: missing-path

## Design notes
Carries two complementary meanings in rjm's architecture: Fowler's middle perspective defining the precise interface contract (what is the interface?) that isolates client code from concrete implementations, and the enterprise Specification pattern used to compose business predicates across repository boundaries without leaking database query mechanisms.
