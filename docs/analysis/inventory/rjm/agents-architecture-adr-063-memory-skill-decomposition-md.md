---
package: rjm
path: .agents/architecture/ADR-063-memory-skill-decomposition.md
type: agent
bytes: 18011
unit: inv-rjm-23
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .agents/architecture/ADR-063-memory-skill-decomposition.md, sha256: f2d854c1e297dcca3e517498ab92b225ec28b5b60baecaaba73b8d166e2606c1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .agents/architecture/ADR-063-memory-skill-decomposition.md

## Purpose — required, verbatim
> "Decompose the monolithic `memory` skill into focused sub-skills split by operation, keep `memory` as a thin router that delegates, and preserve the `memory` skill name so existing callers do not break." — .agents/architecture/ADR-063-memory-skill-decomposition.md:85-87

## Design intent — required
Decomposes the monolithic 143.6 KB `memory` skill—the largest in the catalog, violating the 8 KB skill size ceiling—into focused, single-operation sub-skills (search, episode extraction, causal-graph update, and memory-first gating) while retaining `memory` as a lightweight delegating router. Resolves the severe context tax paid by downstream consumers (such as `/spec` Step 0.5) when loading the complete 11-file reference suite for simple operations, while preserving backward compatibility, store abstractions (Serena and Forgetful), schema contracts (ADR-038), and standard output envelopes (ADR-056).

## Phase — required
none

## Inputs — required
Skill triage measurements from `.agents/analysis/skill-triage-2026-05-09.md` (finding F2: 143.6 KB footprint, +2.83 eval delta); triage action slate from `.agents/archive/plans/PLAN-skill-catalog-triage-action-slate.md` (Tier 2 DECOMPOSE row 6); existing architecture contracts: `ADR-007` (memory-first principles), `ADR-037` (router pattern), `ADR-038` (reflexion memory schema), `ADR-056` (skill output envelope), and `ADR-070` (memory-first gate in spec pipeline); monolithic memory skill and references: `.claude/skills/memory/SKILL.md` and `.claude/skills/memory/references/` (11 reference files totaling ~141 KB).

## Outputs — required
Architectural specification for issue #1948 / M3 authorizing the decomposition of the `memory` skill into 3 to 5 operation-focused sub-skills; definition of `memory` as a thin router with decision tree and When-to-Use matrix; reversibility and kill criteria evaluating eval-knowledge-integration and context regression post-M3.

## Invokes — required
- doc .claude/skills/memory/SKILL.md — .agents/architecture/ADR-063-memory-skill-decomposition.md:30
- doc .agents/analysis/skill-triage-2026-05-09.md — .agents/architecture/ADR-063-memory-skill-decomposition.md:35
- command .claude/commands/spec.md — .agents/architecture/ADR-063-memory-skill-decomposition.md:57
- doc ADR-007-memory-first-architecture.md — .agents/architecture/ADR-063-memory-skill-decomposition.md:61
- doc ADR-037-memory-router-architecture.md — .agents/architecture/ADR-063-memory-skill-decomposition.md:63
- doc ADR-038-reflexion-memory-schema.md — .agents/architecture/ADR-063-memory-skill-decomposition.md:65
- doc ADR-056-skill-output-format-standardization.md — .agents/architecture/ADR-063-memory-skill-decomposition.md:67
- doc .agents/archive/plans/PLAN-skill-catalog-triage-action-slate.md — .agents/architecture/ADR-063-memory-skill-decomposition.md:73
- doc ADR-070-memory-first-gate-spec-pipeline.md — .agents/architecture/ADR-063-memory-skill-decomposition.md:114
- doc .agents/critique/ADR-063-debate-log.md — .agents/architecture/ADR-063-memory-skill-decomposition.md:22
- doc AGENTS.md — .agents/architecture/ADR-063-memory-skill-decomposition.md:308
- doc .claude/rules/philosophy-of-software-design.md — .agents/architecture/ADR-063-memory-skill-decomposition.md:310
- doc .claude/skills/software-engineering-library/references/philosophy-of-software-design.md — .agents/architecture/ADR-063-memory-skill-decomposition.md:317
- doc src/copilot-cli/skills/memory/ — .agents/architecture/ADR-063-memory-skill-decomposition.md:258

## Invoked by — required
- doc .agents/architecture/README.md — .agents/architecture/README.md:133
- doc .agents/critique/ADR-063-debate-log.md — .agents/critique/ADR-063-debate-log.md:5

## Concepts named — required, verbatim
- `Decompose the Memory Skill Into Focused Sub-Skills` — .agents/architecture/ADR-063-memory-skill-decomposition.md:13 — defined here
- `four-tier memory` — .agents/architecture/ADR-063-memory-skill-decomposition.md:30 — used here
- `Semantic` — .agents/architecture/ADR-063-memory-skill-decomposition.md:31 — used here
- `Episodic` — .agents/architecture/ADR-063-memory-skill-decomposition.md:31 — used here
- `Causal` — .agents/architecture/ADR-063-memory-skill-decomposition.md:31 — used here
- `Memory-First Gate` — .agents/architecture/ADR-063-memory-skill-decomposition.md:32 — used here
- `progressive-disclosure architecture` — .agents/architecture/ADR-063-memory-skill-decomposition.md:48 — used here
- `router pattern` — .agents/architecture/ADR-063-memory-skill-decomposition.md:63 — used here
- `output envelope` — .agents/architecture/ADR-063-memory-skill-decomposition.md:123 — used here
- `Ask First` — .agents/architecture/ADR-063-memory-skill-decomposition.md:76 — used here
- `ADR Review` — .agents/architecture/ADR-063-memory-skill-decomposition.md:76 — used here
- `thin router` — .agents/architecture/ADR-063-memory-skill-decomposition.md:86 — defined here
- `Split by operation, not by tier` — .agents/architecture/ADR-063-memory-skill-decomposition.md:93 — defined here
- `When-to-Use matrix` — .agents/architecture/ADR-063-memory-skill-decomposition.md:103 — used here
- `No behavior change for callers` — .agents/architecture/ADR-063-memory-skill-decomposition.md:126 — defined here
- `deep-vs-shallow module` — .agents/architecture/ADR-063-memory-skill-decomposition.md:156 — used here
- `Reversibility and Kill Criteria` — .agents/architecture/ADR-063-memory-skill-decomposition.md:189 — defined here
- `Vendor Lock-In` — .agents/architecture/ADR-063-memory-skill-decomposition.md:214 — used here

## Structure
- # ADR-063: Decompose the Memory Skill Into Focused Sub-Skills — .agents/architecture/ADR-063-memory-skill-decomposition.md:13
- ## Status — .agents/architecture/ADR-063-memory-skill-decomposition.md:15
- ## Date — .agents/architecture/ADR-063-memory-skill-decomposition.md:24
- ## Context — .agents/architecture/ADR-063-memory-skill-decomposition.md:28
- ### What Currently Exists — .agents/architecture/ADR-063-memory-skill-decomposition.md:45
- ### Why Change Now — .agents/architecture/ADR-063-memory-skill-decomposition.md:70
- ## Decision — .agents/architecture/ADR-063-memory-skill-decomposition.md:83
- ## Prior Art Investigation — .agents/architecture/ADR-063-memory-skill-decomposition.md:132
- ## Rationale — .agents/architecture/ADR-063-memory-skill-decomposition.md:161
- ### Alternatives Considered — .agents/architecture/ADR-063-memory-skill-decomposition.md:163
- ### Trade-offs — .agents/architecture/ADR-063-memory-skill-decomposition.md:173
- ## Reversibility and Kill Criteria — .agents/architecture/ADR-063-memory-skill-decomposition.md:189
- ## Vendor Lock-In — .agents/architecture/ADR-063-memory-skill-decomposition.md:214
- ## Consequences — .agents/architecture/ADR-063-memory-skill-decomposition.md:224
- ### Positive — .agents/architecture/ADR-063-memory-skill-decomposition.md:226
- ### Negative — .agents/architecture/ADR-063-memory-skill-decomposition.md:235
- ### Neutral — .agents/architecture/ADR-063-memory-skill-decomposition.md:242
- ## Impact on Dependent Components — .agents/architecture/ADR-063-memory-skill-decomposition.md:251
- ## Implementation Notes — .agents/architecture/ADR-063-memory-skill-decomposition.md:262
- ## Related Decisions — .agents/architecture/ADR-063-memory-skill-decomposition.md:280
- ## References — .agents/architecture/ADR-063-memory-skill-decomposition.md:294
- ## Amendment 2026-07-27 — .agents/architecture/ADR-063-memory-skill-decomposition.md:313

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- missing-path · .agents/architecture/ADR-063-memory-skill-decomposition.md:310 · References .claude/rules/philosophy-of-software-design.md which was relocated to .claude/skills/software-engineering-library/references/philosophy-of-software-design.md per line 317 amendment.
- missing-path · .agents/architecture/ADR-063-memory-skill-decomposition.md:50-55 · References 8 historical reference files under .claude/skills/memory/references/ (agent-integration.md, api-reference.md, benchmarking.md, memory-router.md, quick-start.md, reflexion-memory.md, skill-reference.md, troubleshooting.md) that were redistributed or removed in subsequent M3 implementation.
- doc-drift · .agents/architecture/ADR-063-memory-skill-decomposition.md:152-155 · Flags stale reference in Issue #1947 citing ADR-051 for response envelope schema when the actual standard is ADR-056.

## Observations
Demonstrates how architecture decision records function as pre-implementation governance gates: this ADR authorizes the M3 decomposition and fixes architectural constraints (split by operation, preserve thin router, maintain schema and output envelope) prior to implementation in issue #1948.

## Context cost
18011 bytes, ~4500 tokens. When consulted, loads no external files directly.
