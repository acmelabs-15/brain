---
package: rjm
name: The Sergeant Pattern
slug: the-sergeant-pattern
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/golden-principles/references/design-programming-by-intention.md, sha256: 9bc7693d93b8a0f368ac9e99b06fcc6b33331afadc269e1dc3ffc410735e9509}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# The Sergeant Pattern

## Definition — verbatim
> "## The Sergeant Pattern" — .claude/skills/golden-principles/references/design-programming-by-intention.md:11

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/golden-principles/references/design-programming-by-intention.md | 11 | defined here | Section heading defining the structural pattern where public dispatcher methods orchestrate private implementation methods. |

## Consumes
Multi-step business workflows, procedural execution pipelines, and public service entry points.

## Produces
Readable high-level orchestrator methods that express "what" happens while delegating "how" to well-named private routines.

## When applied
Applied when authoring public API entry points, controller actions, or workflow orchestrators to separate workflow sequence from algorithmic details.

## Sub-concepts
method-cohesion

## Part of
programming-by-intention

## Implementation status
defects: missing-path

## Design notes
The Sergeant Pattern is the centerpiece of Programming by Intention in rjm. By designating a public method as a "sergeant" that only directs high-level workflow steps by calling intention-revealing private methods, code reads like natural language specification. This maximizes readability, keeps routines short and cohesive, and isolates implementation changes to private workers.
