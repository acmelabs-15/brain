---
package: rjm
name: Data Gathering
slug: data-gathering
kind: phase
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/retrospective.md, sha256: a6db89e860d0f09ec1369b84e736acbeec1de7e94eb5d3e460f43101360d8566}
  - {path: .claude/skills/retrospective/references/frameworks.md, sha256: ba761eac35cb111d07dedfad8c01f4fc47982060c5e72e8a69a4438568fd1cbe}
  - {path: .claude/skills/retrospective/references/learning-template.md, sha256: 22be20c049d593d49ff4a9c5fe1df636ed19f5721492ee137679df08478d802b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Data Gathering

## Definition — verbatim
> "## Phase 0: Data Gathering" — .claude/skills/retrospective/references/frameworks.md:10

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/retrospective.md | 74 | defined here | Outline heading for Phase 0 establishing objective data collection before interpretation. |
| .claude/skills/retrospective/references/frameworks.md | 10 | defined here | Framework phase definition detailing fact collection prior to analysis. |
| .claude/skills/retrospective/references/learning-template.md | 23 | used here | Section header in learning extraction template organizing timeline and event data. |

## Consumes
Raw session logs, git histories, terminal commands, PR review comments, and tool invocation traces.

## Produces
Objective execution timelines, reconstructed events, and categorized outcome records.

## When applied
First operational phase of the retrospective lifecycle (Phase 0), executed prior to generating any analytical insights.

## Sub-concepts
execution-trace-analysis, outcome-classification, 4-step-debrief

## Part of
retrospective

## Implementation status
clean

## Design notes
Data Gathering is the foundational phase (Phase 0) of the retrospective workflow. It mandates the objective collection and chronology reconstruction of factual execution data before any interpretation or causal analysis is permitted, preventing cognitive bias and narrative fabrication.
