---
package: rjm
name: Investigation Workflow
slug: investigation-workflow
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/analyze/references/reliability-observability-pillars.md, sha256: 6450d4c78251d4f6f6dbb7af254742bb68a42e5b2d4df5697f668bcca3c560fa}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Investigation Workflow

## Definition — verbatim
(used, not defined)

> "## Investigation Workflow" — .claude/skills/analyze/references/reliability-observability-pillars.md:67

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/analyze/references/reliability-observability-pillars.md | 67 | defined here | Triage workflow matrix routing incident investigation scenarios across metrics, traces, and logs. |

## Consumes
System symptoms, incident alerts, observability signals (metrics, logs, traces).

## Produces
Diagnostic path sequencing identifying root cause across telemetry pillars.

## When applied
When investigating production incidents, performance anomalies, error spikes, or debugging system issues.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path

## Design notes
Investigation Workflow provides a structured routing matrix for triaging operational anomalies across the three observability pillars. By specifying whether to start with metrics, logs, or alerts depending on the symptom (e.g. latency spikes vs. error surges), it prevents chaotic debugging and ensures engineers leverage the most efficient telemetry signal for each incident type.
