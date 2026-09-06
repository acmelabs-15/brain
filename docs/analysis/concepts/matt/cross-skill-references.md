---
package: matt
name: cross-skill references
slug: cross-skill-references
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .changeset/user-invoked-skill-invocation.md, sha256: 4ddc0960266b40cedd4087c91c0e1e30fb294f2d0d1fcd96e391b27d3a74d365}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# cross-skill references

## Definition — verbatim
> "fix cross-skill references that violated the \"no other skill can call it\" invariant in `.agents/invocation.md`, in `to-spec`, `wayfinder`, `to-tickets`, `triage`, `code-review`, and `diagnosing-bugs`." — .changeset/user-invoked-skill-invocation.md:5

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .changeset/user-invoked-skill-invocation.md | 5 | defined here | Identifies inter-skill dependency calls and instructions that must respect invocation boundaries. |

## Consumes
Multi-skill workflows, skill documentation, and inter-skill routing instructions.

## Produces
Valid dependencies between skills that respect model-invoked versus user-invoked invocation rules.

## When applied
When designing or changing skills that mention, route to, or require preconditions fulfilled by other skills.

## Sub-concepts
none

## Part of
mattpocock-skills

## Implementation status
clean

## Design notes
In `matt`, cross-skill references describe relationships where one skill routes work to, mentions, or depends on another. Because the Claude Code harness allows model-invoked skills to call other model-invoked skills via the Skill tool, cross-skill references must strictly abide by invocation invariants and avoid instructing automated agents to invoke interactive, user-only skills.
