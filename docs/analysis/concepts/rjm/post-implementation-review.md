---
package: rjm
name: Post-Implementation Review
slug: post-implementation-review
kind: checklist
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/agents/architect.md, sha256: b109baee5c61acd4fd24d1a6b2832b7f77749be8424c85b1fc054216c42cd5e1}
  - {path: templates/agents/architect.shared.md, sha256: cc34d58497548aa34e8f5d926ac342c35bdccf70cc8a61e9d120d02b7c6900ff}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Post-Implementation Review

## Definition — verbatim
(used, not defined)

> "- [ ] Audit code health" — .claude/agents/architect.md:526

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/architect.md | 523 | defined here | Post-hoc architecture audit checklist verifying code health, technical debt accumulation, and architecture updates. |
| templates/agents/architect.shared.md | 692 | defined here | Post-hoc architecture audit checklist verifying code health, technical debt accumulation, and architecture updates. |

## Consumes
Completed pull requests, implemented codebase diffs, and updated system architecture diagrams.

## Produces
Code health audit, technical debt accumulation measurement, architecture diagram updates, and recorded lessons learned.

## When applied
Conducted after code implementation is complete to verify that delivered code matches architectural intent.

## Sub-concepts
none

## Part of
architect

## Implementation status
defects: missing-path

## Design notes
Post-Implementation Review closes the feedback loop between architectural intent and actual code delivery. By auditing resulting code health, measuring technical debt introduced during implementation, updating system architecture diagrams, and capturing operational lessons learned, it prevents architectural documentation from drifting from the deployed codebase.
