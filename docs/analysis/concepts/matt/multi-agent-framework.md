---
package: matt
name: multi-agent framework
slug: multi-agent-framework
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/grill-with-docs.md, sha256: 706924ca05e4ec81b47bacac031741a17ca381af5aa7c8baf8f7494669f01e4d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# multi-agent framework

## Definition — verbatim
(used, not defined)

> "when the skill runs inside another orchestration layer (a spec-driven-development wrapper, a multi-agent framework, a rule that invokes it as a step in someone else&#x27;s pipeline)" — external/grill-with-docs.md:44

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/grill-with-docs.md | 44 | used here | Identifies multi-agent orchestration frameworks as execution contexts where interactive skill behaviors may degrade. |

## Consumes
Agent orchestrators, coordination topologies, and external multi-agent runtimes.

## Produces
Coordinated multi-agent execution across distributed subtasks.

## When applied
When deploying skills into external automated orchestration frameworks rather than native single-agent CLI sessions.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: orphan, doc-drift

## Design notes
Multi-agent frameworks represent external orchestration layers that compose and automate individual agent skills. In Matt's ecosystem, skills are primarily optimized for direct human-agent collaboration; executing them within multi-agent frameworks requires caution to ensure that interactive prompts and file persistence behave correctly.
