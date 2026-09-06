---
package: matt
name: defining constraint
slug: defining-constraint
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/writing-docs.md, sha256: f1a008576e185e5ff232e45504886273948a9323a7ace26652816f2b2bd38922}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# defining constraint

## Definition — verbatim
> "Lead with the skill's one-sentence job, then state the **defining constraint**: the single fact that makes this skill behave differently from the obvious default (for `to-spec`: it does not interview the user again, it synthesises what is already known)." — .agents/writing-docs.md:25

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/writing-docs.md | 25 | defined here | Defines the defining constraint as the essential declarative sentence highlighting a skill's distinct behavior. |

## Consumes
Core behavioral differentiation and boundary conditions of a skill.

## Produces
A sharp declarative sentence in the What it does section articulating unique behavior.

## When applied
Authored in the opening section of a documentation page immediately following the skill's job summary.

## Sub-concepts
none

## Part of
fixed frame

## Implementation status
clean

## Design notes
A documentation requirement mandating a single declarative sentence that captures the non-obvious behavioral constraint separating a skill from default agent behavior, ensuring readers immediately grasp what makes the tool distinct.
