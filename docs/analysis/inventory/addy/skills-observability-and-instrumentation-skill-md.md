---
package: addy
path: skills/observability-and-instrumentation/SKILL.md
type: skill
bytes: 11053
unit: inv-addy-44
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/observability-and-instrumentation/SKILL.md, sha256: bcec2ada212de6d07daa16886859cc0f2d954c845fc65fdbb7b23106df6aa8c0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# skills/observability-and-instrumentation/SKILL.md

## Purpose — required, verbatim
> "Instruments code so production behavior is visible and diagnosable. Use when adding logging, metrics, tracing, or alerting. Use when shipping any feature that runs in production and you need evidence it works. Use when production issues are reported but you can't tell what happened from the available data." — skills/observability-and-instrumentation/SKILL.md:3

## Design intent — required
Ensures production systems are diagnosable from the outside by embedding telemetry (structured JSON logs with correlation IDs, RED/USE metrics, and distributed tracing via OpenTelemetry) directly alongside feature implementation rather than post-launch. It anchors all telemetry to questions on-call engineers actually ask and enforces symptom-based rather than cause-based alerting to eliminate alert fatigue.

## Phase — required
addy:Ship

## Inputs — required
- Production feature requirements or components with I/O, retries, queues, or cross-service calls — skills/observability-and-instrumentation/SKILL.md:14-18
- On-call diagnostic questions defining "working":
> "write down 2–4 questions an on-call engineer will ask about this feature" — skills/observability-and-instrumentation/SKILL.md:29
- Request correlation header:
> "req.headers['x-request-id']" — skills/observability-and-instrumentation/SKILL.md:84

## Outputs — required
- Structured JSON logs with stable event names and correlation IDs — skills/observability-and-instrumentation/SKILL.md:54, 79
- RED and USE metrics with bounded cardinality labels:
> "instrument **RED** on every endpoint and every external dependency: **R**ate (requests/sec), **E**rrors (failure rate), **D**uration (latency histogram, not average). For resources (queues, pools, hosts), use **USE**: **U**tilization, **S**aturation, **E**rrors." — skills/observability-and-instrumentation/SKILL.md:95
- Distributed trace spans with context propagation:
> "Add manual spans only around meaningful internal units of work" — skills/observability-and-instrumentation/SKILL.md:135
- Actionable symptom-based alerting rules linked to runbooks — skills/observability-and-instrumentation/SKILL.md:139, 153

## Invokes — required
- skill debugging-and-error-recovery — skills/observability-and-instrumentation/SKILL.md:21
- skill performance-optimization — skills/observability-and-instrumentation/SKILL.md:22
- skill shipping-and-launch — skills/observability-and-instrumentation/SKILL.md:23
- skill security-and-hardening — skills/observability-and-instrumentation/SKILL.md:91
- reference ../../references/observability-checklist.md — skills/observability-and-instrumentation/SKILL.md:203

## Invoked by — required
- doc README.md — README.md:281
- config CLAUDE.md — CLAUDE.md:26
- skill skills/using-agent-skills/SKILL.md — skills/using-agent-skills/SKILL.md:41
- skill skills/security-and-hardening/SKILL.md — skills/security-and-hardening/SKILL.md:369
- reference references/definition-of-done.md — references/definition-of-done.md:49
- reference references/observability-checklist.md — references/observability-checklist.md:3

## Concepts named — required, verbatim
- `observability-and-instrumentation` — skills/observability-and-instrumentation/SKILL.md:2 — defined here
- `debugging-and-error-recovery` — skills/observability-and-instrumentation/SKILL.md:21 — used here
- `performance-optimization` — skills/observability-and-instrumentation/SKILL.md:22 — used here
- `shipping-and-launch` — skills/observability-and-instrumentation/SKILL.md:23 — used here
- `Structured log` — skills/observability-and-instrumentation/SKILL.md:46 — defined here
- `Metric` — skills/observability-and-instrumentation/SKILL.md:47 — defined here
- `Trace` — skills/observability-and-instrumentation/SKILL.md:48 — defined here
- `Structured logging` — skills/observability-and-instrumentation/SKILL.md:52 — defined here
- `Correlation IDs` — skills/observability-and-instrumentation/SKILL.md:79 — defined here
- `security-and-hardening` — skills/observability-and-instrumentation/SKILL.md:91 — used here
- `RED` — skills/observability-and-instrumentation/SKILL.md:95 — defined here
- `USE` — skills/observability-and-instrumentation/SKILL.md:95 — defined here
- `OpenTelemetry` — skills/observability-and-instrumentation/SKILL.md:97 — used here
- `Cardinality` — skills/observability-and-instrumentation/SKILL.md:110 — defined here
- `Distributed tracing` — skills/observability-and-instrumentation/SKILL.md:119 — defined here
- `Alerting` — skills/observability-and-instrumentation/SKILL.md:137 — defined here
- `runbook` — skills/observability-and-instrumentation/SKILL.md:153 — defined here

## Structure
- # Observability and Instrumentation — skills/observability-and-instrumentation/SKILL.md:6
- ## Overview — skills/observability-and-instrumentation/SKILL.md:8
- ## When to Use — skills/observability-and-instrumentation/SKILL.md:12
- ## Process — skills/observability-and-instrumentation/SKILL.md:25
- `### 1. Define "working" before instrumenting` — skills/observability-and-instrumentation/SKILL.md:27
- `### 2. Pick the right signal for each question` — skills/observability-and-instrumentation/SKILL.md:42
- `### 3. Structured logging` — skills/observability-and-instrumentation/SKILL.md:52
- `### 4. Metrics` — skills/observability-and-instrumentation/SKILL.md:93
- `### 5. Distributed tracing` — skills/observability-and-instrumentation/SKILL.md:119
- `### 6. Alerting` — skills/observability-and-instrumentation/SKILL.md:137
- `### 7. Verify the telemetry itself` — skills/observability-and-instrumentation/SKILL.md:157
- ## Common Rationalizations — skills/observability-and-instrumentation/SKILL.md:166
- ## Red Flags — skills/observability-and-instrumentation/SKILL.md:178
- ## Verification — skills/observability-and-instrumentation/SKILL.md:190

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Signal taxonomy rule: "Rule of thumb: metrics tell you **that** something is wrong, traces tell you **where**, logs tell you **why**." — skills/observability-and-instrumentation/SKILL.md:50
- Symptom alerting rule: "Alert on **symptoms users feel**, not on causes" — skills/observability-and-instrumentation/SKILL.md:139
- Cardinality failure mode: "Every unique label combination is a separate time series." — skills/observability-and-instrumentation/SKILL.md:110

## Context cost
11053 bytes, ~2600 tokens. Standalone skill prompt; references external checklist references/observability-checklist.md.
