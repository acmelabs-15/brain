---
package: rjm
path: templates/agents/devops.shared.md
type: agent
bytes: 8552
unit: inv-rjm-315
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: templates/agents/devops.shared.md, sha256: 42dd58d44d630513772f17edd4be65b8fb318f99c9ca47335f2a80c12e7ccb1f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# templates/agents/devops.shared.md

## Purpose — required, verbatim
> "DevOps specialist fluent in CI/CD pipelines, build automation, and deployment workflows. Thinks in reliability, security, and developer experience. Designs GitHub Actions, configures build systems, manages secrets. Use for pipeline configuration, infrastructure automation, and anything involving environments, artifacts, caching, or runners." — templates/agents/devops.shared.md:3

## Design intent — required
An infrastructure automation and CI/CD specialist responsible for designing, configuring, and maintaining robust build, test, and deployment pipelines across GitHub Actions and Azure Pipelines. It operates in dual operational modes: proactive impact analysis during the planning phase (generating structured impact deliverables for `milestone-planner`) and pipeline engineering (enforcing action pinning to commit SHAs, dependency caching, CI build flags, and test categorization). Without it, pipeline definitions lack security hardening, build performance degrades through unpinned or uncached steps, and infrastructure impacts are overlooked during initial milestone planning.

## Phase — required
rjm:ship

## Inputs — required
- CI/CD workflow, pipeline, or infrastructure task description provided via `argument-hint` ("Describe the CI/CD workflow, pipeline, or infrastructure task") — templates/agents/devops.shared.md:4.
- Impact analysis request from `milestone-planner` during planning phase — templates/agents/devops.shared.md:54,58.
- Build and test configurations (e.g. `Qwiq.sln`, MSBuild flags, test category filters) — templates/agents/devops.shared.md:207,218.
- Historical patterns and memories searched via Memory Router or Serena — templates/agents/devops.shared.md:176,187.

## Outputs — required
- Impact analysis deliverable saved to `.agents/planning/impact-analysis-devops-[feature].md` — templates/agents/devops.shared.md:72.
- Infrastructure documentation saved to `.agents/devops/` — templates/agents/devops.shared.md:53,224.
- GitHub Actions workflow definitions and CI configuration files — templates/agents/devops.shared.md:49,194.
- Learned pattern notes stored in memory — templates/agents/devops.shared.md:183.

## Invokes — required
- agent implementer — templates/agents/devops.shared.md:269
- agent qa — templates/agents/devops.shared.md:270
- agent architect — templates/agents/devops.shared.md:271
- agent security — templates/agents/devops.shared.md:272
- agent milestone-planner — templates/agents/devops.shared.md:54
- script search_memory.py — templates/agents/devops.shared.md:176

## Invoked by — required
- agent devops — docs/agent-catalog.md:25
- agent devops — templates/agents/orchestrator.shared.md:99
- agent devops — templates/agents/security.shared.md:742
- agent devops — templates/AGENTS.md:175

## Concepts named — required, verbatim
- `executor` — templates/agents/devops.shared.md:2 — used here
- `DevOps Agent` — templates/agents/devops.shared.md:15 — defined here
- `Core Identity` — templates/agents/devops.shared.md:17 — defined here
- `DevOps Specialist` — templates/agents/devops.shared.md:19 — defined here
- `Activation Profile` — templates/agents/devops.shared.md:21 — defined here
- `Core Mission` — templates/agents/devops.shared.md:27 — defined here
- `Style Guide Compliance` — templates/agents/devops.shared.md:31 — defined here
- `Key Responsibilities` — templates/agents/devops.shared.md:47 — defined here
- `Impact Analysis Mode` — templates/agents/devops.shared.md:56 — defined here
- `Analyze DevOps Impact` — templates/agents/devops.shared.md:60 — defined here
- `Impact Analysis Deliverable` — templates/agents/devops.shared.md:70 — defined here
- `Memory Protocol` — templates/agents/devops.shared.md:169 — defined here
- `Pipeline Standards` — templates/agents/devops.shared.md:189 — defined here
- `GitHub Actions Best Practices` — templates/agents/devops.shared.md:191 — defined here
- `Build Configuration` — templates/agents/devops.shared.md:203 — defined here
- `Test Configuration` — templates/agents/devops.shared.md:214 — defined here
- `Infrastructure Documentation Format` — templates/agents/devops.shared.md:222 — defined here
- `Pipeline Documentation` — templates/agents/devops.shared.md:226 — defined here
- `Handoff Protocol` — templates/agents/devops.shared.md:255 — defined here
- `Handoff Options` — templates/agents/devops.shared.md:265 — defined here
- `implementer` — templates/agents/devops.shared.md:269 — used here
- `qa` — templates/agents/devops.shared.md:270 — used here
- `architect` — templates/agents/devops.shared.md:271 — used here
- `security` — templates/agents/devops.shared.md:272 — used here
- `Execution Mindset` — templates/agents/devops.shared.md:274 — defined here

## Structure
- # DevOps Agent — templates/agents/devops.shared.md:15
- ## Core Identity — templates/agents/devops.shared.md:17
- ## Activation Profile — templates/agents/devops.shared.md:21
- ## Core Mission — templates/agents/devops.shared.md:27
- ## Style Guide Compliance — templates/agents/devops.shared.md:31
- ## Key Responsibilities — templates/agents/devops.shared.md:47
- ## Impact Analysis Mode — templates/agents/devops.shared.md:56
- ### Analyze DevOps Impact — templates/agents/devops.shared.md:60
- ### Impact Analysis Deliverable — templates/agents/devops.shared.md:70
- ## Memory Protocol — templates/agents/devops.shared.md:169
- ## Pipeline Standards — templates/agents/devops.shared.md:189
- ### GitHub Actions Best Practices — templates/agents/devops.shared.md:191
- ### Build Configuration — templates/agents/devops.shared.md:203
- ### Test Configuration — templates/agents/devops.shared.md:214
- ## Infrastructure Documentation Format — templates/agents/devops.shared.md:222
- ### Pipeline Documentation — templates/agents/devops.shared.md:226
- ## Handoff Protocol — templates/agents/devops.shared.md:255
- ## Handoff Options (Recommendations for Orchestrator) — templates/agents/devops.shared.md:265
- ## Execution Mindset — templates/agents/devops.shared.md:274

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Unique unshared agent: Unlike other template agents, `devops.shared.md` has no corresponding `.claude/agents/devops.md` counterpart in `.claude/agents/` and appears solely in `templates/agents/`.
- Impact analysis role in planning: Extends beyond deployment automation to provide structured infrastructure impact analyses for `milestone-planner` before implementation starts.
- Pinning and caching rigor: Embeds explicit GitHub Actions security best practices (pinning actions to commit SHA) and CI build performance optimizations.

## Context cost
8552 bytes (approx. 2138 tokens).
