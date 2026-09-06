---
package: rjm
path: .claude/skills/observability/references/otel-semantic-conventions.md
type: reference
bytes: 3474
unit: inv-rjm-128
in_scope_via: .claude/skills/review/references/observability.md
aliases: []
verified: 2026-09-06 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/observability/references/otel-semantic-conventions.md, sha256: 7e2b74749fe4c0049aea726658f344b495cda0e05525d52d149adeaa62316f13}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
---

# .claude/skills/observability/references/otel-semantic-conventions.md

## Purpose — required, verbatim
> "Semantic conventions are the interop contract of modern observability." — .claude/skills/observability/references/otel-semantic-conventions.md:57

## Design intent — required
Establishes standard naming conventions, namespaces, and units for OpenTelemetry signals (resource, traces, metrics, logs) to guarantee cross-service, cross-language, and cross-vendor interoperability. Explains how dot-separated namespaces (e.g. `http.*`, `db.*`, `k8s.*`) prevent metric fragmentation and broken dashboards when migrating services or switching backend providers. In PR reviews, provides reviewers with concrete criteria to reject ad-hoc telemetry names (like `httpMethod` vs `http.request.method`) and missing units.

## Phase — required
cross-phase

## Inputs — required
none

## Outputs — required
none

## Invokes — required
- reference three-pillars-reference.md — .claude/skills/observability/references/otel-semantic-conventions.md:16
- reference OTel — .claude/skills/observability/references/otel-semantic-conventions.md:76

## Invoked by — required
- reference observability.md — .claude/skills/review/references/observability.md:53
- reference OTel — .claude/skills/observability/references/distributed-systems-fallacies.md:72

## Concepts named — required, verbatim
- `OpenTelemetry` — .claude/skills/observability/references/otel-semantic-conventions.md:13 — used here
- `three-pillars-reference.md` — .claude/skills/observability/references/otel-semantic-conventions.md:16 — used here
- `vendor-neutral observability` — .claude/skills/observability/references/otel-semantic-conventions.md:28 — defined here
- `Resource` — .claude/skills/observability/references/otel-semantic-conventions.md:34 — defined here
- `Traces` — .claude/skills/observability/references/otel-semantic-conventions.md:35 — defined here
- `Metrics` — .claude/skills/observability/references/otel-semantic-conventions.md:36 — defined here
- `Logs` — .claude/skills/observability/references/otel-semantic-conventions.md:37 — defined here
- `Attribute Namespaces` — .claude/skills/observability/references/otel-semantic-conventions.md:39 — defined here
- `http.*` — .claude/skills/observability/references/otel-semantic-conventions.md:43 — defined here
- `db.*` — .claude/skills/observability/references/otel-semantic-conventions.md:44 — defined here
- `k8s.*` — .claude/skills/observability/references/otel-semantic-conventions.md:45 — defined here
- `Stable Versus Experimental` — .claude/skills/observability/references/otel-semantic-conventions.md:48 — defined here
- `interop contract` — .claude/skills/observability/references/otel-semantic-conventions.md:57 — defined here

## Structure
- `# OTel Semantic Conventions` — .claude/skills/observability/references/otel-semantic-conventions.md:7
- `## Principle` — .claude/skills/observability/references/otel-semantic-conventions.md:9
- `## What They Solve` — .claude/skills/observability/references/otel-semantic-conventions.md:19
- `## Categories` — .claude/skills/observability/references/otel-semantic-conventions.md:30
- `## Attribute Namespaces` — .claude/skills/observability/references/otel-semantic-conventions.md:39
- `## Stable Versus Experimental` — .claude/skills/observability/references/otel-semantic-conventions.md:48
- `## Why It Matters` — .claude/skills/observability/references/otel-semantic-conventions.md:55
- `## Why This Lens Applies In PR Review` — .claude/skills/observability/references/otel-semantic-conventions.md:62
- `## Related` — .claude/skills/observability/references/otel-semantic-conventions.md:73
- `## Source` — .claude/skills/observability/references/otel-semantic-conventions.md:79

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- missing-path — .claude/skills/observability/references/otel-semantic-conventions.md:2 — Frontmatter references `source: wiki/concepts/Observability/OTel Semantic Conventions.md`, but directory `sources/rjm/wiki` does not exist in repository.
- doc-drift — .claude/skills/observability/SKILL.md:144-149 — `SKILL.md` references table lists `three-pillars-reference.md`, `prometheus-recording-rules.md`, and `otel-migration-reference.md`, but omits `otel-semantic-conventions.md` which is located in `references/`.

## Observations
Highlights the lifecycle risk of "rename storms" when telemetry attributes graduate from experimental to stable status.

## Context cost
3474 bytes (~869 tokens).
