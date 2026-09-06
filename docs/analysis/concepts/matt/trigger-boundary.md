---
package: matt
name: Trigger boundary
slug: trigger-boundary
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

# Trigger boundary

## Definition — verbatim
> "- **Trigger boundary.** The index entry:" — .agents/writing-docs.md:32

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/writing-docs.md | 32 | defined here | Defines the trigger boundary as the index entry stating when to reach for a skill and contrasting it with siblings. |

## Consumes
Situational criteria, task profiles, and distinctions between sibling skills.

## Produces
Crisp trigger definitions that guide tool selection and prevent overlap between adjacent skills.

## When applied
Formulated in the When to reach for it section to demarcate when to choose one tool over another.

## Sub-concepts
none

## Part of
When to reach for it

## Implementation status
clean

## Design notes
Defines the specific real-world conditions under which a skill should be invoked. It establishes clear contrastive boundaries against sibling skills, eliminating ambiguity about which tool applies to a given task.
