---
package: rjm
name: Signal Without Noise
slug: signal-without-noise
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

# Signal Without Noise

## Definition — verbatim
> "### 5. Signal Without Noise" — .claude/skills/review/references/observability.md:81

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/references/observability.md | 81 | defined here | Focus area checklist verifying that logging remains actionable, avoids excessive volume, and rejects logging full request bodies or payloads on hot paths. |

## Consumes
Emitted telemetry volume, logging granularity, and payload logging statements on high-frequency execution paths.

## Produces
Evaluations on telemetry signal-to-noise ratio, actionability assessments, and findings flagging excessive or unhelpful logging volume.

## When applied
Applied during observability review to ensure telemetry provides actionable operational signal without causing disk exhaustion or log fatigue.

## Sub-concepts
- cookie-monster-logging

## Part of
observability

## Implementation status
clean

## Design notes
A review checklist principle in rjm ensuring that telemetry additions remain strictly actionable and high-signal, preventing noisy logging practices like dumping full payloads on hot paths that risk filling production disks.
