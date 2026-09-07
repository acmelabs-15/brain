---
package: rjm
name: Principles of Simplicity
slug: principles-of-simplicity
kind: checklist
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/quality-grades/references/kiss-principle.md, sha256: 2d5d660a123359f0ec19b8715124fd6df9e1fc7bdfcfffba5c61f35c92d3a9d5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Principles of Simplicity

## Definition — verbatim
> "## Principles of Simplicity" — .claude/skills/quality-grades/references/kiss-principle.md:22

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/quality-grades/references/kiss-principle.md | 22 | defined here | Heading introducing the four core simplicity rules (solve problem at hand, prefer clarity, minimize parts, standard patterns). |

## Consumes
Candidate architectures, proposed abstractions, class and method designs.

## Produces
Four concrete simplicity rules that eliminate speculative complexity and unnecessary moving parts.

## When applied
Applied when designing components, writing code, or evaluating architectural changes against KISS standards.

## Sub-concepts
none

## Part of
kiss-principle

## Implementation status
defects: missing-path

## Design notes
Four core rules in rjm's KISS reference guiding engineers to solve the problem at hand, prefer clarity over cleverness, minimize moving parts, and use standard patterns.
