---
package: addy
name: Structured log
slug: structured-log
kind: artifact
package_phase: addy:Ship
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/observability-and-instrumentation/SKILL.md, sha256: bcec2ada212de6d07daa16886859cc0f2d954c845fc65fdbb7b23106df6aa8c0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Structured log

## Definition — verbatim
> "Log events, not prose. Every log line is a JSON object with a stable event name and machine-readable fields:" — skills/observability-and-instrumentation/SKILL.md:54

## Also called — verbatim
- "Structured logging" — skills/observability-and-instrumentation/SKILL.md:52

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/observability-and-instrumentation/SKILL.md | 46 | defined here | Defined in telemetry signal comparison table as per-event telemetry answering what happened in a specific case. |

## Consumes
Discrete application events, contextual metadata, error codes, and correlation IDs.

## Produces
Machine-parseable JSON log records with stable event names and key-value fields.

## When applied
Emitted during discrete application events, error occurrences, or state changes to explain why an incident occurred.

## Sub-concepts
none

## Part of
- observability-and-instrumentation

## Implementation status
clean

## Design notes
A telemetry signal format replacing prose strings with machine-readable JSON key-value pairs and stable event names, ensuring logs are queryable and aggregatable across production services.
