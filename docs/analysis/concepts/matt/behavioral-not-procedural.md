---
package: matt
name: Behavioral, not procedural
slug: behavioral-not-procedural
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

# Behavioral, not procedural

## Definition — verbatim
> "Behavioral, not procedural" — skills/engineering/triage/AGENT-BRIEF.md:19

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/engineering/triage/AGENT-BRIEF.md | 19 | defined here | Establishes the authoring principle that agent briefs should specify external system behavior rather than procedural implementation steps. |

## Consumes
Identified bug conditions or feature requirements during issue triage.

## Produces
Declarative task specifications focusing on desired outcomes and contract behavior.

## When applied
Applied when drafting agent briefs for issues transitioning to `ready-for-agent`.

## Sub-concepts
none

## Part of
triage

## Implementation status
defects: doc-drift

## Design notes
An authoring guideline for agent briefs mandating that specifications describe expected external behavior rather than dictating step-by-step code edits. Since an autonomous agent explores the codebase fresh with full context, over-specifying procedural instructions restricts the agent's problem-solving capability and increases brittleness.
