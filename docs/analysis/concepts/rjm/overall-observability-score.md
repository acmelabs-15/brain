---
package: rjm
name: Overall Observability Score
slug: overall-observability-score
kind: artifact
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/review/references/observability.md, sha256: 6983df4d518ec2dc87e6bd546c4e7850acb7e9fbcc9644305773239ade46c4ff}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Overall Observability Score

## Definition — verbatim
> "**Overall Observability Score**: X/5" — .claude/skills/review/references/observability.md:99

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/references/observability.md | 99 | defined here | Quantitative summary metric within the Observability Assessment output scoring production visibility on a 1-to-5 scale. |

## Consumes
Coverage ratings and finding severities across logs, metrics, traces, and agent/hook event streams.

## Produces
A standardized numerical score out of 5 indicating overall telemetry completeness and production readiness.

## When applied
Emitted as part of the Observability Assessment output section in observability review reports.

## Sub-concepts
none

## Part of
observability-assessment

## Implementation status
clean

## Design notes
A quantitative scoring mechanism in rjm's observability review report rating system-wide telemetry maturity on a 5-point scale, providing a concise numeric indicator of whether changes are sufficiently observable for production deployment.
