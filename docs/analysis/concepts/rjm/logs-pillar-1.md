---
package: rjm
name: Logs (Pillar 1)
slug: logs-pillar-1
kind: checklist
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

# Logs (Pillar 1)

## Definition — verbatim
> "### 1. Logs (Pillar 1)" — .claude/skills/review/references/observability.md:57

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/references/observability.md | 57 | defined here | Focus area checklist verifying that new code paths emit structured JSON logs with consistent fields, correlation IDs, appropriate log levels, and sensitive data exclusion. |

## Consumes
Logging statements, logger configurations, and emitted log events within new or modified code paths.

## Produces
Review findings evaluating structured log format, correlation tracing compatibility, log level appropriateness, and credential exclusion.

## When applied
Applied during observability review to scrutinize the discrete timestamped event logging emitted by new or updated code paths.

## Sub-concepts
none

## Part of
three-pillars

## Implementation status
clean

## Design notes
The first focus area checklist of rjm's three-pillars observability review, ensuring that application code emits consistent, machine-readable structured JSON logs with correlation identifiers while strictly preventing sensitive data leakage into log files.
