---
package: rjm
path: .claude/skills/chaos-experiment/references/chaos-engineering-principles.md
type: reference
bytes: 2454
unit: inv-rjm-98
in_scope_via: .claude/skills/review/references/reliability.md
aliases: []
memo_inputs:
  - {path: .claude/skills/chaos-experiment/references/chaos-engineering-principles.md, sha256: 349f7d0a141a8b6b34a2318666baf0e1f662f08d57d3f139ed50ceba80ecd581}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/chaos-experiment/references/chaos-engineering-principles.md

## Purpose — required, verbatim
> "Build confidence in system resilience by introducing controlled failures in production." — .claude/skills/chaos-experiment/references/chaos-engineering-principles.md:9

## Design intent — required
Provides the theoretical foundation and operational principles for conducting chaos engineering within the repository's lifecycle workflows. Defines the five-step experimental process (define steady state, hypothesize, introduce variables, observe, learn), categorizes standard failure injection scenarios, identifies critical prerequisites and anti-patterns, and outlines blast radius containment strategies aligned with SRE practices (SLOs, error budgets, observability, and runbooks).

## Phase — required
cross-phase

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- reference .claude/skills/chaos-experiment/SKILL.md:341

## Concepts named — required, verbatim
- `Chaos Engineering Principles` — .claude/skills/chaos-experiment/references/chaos-engineering-principles.md:7 — defined here
- `Define steady state` — .claude/skills/chaos-experiment/references/chaos-engineering-principles.md:13 — defined here
- `Hypothesize` — .claude/skills/chaos-experiment/references/chaos-engineering-principles.md:14 — defined here
- `Introduce variables` — .claude/skills/chaos-experiment/references/chaos-engineering-principles.md:15 — defined here
- `Observe` — .claude/skills/chaos-experiment/references/chaos-engineering-principles.md:16 — defined here
- `Learn` — .claude/skills/chaos-experiment/references/chaos-engineering-principles.md:17 — defined here
- `Instance failure` — .claude/skills/chaos-experiment/references/chaos-engineering-principles.md:23 — used here
- `Network` — .claude/skills/chaos-experiment/references/chaos-engineering-principles.md:24 — used here
- `Resource exhaustion` — .claude/skills/chaos-experiment/references/chaos-engineering-principles.md:25 — used here
- `Dependency` — .claude/skills/chaos-experiment/references/chaos-engineering-principles.md:26 — used here
- `Region` — .claude/skills/chaos-experiment/references/chaos-engineering-principles.md:27 — used here
- `Blast Radius Containment` — .claude/skills/chaos-experiment/references/chaos-engineering-principles.md:47 — defined here
- `canary deployment` — .claude/skills/chaos-experiment/references/chaos-engineering-principles.md:50 — used here
- `automatic abort criteria` — .claude/skills/chaos-experiment/references/chaos-engineering-principles.md:51 — used here
- `SLOs` — .claude/skills/chaos-experiment/references/chaos-engineering-principles.md:57 — used here
- `Error budgets` — .claude/skills/chaos-experiment/references/chaos-engineering-principles.md:58 — used here
- `Observability` — .claude/skills/chaos-experiment/references/chaos-engineering-principles.md:59 — used here
- `Incident response` — .claude/skills/chaos-experiment/references/chaos-engineering-principles.md:60 — used here

## Structure
- # Chaos Engineering Principles — .claude/skills/chaos-experiment/references/chaos-engineering-principles.md:7
- ## Process — .claude/skills/chaos-experiment/references/chaos-engineering-principles.md:11
- ## Common Experiments — .claude/skills/chaos-experiment/references/chaos-engineering-principles.md:19
- ## Prerequisites — .claude/skills/chaos-experiment/references/chaos-engineering-principles.md:29
- ## Anti-Patterns — .claude/skills/chaos-experiment/references/chaos-engineering-principles.md:36
- ## Blast Radius Containment — .claude/skills/chaos-experiment/references/chaos-engineering-principles.md:47
- ## Relationship to SRE Practices — .claude/skills/chaos-experiment/references/chaos-engineering-principles.md:55

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `missing-path` · .claude/skills/chaos-experiment/references/chaos-engineering-principles.md:2 · Frontmatter declares `source: wiki/concepts/Reliability/Chaos Engineering.md` which does not exist in the repository.

## Observations
- Summarizes the core philosophy of chaos engineering adapted for autonomous and human-guided resilience testing, with explicit emphasis on production experimentation ("Testing only in staging" is cited as an anti-pattern at line 44).
- Closely parallels SRE literature on error budgets and blast radius containment; directly complements `slo-sli-sla-reference.md` and the `slo-designer` skill.

## Context cost
2454 bytes. Approximately 600 tokens.
