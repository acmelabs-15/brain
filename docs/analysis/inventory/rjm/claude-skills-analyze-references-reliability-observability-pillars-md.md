---
package: rjm
path: .claude/skills/analyze/references/reliability-observability-pillars.md
type: reference
bytes: 2988
unit: inv-rjm-88
in_scope_via: .claude/skills/analyze/SKILL.md
aliases: []
verified: 2026-09-06 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/analyze/references/reliability-observability-pillars.md, sha256: 6450d4c78251d4f6f6dbb7af254742bb68a42e5b2d4df5697f668bcca3c560fa}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
---

# .claude/skills/analyze/references/reliability-observability-pillars.md

## Purpose — required, verbatim
> "Observability is the ability to understand a system's internal state by examining its external outputs. Use during investigation and debugging phases of analysis." — .claude/skills/analyze/references/reliability-observability-pillars.md:9

## Design intent — required
Reference architecture establishing the distinction between observability (exploring unknown unknowns) and monitoring (tracking known failure modes). It details the three observability pillars (structured logs with correlation IDs, metrics across counter/gauge/histogram using USE and RED methods, and distributed traces propagating context). It defines diagnostic workflows for investigating alerts, user complaints, performance issues, and production bugs, and provides an audit checklist for identifying observability gaps (e.g. sensitive data logging, missing trace propagation, lack of SLO alerting) during codebase analysis.

## Phase — required
cross-phase

## Inputs — required
- Codebase telemetry implementations (logging statements, metrics instrumentation, tracing configurations) (.claude/skills/analyze/references/reliability-observability-pillars.md:9, 78-87)

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- skill analyze — .claude/skills/analyze/SKILL.md:69

## Concepts named — required, verbatim
- `Observability: Three Pillars` — .claude/skills/analyze/references/reliability-observability-pillars.md:7 — defined here | used here
- `Observability vs Monitoring` — .claude/skills/analyze/references/reliability-observability-pillars.md:11 — defined here | used here
- `The Three Pillars` — .claude/skills/analyze/references/reliability-observability-pillars.md:20 — defined here | used here
- `Logs` — .claude/skills/analyze/references/reliability-observability-pillars.md:22 — defined here | used here
- `Metrics` — .claude/skills/analyze/references/reliability-observability-pillars.md:33 — defined here | used here
- `Counter` — .claude/skills/analyze/references/reliability-observability-pillars.md:39 — defined here | used here
- `Gauge` — .claude/skills/analyze/references/reliability-observability-pillars.md:40 — defined here | used here
- `Histogram` — .claude/skills/analyze/references/reliability-observability-pillars.md:41 — defined here | used here
- `USE method` — .claude/skills/analyze/references/reliability-observability-pillars.md:45 — defined here | used here
- `RED method` — .claude/skills/analyze/references/reliability-observability-pillars.md:46 — defined here | used here
- `Traces` — .claude/skills/analyze/references/reliability-observability-pillars.md:50 — defined here | used here
- `Trace` — .claude/skills/analyze/references/reliability-observability-pillars.md:56 — defined here | used here
- `Span` — .claude/skills/analyze/references/reliability-observability-pillars.md:57 — defined here | used here
- `Context` — .claude/skills/analyze/references/reliability-observability-pillars.md:58 — defined here | used here
- `Investigation Workflow` — .claude/skills/analyze/references/reliability-observability-pillars.md:67 — defined here | used here
- `Assessing Observability During Analysis` — .claude/skills/analyze/references/reliability-observability-pillars.md:76 — defined here | used here
- `OpenTelemetry` — .claude/skills/analyze/references/reliability-observability-pillars.md:89 — defined here | used here

## Structure
- `# Observability: Three Pillars` — .claude/skills/analyze/references/reliability-observability-pillars.md:7
- `## Observability vs Monitoring` — .claude/skills/analyze/references/reliability-observability-pillars.md:11
- `## The Three Pillars` — .claude/skills/analyze/references/reliability-observability-pillars.md:20
- `### Logs` — .claude/skills/analyze/references/reliability-observability-pillars.md:22
- `### Metrics` — .claude/skills/analyze/references/reliability-observability-pillars.md:33
- `### Traces` — .claude/skills/analyze/references/reliability-observability-pillars.md:50
- `## Investigation Workflow` — .claude/skills/analyze/references/reliability-observability-pillars.md:67
- `## Assessing Observability During Analysis` — .claude/skills/analyze/references/reliability-observability-pillars.md:76
- `## Modern Standard: OpenTelemetry` — .claude/skills/analyze/references/reliability-observability-pillars.md:89

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- missing-path · .claude/skills/analyze/references/reliability-observability-pillars.md:2 · frontmatter `source:` references non-existent path `wiki/concepts/Reliability/Observability Three Pillars.md`.

## Observations
Provides an investigation routing matrix matching failure scenarios (alert fires, user complaint, performance issue, production bug) to telemetry entry points. Also highlights OpenTelemetry as the unifying modern standard.

## Context cost
2988 bytes, loads nothing further (0 bytes). Approximately 750 tokens.
