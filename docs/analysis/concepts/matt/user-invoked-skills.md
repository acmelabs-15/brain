---
package: matt
name: user-invoked skills
slug: user-invoked-skills
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

# user-invoked skills

## Definition — verbatim
> "Stop skills from trying to reach user-invoked skills through the Skill tool: fix cross-skill references that violated the \"no other skill can call it\" invariant in `.agents/invocation.md`, in `to-spec`, `wayfinder`, `to-tickets`, `triage`, `code-review`, and `diagnosing-bugs`." — .changeset/user-invoked-skill-invocation.md:5

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .changeset/user-invoked-skill-invocation.md | 5 | defined here | Documents the architectural invariant that user-invoked skills cannot be called programmatically by other skills. |

## Consumes
Interactive human invocation requests and skill definitions configured with user-only entry boundaries.

## Produces
Interactive guidance sessions where only the human user initiates and controls skill execution.

## When applied
When a skill requires interactive user prompts, decisions, or approval and cannot be safely run unattended by an autonomous agent.

## Sub-concepts
none

## Part of
mattpocock-skills

## Implementation status
clean

## Design notes
In the `matt` package, skills are strictly categorized into user-invoked and model-invoked types. User-invoked skills require interactive human direction and enforce a strict architectural invariant: no other skill (whether model-invoked or user-invoked) can invoke them via the Skill tool. When autonomous skills attempt to invoke user-invoked skills unattended, execution fails because no human is in the loop to navigate the interactive flow.
