---
package: rjm
name: Learning Extraction Flow
slug: learning-extraction-flow
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/AGENT-SYSTEM.md, sha256: c11a55e17a0f0d0eca7936fc3ba2f3a071fcedf37fcf1a462a65a77831259641}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Learning Extraction Flow

## Definition — verbatim
> "For capturing institutional knowledge." — .agents/AGENT-SYSTEM.md:1063

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/AGENT-SYSTEM.md | 1061 | defined here | Canonical workflow pattern sequencing orchestrator → retrospective → skillbook to capture institutional knowledge. |

## Consumes
Completed tasks, incident post-mortems, session logs, or failure analysis.

## Produces
Retrospective analysis artifacts, root-cause diagnoses, and persisted atomic skill entries.

## When applied
> "**Use When**: After task completion, failures, session end" — .agents/AGENT-SYSTEM.md:1074

## Sub-concepts
none

## Part of
- multi-agent-orchestration-system
- orchestrator

## Implementation status
defects: missing-path, internal-contradiction (from .agents/AGENT-SYSTEM.md broken relative paths and missing spec files)

## Design notes
Learning Extraction Flow closes the feedback loop in rjm's multi-agent development lifecycle. Triggered after task completions or incident investigations, it delegates analysis to retrospective to extract root causes and patterns, then hands off candidate insights to skillbook for validation, deduplication, and persistence as atomic skills.
