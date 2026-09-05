---
package: rjm
path: .claude/agents/devops.md
type: agent
bytes: 15590
unit: inv-rjm-66
in_scope_via: .agents/AGENT-SYSTEM.md
aliases: []
memo_inputs:
  - {path: .claude/agents/devops.md, sha256: 8dc48d7779930048a9825e98331e249ec727f2291767402e0f3b17a61ad8029f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/agents/devops.md

## Purpose — required, verbatim
> "DevOps specialist fluent in CI/CD pipelines, build automation, and deployment workflows. Thinks in reliability, security, and developer experience. Designs GitHub Actions, configures build systems, manages secrets. Use for pipeline configuration, infrastructure automation, and anything involving environments, artifacts, caching, or runners." — .claude/agents/devops.md:3

## Design intent — required
Continuous integration, build automation, and deployment workflow specialist that enforces infrastructure reliability, pipeline security, and developer velocity. It standardizes GitHub Actions workflows (version pinning to commit SHAs, dependency caching, matrix builds), defines 12-factor CI/CD compliance, establishes rigorous build time targets and coverage thresholds, and provides local CI simulation scripts to catch environment defects, secret leaks, and exit-code failures prior to PR submission.

## Phase — required
rjm:build

## Inputs — required
- CI/CD workflow, pipeline, or infrastructure tasks described via `argument-hint` ("Describe the CI/CD workflow, pipeline, or infrastructure task") or orchestrator summon.
- Pipeline impact analysis requests from `milestone-planner` during planning phase.
- Codebase configurations and scripts inspected via `Read`, `Grep`, `Glob`, and `Bash` tools.
- Existing patterns retrieved via Memory Router (`uv run python .claude/skills/memory/scripts/search_memory.py --query "devops patterns [pipeline/infrastructure]"`).
- Local environment variables (`$env:CI`, `$env:GITHUB_ACTIONS`, `$env:GITHUB_REF_PROTECTED`).

## Outputs — required
- GitHub Actions workflow files and Azure Pipelines configurations.
- DevOps impact analysis reports saved to `.agents/planning/impact-analysis-devops-[feature].md`.
- Infrastructure documentation saved to `.agents/devops/` (pipeline specs, triggers, jobs, runners, secrets, known issues).
- Local CI simulation validation reports saved to `.agents/devops/ci-validation-[date].md`.
- Learned DevOps patterns persisted to Serena memory (`mcp__serena__write_memory` under `pattern-devops-[topic]`).

## Invokes — required
- script .claude/skills/memory/scripts/search_memory.py — .claude/agents/devops.md:31
- agent milestone-planner — .claude/agents/devops.md:80
- agent implementer — .claude/agents/devops.md:510
- agent qa — .claude/agents/devops.md:511
- agent architect — .claude/agents/devops.md:512
- agent security — .claude/agents/devops.md:513

## Invoked by — required
- agent devops — .agents/AGENT-SYSTEM.md:236
- agent devops — README.md:405
- doc devops — docs/agent-catalog.md:25
- agent devops — src/claude/orchestrator.md:88

## Concepts named — required, verbatim
- `DevOps Specialist` — .claude/agents/devops.md:13 — defined here
- `Memory Router` — .claude/agents/devops.md:30 — used here
- `ADR-037` — .claude/agents/devops.md:30 — used here
- `Impact Analysis Mode` — .claude/agents/devops.md:82 — defined here
- `Memory Protocol` — .claude/agents/devops.md:195 — defined here
- `12-Factor App Principles for CI/CD` — .claude/agents/devops.md:215 — defined here
- `Pipeline Metrics` — .claude/agents/devops.md:234 — defined here
- `Build Time Targets` — .claude/agents/devops.md:238 — defined here
- `Coverage Thresholds` — .claude/agents/devops.md:249 — defined here
- `Deployment Frequency Goals` — .claude/agents/devops.md:257 — defined here
- `Pipeline Health Indicators` — .claude/agents/devops.md:265 — defined here
- `Pipeline Standards` — .claude/agents/devops.md:274 — defined here
- `Local CI Simulation` — .claude/agents/devops.md:307 — defined here
- `CI Environment Setup` — .claude/agents/devops.md:311 — defined here
- `Protected Branch Simulation` — .claude/agents/devops.md:349 — defined here
- `Environment Variable Leak Detection` — .claude/agents/devops.md:365 — defined here
- `Fail-Safe Testing` — .claude/agents/devops.md:383 — defined here
- `Pre-PR CI Validation Checklist` — .claude/agents/devops.md:406 — defined here
- `CI Validation Report Template` — .claude/agents/devops.md:423 — defined here
- `Infrastructure Documentation Format` — .claude/agents/devops.md:463 — defined here
- `Handoff Protocol` — .claude/agents/devops.md:496 — defined here
- `Handoff Options` — .claude/agents/devops.md:506 — defined here
- `Execution Mindset` — .claude/agents/devops.md:515 — defined here

## Structure
- # DevOps Agent — .claude/agents/devops.md:9
- ## Core Identity — .claude/agents/devops.md:11
- ## Activation Profile — .claude/agents/devops.md:15
- ## Claude Code Tools — .claude/agents/devops.md:21
- ## Script Language Priority — .claude/agents/devops.md:37
- ## Core Mission — .claude/agents/devops.md:52
- ## Style Guide Compliance — .claude/agents/devops.md:56
- ## Key Responsibilities — .claude/agents/devops.md:73
- ## Impact Analysis Mode — .claude/agents/devops.md:82
- ### Analyze DevOps Impact — .claude/agents/devops.md:86
- ### Impact Analysis Deliverable — .claude/agents/devops.md:96
- ## Memory Protocol — .claude/agents/devops.md:195
- ## 12-Factor App Principles for CI/CD — .claude/agents/devops.md:215
- ## Pipeline Metrics — .claude/agents/devops.md:234
- ### Build Time Targets — .claude/agents/devops.md:238
- ### Coverage Thresholds — .claude/agents/devops.md:249
- ### Deployment Frequency Goals — .claude/agents/devops.md:257
- ### Pipeline Health Indicators — .claude/agents/devops.md:265
- ## Pipeline Standards — .claude/agents/devops.md:274
- ### GitHub Actions Best Practices — .claude/agents/devops.md:276
- ### Build Configuration — .claude/agents/devops.md:288
- ### Test Configuration — .claude/agents/devops.md:299
- ## Local CI Simulation — .claude/agents/devops.md:307
- ### CI Environment Setup — .claude/agents/devops.md:311
- ### Protected Branch Simulation — .claude/agents/devops.md:349
- ### Environment Variable Leak Detection — .claude/agents/devops.md:365
- ### Fail-Safe Testing — .claude/agents/devops.md:383
- ### Pre-PR CI Validation Checklist — .claude/agents/devops.md:406
- ### CI Validation Report Template — .claude/agents/devops.md:423
- ## Infrastructure Documentation Format — .claude/agents/devops.md:463
- ### Pipeline Documentation — .claude/agents/devops.md:467
- ## Handoff Protocol — .claude/agents/devops.md:496
- ## Handoff Options (Recommendations for Orchestrator) — .claude/agents/devops.md:506
- ## Execution Mindset — .claude/agents/devops.md:515

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- missing-path · .claude/agents/devops.md:31 · references memory script .claude/skills/memory/scripts/search_memory.py which does not exist in the repository (exists under src/copilot-cli/skills/memory/scripts/search_memory.py; also at line 202).

## Observations
- Rigorous CI/CD engineering standards: incorporates 12-Factor App methodology for CI/CD pipelines, establishes quantitative build-time targets (<10m total) and coverage thresholds (70% line, 60% branch, 80% method), and provides local CI simulation scripts for PowerShell and Bash.
- Two-tier memory protocol: couples ADR-037 Memory Router for pattern search with Serena MCP tools for persistence.
- Dual-role lifecycle presence: acts as an execution agent during build/pipeline implementation and as a specialized planning collaborator via Impact Analysis Mode for milestone-planner.

## Context cost
15590 bytes (approx. 3898 tokens).
