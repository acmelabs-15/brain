---
package: rjm
name: Separate Use from Creation
slug: separate-use-from-creation
kind: pattern
package_phase: rjm:build
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/implementer.md, sha256: 053d58a6aa0561ea927aa8383c9bab695e477c89c1210f1d053b627ec8a382a3}
  - {path: templates/agents/implementer.shared.md, sha256: e6d56f2b4a0192790499debada060e68c8924504f73b3a7142c50bb27d327ab5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Separate Use from Creation

## Definition — verbatim
(used, not defined)

> "2. **Principles**: Open-Closed, Encapsulate by Policy/Reveal by Need, Separation of Concerns, Separate Use from Creation" — .claude/agents/implementer.md:171

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/implementer.md | 171 | defined here | Listed under Level 2 Principles in the Software Hierarchy of Needs. |
| templates/agents/implementer.shared.md | 179 | used here | Shared implementer template listing Separate Use from Creation under Level 2 Principles. |

## Consumes
Object instantiation calls, dependency wiring, and operational logic.

## Produces
Decoupled domain components that consume injected interfaces rather than instantiating concrete collaborators.

## When applied
Applied when configuring objects that depend on external services, repositories, or complex collaborators.

## Sub-concepts
encapsulate-constructors

## Part of
software-hierarchy-of-needs

## Implementation status
defects: missing-path, internal-contradiction, cross-file-contradiction

## Design notes
This principle mandates that a class should either create objects or use them, never both. When business logic constructs its own dependencies, it becomes bound to concrete classes and untestable in isolation; separating creation from usage enables dependency injection, mock testing, and polymorphic flexibility.
