---
package: rjm
name: RCA
slug: rca
kind: artifact
package_phase: rjm:research
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-research-methodology/SKILL.md, sha256: 7141af7456e2a59337469559ce9bd051294b0413ffac614bab6bae44c49f9b83}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# RCA

## Definition — verbatim
(used, not defined)

> "inherited from a retro RCA that nobody re-verified: the RCA said pagination was" — .claude/skills/ai-agents-research-methodology/SKILL.md:44

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-research-methodology/SKILL.md | 44 | used here | Cited in PR #1989 cautionary tale as an unverified root-cause analysis that led to five wasted fix commits. |

## Consumes
Incident reports, stack traces, regression logs, and retrospective observations.

## Produces
Causal chain documentation identifying the definitive technical mechanism responsible for a failure.

## When applied
During retrospective investigations following software failures, regression bugs, or governance breakdowns.

## Sub-concepts
none

## Part of
retrospective

## Implementation status
defects: missing-path

## Design notes
Root Cause Analysis (RCA) artifacts establish the verified failure mechanisms responsible for system breakdowns. In rjm, retrospective analysis of PR #1989 underscored that inheriting claims from an unverified RCA without checking underlying code leads to compounding engineering errors, establishing a strict rule that every RCA claim must be re-verified against source code before mitigations are engineered.
