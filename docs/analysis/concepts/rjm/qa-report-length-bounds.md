---
package: rjm
name: QA Report Length Bounds
slug: qa-report-length-bounds
kind: reference
package_phase: rjm:test
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/qa.md, sha256: 970c9a3737813884dd918aea20c2cae57f38705fdf4c47c0557248c95de1b656}
  - {path: templates/agents/qa.shared.md, sha256: 7dbd4253b250290b87341f59885ccb93c7f5813272a96b955db391c9b035c941}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# QA Report Length Bounds

## Definition — verbatim
> "## QA Report Length Bounds" — .claude/agents/qa.md:588

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/qa.md | 588 | defines | Target line-count constraints for QA reports to prevent context bloat across agent conversations. |
| templates/agents/qa.shared.md | 549 | defines | Shared template specification of target line length bounds for APPROVED and BLOCKED QA reports. |

## Consumes
Generated draft of Pre-PR Validation Report.

## Produces
Concise report constrained to 30-50 lines (APPROVED) or 50-80 lines (BLOCKED).

## When applied
Applied during authoring of the QA validation report before delivery to the orchestrator.

## Sub-concepts
none

## Part of
pre-pr-validation-report

## Implementation status
clean

## Design notes
Operational line-length limits imposed on QA reports to mitigate context window exhaustion during multi-agent workflows. By enforcing concise bounds for approvals (30-50 lines) and bounded depth for rejections (50-80 lines), it ensures downstream agents receive actionable summaries without unnecessary verbose log dumping.
