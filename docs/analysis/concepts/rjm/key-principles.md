---
package: rjm
name: Key Principles
slug: key-principles
kind: checklist
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/type-design-analyzer.md, sha256: c7df006d7ae08ed703b47924db90819e8eb288d7bef81c9f6386781f8f43b4b3}
  - {path: templates/agents/type-design-analyzer.shared.md, sha256: 45e5c07a21cf4d2d42f18452b07878272598bcc2a5ade37c490d32d85b325074}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Key Principles

## Definition — verbatim
> "**Key Principles:**" — .claude/agents/type-design-analyzer.md:99

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/type-design-analyzer.md | 99 | defined here | Defines the core heuristics and engineering principles guiding type design reviews and recommendations. |
| templates/agents/type-design-analyzer.shared.md | 108 | defined here | Establishes the standard type design review principles across shared agent prompt templates. |

## Consumes
Type definitions under review and proposed structural modifications.

## Produces
Guiding design constraints that prioritize compile-time safety, pragmatism, and maintainability.

## When applied
When reviewing existing types or evaluating proposed structural refactorings to ensure consistent architectural standards.

## Sub-concepts
none

## Part of
type-design-analyzer

## Implementation status
defects: other

## Design notes
Key Principles codifies the seven core design tenets enforced by rjm's type analysis agent, emphasizing compile-time guarantees, unrepresentable illegal states, constructor validation, and pragmatic simplicity over cleverness. Without these explicit heuristics, reviewers might favor over-engineered abstractions or fail to balance safety against cognitive maintenance overhead.
