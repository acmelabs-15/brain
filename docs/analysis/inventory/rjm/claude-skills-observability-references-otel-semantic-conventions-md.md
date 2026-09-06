---
package: rjm
path: .claude/skills/observability/references/otel-semantic-conventions.md
type: reference
bytes: 3474
unit: inv-rjm-128
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .claude/skills/observability/references/otel-semantic-conventions.md, sha256: 7e2b74749fe4c0049aea726658f344b495cda0e05525d52d149adeaa62316f13}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/observability/references/otel-semantic-conventions.md

## Purpose — required, verbatim
> "Standardized attribute names, types, values, and descriptions give telemetry data consistent meaning across traces, metrics, and logs. The convention layer turns OpenTelemetry from "another telemetry SDK" into a portability story: the same `http.request.method` attribute means the same thing whether it is emitted by a Go service, a Python library, or a Kubernetes sidecar. This reference complements `three-pillars-reference.md`: that file covers what the three pillars are, this one covers how to name what they emit so the signal is portable." — .claude/skills/observability/references/otel-semantic-conventions.md:11-17

## Design intent — required
Establishes standardized naming conventions, hierarchical namespaces, and stability lifecycle stages for OpenTelemetry telemetry attributes across traces, metrics, and logs. It prevents arbitrary and diverging attribute naming (such as `httpMethod` vs `request.method` vs `http.request.method`) across distributed components, ensuring cross-service and cross-vendor portability for dashboards, alerts, SLOs, and queries. Without this reference, PR changes and multi-language services introduce fragmented telemetry that breaks correlation queries and forces expensive custom mapping on backend swaps.

## Phase — required
cross-phase

## Inputs — required
Telemetry instrumentation in PR diffs, metric instrument definitions, structured log fields, and span attribute namespaces.

## Outputs — required
none

## Invokes — required
- reference three-pillars-reference.md — .claude/skills/observability/references/otel-semantic-conventions.md:16

## Invoked by — required
- reference observability — .claude/skills/review/references/observability.md:53
- reference conventions — .claude/skills/observability/references/distributed-systems-fallacies.md:72

## Concepts named — required, verbatim
- `OTel Semantic Conventions` — .claude/skills/observability/references/otel-semantic-conventions.md:7 — defined here
- `Standardized attribute names` — .claude/skills/observability/references/otel-semantic-conventions.md:11 — used here
- `OpenTelemetry` — .claude/skills/observability/references/otel-semantic-conventions.md:13 — used here
- `http.request.method` — .claude/skills/observability/references/otel-semantic-conventions.md:14 — used here
- `shared schema` — .claude/skills/observability/references/otel-semantic-conventions.md:26 — defined here
- `vendor-neutral observability` — .claude/skills/observability/references/otel-semantic-conventions.md:28 — defined here
- `Resource` — .claude/skills/observability/references/otel-semantic-conventions.md:34 — used here
- `Traces` — .claude/skills/observability/references/otel-semantic-conventions.md:35 — used here
- `Metrics` — .claude/skills/observability/references/otel-semantic-conventions.md:36 — used here
- `Logs` — .claude/skills/observability/references/otel-semantic-conventions.md:37 — used here
- `Attribute Namespaces` — .claude/skills/observability/references/otel-semantic-conventions.md:39 — defined here
- `http.*` — .claude/skills/observability/references/otel-semantic-conventions.md:43 — used here
- `db.*` — .claude/skills/observability/references/otel-semantic-conventions.md:44 — used here
- `k8s.*` — .claude/skills/observability/references/otel-semantic-conventions.md:45 — used here
- `messaging.*` — .claude/skills/observability/references/otel-semantic-conventions.md:46 — used here
- `Stable Versus Experimental` — .claude/skills/observability/references/otel-semantic-conventions.md:48 — defined here
- `Stable` — .claude/skills/observability/references/otel-semantic-conventions.md:50 — used here
- `Experimental` — .claude/skills/observability/references/otel-semantic-conventions.md:51 — used here
- `rename storm` — .claude/skills/observability/references/otel-semantic-conventions.md:53 — defined here
- `service-mesh telemetry` — .claude/skills/observability/references/otel-semantic-conventions.md:59 — used here
- `SLO` — .claude/skills/observability/references/otel-semantic-conventions.md:59 — used here
- `SLI` — .claude/skills/observability/references/otel-semantic-conventions.md:59 — used here

## Structure
# OTel Semantic Conventions — .claude/skills/observability/references/otel-semantic-conventions.md:7
## Principle — .claude/skills/observability/references/otel-semantic-conventions.md:9
## What They Solve — .claude/skills/observability/references/otel-semantic-conventions.md:19
## Categories — .claude/skills/observability/references/otel-semantic-conventions.md:30
## Attribute Namespaces — .claude/skills/observability/references/otel-semantic-conventions.md:39
## Stable Versus Experimental — .claude/skills/observability/references/otel-semantic-conventions.md:48
## Why It Matters — .claude/skills/observability/references/otel-semantic-conventions.md:55
## Why This Lens Applies In PR Review — .claude/skills/observability/references/otel-semantic-conventions.md:62
## Related — .claude/skills/observability/references/otel-semantic-conventions.md:73
## Source — .claude/skills/observability/references/otel-semantic-conventions.md:79

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Highlights stability indicators on conventions, advising engineers on how to manage "rename storms" when transitioning attributes from experimental to stable. Note: parent SKILL.md references table at lines 141-149 omits this reference.

## Context cost
3474 bytes, ~870 tokens.
