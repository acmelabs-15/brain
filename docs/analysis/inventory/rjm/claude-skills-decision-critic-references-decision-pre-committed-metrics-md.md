---
package: rjm
path: .claude/skills/decision-critic/references/decision-pre-committed-metrics.md
type: reference
bytes: 4403
unit: inv-rjm-114
in_scope_via: .claude/skills/decision-critic/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/decision-critic/references/decision-pre-committed-metrics.md, sha256: 63254480cf2921d4c45857646e7af6cfe4379fb03cef1afe4cd2c8378013b495}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/decision-critic/references/decision-pre-committed-metrics.md

## Purpose — required, verbatim
> "The metric that proves a strategy worked must be agreed on before the strategy" — .claude/skills/decision-critic/references/decision-pre-committed-metrics.md:11

## Design intent — required
Eliminates post-hoc rationalization in decision making by requiring success metrics, numeric thresholds, consequences, and calendar forcing functions to be agreed upon in advance. Without pre-commitment, teams retroactively cherry-pick favorable indicators to justify decisions after results arrive. This reference brings together practices from Lean Startup (innovation accounting), OKRs (committed vs aspirational), and Toyota Lean operations (andon cord triggers) to force binding, mechanical evaluation of PRs, specs, and architectural decisions.

## Phase — required
cross-phase

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- reference decision-rigor.md — .claude/skills/review/references/decision-rigor.md:54
- reference decision-rigor.md — src/copilot-cli/skills/review/references/decision-rigor.md:54

## Concepts named — required, verbatim
- `Pre-Committed Metrics Force Honest Evaluation` — .claude/skills/decision-critic/references/decision-pre-committed-metrics.md:7 — defined here
- `Lean Startup` — .claude/skills/decision-critic/references/decision-pre-committed-metrics.md:21 — used here
- `Innovation Accounting` — .claude/skills/decision-critic/references/decision-pre-committed-metrics.md:21 — used here
- `OKRs` — .claude/skills/decision-critic/references/decision-pre-committed-metrics.md:22 — used here
- `Toyota / Lean Operations` — .claude/skills/decision-critic/references/decision-pre-committed-metrics.md:23 — used here
- `andon-cord` — .claude/skills/decision-critic/references/decision-pre-committed-metrics.md:23 — used here
- `informational metrics` — .claude/skills/decision-critic/references/decision-pre-committed-metrics.md:47 — defined here
- `decision metrics` — .claude/skills/decision-critic/references/decision-pre-committed-metrics.md:47 — defined here
- `forcing function` — .claude/skills/decision-critic/references/decision-pre-committed-metrics.md:50 — used here
- `Challenge` — .claude/skills/decision-critic/references/decision-pre-committed-metrics.md:68 — used here
- `Survivorship bias` — .claude/skills/decision-critic/references/decision-pre-committed-metrics.md:90 — used here
- `Pre-mortem` — .claude/skills/decision-critic/references/decision-pre-committed-metrics.md:92 — used here

## Structure
- `# Pre-Committed Metrics Force Honest Evaluation` — .claude/skills/decision-critic/references/decision-pre-committed-metrics.md:7
- `## Principle` — .claude/skills/decision-critic/references/decision-pre-committed-metrics.md:9
- `## The Three Instantiations` — .claude/skills/decision-critic/references/decision-pre-committed-metrics.md:15
- `## The Unifying Claim` — .claude/skills/decision-critic/references/decision-pre-committed-metrics.md:25
- `## Operating Consequences` — .claude/skills/decision-critic/references/decision-pre-committed-metrics.md:42
- `## Why This Lens Applies In PR Review` — .claude/skills/decision-critic/references/decision-pre-committed-metrics.md:56
- `## Decision Critic Application` — .claude/skills/decision-critic/references/decision-pre-committed-metrics.md:66
- `### Verification Questions` — .claude/skills/decision-critic/references/decision-pre-committed-metrics.md:71
- `### Red Flags In Decisions` — .claude/skills/decision-critic/references/decision-pre-committed-metrics.md:79
- `## Related Models` — .claude/skills/decision-critic/references/decision-pre-committed-metrics.md:88
- `## Source` — .claude/skills/decision-critic/references/decision-pre-committed-metrics.md:95

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `missing-path` · .claude/skills/decision-critic/references/decision-pre-committed-metrics.md:2 · Frontmatter source `wiki/concepts/Decision Making/Pre-Committed Metrics Force Honest Evaluation.md` does not exist in repository (`wiki/` directory is absent).
- `doc-drift` · .claude/skills/decision-critic/SKILL.md:98-108 · `.claude/skills/decision-critic/SKILL.md` omits `decision-pre-committed-metrics.md` from its list of reference files despite this file residing in its `references/` directory and containing an explicit "Decision Critic Application" section (lines 66-70).

## Observations
- Bridges three management traditions (Eric Ries's Innovation Accounting, John Doerr's OKRs, Toyota Lean Operations) into PR review and ADR evaluation (lines 15-24, 56-65).
- Highlights that dashboards with many numbers but no pre-committed thresholds are merely "decoration" (lines 47-49).

## Context cost
4403 bytes (~1101 tokens). Invokes nothing additional.
