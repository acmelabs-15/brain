---
package: rjm
name: trend analysis
slug: trend-analysis
kind: technique
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/quality-auditor.md, sha256: e1001a4917277fc3feaeb3cf561fbaa476a8265b3652e870e72488581a6ea646}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# trend analysis

## Definition — verbatim
(used, not defined)

> "Produces quality reports with gap tracking and trend analysis." — .claude/agents/quality-auditor.md:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/quality-auditor.md | 3 | used here | Core capability of quality-auditor tracking quality grade changes and metric trajectories over time. |

## Consumes
Current audit metrics and historical quality grades recorded in previous audits.

## Produces
Comparative trajectory indicators showing whether domain health is improving, stable, or degrading.

## When applied
Evaluated during periodic quality audits to detect gradual quality regression or improvement.

## Sub-concepts
none

## Part of
quality-auditor

## Implementation status
clean

## Design notes
A temporal evaluation technique comparing current domain quality scores against historical baselines. By identifying directional shifts across revisions, trend analysis alerts teams to creeping degradation before quality regressions become critical systemic failures.
