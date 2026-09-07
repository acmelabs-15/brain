---
package: rjm
name: Standard Development Flow
slug: standard-development-flow
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

# Standard Development Flow

## Definition — verbatim
> "For typical features requiring investigation and planning." — .agents/AGENT-SYSTEM.md:895

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/AGENT-SYSTEM.md | 893 | defined here | Canonical workflow pattern sequencing orchestrator → analyst → milestone-planner → implementer → qa for standard multi-file features. |

## Consumes
Feature requests or bugs affecting 2-5 files with moderate complexity or performance considerations.

## Produces
Thorough analysis, milestone execution plan, implemented code changes, and QA validation.

## When applied
> "**Triage Signal**: Cannot explain fix in one sentence; requires analysis" — .agents/AGENT-SYSTEM.md:916

## Sub-concepts
none

## Part of
- multi-agent-orchestration-system
- orchestrator

## Implementation status
defects: missing-path, internal-contradiction (from .agents/AGENT-SYSTEM.md broken relative paths and missing spec files)

## Design notes
Standard Development Flow is the baseline development lifecycle pattern in rjm. By mandating an upfront investigation stage (analyst) and structured planning stage (milestone-planner) prior to coding (implementer) and testing (qa), it prevents premature coding and reduces implementation rework across multi-file features.
