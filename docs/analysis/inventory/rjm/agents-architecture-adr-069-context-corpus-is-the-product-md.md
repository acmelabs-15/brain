---
package: rjm
path: .agents/architecture/ADR-069-context-corpus-is-the-product.md
type: agent
bytes: 13374
unit: inv-rjm-27
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .agents/architecture/ADR-069-context-corpus-is-the-product.md, sha256: 935bb916a561019efbb60fd594883cc6830259c76dd981fb92788f75c9449432}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .agents/architecture/ADR-069-context-corpus-is-the-product.md

## Purpose — required, verbatim
> "**The curated context corpus IS the product. Orchestration is plumbing.**" — .agents/architecture/ADR-069-context-corpus-is-the-product.md:61

## Design intent — required
ADR-069 establishes the foundational architectural principle that the durable value and competitive differentiator of the repository is the curated context corpus (memories, ADRs, agent definitions, skills, baselines, governance rules) rather than agent abstractions, orchestration scripts, or lifecycle commands, which are rapidly commoditizing plumbing. Grounded in the "LLMs as Ghosts, Not Animals" conceptual framing—where models possess no persistent cross-session memory and only know what is explicitly assembled into prompt context—it steers contributors away from over-engineering transient orchestration mechanisms and toward curating, indexing, observing, and evaluating durable context artifacts. Without it, engineering effort is continually misallocated to orchestration complexity while the growing corpus of hundreds of files remains uncataloged, unobserved, and at risk of premature schema lock-in or drift.

## Phase — required
cross-phase

## Inputs — required
- Descriptive catalog snapshot of 11 existing context sources: `.serena/memories/` (Zettelkasten atomic notes), `.agents/architecture/` (ADRs), `.agents/governance/` (constraints/policies), `.agents/HANDOFF.md`, `.agents/SESSION-PROTOCOL.md`, `templates/agents/` (agent definitions), `.claude/skills/*/SKILL.md`, `.github/instructions/` (rules with `applyTo` globs), `.github/prompts/` (quality gate prompts), `.baseline/` (coverage thresholds), `CLAUDE.md`, `AGENTS.md`, and `scripts/memory/`, `scripts/memory_sync/` — .agents/architecture/ADR-069-context-corpus-is-the-product.md:29-39
- Problem statement and issue rationale from GitHub issue #1859 and the "LLMs as Ghosts not Animals" concept (`wiki/concepts/AI Strategy/LLMs as Ghosts not Animals.md`) — .agents/architecture/ADR-069-context-corpus-is-the-product.md:45,172,174
- Architectural precedents: ADR-007 (memory-first architecture), ADR-017 (tiered memory index), ADR-030 (skills pattern superiority), ADR-050 (ADR protocol sync), and ADR-053 (ADR exception criteria) — .agents/architecture/ADR-069-context-corpus-is-the-product.md:164-169

## Outputs — required
- Architectural principle commitment: "The curated context corpus IS the product. Orchestration is plumbing." — .agents/architecture/ADR-069-context-corpus-is-the-product.md:61
- Descriptive catalog snapshot of 11 existing repository context surfaces without disruptive reorganization — .agents/architecture/ADR-069-context-corpus-is-the-product.md:29-41,66
- Explicit agenda of five downstream open questions: Corpus catalog, Schema spike, Assembly-layer prototype, Telemetry-of-influence, and Curation cadence — .agents/architecture/ADR-069-context-corpus-is-the-product.md:68-72,154-158
- Explicit non-goals preventing premature canonical schemas, directory reorganizations, or agent/command deprecations — .agents/architecture/ADR-069-context-corpus-is-the-product.md:77-80

## Invokes — required
- doc ADR-007 — .agents/architecture/ADR-069-context-corpus-is-the-product.md:164
- doc ADR-017 — .agents/architecture/ADR-069-context-corpus-is-the-product.md:165
- doc ADR-030 — .agents/architecture/ADR-069-context-corpus-is-the-product.md:166
- doc ADR-050 — .agents/architecture/ADR-069-context-corpus-is-the-product.md:167
- doc ADR-053 — .agents/architecture/ADR-069-context-corpus-is-the-product.md:168
- template .agents/architecture/ADR-TEMPLATE.md — .agents/architecture/ADR-069-context-corpus-is-the-product.md:175
- skill .claude/skills/chestertons-fence/ — .agents/architecture/ADR-069-context-corpus-is-the-product.md:117
- file CLAUDE.md — .agents/architecture/ADR-069-context-corpus-is-the-product.md:38
- file AGENTS.md — .agents/architecture/ADR-069-context-corpus-is-the-product.md:38

## Invoked by — required
- doc .agents/architecture/README.md — .agents/architecture/README.md:175
- skill .claude/skills/ai-agents-research-frontier/SKILL.md — .claude/skills/ai-agents-research-frontier/SKILL.md:83

## Concepts named — required, verbatim
- `architect` — .agents/architecture/ADR-069-context-corpus-is-the-product.md:5 — used here
- `user` — .agents/architecture/ADR-069-context-corpus-is-the-product.md:5 — used here
- `analyst` — .agents/architecture/ADR-069-context-corpus-is-the-product.md:11 — used here
- `critic` — .agents/architecture/ADR-069-context-corpus-is-the-product.md:12 — used here
- `qa` — .agents/architecture/ADR-069-context-corpus-is-the-product.md:13 — used here
- `implementer` — .agents/architecture/ADR-069-context-corpus-is-the-product.md:15 — used here
- `devops` — .agents/architecture/ADR-069-context-corpus-is-the-product.md:16 — used here
- `security` — .agents/architecture/ADR-069-context-corpus-is-the-product.md:17 — used here
- `roadmap` — .agents/architecture/ADR-069-context-corpus-is-the-product.md:18 — used here
- `curated context corpus` — .agents/architecture/ADR-069-context-corpus-is-the-product.md:21 — defined here
- `Zettelkasten atomic notes` — .agents/architecture/ADR-069-context-corpus-is-the-product.md:29 — used here
- `LLMs as Ghosts not Animals` — .agents/architecture/ADR-069-context-corpus-is-the-product.md:45 — used here
- `Durability of value` — .agents/architecture/ADR-069-context-corpus-is-the-product.md:51 — defined here
- `Reproducibility of behavior` — .agents/architecture/ADR-069-context-corpus-is-the-product.md:52 — defined here
- `Engineering opportunity cost` — .agents/architecture/ADR-069-context-corpus-is-the-product.md:53 — defined here
- `Risk of premature schema lock-in` — .agents/architecture/ADR-069-context-corpus-is-the-product.md:54 — defined here
- `Need for shared vocabulary` — .agents/architecture/ADR-069-context-corpus-is-the-product.md:55 — defined here
- `memory-first architecture` — .agents/architecture/ADR-069-context-corpus-is-the-product.md:65 — used here
- `tiered memory index` — .agents/architecture/ADR-069-context-corpus-is-the-product.md:65 — used here
- `Corpus catalog` — .agents/architecture/ADR-069-context-corpus-is-the-product.md:68 — defined here
- `Schema spike` — .agents/architecture/ADR-069-context-corpus-is-the-product.md:69 — defined here
- `Assembly-layer prototype` — .agents/architecture/ADR-069-context-corpus-is-the-product.md:70 — defined here
- `Telemetry-of-influence` — .agents/architecture/ADR-069-context-corpus-is-the-product.md:71 — defined here
- `Curation cadence` — .agents/architecture/ADR-069-context-corpus-is-the-product.md:72 — defined here
- `chestertons-fence` — .agents/architecture/ADR-069-context-corpus-is-the-product.md:117 — used here

## Structure
- # ADR-069: The Curated Context Corpus IS the Product, Orchestration Is Plumbing
- ## Context and Problem Statement
- ## Frame: LLMs as Ghosts, Not Animals
- ## Decision Drivers
- ## Decision
- ### What This ADR Is NOT
- ## Prior Art Investigation
- ### What Currently Exists
- ### Historical Rationale
- ### Why Change Now
- ## Rationale
- ### Alternatives Considered
- ### Trade-offs
- ## Consequences
- ### Positive
- ### Negative
- ### Neutral
- ## Impact on Dependent Components
- ## Implementation Notes
- ## Related Decisions
- ## References

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- missing-path · .agents/architecture/ADR-069-context-corpus-is-the-product.md:32 · References .agents/HANDOFF.md and .agents/SESSION-PROTOCOL.md which do not exist in the repository.
- missing-path · .agents/architecture/ADR-069-context-corpus-is-the-product.md:174 · References external or non-existent wiki file wiki/concepts/AI Strategy/LLMs as Ghosts not Animals.md.
- doc-drift · .agents/architecture/ADR-069-context-corpus-is-the-product.md:3 · Frontmatter lists status as proposed, and downstream skills (.claude/skills/ai-agents-architecture-contract/SKILL.md:63, .claude/skills/ai-agents-research-frontier/SKILL.md:272) warn that ADR-069 is a proposed thesis and not settled policy.

## Observations
ADR-069 establishes the central philosophical thesis of the rjm repository: because LLMs possess no cross-run weights update or persistent memory ("ghosts, not animals"), the curated prompt context assembled across runs is the durable product, while orchestration code is commoditizing plumbing. Downstream research skills (`ai-agents-research-frontier`, `ai-agents-architecture-contract`) explicitly track ADR-069 under the "Verified Governance" research program to evaluate whether gated-corpus sessions outperform ungated sessions.

## Context cost
13374 bytes, ~3350 tokens.
