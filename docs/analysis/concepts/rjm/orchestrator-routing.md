---
package: rjm
name: Orchestrator routing
slug: orchestrator-routing
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/customization.md, sha256: 5a0eb6aa7b8f858a3fd46bcc7bfe35090acceef0e1753389516c29718e2595fb}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Orchestrator routing

## Definition — verbatim
> "### Orchestrator routing" — docs/customization.md:132

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/customization.md | 132 | defined here | Section detailing task dispatching and agent sequence mapping based on task complexity classification. |

## Consumes
Incoming user tasks and complexity classifications (Simple, Moderate, Complex).

## Produces
Targeted agent execution plans (single specialist, sequential multi-agent group, or full gated pipeline).

## When applied
Applied during task reception to determine whether a single agent or a sequence of agents is dispatched.

## Sub-concepts
none

## Part of
orchestrator

## Implementation status
defects: missing-path

## Design notes
Orchestrator routing is the dispatch mechanism in rjm that analyzes incoming tasks and maps them to specialist agent sequences based on complexity classification (Simple: single specialist, Moderate: 2–3 agents in sequence, Complex: full pipeline with quality gates). It enables flexible task execution while allowing manual overrides by addressing specialist agents directly.
