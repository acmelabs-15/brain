---
package: matt
name: Durability over precision
slug: durability-over-precision
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/engineering/triage/AGENT-BRIEF.md, sha256: 7f5f87fed3033df1b06e083c480f3e847b1fbb0647746b8a4c6a50f9f26ef44f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Durability over precision

## Definition — verbatim
> "Durability over precision" — skills/engineering/triage/AGENT-BRIEF.md:9

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/engineering/triage/AGENT-BRIEF.md | 9 | defined here | Establishes the authoring principle that agent briefs must prioritize durable architectural contracts over transient file paths and line numbers. |

## Consumes
Draft task descriptions and specifications during issue triage.

## Produces
Resilient agent brief specifications that remain valid despite ongoing codebase changes.

## When applied
Applied when writing agent briefs for issues or PRs transitioning to `ready-for-agent`.

## Sub-concepts
none

## Part of
triage

## Implementation status
defects: doc-drift

## Design notes
A core authoring principle for agent briefs emphasizing resilient architectural contracts (interfaces, types, behaviors) over fragile references (line numbers, ephemeral file paths). Because an issue may wait in `ready-for-agent` for days or weeks while the codebase changes, durability ensures the task specification remains actionable and correct.
