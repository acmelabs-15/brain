---
package: rjm
name: RECOMMENDATION
slug: recommendation
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-020-feature-request-review-step.md, sha256: 935688cbbdc1cfa16ddef11f8e27c832b51e558ae3fd9cd23a5f80b260c663c6}
  - {path: scripts/eval/_report_writer.py, sha256: 2880d2a761552d864a734fd23db9f205c2ade9b2964f5892a7043ec3fb488fc7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# RECOMMENDATION

## Definition — verbatim
(used, not defined)

> "RECOMMENDATION: PROCEED|DEFER|REQUEST_EVIDENCE|NEEDS_RESEARCH|DECLINE" — .agents/architecture/ADR-020-feature-request-review-step.md:393

> "`recommendation` field is whatever the caller supplies: `None` for" — scripts/eval/_report_writer.py:5

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-020-feature-request-review-step.md | 393 | defined here | Required output token format defining allowed triage recommendation verdicts (PROCEED, DEFER, REQUEST_EVIDENCE, NEEDS_RESEARCH, DECLINE). |
| scripts/eval/_report_writer.py | 5 | used here | Field in evaluation report schema persisting the run verdict or decision status. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
feature-request-review

## Implementation status
defects: missing-path, doc-drift (workflow .github/workflows/ai-issue-triage.yml does not exist on disk; scripts/eval/_report_writer.py is clean)

## Design notes
Structured output token label in feature request review and field identifier in evaluation reports designating the decision verdict rather than a development lifecycle concept.
