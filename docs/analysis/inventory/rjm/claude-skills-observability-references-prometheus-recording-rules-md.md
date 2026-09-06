---
package: rjm
path: .claude/skills/observability/references/prometheus-recording-rules.md
type: reference
bytes: 3493
unit: inv-rjm-128
in_scope_via: .claude/skills/observability/SKILL.md
aliases: []
verified: 2026-09-06 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/observability/references/prometheus-recording-rules.md, sha256: c1ddab819758cb3ff41dd591d7f1e494e34e4fab96b7b6fa5015ca868a2cfd4b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
---

# .claude/skills/observability/references/prometheus-recording-rules.md

## Purpose — required, verbatim
> "Precomputed PromQL expressions that emit new time series. Move expensive aggregations from query time to write time. Dashboards stay fast, calculations stay consistent." — .claude/skills/observability/references/prometheus-recording-rules.md:9

## Design intent — required
Defines standardized Prometheus recording rules to shift expensive PromQL aggregations from dashboard query time to scrape-time precomputation. Specifies standardized rules and alert thresholds for container CPU throttling ratios, disk I/O read/write latency, normalized system load averages, Pressure Stall Information (PSI) rates across CPU/memory/IO, and TCP retransmission ratios. Mandates infrastructure dimension relabeling (`instance_type`, `cpu_arch`) to allow cross-architecture performance comparison (e.g. x64 vs ARM64) and establishes mathematical rules for range vector windows (`window = max(5m, 4 * scrape_interval)`). Without it, dashboards would suffer severe query latency, inconsistent aggregation logic, and inability to compare workload performance across CPU architectures.

## Phase — required
cross-phase

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- reference prometheus-recording-rules.md — .claude/skills/observability/SKILL.md:147

## Concepts named — required, verbatim
- `Recording rule` — .claude/skills/observability/references/prometheus-recording-rules.md:13 — defined here
- `PromQL` — .claude/skills/observability/references/prometheus-recording-rules.md:13 — used here
- `instance_type` — .claude/skills/observability/references/prometheus-recording-rules.md:21 — defined here
- `cpu_arch` — .claude/skills/observability/references/prometheus-recording-rules.md:22 — defined here
- `container:cpu_throttle_ratio` — .claude/skills/observability/references/prometheus-recording-rules.md:31 — defined here
- `node:disk_read_latency_seconds` — .claude/skills/observability/references/prometheus-recording-rules.md:45 — defined here
- `node:disk_write_latency_seconds` — .claude/skills/observability/references/prometheus-recording-rules.md:50 — defined here
- `node:load_average_scaled` — .claude/skills/observability/references/prometheus-recording-rules.md:59 — defined here
- `Pressure Stall (PSI)` — .claude/skills/observability/references/prometheus-recording-rules.md:67 — defined here
- `node:cpu_stall_rate` — .claude/skills/observability/references/prometheus-recording-rules.md:70 — defined here
- `node:memory_stall_rate` — .claude/skills/observability/references/prometheus-recording-rules.md:73 — defined here
- `node:io_stall_rate` — .claude/skills/observability/references/prometheus-recording-rules.md:76 — defined here
- `node:tcp_retransmissions_scaled` — .claude/skills/observability/references/prometheus-recording-rules.md:85 — defined here
- `Range Vector Window` — .claude/skills/observability/references/prometheus-recording-rules.md:93 — defined here
- `scrape interval` — .claude/skills/observability/references/prometheus-recording-rules.md:95 — used here
- `Onboarding Checklist` — .claude/skills/observability/references/prometheus-recording-rules.md:110 — defined here

## Structure
- `# Prometheus Recording Rules` — .claude/skills/observability/references/prometheus-recording-rules.md:7
- `## Core Pattern` — .claude/skills/observability/references/prometheus-recording-rules.md:11
- `## Infrastructure Dimensions` — .claude/skills/observability/references/prometheus-recording-rules.md:17
- `## Key Recording Rules` — .claude/skills/observability/references/prometheus-recording-rules.md:26
- `### CPU Throttling Ratio` — .claude/skills/observability/references/prometheus-recording-rules.md:28
- `### Disk I/O Latency` — .claude/skills/observability/references/prometheus-recording-rules.md:42
- `### Normalized Load Average` — .claude/skills/observability/references/prometheus-recording-rules.md:56
- `### Pressure Stall (PSI) Rates` — .claude/skills/observability/references/prometheus-recording-rules.md:67
- `### TCP Retransmission Ratio` — .claude/skills/observability/references/prometheus-recording-rules.md:82
- `## Range Vector Window: Why 5m?` — .claude/skills/observability/references/prometheus-recording-rules.md:93
- `## Troubleshooting` — .claude/skills/observability/references/prometheus-recording-rules.md:101
- `## Onboarding Checklist` — .claude/skills/observability/references/prometheus-recording-rules.md:110

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- missing-path — .claude/skills/observability/references/prometheus-recording-rules.md:2 — Frontmatter references `source: wiki/concepts/Observability/Prometheus Recording Rules.md`, but directory `sources/rjm/wiki` does not exist in repository (remediates Phase 1V verification finding docs/analysis/inventory/rjm/_verification.md:54).

## Observations
Enforces a specific rule for sliding window sizing (`window = max(5m, 4 * scrape_interval)`) to eliminate counter reset artifacts and scrape jitter in Prometheus.

## Context cost
3493 bytes (~873 tokens).
