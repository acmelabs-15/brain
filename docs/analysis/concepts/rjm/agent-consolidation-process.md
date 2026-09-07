---
package: rjm
name: Agent Consolidation Process
slug: agent-consolidation-process
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/governance/agent-consolidation-process.md, sha256: 56aef84724d26f5b712b22f668fc779d18122670dd14a11d000aa196751c8691}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Agent Consolidation Process

## Definition — verbatim
> "This document defines the process for identifying, evaluating, and executing agent consolidations. Consolidation reduces system complexity, eliminates confusion, and maintains focus." — .agents/governance/agent-consolidation-process.md:5

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/governance/agent-consolidation-process.md | 1 | defined here | Defines the 5-phase operational process for identifying, evaluating, planning, executing, and validating agent consolidations. |

## Consumes
Overlap analysis reports, agent usage metrics, routing failure logs, and stakeholder feedback.

## Produces
Consolidated agent definitions, deprecation notices, migration plans, and retired agent archives.

## When applied
Triggered automatically when agent capability overlap exceeds 20%, invocation frequency drops below 5%, or routing errors exceed 3 per month.

## Sub-concepts
consolidation-triggers, overlap-analysis, migration-plan-template, deprecation-notice, parallel-operation, post-consolidation-checklist, archive-structure, rollback-procedure

## Part of
none

## Implementation status
defects: missing-path

## Design notes
The formal governance process in rjm for pruning redundant or underutilized agents from the multi-agent system. It maintains system comprehensibility and routing accuracy by merging overlapping capabilities into surviving agents through disciplined deprecation and parallel operation periods.
