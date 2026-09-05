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
verified: 2026-09-04 quote-check+coverage
---

# skills/observability-and-instrumentation/SKILL.md

## Purpose — required, verbatim
> "Code you can't observe is code you can't operate. Observability is the ability to answer \"what is the system doing and why?\" from the outside, using the telemetry the code emits. Instrumentation is not a post-launch add-on — it's written alongside the feature, the same way tests are. If a feature ships without telemetry, the first user-reported bug becomes archaeology instead of a query." — skills/observability-and-instrumentation/SKILL.md:10

## Design intent — required
Integrates operational telemetry into features as they are built, ensuring systems are understandable and debuggable in production without guessing or archaeology. Avoids unqueryable logging noise by forcing developers to define on-call questions beforehand and select signals appropriately (structured logs for specific causes, RED/USE metrics for aggregate rates/latencies, distributed traces for cross-service delays). Mandates correlation IDs across boundaries, guards against metric cardinality explosions, bans PII/secret logging, establishes actionable symptom-based alerting tied to runbooks, and requires staging verification of telemetry signals.

## Phase — required
addy:Ship

## Inputs — required
- Questions on-call engineer will ask about the feature: "Define \"working\" before instrumenting" — skills/observability-and-instrumentation/SKILL.md:27
- Production feature code being built or modified: "Building any feature that will run in production" — skills/observability-and-instrumentation/SKILL.md:14
- Production incident reports: "A production incident took too long to diagnose" — skills/observability-and-instrumentation/SKILL.md:16
- PR diffs with I/O, retries, or queues: "Reviewing a PR that adds I/O, retries, queues, or cross-service calls" — skills/observability-and-instrumentation/SKILL.md:18
- Reference checklist: `../../references/observability-checklist.md` — skills/observability-and-instrumentation/SKILL.md:203

## Outputs — required
- Structured JSON log events with stable event names and correlation IDs: "Structured logging" — skills/observability-and-instrumentation/SKILL.md:52, "Correlation IDs are mandatory." — skills/observability-and-instrumentation/SKILL.md:79
- RED/USE metric instruments and latency histograms: "Metrics" — skills/observability-and-instrumentation/SKILL.md:93, "http_request_duration_seconds" — skills/observability-and-instrumentation/SKILL.md:103
- OpenTelemetry SDK setup and distributed trace spans: "Distributed tracing" — skills/observability-and-instrumentation/SKILL.md:119, "tracing.ts" — skills/observability-and-instrumentation/SKILL.md:124
- Symptom-based alert rules linked to runbooks: "Alerting" — skills/observability-and-instrumentation/SKILL.md:137, "SYMPTOM" — skills/observability-and-instrumentation/SKILL.md:142

## Invokes — required
- reference ../../references/observability-checklist.md — skills/observability-and-instrumentation/SKILL.md:203

## Invoked by — required
- skill using-agent-skills — skills/using-agent-skills/SKILL.md:41
- skill security-and-hardening — skills/security-and-hardening/SKILL.md:369
- reference references/observability-checklist.md — references/observability-checklist.md:3
- reference references/definition-of-done.md — references/definition-of-done.md:49
- doc README.md — README.md:281
- doc CLAUDE.md — CLAUDE.md:26

## Concepts named — required, verbatim
- `observability-and-instrumentation` — skills/observability-and-instrumentation/SKILL.md:2 — defined here
- `Observability` — skills/observability-and-instrumentation/SKILL.md:10 — defined here
- `Instrumentation` — skills/observability-and-instrumentation/SKILL.md:10 — defined here
- `debugging-and-error-recovery` — skills/observability-and-instrumentation/SKILL.md:21 — used here
- `performance-optimization` — skills/observability-and-instrumentation/SKILL.md:22 — used here
- `shipping-and-launch` — skills/observability-and-instrumentation/SKILL.md:23 — used here
- `Structured log` — skills/observability-and-instrumentation/SKILL.md:46 — defined here
- `Metric` — skills/observability-and-instrumentation/SKILL.md:47 — defined here
- `Trace` — skills/observability-and-instrumentation/SKILL.md:48 — defined here
- `Correlation IDs` — skills/observability-and-instrumentation/SKILL.md:79 — defined here
- `security-and-hardening` — skills/observability-and-instrumentation/SKILL.md:91 — used here
- `RED` — skills/observability-and-instrumentation/SKILL.md:95 — defined here
- `USE` — skills/observability-and-instrumentation/SKILL.md:95 — defined here
- `Cardinality` — skills/observability-and-instrumentation/SKILL.md:110 — defined here
- `Distributed tracing` — skills/observability-and-instrumentation/SKILL.md:119 — defined here
- `OpenTelemetry` — skills/observability-and-instrumentation/SKILL.md:121 — defined here
- `Alerting` — skills/observability-and-instrumentation/SKILL.md:137 — defined here
- `SYMPTOM` — skills/observability-and-instrumentation/SKILL.md:142 — defined here
- `CAUSE` — skills/observability-and-instrumentation/SKILL.md:142 — defined here
- `runbook` — skills/observability-and-instrumentation/SKILL.md:153 — defined here

## Structure
- # Observability and Instrumentation — skills/observability-and-instrumentation/SKILL.md:6
- ## Overview — skills/observability-and-instrumentation/SKILL.md:8
- ## When to Use — skills/observability-and-instrumentation/SKILL.md:12
- ## Process — skills/observability-and-instrumentation/SKILL.md:25
- ### 1. Define "working" before instrumenting — skills/observability-and-instrumentation/SKILL.md:27
- ### 2. Pick the right signal for each question — skills/observability-and-instrumentation/SKILL.md:42
- ### 3. Structured logging — skills/observability-and-instrumentation/SKILL.md:52
- ### 4. Metrics — skills/observability-and-instrumentation/SKILL.md:93
- ### 5. Distributed tracing — skills/observability-and-instrumentation/SKILL.md:119
- ### 6. Alerting — skills/observability-and-instrumentation/SKILL.md:137
- ### 7. Verify the telemetry itself — skills/observability-and-instrumentation/SKILL.md:157
- ## Common Rationalizations — skills/observability-and-instrumentation/SKILL.md:166
- ## Red Flags — skills/observability-and-instrumentation/SKILL.md:178
- ## Verification — skills/observability-and-instrumentation/SKILL.md:190

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- doc-drift · skills/observability-and-instrumentation/SKILL.md:3: Skill frontmatter description contains comprehensive trigger conditions and negative boundaries, whereas the external catalog page external/observability-and-instrumentation.md:5 truncates triggers and drops negative bounds.
- doc-drift · skills/observability-and-instrumentation/SKILL.md:25: Structures workflow into 7 numbered steps, whereas external/observability-and-instrumentation.md:10 claims the skill adheres to a generic 6-section template.

## Observations
- Signal classification rubric (skills/observability-and-instrumentation/SKILL.md:50): metrics tell *that* something is wrong, traces tell *where*, logs tell *why*.
- Anti-pattern controls: strictly prohibits high-cardinality values (user IDs, raw URLs) as metric labels (skills/observability-and-instrumentation/SKILL.md:110-117), mandates correlation IDs (skills/observability-and-instrumentation/SKILL.md:79), and forbids logging PII or secrets.
- Actionable alerting constraints (skills/observability-and-instrumentation/SKILL.md:139-156): alerts must be symptom-based, actionable, link to a runbook, and use only two tiers (page vs ticket).

## Context cost
11053 bytes, plus loads references/observability-checklist.md (4931 bytes). Total: 15984 bytes, ~3,900 tokens.
