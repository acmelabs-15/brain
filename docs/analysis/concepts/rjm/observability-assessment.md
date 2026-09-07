---
package: rjm
name: Observability Assessment
slug: observability-assessment
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

# Observability Assessment

## Definition — verbatim
> "### Observability Assessment" — .claude/skills/review/references/observability.md:90

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/references/observability.md | 90 | defined here | Output section format presenting a structured table rating coverage across Logs, Metrics, Traces, and Agent/Hook Events as None, Partial, or Full. |

## Consumes
Observability review evaluations across discrete logs, service metrics, distributed traces, and agent/hook event telemetry.

## Produces
A structured Markdown summary table displaying pillar coverage status and evaluative notes.

## When applied
Emitted as a required output section in every observability review report.

## Sub-concepts
none

## Part of
observability

## Implementation status
clean

## Design notes
A structured review deliverable in rjm providing an at-a-glance summary of telemetry coverage across logs, metrics, traces, and agent events, ensuring reviewers comprehensively evaluate all dimensions of operational visibility.
