---
package: rjm
name: architecture review
slug: architecture-review
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/software-engineering-library/SKILL.md, sha256: 8d26b0bd36626f9e4058c618f8a4aab1f30f7d8d2ee0eb0185da5559a6fd8115}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# architecture review

## Definition — verbatim
(used, not defined)

> "Use for `architecture review`, `layer boundary change`, `dependency boundary`" — .claude/skills/software-engineering-library/SKILL.md:4

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/SKILL.md | 4 | used here | Listed in the skill description as a trigger condition routing design tasks to book references. |

## Consumes
Proposed architecture designs, boundary modifications, or cross-cutting module changes.

## Produces
Evaluated architectural decisions and routing instructions to specialized software engineering reference guides.

## When applied
Applied when reviewing system layer boundaries, dependency directions, module interface shapes, or persistence designs.

## Sub-concepts
none

## Part of
software-engineering-library

## Implementation status
clean

## Design notes
An architectural evaluation gate and trigger in rjm that directs agents to consult deep book-derived design references when boundary or structural changes occur.
