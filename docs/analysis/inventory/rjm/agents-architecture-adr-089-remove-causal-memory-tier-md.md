---
package: rjm
path: .agents/architecture/ADR-089-remove-causal-memory-tier.md
type: agent
bytes: 21331
unit: inv-rjm-38
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .agents/architecture/ADR-089-remove-causal-memory-tier.md, sha256: 8d7ac08b0099b23adac6b8e45c1985d9570daa7459bc8641aab978818e582944}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .agents/architecture/ADR-089-remove-causal-memory-tier.md

## Purpose — required, verbatim
> "Delete the Tier 3 causal graph and all machinery that exists only to maintain it:" — .agents/architecture/ADR-089-remove-causal-memory-tier.md:158-159

## Design intent — required
Removes the Tier 3 causal memory graph (`.agents/memory/causality/causal-graph.json`) and its maintenance machinery from the repository after empirical investigation revealed that no executable code ever queried the graph, its advertised query API (`Get-CausalPath`, `Get-Patterns`, `Get-AntiPatterns`) lacked implementation cmdlets, its contents were degenerate noise (mostly test fixtures and tautologies), and the monolithic 1.07 MB JSON file was the repository's single most severe source of git merge conflicts (touching 5.7% of commits). The architecture preserves Tier 2 episodic memory (`.agents/memory/episodes/`) as the underlying system of record and retains intra-episode causal links (`caused_by`, `leads_to`), recognizing that derived caches with zero readers, high maintenance costs, and severe conflict burdens should be eliminated rather than sharded or papered over with custom git merge drivers. Without this decision, the codebase would continue carrying ~1 MB of conflict-prone dead weight and complex custom merge drivers that introduce supply-chain risks in CI workflows.

## Phase — required
cross-phase

## Inputs — required
- "ADR-038 defined a four-tier reflexion memory architecture and deferred the router and agent integration for the causal tier to a Phase 3 that never ran." — .agents/architecture/ADR-089-remove-causal-memory-tier.md:28-29
- "ADR-063 later decomposed the memory skill, explicitly \"split by operation, not by tier,\" and carried the graph updates forward without ever adding the query integration." — .agents/architecture/ADR-089-remove-causal-memory-tier.md:30-32
- "Session 3345 measured the result: 41 of 242 episodes on disk had no node in the committed graph, and a from-scratch rebuild did not reproduce the committed file" — .agents/architecture/ADR-089-remove-causal-memory-tier.md:53-55
- "The file is 1,074,565 bytes in a single JSON blob and was touched by 103 of 1834 commits, 5.7 percent." — .agents/architecture/ADR-089-remove-causal-memory-tier.md:121-122

## Outputs — required
- "Delete the Tier 3 causal graph and all machinery that exists only to maintain it:" — .agents/architecture/ADR-089-remove-causal-memory-tier.md:158-159
- ".agents/memory/causality/causal-graph.json" — .agents/architecture/ADR-089-remove-causal-memory-tier.md:161
- "update_causal_graph.py" — .agents/architecture/ADR-089-remove-causal-memory-tier.md:162
- "scripts/validation/merge_causal_graph.py" — .agents/architecture/ADR-089-remove-causal-memory-tier.md:165
- "Tier 2 episodic memory stays." — .agents/architecture/ADR-089-remove-causal-memory-tier.md:177
- "The removal is guarded by inverse tests at `tests/test_causal_tier_removed.py`" — .agents/architecture/ADR-089-remove-causal-memory-tier.md:308

## Invokes — required
- doc ADR-038 — .agents/architecture/ADR-089-remove-causal-memory-tier.md:28
- doc ADR-063 — .agents/architecture/ADR-089-remove-causal-memory-tier.md:30
- file .agents/memory/episodes/ — .agents/architecture/ADR-089-remove-causal-memory-tier.md:49
- file .agents/memory/episodes/episode-2026-07-25-session-3345-causal-graph-merge-driver.json — .agents/architecture/ADR-089-remove-causal-memory-tier.md:63
- file memory_core/__init__.py — .agents/architecture/ADR-089-remove-causal-memory-tier.md:80
- file evals/reports/adr-063-kill-gate-20260708/memory-reflexion.json — .agents/architecture/ADR-089-remove-causal-memory-tier.md:140
- file memory_core/reflexion_memory.py — .agents/architecture/ADR-089-remove-causal-memory-tier.md:170
- script git_hook_policy.py — .agents/architecture/ADR-089-remove-causal-memory-tier.md:185
- script search_memory.py — .agents/architecture/ADR-089-remove-causal-memory-tier.md:190
- script tests/validation/test_git_hook_policy_causal_restore.py — .agents/architecture/ADR-089-remove-causal-memory-tier.md:232
- script tests/test_causal_tier_removed.py — .agents/architecture/ADR-089-remove-causal-memory-tier.md:308
- file tests/evals/skills/triage-prompts.json — .agents/architecture/ADR-089-remove-causal-memory-tier.md:326
- doc ADR-007 — .agents/architecture/ADR-089-remove-causal-memory-tier.md:385
- doc ADR-038 — .agents/architecture/ADR-089-remove-causal-memory-tier.md:386
- doc ADR-063 — .agents/architecture/ADR-089-remove-causal-memory-tier.md:387

## Invoked by — required
- doc ADR-089 — .agents/architecture/README.md:183
- skill ADR-089 — .claude/skills/ai-agents-architecture-contract/SKILL.md:58
- skill ADR-089 — .claude/skills/ai-agents-architecture-contract/SKILL.md:96

## Concepts named — required, verbatim
`Tier 3 Causal Memory Graph` — .agents/architecture/ADR-089-remove-causal-memory-tier.md:12 — defined here
`reflexion memory architecture` — .agents/architecture/ADR-089-remove-causal-memory-tier.md:28 — used here
`causal tier` — .agents/architecture/ADR-089-remove-causal-memory-tier.md:29 — defined here
`causal graph` — .agents/architecture/ADR-089-remove-causal-memory-tier.md:34 — defined here
`git merge driver` — .agents/architecture/ADR-089-remove-causal-memory-tier.md:36 — used here
`adr-review` — .agents/architecture/ADR-089-remove-causal-memory-tier.md:58 — used here
`Get-CausalPath` — .agents/architecture/ADR-089-remove-causal-memory-tier.md:82 — used here
`Get-Patterns` — .agents/architecture/ADR-089-remove-causal-memory-tier.md:83 — used here
`Get-AntiPatterns` — .agents/architecture/ADR-089-remove-causal-memory-tier.md:83 — used here
`memory-gate` — .agents/architecture/ADR-089-remove-causal-memory-tier.md:88 — used here
`memory-reflexion` — .agents/architecture/ADR-089-remove-causal-memory-tier.md:88 — used here
`kill gate` — .agents/architecture/ADR-089-remove-causal-memory-tier.md:141 — used here
`Tier 2 episodic memory` — .agents/architecture/ADR-089-remove-causal-memory-tier.md:177 — used here
`caused_by` — .agents/architecture/ADR-089-remove-causal-memory-tier.md:226 — used here
`leads_to` — .agents/architecture/ADR-089-remove-causal-memory-tier.md:226 — used here
`push gate` — .agents/architecture/ADR-089-remove-causal-memory-tier.md:235 — used here
`suppression parser` — .agents/architecture/ADR-089-remove-causal-memory-tier.md:235 — used here
`ADR-review merge scope` — .agents/architecture/ADR-089-remove-causal-memory-tier.md:235-236 — used here
`Get-CausalPath` — .agents/architecture/ADR-089-remove-causal-memory-tier.md:279 — used here
`Get-WhatIf` — .agents/architecture/ADR-089-remove-causal-memory-tier.md:280 — used here
`Get-SimilarDecisions` — .agents/architecture/ADR-089-remove-causal-memory-tier.md:280 — used here
`inverse tests` — .agents/architecture/ADR-089-remove-causal-memory-tier.md:308 — defined here
`Tier 1 Semantic` — .agents/architecture/ADR-089-remove-causal-memory-tier.md:324-325 — used here
`Tier 2 Episodic` — .agents/architecture/ADR-089-remove-causal-memory-tier.md:325 — used here
`Tier 3 Causal` — .agents/architecture/ADR-089-remove-causal-memory-tier.md:325 — used here
`Get-Episode` — .agents/architecture/ADR-089-remove-causal-memory-tier.md:338 — used here
`New-Episode` — .agents/architecture/ADR-089-remove-causal-memory-tier.md:338 — used here
`Get-DecisionSequence` — .agents/architecture/ADR-089-remove-causal-memory-tier.md:338 — used here
`Get-ReflexionMemoryStatus` — .agents/architecture/ADR-089-remove-causal-memory-tier.md:339 — used here
`merge=ours` — .agents/architecture/ADR-089-remove-causal-memory-tier.md:344 — used here
`merge=handoff-aggregate` — .agents/architecture/ADR-089-remove-causal-memory-tier.md:346 — used here
`episode extractor` — .agents/architecture/ADR-089-remove-causal-memory-tier.md:350 — used here

## Structure
# ADR-089: Remove the Tier 3 Causal Memory Graph — .agents/architecture/ADR-089-remove-causal-memory-tier.md:12
## Status — .agents/architecture/ADR-089-remove-causal-memory-tier.md:14
## Date — .agents/architecture/ADR-089-remove-causal-memory-tier.md:22
## Context — .agents/architecture/ADR-089-remove-causal-memory-tier.md:26
### Finding 1: it is a derived cache, and a drifted one — .agents/architecture/ADR-089-remove-causal-memory-tier.md:44
### Finding 2: no code reads it, and the prose that told agents to were the only readers — .agents/architecture/ADR-089-remove-causal-memory-tier.md:76
### Finding 3: the output is noise — .agents/architecture/ADR-089-remove-causal-memory-tier.md:95
### Finding 4: it is the repository's most conflict-prone file — .agents/architecture/ADR-089-remove-causal-memory-tier.md:119
### Finding 5: the evidence that justified keeping it did not measure what it was used for — .agents/architecture/ADR-089-remove-causal-memory-tier.md:138
## Decision — .agents/architecture/ADR-089-remove-causal-memory-tier.md:156
## Scope: what this does NOT remove — .agents/architecture/ADR-089-remove-causal-memory-tier.md:175
## Consequences — .agents/architecture/ADR-089-remove-causal-memory-tier.md:261
### Positive — .agents/architecture/ADR-089-remove-causal-memory-tier.md:263
### Negative — .agents/architecture/ADR-089-remove-causal-memory-tier.md:275
### Neutral — .agents/architecture/ADR-089-remove-causal-memory-tier.md:304
## Related defects found and NOT fixed here — .agents/architecture/ADR-089-remove-causal-memory-tier.md:319
## Alternatives Considered — .agents/architecture/ADR-089-remove-causal-memory-tier.md:368
## References — .agents/architecture/ADR-089-remove-causal-memory-tier.md:383

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- doc-drift · .agents/architecture/ADR-089-remove-causal-memory-tier.md:3 · Frontmatter status is `proposed` despite line 9 stating `implemented: true` and line 16 stating "The removal is implemented in the same change that files this ADR".
- doc-drift · .agents/architecture/ADR-089-remove-causal-memory-tier.md:324-332 · The "Tier 1 Semantic / Tier 2 Episodic / Tier 3 Causal, per ADR-007" taxonomy cited across memory skills is a fabricated attribution; ADR-007 defines storage backends and a memory-index hierarchy, not semantic/episodic/causal tiers (issue 3624).
- doc-drift · .agents/architecture/ADR-089-remove-causal-memory-tier.md:337-343 · Memory reference documentation describes PowerShell cmdlets (`Get-Episode`, `New-Episode`, `Get-DecisionSequence`, `Get-ReflexionMemoryStatus`) that do not exist in any `.ps1` or `.psm1` file in the repository (issue 3623).
- unfailable-gate · .agents/architecture/ADR-089-remove-causal-memory-tier.md:140-151 · The skill kill gate evaluated memory-reflexion on documentation knowledge transfer rather than downstream behavioral utility or artifact readership (issue 3631).
- missing-path · .agents/architecture/ADR-089-remove-causal-memory-tier.md:344-349 · `.gitattributes` names `merge=ours` (not a git built-in driver, causing conflicts) and `merge=handoff-aggregate` (declared without implementation) (issue 3625).

## Observations
- Demonstrates rigorous forensic investigation into dead architecture: proving that despite high touch counts (5.7% of all commits) and complex custom merge drivers, the Tier 3 causal graph had zero executable consumers outside its own maintenance tools.
- Formulates the derivation distance principle: Tier 2 episodes are kept because they are primary records (small, rarely collide, irrecoverable except from raw session logs), while Tier 3 was a lossy, degenerate projection that could be re-derived if ever needed.
- Enforces safe deletion through inverse regression testing (`tests/test_causal_tier_removed.py`) that actively checks for the absence of deleted artifacts and declarations while protecting preserved intra-episode causal links.
- Identifies the test filename trap where `test_git_hook_policy_causal_restore.py` carried 25 non-causal push-gate tests, and renaming the file would trigger the push gate's `--no-renames` check on an unavoidable `E402` lint suppression.
- Discloses the broader finding that Tier 2 episodic memory also lacks executable consumers outside its module and tests (issue 3630), highlighting that readership criteria must be paired with derivation cost.

## Context cost
21331 bytes, approximately 5300 tokens.
