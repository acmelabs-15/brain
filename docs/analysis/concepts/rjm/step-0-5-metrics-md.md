---
package: rjm
name: STEP-0.5-METRICS.md
slug: step-0-5-metrics-md
kind: name-only
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-070-memory-first-gate-spec-pipeline.md, sha256: 7074f73323b27f263379d5cb0c0b753ff42a7485c9d9b2027d81f9f010d6bd8e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# STEP-0.5-METRICS.md

## Definition — verbatim
(used, not defined)

> "(`.agents/sessions/STEP-0.5-METRICS.md`), and adds a cross-step state-passing" — .agents/architecture/ADR-070-memory-first-gate-spec-pipeline.md:36

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-070-memory-first-gate-spec-pipeline.md | 36 | defined here | Defined as the session tracking metrics file logging Step 0.5 invocations and halts. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path, doc-drift

## Design notes
A file path identifying the session telemetry log for Step 0.5 gate events (.agents/sessions/STEP-0.5-METRICS.md) rather than an operational lifecycle concept.
