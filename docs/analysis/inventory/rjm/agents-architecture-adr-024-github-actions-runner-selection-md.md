---
package: rjm
path: .agents/architecture/ADR-024-github-actions-runner-selection.md
type: agent
bytes: 8418
unit: inv-rjm-10
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .agents/architecture/ADR-024-github-actions-runner-selection.md, sha256: c14e8a1d3bc9a4b97a8f5ebea77d7818f534b2394531bfed8436279d464f7def}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .agents/architecture/ADR-024-github-actions-runner-selection.md

## Purpose — required, verbatim
> "**All GitHub Actions workflows MUST use `ubuntu-24.04-arm` runners unless documented ARM compatibility issues exist.**" — .agents/architecture/ADR-024-github-actions-runner-selection.md:80

## Design intent — required
Establishes a mandatory runner selection policy standardizing GitHub Actions workflows on `ubuntu-24.04-arm` runners to capture a 37.5% cost reduction ($0.008 to $0.005/min) while improving build performance, power efficiency, and native ARM architecture alignment. Requires an explicit compliance comment format (`# ADR-024:`) on all runner declarations, and formal exception documentation (`# ADR-024 Exception:`) linked to tracking issues for non-ARM workloads (e.g. Windows or x64-only dependencies). Formally superseded by ADR-055, which updates the standing runner selection policy and migrates the exception marker to `# ADR-055 Exception:`.

## Phase — required
none

## Inputs — required
GitHub Actions hosted runner pricing structures ($0.008/min x64 vs $0.005/min ARM vs $0.016/min Windows), repository CI consumption patterns, multi-arch build requirements, and toolchain ARM64 compatibility evaluations.

## Outputs — required
Runner selection policy, standardized workflow compliance comment format, exception procedure for x64/Windows jobs, and a 5-step workflow migration checklist.

## Invokes — required
- doc ADR-055 — .agents/architecture/ADR-024-github-actions-runner-selection.md:18
- doc ADR-006 — .agents/architecture/ADR-024-github-actions-runner-selection.md:212
- doc ADR-005 — .agents/architecture/ADR-024-github-actions-runner-selection.md:213

## Invoked by — required
- doc .agents/architecture/README.md — .agents/architecture/README.md:200

## Concepts named — required, verbatim
- `ARM runners` — .agents/architecture/ADR-024-github-actions-runner-selection.md:24 — used here
- `ubuntu-latest` — .agents/architecture/ADR-024-github-actions-runner-selection.md:74 — used here
- `ubuntu-24.04-arm` — .agents/architecture/ADR-024-github-actions-runner-selection.md:75 — defined here
- `windows-latest` — .agents/architecture/ADR-024-github-actions-runner-selection.md:76 — used here
- `Runner Selection Policy` — .agents/architecture/ADR-024-github-actions-runner-selection.md:82 — defined here
- `Compliance Comment Format` — .agents/architecture/ADR-024-github-actions-runner-selection.md:88 — defined here
- `ADR-024 Exception` — .agents/architecture/ADR-024-github-actions-runner-selection.md:104 — defined here
- `compliance comment` — .agents/architecture/ADR-024-github-actions-runner-selection.md:183 — defined here
- `Rollback Plan` — .agents/architecture/ADR-024-github-actions-runner-selection.md:193 — defined here

## Structure
- # ADR-024: GitHub Actions Runner Selection — .agents/architecture/ADR-024-github-actions-runner-selection.md:12
- ## Provenance — .agents/architecture/ADR-024-github-actions-runner-selection.md:14
- ## Context — .agents/architecture/ADR-024-github-actions-runner-selection.md:22
- ### Current State — .agents/architecture/ADR-024-github-actions-runner-selection.md:26
- ### Benefits of ARM Runners — .agents/architecture/ADR-024-github-actions-runner-selection.md:30
- ### Runner Pricing (Public Repositories) — .agents/architecture/ADR-024-github-actions-runner-selection.md:70
- ## Decision — .agents/architecture/ADR-024-github-actions-runner-selection.md:78
- ### Runner Selection Policy — .agents/architecture/ADR-024-github-actions-runner-selection.md:82
- ### Compliance Comment Format — .agents/architecture/ADR-024-github-actions-runner-selection.md:88
- ## Rationale — .agents/architecture/ADR-024-github-actions-runner-selection.md:119
- ### Cost Optimization — .agents/architecture/ADR-024-github-actions-runner-selection.md:121
- ### ARM Compatibility — .agents/architecture/ADR-024-github-actions-runner-selection.md:127
- ### Alternatives Considered — .agents/architecture/ADR-024-github-actions-runner-selection.md:137
- ### Trade-offs — .agents/architecture/ADR-024-github-actions-runner-selection.md:145
- ## Consequences — .agents/architecture/ADR-024-github-actions-runner-selection.md:155
- ### Positive — .agents/architecture/ADR-024-github-actions-runner-selection.md:157
- ### Negative — .agents/architecture/ADR-024-github-actions-runner-selection.md:164
- ### Neutral — .agents/architecture/ADR-024-github-actions-runner-selection.md:170
- ## Implementation Notes — .agents/architecture/ADR-024-github-actions-runner-selection.md:175
- ### Migration Checklist — .agents/architecture/ADR-024-github-actions-runner-selection.md:177
- ### Testing Strategy — .agents/architecture/ADR-024-github-actions-runner-selection.md:187
- ### Rollback Plan — .agents/architecture/ADR-024-github-actions-runner-selection.md:193
- ### Documentation Requirements — .agents/architecture/ADR-024-github-actions-runner-selection.md:201
- ## Related Decisions — .agents/architecture/ADR-024-github-actions-runner-selection.md:210
- ## References — .agents/architecture/ADR-024-github-actions-runner-selection.md:215

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Illustrates rjm's rigorous provenance tracking: documents that this decision was accepted in PR #224 as ADR-014, renumbered to ADR-024 in PR #476, and subsequently superseded by ADR-055. Records the retirement of the `# ADR-024 Exception:` marker in workflow files.

## Context cost
8418 bytes, ~2100 tokens. Loads no external files.
