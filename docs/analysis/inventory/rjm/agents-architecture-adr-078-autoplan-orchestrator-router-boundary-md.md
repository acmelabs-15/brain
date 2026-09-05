---
package: rjm
path: .agents/architecture/ADR-078-autoplan-orchestrator-router-boundary.md
type: agent
bytes: 19830
unit: inv-rjm-32
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .agents/architecture/ADR-078-autoplan-orchestrator-router-boundary.md, sha256: 21223deef2b27e1961fbf9f2c04cb9d97eb086e088ae58ab38e73644c61b5139}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .agents/architecture/ADR-078-autoplan-orchestrator-router-boundary.md

## Purpose — required, verbatim
> "Adopt an explicit two-layer boundary and document it in both routing surfaces:" — .agents/architecture/ADR-078-autoplan-orchestrator-router-boundary.md:64

## Design intent — required
Architecture decision record establishing the two-layer architectural boundary between the `autoplan` skill (the outer front-door router at the skill layer for ambiguous requests naming no skill) and the `orchestrator` agent (a coordinator-role destination agent owning multi-agent, multi-domain execution, Cynefin complexity triage, handoffs, and synthesis). Resolves request-routing ambiguity reported in issue #2867 by codifying a strict one-way handoff contract: autoplan routes multi-domain requests to orchestrator, and orchestrator never invokes autoplan, maintaining lightweight entry ergonomics without compromising heavy session-start gates or multi-agent coordination.

## Phase — required
cross-phase

## Inputs — required
- Issue #2867 reporting routing overlap between autoplan and orchestrator — .agents/architecture/ADR-078-autoplan-orchestrator-router-boundary.md:37
- Issue #2866 reconnaissance target stack in autoplan — .agents/architecture/ADR-078-autoplan-orchestrator-router-boundary.md:92
- Issue #5130 agent tier hierarchy removal — .agents/architecture/ADR-078-autoplan-orchestrator-router-boundary.md:209, 268
- `.claude/skills/autoplan/SKILL.md` skill definition — .agents/architecture/ADR-078-autoplan-orchestrator-router-boundary.md:41
- `.claude/agents/orchestrator.md` coordinator agent definition — .agents/architecture/ADR-078-autoplan-orchestrator-router-boundary.md:46

## Outputs — required
- Explicit two-layer boundary documented in autoplan and orchestrator shared source — .agents/architecture/ADR-078-autoplan-orchestrator-router-boundary.md:64
- One-way routing rule: autoplan routes to orchestrator; orchestrator never invokes autoplan — .agents/architecture/ADR-078-autoplan-orchestrator-router-boundary.md:77-80
- Explicit limitations defining agent boundaries and follow-up mechanical gate tracking — .agents/architecture/ADR-078-autoplan-orchestrator-router-boundary.md:253-258

## Invokes — required
- skill autoplan — .agents/architecture/ADR-078-autoplan-orchestrator-router-boundary.md:41
- agent orchestrator — .agents/architecture/ADR-078-autoplan-orchestrator-router-boundary.md:46
- reference ADR-009 — .agents/architecture/ADR-078-autoplan-orchestrator-router-boundary.md:90
- reference ADR-030 — .agents/architecture/ADR-078-autoplan-orchestrator-router-boundary.md:205
- reference ADR-098-agent-role-metadata-replaces-tier-hierarchy.md — .agents/architecture/ADR-078-autoplan-orchestrator-router-boundary.md:334
- doc AGENT-SYSTEM.md — .agents/architecture/ADR-078-autoplan-orchestrator-router-boundary.md:126
- doc agent-catalog.md — .agents/architecture/ADR-078-autoplan-orchestrator-router-boundary.md:178
- doc orchestrator-routing-algorithm.md — .agents/architecture/ADR-078-autoplan-orchestrator-router-boundary.md:179

## Invoked by — required
- doc readme — .agents/architecture/README.md:180

## Concepts named — required, verbatim
- `Autoplan and Orchestrator Router Boundary` — .agents/architecture/ADR-078-autoplan-orchestrator-router-boundary.md:12 — defined here
- `metadata.role: coordinator` — .agents/architecture/ADR-078-autoplan-orchestrator-router-boundary.md:21 — used here
- `metadata.type: router` — .agents/architecture/ADR-078-autoplan-orchestrator-router-boundary.md:41 — used here
- `Cynefin` — .agents/architecture/ADR-078-autoplan-orchestrator-router-boundary.md:48 — used here
- `front-door router` — .agents/architecture/ADR-078-autoplan-orchestrator-router-boundary.md:67 — defined here
- `session-start checklist` — .agents/architecture/ADR-078-autoplan-orchestrator-router-boundary.md:74 — used here
- `opus reasoning tier` — .agents/architecture/ADR-078-autoplan-orchestrator-router-boundary.md:74 — used here
- `Overlap Analysis` — .agents/architecture/ADR-078-autoplan-orchestrator-router-boundary.md:237 — used here
- `Entry Criteria` — .agents/architecture/ADR-078-autoplan-orchestrator-router-boundary.md:243 — used here
- `Explicit Limitations` — .agents/architecture/ADR-078-autoplan-orchestrator-router-boundary.md:251 — used here
- `Success Metrics` — .agents/architecture/ADR-078-autoplan-orchestrator-router-boundary.md:260 — used here
- `tier vocabulary retired` — .agents/architecture/ADR-078-autoplan-orchestrator-router-boundary.md:268 — used here
- `Review provenance` — .agents/architecture/ADR-078-autoplan-orchestrator-router-boundary.md:325 — used here

## Structure
- # ADR-078: Autoplan and Orchestrator Router Boundary
- ## Status
- ## Date
- ## Context
- ## Decision
- ## Prior Art Investigation (Required when changing existing systems)
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
- ## Agent-Specific Fields (Required for Agent ADRs)
- ### Agent Name
- ### Overlap Analysis
- ### Entry Criteria
- ### Explicit Limitations
- ### Success Metrics
- ## Correction, 2026-08-20: tier vocabulary retired (issue #5130)

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `doc-drift` · `.agents/architecture/ADR-078-autoplan-orchestrator-router-boundary.md:196` · Cites `validate_install_parity.py` and `detect_agent_drift.py` by bare filenames rather than their repository path `build/scripts/`.

## Observations
- Detailed audit trail in the 2026-08-20 correction and Review provenance sections documenting two independent, concurrent 6-agent `adr-review` debate runs (`5130-tier-hierarchy-removal-debate-log.md` and `ADR-078-debate-log.md`) that reached differing conclusions and caught distinct issues.
- Clarifies the principle that descriptive agent role metadata (`metadata.role: coordinator`) confers no runtime invocation authority, which is governed instead by platform tool containment (e.g. subagents lacking the Task tool).

## Context cost
19830 bytes (~4958 tokens). Architecture decision record detailing routing contracts and multi-agent coordination boundaries.
