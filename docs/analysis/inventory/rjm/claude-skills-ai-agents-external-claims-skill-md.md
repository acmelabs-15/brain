---
package: rjm
path: .claude/skills/ai-agents-external-claims/SKILL.md
type: skill
bytes: 11954
unit: inv-rjm-84
in_scope_via: scripts/validation/skill_md_portability_baseline.json
aliases: []
memo_inputs:
  - {path: .claude/skills/ai-agents-external-claims/SKILL.md, sha256: a5deab77d49fe51939c19fe4e1fa3000e57e5cef65daa4ae93aea491c560c9ea}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/ai-agents-external-claims/SKILL.md

## Purpose — required, verbatim
> "Verify external, vendor, and third-party claims (numbers, attributions, structure) against authoritative primary sources before they land in a repo artifact or external deliverable." — .claude/skills/ai-agents-external-claims/SKILL.md:5

## Design intent — required
Addresses the risk of unverified external claims, vendor marketing assertions, rhetorical rounding ("over 1000"), second-hand attributions, or drifting citation chains corrupting durable repository artifacts (ADRs, retrospectives, memories, PR descriptions, and session logs). Without it, external numbers enter the repository unchecked, and contributors fall into the "Reporting Without Acting" anti-pattern by shipping conditional TODO caveats disguised as findings rather than either fetching primary sources or filing conservative statements.

## Phase — required
cross-phase

## Inputs — required
- External, vendor, and third-party assertions, statistics, benchmarks, star/download counts, attributions, and citations about to enter durable artifacts.
- Authoritative primary sources (repository host pages, package registry APIs, research papers, dataset cards, run artifacts, vendor reference documentation at pinned versions, named party's published statements, canonical repo files).
- Trigger prompts:
  `verify an external claim` — .claude/skills/ai-agents-external-claims/SKILL.md:19
  `check a vendor number` — .claude/skills/ai-agents-external-claims/SKILL.md:20
  `is this stat real` — .claude/skills/ai-agents-external-claims/SKILL.md:21
  `validate a third-party citation` — .claude/skills/ai-agents-external-claims/SKILL.md:22

## Outputs — required
- Verified claims with inline primary source citations (recording source, fetch timestamp, version/commit).
- Conservative formulations with unverified numbers or attributions removed (with no unrun verification paths named as caveats).
- Disclosed stake assessments for vendor or self-promotional claims.

## Invokes — required
- skill ai-agents-research-methodology — .claude/skills/ai-agents-external-claims/SKILL.md:5
- skill security-scan — .claude/skills/ai-agents-external-claims/SKILL.md:5
- skill ai-agents-validation-and-qa — .claude/skills/ai-agents-external-claims/SKILL.md:15
- skill avoiding-manufactured-work — .claude/skills/ai-agents-external-claims/SKILL.md:31
- skill front-gate-before-pipeline — .claude/skills/ai-agents-external-claims/SKILL.md:32
- skill ai-agents-empirical-probe-toolkit — .claude/skills/ai-agents-external-claims/SKILL.md:60
- doc .claude/rules/canonical-source-mirror.md — .claude/skills/ai-agents-external-claims/SKILL.md:67
- doc .claude/rules/voice.md — .claude/skills/ai-agents-external-claims/SKILL.md:79
- skill agent-harness-reference — .claude/skills/ai-agents-external-claims/SKILL.md:116
- doc .agents/governance/FAILURE-MODES.md — .claude/skills/ai-agents-external-claims/SKILL.md:125

## Invoked by — required
- config scripts/validation/skill_md_portability_baseline.json — scripts/validation/skill_md_portability_baseline.json:136
- config scripts/validation/rule_activation_coverage_baseline.json — scripts/validation/rule_activation_coverage_baseline.json:36

## Concepts named — required, verbatim
- `round-number tells` — .claude/skills/ai-agents-external-claims/SKILL.md:5 — defined here
- `citation-chain drift` — .claude/skills/ai-agents-external-claims/SKILL.md:5 — defined here
- `walk-the-gate-or-file-conservative` — .claude/skills/ai-agents-external-claims/SKILL.md:5 — defined here
- `verification-based governance` — .claude/skills/ai-agents-external-claims/SKILL.md:11 — defined here
- `claim-verification-before-ingest` — .claude/skills/ai-agents-external-claims/SKILL.md:15 — used here
- `Numerical headline claim` — .claude/skills/ai-agents-external-claims/SKILL.md:38 — defined here
- `Named-authority attribution` — .claude/skills/ai-agents-external-claims/SKILL.md:39 — defined here
- `Stake-holding author` — .claude/skills/ai-agents-external-claims/SKILL.md:40 — defined here
- `Stat-of-a-stat chain` — .claude/skills/ai-agents-external-claims/SKILL.md:41 — defined here
- `Downstream commitment` — .claude/skills/ai-agents-external-claims/SKILL.md:42 — defined here
- `Primary source` — .claude/skills/ai-agents-external-claims/SKILL.md:50 — defined here
- `FM-9` — .claude/skills/ai-agents-external-claims/SKILL.md:67 — used here
- `Ownership: See Something, Say Something` — .claude/skills/ai-agents-external-claims/SKILL.md:79 — used here
- `Walk the gate` — .claude/skills/ai-agents-external-claims/SKILL.md:85 — defined here
- `File conservative` — .claude/skills/ai-agents-external-claims/SKILL.md:86 — defined here
- `Reporting Without Acting` — .claude/skills/ai-agents-external-claims/SKILL.md:88 — defined here
- `Round-number trust` — .claude/skills/ai-agents-external-claims/SKILL.md:97 — defined here
- `Summary as source` — .claude/skills/ai-agents-external-claims/SKILL.md:98 — defined here
- `Vendor doc as runtime truth` — .claude/skills/ai-agents-external-claims/SKILL.md:99 — defined here
- `Paraphrased repo cross-claim` — .claude/skills/ai-agents-external-claims/SKILL.md:100 — defined here
- `Naming a gate you did not walk` — .claude/skills/ai-agents-external-claims/SKILL.md:101 — defined here
- `Trusting a stake-holder's self-favorable stat` — .claude/skills/ai-agents-external-claims/SKILL.md:102 — defined here

## Structure
- `# ai-agents External Claims` — .claude/skills/ai-agents-external-claims/SKILL.md:8
- `## Triggers` — .claude/skills/ai-agents-external-claims/SKILL.md:17
- `## Scope Boundaries` — .claude/skills/ai-agents-external-claims/SKILL.md:24
- `## When This Skill Fires` — .claude/skills/ai-agents-external-claims/SKILL.md:34
- `## Process` — .claude/skills/ai-agents-external-claims/SKILL.md:46
- `### Phase 1: Identify the claim and its primary source` — .claude/skills/ai-agents-external-claims/SKILL.md:48
- `### Phase 2: Fetch and compare against the primary source` — .claude/skills/ai-agents-external-claims/SKILL.md:62
- `### Phase 3: Weigh the source's stake` — .claude/skills/ai-agents-external-claims/SKILL.md:71
- `### Phase 4: Walk the gate, or file conservative` — .claude/skills/ai-agents-external-claims/SKILL.md:81
- `## Anti-Patterns` — .claude/skills/ai-agents-external-claims/SKILL.md:93
- `## Verification` — .claude/skills/ai-agents-external-claims/SKILL.md:104
- `## Provenance` — .claude/skills/ai-agents-external-claims/SKILL.md:114

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- missing-path · .claude/skills/ai-agents-external-claims/SKILL.md:32 · references skill `front-gate-before-pipeline` in Scope Boundaries table, but no such skill directory or file exists in the repository.

## Observations
- Strong conceptual alignment with brain's evidence rules: establishes that vendor documentation alone is not authoritative for runtime behavior (citing retros #2205 and #2290), requiring empirical probes instead.
- Formalizes the "walk the gate, or file conservative" discipline to eliminate conditional caveats ("would be X if Y") that disguise unrun work as findings.
- Direct lineage from gstack `claim-verification-before-ingest` pattern (.claude/skills/ai-agents-external-claims/SKILL.md:15).

## Context cost
11954 bytes for SKILL.md (~2988 tokens). Compact knowledge-pack skill that loads no bundled scripts.
