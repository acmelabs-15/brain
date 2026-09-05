---
package: rjm
path: .agents/architecture/ADR-098-agent-role-metadata-replaces-tier-hierarchy.md
type: agent
bytes: 32140
unit: inv-rjm-43
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .agents/architecture/ADR-098-agent-role-metadata-replaces-tier-hierarchy.md, sha256: d094c9283eee8c0798076191cc7f2bb8cb21db28a457234065a56952a25408c5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .agents/architecture/ADR-098-agent-role-metadata-replaces-tier-hierarchy.md

## Purpose — required, verbatim
> "Retire the four-tier agent hierarchy. Replace the `tier:` frontmatter key with a descriptive `role:` key drawn from a closed four-value vocabulary." — .agents/architecture/ADR-098-agent-role-metadata-replaces-tier-hierarchy.md:97-98

## Design intent — required
Architecture Decision Record retiring the unenforced, factually contradictory four-tier agent hierarchy (`expert`, `manager`, `builder`, `integration`) that falsely claimed lineage from ADR-009 while directly contradicting the explicit subagent delegation denials authored into seven of the nine upper-tier agent prompts. Replaces `tier:` with inert, descriptive `role:` metadata drawn from a closed four-value vocabulary (`strategic`, `coordinator`, `executor`, `support`) across 186 agent files in six configured trees, while eliminating indirection in downstream OpenClaw bridge exports, fixing a latent role export bug for nested agents, and binding coordination authority strictly to ADR-009's consensus protocol and aggregation strategies rather than an unverified rank hierarchy.

## Phase — required
cross-phase

## Inputs — required
- "`.agents/AGENT-SYSTEM.md` section 2.5 documented a four-tier agent hierarchy" — .agents/architecture/ADR-098-agent-role-metadata-replaces-tier-hierarchy.md:34
- "patterns per ADR-009 (Parallel-Safe Multi-Agent Design)." — .agents/architecture/ADR-098-agent-role-metadata-replaces-tier-hierarchy.md:40
- "ADR-073 binds a transition to `accepted` to adr-review debate-log evidence under" — .agents/architecture/ADR-098-agent-role-metadata-replaces-tier-hierarchy.md:19
- "ADR-093 carries the same pair for the same reason." — .agents/architecture/ADR-098-agent-role-metadata-replaces-tier-hierarchy.md:23-24
- "PR #5127 attempted this same removal and was reverted after independent review" — .agents/architecture/ADR-098-agent-role-metadata-replaces-tier-hierarchy.md:86-87
- "`.agents/retrospective/2026-08-17-governance-bureaucracy-critical-review.md`" — .agents/architecture/ADR-098-agent-role-metadata-replaces-tier-hierarchy.md:91
- "`.claude/rules/canonical-source-mirror.md`, rather than paraphrasing them." — .agents/architecture/ADR-098-agent-role-metadata-replaces-tier-hierarchy.md:102
- "PR #1426 (commit `525490fae`, 2026-03-23), implementing" — .agents/architecture/ADR-098-agent-role-metadata-replaces-tier-hierarchy.md:140
- "`.agents/archive/planning/prd-workflow-orchestration-enhancement.md:258`" — .agents/architecture/ADR-098-agent-role-metadata-replaces-tier-hierarchy.md:143
- "`.agents/critique/5130-tier-hierarchy-removal-debate-log.md`" — .agents/architecture/ADR-098-agent-role-metadata-replaces-tier-hierarchy.md:476

## Outputs — required
- "Retire the four-tier agent hierarchy. Replace the `tier:` frontmatter key with a descriptive `role:` key drawn from a closed four-value vocabulary." — .agents/architecture/ADR-098-agent-role-metadata-replaces-tier-hierarchy.md:97-98
- "section 2.5 becomes \"Agent Coordination\"" — .agents/architecture/ADR-098-agent-role-metadata-replaces-tier-hierarchy.md:100
- "Every agent definition declares `role:` with one of `strategic`, `coordinator`, `executor`, or `support`." — .agents/architecture/ADR-098-agent-role-metadata-replaces-tier-hierarchy.md:103-104
- "docs/orchestrator-routing-algorithm.md`, which now does." — .agents/architecture/ADR-098-agent-role-metadata-replaces-tier-hierarchy.md:125
- "Tracked as issue #5184" — .agents/architecture/ADR-098-agent-role-metadata-replaces-tier-hierarchy.md:324
- "Shipped in PR #5177 for issue #5130." — .agents/architecture/ADR-098-agent-role-metadata-replaces-tier-hierarchy.md:371

## Invokes — required
- reference ADR-009 — .agents/architecture/ADR-098-agent-role-metadata-replaces-tier-hierarchy.md:40
- reference ADR-073 — .agents/architecture/ADR-098-agent-role-metadata-replaces-tier-hierarchy.md:19
- reference ADR-093 — .agents/architecture/ADR-098-agent-role-metadata-replaces-tier-hierarchy.md:23
- reference ADR-078 — .agents/architecture/ADR-098-agent-role-metadata-replaces-tier-hierarchy.md:366
- doc AGENT-SYSTEM.md — .agents/architecture/ADR-098-agent-role-metadata-replaces-tier-hierarchy.md:34
- doc orchestrator-routing-algorithm.md — .agents/architecture/ADR-098-agent-role-metadata-replaces-tier-hierarchy.md:125
- doc agent-catalog.md — .agents/architecture/ADR-098-agent-role-metadata-replaces-tier-hierarchy.md:353
- doc canonical-source-mirror.md — .agents/architecture/ADR-098-agent-role-metadata-replaces-tier-hierarchy.md:102
- script openclaw_bridge.py — .agents/architecture/ADR-098-agent-role-metadata-replaces-tier-hierarchy.md:48
- script generate_agent_catalog.py — .agents/architecture/ADR-098-agent-role-metadata-replaces-tier-hierarchy.md:47
- script validate_copilot_agent_frontmatter.py — .agents/architecture/ADR-098-agent-role-metadata-replaces-tier-hierarchy.md:49
- script validate_agent_matrix_refs.py — .agents/architecture/ADR-098-agent-role-metadata-replaces-tier-hierarchy.md:280
- script detect_agent_drift.py — .agents/architecture/ADR-098-agent-role-metadata-replaces-tier-hierarchy.md:291

## Invoked by — required
- doc README.md — .agents/architecture/README.md:186

## Concepts named — required, verbatim
- `Agent Role Metadata Replaces the Tier Hierarchy` — .agents/architecture/ADR-098-agent-role-metadata-replaces-tier-hierarchy.md:12 — defined here
- `four-tier agent hierarchy` — .agents/architecture/ADR-098-agent-role-metadata-replaces-tier-hierarchy.md:34 — defined here
- `Expert` — .agents/architecture/ADR-098-agent-role-metadata-replaces-tier-hierarchy.md:35 — used here
- `Manager` — .agents/architecture/ADR-098-agent-role-metadata-replaces-tier-hierarchy.md:35 — used here
- `Builder` — .agents/architecture/ADR-098-agent-role-metadata-replaces-tier-hierarchy.md:35 — used here
- `Integration` — .agents/architecture/ADR-098-agent-role-metadata-replaces-tier-hierarchy.md:35 — used here
- `tier:` — .agents/architecture/ADR-098-agent-role-metadata-replaces-tier-hierarchy.md:37 — used here
- `Parallel-Safe Multi-Agent Design` — .agents/architecture/ADR-098-agent-role-metadata-replaces-tier-hierarchy.md:40 — used here
- `consensus protocol` — .agents/architecture/ADR-098-agent-role-metadata-replaces-tier-hierarchy.md:54 — used here
- `aggregation strategies` — .agents/architecture/ADR-098-agent-role-metadata-replaces-tier-hierarchy.md:54 — used here
- `Handoff Protocol` — .agents/architecture/ADR-098-agent-role-metadata-replaces-tier-hierarchy.md:61 — used here
- `role:` — .agents/architecture/ADR-098-agent-role-metadata-replaces-tier-hierarchy.md:98 — defined here
- `Agent Coordination` — .agents/architecture/ADR-098-agent-role-metadata-replaces-tier-hierarchy.md:100 — defined here
- `strategic` — .agents/architecture/ADR-098-agent-role-metadata-replaces-tier-hierarchy.md:103 — defined here
- `coordinator` — .agents/architecture/ADR-098-agent-role-metadata-replaces-tier-hierarchy.md:104 — defined here
- `executor` — .agents/architecture/ADR-098-agent-role-metadata-replaces-tier-hierarchy.md:104 — defined here
- `support` — .agents/architecture/ADR-098-agent-role-metadata-replaces-tier-hierarchy.md:104 — defined here
- `descriptive metadata` — .agents/architecture/ADR-098-agent-role-metadata-replaces-tier-hierarchy.md:107 — defined here
- `aggregation weight` — .agents/architecture/ADR-098-agent-role-metadata-replaces-tier-hierarchy.md:127 — defined here
- `invocation rank` — .agents/architecture/ADR-098-agent-role-metadata-replaces-tier-hierarchy.md:128 — defined here
- `Prior Art Investigation` — .agents/architecture/ADR-098-agent-role-metadata-replaces-tier-hierarchy.md:133 — used here
- `Standing Dissent` — .agents/architecture/ADR-098-agent-role-metadata-replaces-tier-hierarchy.md:432 — defined here
- `Re-evaluation Triggers` — .agents/architecture/ADR-098-agent-role-metadata-replaces-tier-hierarchy.md:447 — defined here
- `Review Provenance` — .agents/architecture/ADR-098-agent-role-metadata-replaces-tier-hierarchy.md:473 — defined here

## Structure
- # ADR-098: Agent Role Metadata Replaces the Tier Hierarchy — .agents/architecture/ADR-098-agent-role-metadata-replaces-tier-hierarchy.md:12
- ## Status — .agents/architecture/ADR-098-agent-role-metadata-replaces-tier-hierarchy.md:14
- ## Date — .agents/architecture/ADR-098-agent-role-metadata-replaces-tier-hierarchy.md:28
- ## Context — .agents/architecture/ADR-098-agent-role-metadata-replaces-tier-hierarchy.md:32
- ## Decision — .agents/architecture/ADR-098-agent-role-metadata-replaces-tier-hierarchy.md:95
- ## Prior Art Investigation (Required when changing existing systems) — .agents/architecture/ADR-098-agent-role-metadata-replaces-tier-hierarchy.md:133
- ### What Currently Exists — .agents/architecture/ADR-098-agent-role-metadata-replaces-tier-hierarchy.md:135
- ### Historical Rationale — .agents/architecture/ADR-098-agent-role-metadata-replaces-tier-hierarchy.md:145
- ### Why Change Now — .agents/architecture/ADR-098-agent-role-metadata-replaces-tier-hierarchy.md:167
- ## Rationale — .agents/architecture/ADR-098-agent-role-metadata-replaces-tier-hierarchy.md:185
- ### Alternatives Considered — .agents/architecture/ADR-098-agent-role-metadata-replaces-tier-hierarchy.md:217
- ### Trade-offs — .agents/architecture/ADR-098-agent-role-metadata-replaces-tier-hierarchy.md:226
- ## Consequences — .agents/architecture/ADR-098-agent-role-metadata-replaces-tier-hierarchy.md:242
- ### Positive — .agents/architecture/ADR-098-agent-role-metadata-replaces-tier-hierarchy.md:244
- ### Negative — .agents/architecture/ADR-098-agent-role-metadata-replaces-tier-hierarchy.md:296
- ### Neutral — .agents/architecture/ADR-098-agent-role-metadata-replaces-tier-hierarchy.md:347
- ## Impact on Dependent Components — .agents/architecture/ADR-098-agent-role-metadata-replaces-tier-hierarchy.md:355
- ## Implementation Notes — .agents/architecture/ADR-098-agent-role-metadata-replaces-tier-hierarchy.md:369
- ## Standing Dissent — .agents/architecture/ADR-098-agent-role-metadata-replaces-tier-hierarchy.md:432
- ## Re-evaluation Triggers — .agents/architecture/ADR-098-agent-role-metadata-replaces-tier-hierarchy.md:447
- ## Review Provenance — .agents/architecture/ADR-098-agent-role-metadata-replaces-tier-hierarchy.md:473
- ## Related Decisions — .agents/architecture/ADR-098-agent-role-metadata-replaces-tier-hierarchy.md:500
- ## References — .agents/architecture/ADR-098-agent-role-metadata-replaces-tier-hierarchy.md:511

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `doc-drift` · `.agents/architecture/ADR-098-agent-role-metadata-replaces-tier-hierarchy.md:366` · Cites `.agents/architecture/ADR-078` without the `.md` file extension.

## Observations
- Deeply rigorous documentation of architectural refactoring and governance overhead, noting how unenforced tier metadata created false authority hierarchies that contradicted actual prompt constraints ("As a subagent, you CANNOT delegate").
- Distinguishes sharply between aggregation weight (ADR-009's consensus voting weight `architect > implementer`) and invocation rank (which is non-existent in runtime enforcement).
- Emphasizes that runtime agent invocation authority is governed by platform tool containment (e.g. subagents lacking the Task tool) rather than frontmatter metadata or prose constraints.
- Documents the Standing Dissent and Re-evaluation Triggers, including the requirement that descriptive metadata must remain completely inert in runtime enforcement to avoid reintroducing an artificial rank hierarchy.
- Details three rounds of `adr-review` critique and the specific P0 issues caught across review passes, demonstrating exhaustive verification before merging.

## Context cost
32140 bytes, approximately 8035 tokens.
