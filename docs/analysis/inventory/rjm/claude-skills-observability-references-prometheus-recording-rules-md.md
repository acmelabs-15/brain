---
package: rjm
path: .claude/skills/observability/references/prometheus-recording-rules.md
type: reference
bytes: 3493
unit: inv-rjm-128
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .claude/skills/observability/references/prometheus-recording-rules.md, sha256: c1ddab819758cb3ff41dd591d7f1e494e34e4fab96b7b6fa5015ca868a2cfd4b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/observability/references/prometheus-recording-rules.md

## Purpose — required, verbatim
> "Precomputed PromQL expressions that emit new time series. Move expensive aggregations from query time to write time. Dashboards stay fast, calculations stay consistent." — .claude/skills/observability/references/prometheus-recording-rules.md:9

## Design intent — required
Defines standard PromQL recording rules and infrastructure relabeling practices for Prometheus monitoring. By precomputing heavy metric aggregations (such as container CPU throttling ratios, disk read/write latencies, scaled load averages, pressure stall information rates, and TCP retransmissions) at write time, it prevents query-time dashboard timeouts and standardizes cross-architecture evaluations (e.g. x64 vs ARM64) across fleets. Without it, dashboards execute ad-hoc, expensive range-vector calculations that bog down Prometheus servers and yield inconsistent alert calculations across teams.

## Phase — required
cross-phase

## Inputs — required
Prometheus node and container raw time series metrics: `container_cpu_cfs_throttled_periods_total`, `container_cpu_cfs_periods_total`, `node_disk_read_time_seconds_total`, `node_disk_reads_completed_total`, `node_load5`, `node_pressure_*_waiting_seconds_total`, `node_netstat_Tcp_*`.

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- skill observability — .claude/skills/observability/SKILL.md:147

## Concepts named — required, verbatim
- `Prometheus Recording Rules` — .claude/skills/observability/references/prometheus-recording-rules.md:7 — defined here
- `PromQL` — .claude/skills/observability/references/prometheus-recording-rules.md:9 — used here
- `Recording rule` — .claude/skills/observability/references/prometheus-recording-rules.md:13 — defined here
- `Infrastructure Dimensions` — .claude/skills/observability/references/prometheus-recording-rules.md:17 — defined here
- `instance_type` — .claude/skills/observability/references/prometheus-recording-rules.md:21 — used here
- `cpu_arch` — .claude/skills/observability/references/prometheus-recording-rules.md:22 — used here
- `CPU Throttling Ratio` — .claude/skills/observability/references/prometheus-recording-rules.md:28 — defined here
- `container:cpu_throttle_ratio` — .claude/skills/observability/references/prometheus-recording-rules.md:31 — defined here
- `Disk I/O Latency` — .claude/skills/observability/references/prometheus-recording-rules.md:42 — defined here
- `node:disk_read_latency_seconds` — .claude/skills/observability/references/prometheus-recording-rules.md:45 — defined here
- `node:disk_write_latency_seconds` — .claude/skills/observability/references/prometheus-recording-rules.md:50 — defined here
- `Normalized Load Average` — .claude/skills/observability/references/prometheus-recording-rules.md:56 — defined here
- `node:load_average_scaled` — .claude/skills/observability/references/prometheus-recording-rules.md:59 — defined here
- `Pressure Stall (PSI) Rates` — .claude/skills/observability/references/prometheus-recording-rules.md:67 — defined here
- `node:cpu_stall_rate` — .claude/skills/observability/references/prometheus-recording-rules.md:70 — defined here
- `node:memory_stall_rate` — .claude/skills/observability/references/prometheus-recording-rules.md:73 — defined here
- `node:io_stall_rate` — .claude/skills/observability/references/prometheus-recording-rules.md:76 — defined here
- `TCP Retransmission Ratio` — .claude/skills/observability/references/prometheus-recording-rules.md:82 — defined here
- `node:tcp_retransmissions_scaled` — .claude/skills/observability/references/prometheus-recording-rules.md:85 — defined here
- `Range Vector Window` — .claude/skills/observability/references/prometheus-recording-rules.md:93 — defined here
- `scrape interval` — .claude/skills/observability/references/prometheus-recording-rules.md:95 — used here
- `Troubleshooting` — .claude/skills/observability/references/prometheus-recording-rules.md:101 — defined here
- `Onboarding Checklist` — .claude/skills/observability/references/prometheus-recording-rules.md:110 — defined here

## Structure
# Prometheus Recording Rules — .claude/skills/observability/references/prometheus-recording-rules.md:7
## Core Pattern — .claude/skills/observability/references/prometheus-recording-rules.md:11
## Infrastructure Dimensions — .claude/skills/observability/references/prometheus-recording-rules.md:17
## Key Recording Rules — .claude/skills/observability/references/prometheus-recording-rules.md:26
### CPU Throttling Ratio — .claude/skills/observability/references/prometheus-recording-rules.md:28
### Disk I/O Latency — .claude/skills/observability/references/prometheus-recording-rules.md:42
### Normalized Load Average — .claude/skills/observability/references/prometheus-recording-rules.md:56
### Pressure Stall (PSI) Rates — .claude/skills/observability/references/prometheus-recording-rules.md:67
### TCP Retransmission Ratio — .claude/skills/observability/references/prometheus-recording-rules.md:82
## Range Vector Window: Why 5m? — .claude/skills/observability/references/prometheus-recording-rules.md:93
## Troubleshooting — .claude/skills/observability/references/prometheus-recording-rules.md:101
## Onboarding Checklist — .claude/skills/observability/references/prometheus-recording-rules.md:110

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Formulates rule `window = max(5m, 4 * scrape_interval)` to prevent scrape jitter and counter reset artifacts, with special consideration (7-10m) for coarser scrape intervals on disk latency and retransmissions.

## Context cost
3493 bytes, ~870 tokens.
