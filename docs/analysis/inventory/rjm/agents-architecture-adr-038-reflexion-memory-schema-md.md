---
package: rjm
path: .agents/architecture/ADR-038-reflexion-memory-schema.md
type: agent
bytes: 11364
unit: inv-rjm-14
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .agents/architecture/ADR-038-reflexion-memory-schema.md, sha256: c38ecd8c2fcbe6206a5ec4b4a80e06621ca3015db64a93894c4264f2bdfef509}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .agents/architecture/ADR-038-reflexion-memory-schema.md

## Purpose — required, verbatim
> "Implement a **Four-Tier Reflexion Memory Schema** with episodic replay and causal graph capabilities." — .agents/architecture/ADR-038-reflexion-memory-schema.md:52

## Design intent — required
Defines a structured, four-tier memory architecture (Working Memory Tier 0, Semantic Memory Tier 1, Episodic Memory Tier 2, and Causal Memory Tier 3) designed to provide autonomous agents with the ability to replay past decision sequences, perform counterfactual what-if analysis, analyze failure causes, and auto-consolidate recurring patterns without context window explosion from full session transcripts.

## Phase — required
none

## Inputs — required
- Session log transcripts: `.agents/sessions/*.md` — .agents/architecture/ADR-038-reflexion-memory-schema.md:199
- External pattern proposals: `Issue #180` and `claude-flow's ReflexionMemory pattern` — .agents/architecture/ADR-038-reflexion-memory-schema.md:31
- Prior memory architecture records: `ADR-007: Memory-First Architecture` — .agents/architecture/ADR-038-reflexion-memory-schema.md:305; `ADR-017: Tiered Memory Index Architecture` — .agents/architecture/ADR-038-reflexion-memory-schema.md:306; `ADR-037: Memory Router Architecture` — .agents/architecture/ADR-038-reflexion-memory-schema.md:307

## Outputs — required
- Episodic JSON extracts: `.agents/memory/episodes/{session-id}.json` — .agents/architecture/ADR-038-reflexion-memory-schema.md:86
- Causal graph state: `.agents/memory/causality/causal-graph.json` — .agents/architecture/ADR-038-reflexion-memory-schema.md:135
- Extraction and update scripts: `Extract-SessionEpisode.ps1` — .agents/architecture/ADR-038-reflexion-memory-schema.md:203, 283; `Update-CausalGraph.ps1` — .agents/architecture/ADR-038-reflexion-memory-schema.md:214, 284
- Query commands: `Get-Episode` — .agents/architecture/ADR-038-reflexion-memory-schema.md:180; `Get-Episodes` — .agents/architecture/ADR-038-reflexion-memory-schema.md:181; `Get-DecisionSequence` — .agents/architecture/ADR-038-reflexion-memory-schema.md:182; `Get-CausalPath` — .agents/architecture/ADR-038-reflexion-memory-schema.md:185; `Get-WhatIf` — .agents/architecture/ADR-038-reflexion-memory-schema.md:186; `Get-SimilarDecisions` — .agents/architecture/ADR-038-reflexion-memory-schema.md:187; `Get-Patterns` — .agents/architecture/ADR-038-reflexion-memory-schema.md:190; `Get-AntiPatterns` — .agents/architecture/ADR-038-reflexion-memory-schema.md:191

## Invokes — required
- doc ADR-037 — .agents/architecture/ADR-038-reflexion-memory-schema.md:66
- doc ADR-007 — .agents/architecture/ADR-038-reflexion-memory-schema.md:305
- doc ADR-017 — .agents/architecture/ADR-038-reflexion-memory-schema.md:306
- doc .agents/analysis/123-phase2a-memory-architecture-review.md — .agents/architecture/ADR-038-reflexion-memory-schema.md:314

## Invoked by — required
- doc .agents/architecture/README.md — .agents/architecture/README.md:167

## Concepts named — required, verbatim
- `Reflexion Memory Schema` — .agents/architecture/ADR-038-reflexion-memory-schema.md:12 — defined here
- `ReflexionMemory` — .agents/architecture/ADR-038-reflexion-memory-schema.md:31, 313 — used here
- `Working Memory (Tier 0)` — .agents/architecture/ADR-038-reflexion-memory-schema.md:58 — defined here
- `Semantic Memory (Tier 1)` — .agents/architecture/ADR-038-reflexion-memory-schema.md:64 — defined here
- `Episodic Memory (Tier 2)` — .agents/architecture/ADR-038-reflexion-memory-schema.md:70 — defined here
- `Episodic Memory Schema (Tier 2)` — .agents/architecture/ADR-038-reflexion-memory-schema.md:82 — defined here
- `Causal Memory (Tier 3)` — .agents/architecture/ADR-038-reflexion-memory-schema.md:76 — defined here
- `Causal Memory Schema (Tier 3)` — .agents/architecture/ADR-038-reflexion-memory-schema.md:131 — defined here
- `Four-Tier Reflexion Memory Schema` — .agents/architecture/ADR-038-reflexion-memory-schema.md:52 — defined here
- `ADR-037` — .agents/architecture/ADR-038-reflexion-memory-schema.md:66, 230, 307 — used here
- `ADR-007` — .agents/architecture/ADR-038-reflexion-memory-schema.md:305 — used here
- `ADR-017` — .agents/architecture/ADR-038-reflexion-memory-schema.md:306 — used here
- `Memory Router` — .agents/architecture/ADR-038-reflexion-memory-schema.md:66, 230, 290 — used here
- `Serena` — .agents/architecture/ADR-038-reflexion-memory-schema.md:37, 48, 65, 228 — used here
- `Forgetful` — .agents/architecture/ADR-038-reflexion-memory-schema.md:38, 48, 65, 229 — used here
- `Get-Episode` — .agents/architecture/ADR-038-reflexion-memory-schema.md:180 — defined here
- `Get-Episodes` — .agents/architecture/ADR-038-reflexion-memory-schema.md:181 — defined here
- `Get-DecisionSequence` — .agents/architecture/ADR-038-reflexion-memory-schema.md:182 — defined here
- `Get-CausalPath` — .agents/architecture/ADR-038-reflexion-memory-schema.md:185 — defined here
- `Get-WhatIf` — .agents/architecture/ADR-038-reflexion-memory-schema.md:186 — defined here
- `Get-SimilarDecisions` — .agents/architecture/ADR-038-reflexion-memory-schema.md:187 — defined here
- `Get-Patterns` — .agents/architecture/ADR-038-reflexion-memory-schema.md:190 — defined here
- `Get-AntiPatterns` — .agents/architecture/ADR-038-reflexion-memory-schema.md:191 — defined here
- `Extract-SessionEpisode.ps1` — .agents/architecture/ADR-038-reflexion-memory-schema.md:203, 283 — defined here
- `Update-CausalGraph.ps1` — .agents/architecture/ADR-038-reflexion-memory-schema.md:214, 284 — defined here
- `Retrospective Agent` — .agents/architecture/ADR-038-reflexion-memory-schema.md:231, 289 — used here
- `Session Protocol` — .agents/architecture/ADR-038-reflexion-memory-schema.md:232, 291 — used here

## Structure
- ## Status — .agents/architecture/ADR-038-reflexion-memory-schema.md:14
- ## Date — .agents/architecture/ADR-038-reflexion-memory-schema.md:18
- ## Context — .agents/architecture/ADR-038-reflexion-memory-schema.md:22
- ### Current Memory Architecture — .agents/architecture/ADR-038-reflexion-memory-schema.md:33
- ### Forces — .agents/architecture/ADR-038-reflexion-memory-schema.md:43
- ## Decision — .agents/architecture/ADR-038-reflexion-memory-schema.md:50
- ### Tier Architecture — .agents/architecture/ADR-038-reflexion-memory-schema.md:54
- ### Episodic Memory Schema (Tier 2) — .agents/architecture/ADR-038-reflexion-memory-schema.md:82
- ### Causal Memory Schema (Tier 3) — .agents/architecture/ADR-038-reflexion-memory-schema.md:131
- ### Query Interface — .agents/architecture/ADR-038-reflexion-memory-schema.md:174
- ### Episode Extraction Pipeline — .agents/architecture/ADR-038-reflexion-memory-schema.md:194
- ### Integration with Existing Systems — .agents/architecture/ADR-038-reflexion-memory-schema.md:224
- ## Rationale — .agents/architecture/ADR-038-reflexion-memory-schema.md:234
- ### Alternatives Considered — .agents/architecture/ADR-038-reflexion-memory-schema.md:236
- ### Trade-offs — .agents/architecture/ADR-038-reflexion-memory-schema.md:245
- ## Consequences — .agents/architecture/ADR-038-reflexion-memory-schema.md:251
- ### Positive — .agents/architecture/ADR-038-reflexion-memory-schema.md:253
- ### Negative — .agents/architecture/ADR-038-reflexion-memory-schema.md:260
- ### Neutral — .agents/architecture/ADR-038-reflexion-memory-schema.md:266
- ## Implementation Notes — .agents/architecture/ADR-038-reflexion-memory-schema.md:271
- ### Phase 1: M-004 Schema (This ADR) — .agents/architecture/ADR-038-reflexion-memory-schema.md:273
- ### Phase 2: M-005 Implementation — .agents/architecture/ADR-038-reflexion-memory-schema.md:280
- ### Phase 3: Integration — .agents/architecture/ADR-038-reflexion-memory-schema.md:288
- ### Token Budget Targets — .agents/architecture/ADR-038-reflexion-memory-schema.md:294
- ## Related Decisions — .agents/architecture/ADR-038-reflexion-memory-schema.md:303
- ## References — .agents/architecture/ADR-038-reflexion-memory-schema.md:309

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- missing-path · .agents/architecture/ADR-038-reflexion-memory-schema.md:135 · References storage directory `.agents/memory/causality/` and file `causal-graph.json` which do not exist in the repository (Tier 3 causal memory was later removed by ADR-089).
- missing-path · .agents/architecture/ADR-038-reflexion-memory-schema.md:176 · References `scripts/ReflexionMemory.psm1` which was not implemented in PowerShell (implemented in Python under `.claude/skills/memory/memory_core/reflexion_memory.py` and `src/copilot-cli/skills/memory/memory_core/reflexion_memory.py`).
- missing-path · .agents/architecture/ADR-038-reflexion-memory-schema.md:203, 283 · References `Extract-SessionEpisode.ps1` which was implemented in Python at `src/copilot-cli/skills/memory/scripts/extract_session_episode.py`.
- missing-path · .agents/architecture/ADR-038-reflexion-memory-schema.md:214, 284 · References `Update-CausalGraph.ps1` which does not exist in the repository.

## Observations
Captures an ambitious attempt to build episodic replay and causal graphs on top of agent session logs inspired by claude-flow. While Tier 2 episodic memory succeeded and was integrated into post-session retrospective routines, Tier 3 causal graphs proved overly complex and were ultimately abandoned in ADR-089.

## Context cost
11364 bytes, ~2840 tokens. Loads no external files.
