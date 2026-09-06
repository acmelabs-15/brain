---
package: rjm
path: .claude/skills/review/references/observability.md
type: reference
bytes: 9429
unit: inv-rjm-151
in_scope_via: .claude/skills/review/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/review/references/observability.md, sha256: 6983df4d518ec2dc87e6bd546c4e7850acb7e9fbcc9644305773239ade46c4ff}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/review/references/observability.md

## Purpose — required, verbatim
> "You are reviewing a pull request for observability: can an operator understand what the new code does in production from its external outputs?" — .claude/skills/review/references/observability.md:10

## Design intent — required
Defines review criteria to ensure that all new code paths, agent steps, and hooks are operable and transparent in production through logs, metrics, traces, and agent JSONL events. It grounds review in the three pillars of observability and OpenTelemetry (OTel) semantic conventions, and enforces critical boundaries against silent failure paths, broken trace contexts, and "cookie-monster" logging of sensitive data or unredacted payloads on hot paths. Without this review axis, production incidents would be difficult to diagnose due to unlogged error branches, missing correlation IDs, or noisy, non-standard telemetry.

## Phase — required
rjm:review

## Inputs — required
- Pull request diff prepended with `CONTEXT_MODE: [full|summary|partial]` header — .claude/skills/review/references/observability.md:14
- New code paths, agent steps, hooks, or modified branching/failure behavior — .claude/skills/review/references/observability.md:45

## Outputs — required
- Observability Assessment table across Logs, Metrics, Traces, and Agent/Hook Events, with Overall Observability Score (X/5) — .claude/skills/review/references/observability.md:90-99
- Findings table with Severity, Category, Finding, Location (`file:line`), and Recommendation — .claude/skills/review/references/observability.md:101-105
- Specific observability recommendations — .claude/skills/review/references/observability.md:107-109
- Human-readable Verdict (`VERDICT: [PASS|WARN|CRITICAL_FAIL]`, `MESSAGE: [Brief explanation]`) — .claude/skills/review/references/observability.md:119-122
- Fenced JSON output matching inline schema (`verdict`, `message`, `agent: "observability"`, `timestamp`, `findings` array) — .claude/skills/review/references/observability.md:138-153
- Parseable final verdict line matching regex — .claude/skills/review/references/observability.md:178-182

## Invokes — required
- skill observability — .claude/skills/review/references/observability.md:51
- reference three-pillars-reference.md — .claude/skills/review/references/observability.md:52
- reference otel-semantic-conventions.md — .claude/skills/review/references/observability.md:53

## Invoked by — required
- skill review — .claude/skills/review/SKILL.md:29

## Concepts named — required, verbatim
- `Observability Review Task` — .claude/skills/review/references/observability.md:8 — defined here
- `Context Mode Enforcement` — .claude/skills/review/references/observability.md:12 — defined here
- `CONTEXT_MODE` — .claude/skills/review/references/observability.md:14 — used here
- `full` — .claude/skills/review/references/observability.md:18 — used here
- `summary` — .claude/skills/review/references/observability.md:20 — used here
- `partial` — .claude/skills/review/references/observability.md:22 — used here
- `manipulation-resistance control` — .claude/skills/review/references/observability.md:31 — used here
- `Grounding Rules` — .claude/skills/review/references/observability.md:36 — defined here
- `observability` — .claude/skills/review/references/observability.md:51 — used here
- `three pillars` — .claude/skills/review/references/observability.md:52 — used here
- `OTel semantic-conventions` — .claude/skills/review/references/observability.md:53 — used here
- `Logs (Pillar 1)` — .claude/skills/review/references/observability.md:57 — defined here
- `Metrics (Pillar 2)` — .claude/skills/review/references/observability.md:64 — defined here
- `Traces (Pillar 3)` — .claude/skills/review/references/observability.md:70 — defined here
- `Agent and Hook Event Coverage` — .claude/skills/review/references/observability.md:76 — defined here
- `Signal Without Noise` — .claude/skills/review/references/observability.md:81 — defined here
- `cookie-monster logging` — .claude/skills/review/references/observability.md:83 — used here
- `Observability Assessment` — .claude/skills/review/references/observability.md:90 — defined here
- `Overall Observability Score` — .claude/skills/review/references/observability.md:99 — defined here
- `Verdict` — .claude/skills/review/references/observability.md:111 — defined here
- `PASS` — .claude/skills/review/references/observability.md:115 — used here
- `WARN` — .claude/skills/review/references/observability.md:116 — used here
- `CRITICAL_FAIL` — .claude/skills/review/references/observability.md:117 — used here
- `Critical Failure Triggers` — .claude/skills/review/references/observability.md:124 — defined here
- `silent failure` — .claude/skills/review/references/observability.md:128 — used here
- `Structured JSON Output` — .claude/skills/review/references/observability.md:133 — defined here
- `Output Schema` — .claude/skills/review/references/observability.md:155 — defined here

## Structure
- `# Observability Review Task` — .claude/skills/review/references/observability.md:8
- `## Context Mode Enforcement (REQUIRED)` — .claude/skills/review/references/observability.md:12
- `## Grounding Rules` — .claude/skills/review/references/observability.md:36
- `## When This Axis Applies` — .claude/skills/review/references/observability.md:43
- `## Reference Material` — .claude/skills/review/references/observability.md:47
- `## Analysis Focus Areas` — .claude/skills/review/references/observability.md:55
- `### 1. Logs (Pillar 1)` — .claude/skills/review/references/observability.md:57
- `### 2. Metrics (Pillar 2)` — .claude/skills/review/references/observability.md:64
- `### 3. Traces (Pillar 3)` — .claude/skills/review/references/observability.md:70
- `### 4. Agent and Hook Event Coverage` — .claude/skills/review/references/observability.md:76
- `### 5. Signal Without Noise` — .claude/skills/review/references/observability.md:81
- `## Output Requirements` — .claude/skills/review/references/observability.md:86
- `### Observability Assessment` — .claude/skills/review/references/observability.md:90
- `### Findings` — .claude/skills/review/references/observability.md:101
- `### Recommendations` — .claude/skills/review/references/observability.md:107
- `### Verdict` — .claude/skills/review/references/observability.md:111
- `## Critical Failure Triggers` — .claude/skills/review/references/observability.md:124
- `## Structured JSON Output` — .claude/skills/review/references/observability.md:133
- `## Output Schema` — .claude/skills/review/references/observability.md:155

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Emphasizes AI agent-specific telemetry alongside standard system observability: explicitly checks whether agent steps and hooks emit JSONL events (decisions, tool calls, timings) consumed by the `observability` skill.
- Highlights "cookie-monster logging" anti-pattern: logging full request bodies or payloads on hot paths that risk filling disks and leaking sensitive data.
- Hard critical failure trigger on silent failure: any new failure path that emits neither log, metric, nor trace is a blocking CRITICAL_FAIL.

## Context cost
9429 bytes (~2357 tokens). Invokes `observability` skill and 2 references under `.claude/skills/observability/references/`.
