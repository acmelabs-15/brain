---
package: rjm
path: .agents/architecture/ADR-070-memory-first-gate-spec-pipeline.md
type: agent
bytes: 17304
unit: inv-rjm-27
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .agents/architecture/ADR-070-memory-first-gate-spec-pipeline.md, sha256: 7074f73323b27f263379d5cb0c0b753ff42a7485c9d9b2027d81f9f010d6bd8e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .agents/architecture/ADR-070-memory-first-gate-spec-pipeline.md

## Purpose — required, verbatim
> "The Memory-First Gate is a BLOCKING step (Step 0.5) in the `/spec` pipeline, running after Step 0 and before Step 1." — .agents/architecture/ADR-070-memory-first-gate-spec-pipeline.md:86-87

## Design intent — required
ADR-070 establishes the architectural justification and governance authorization for establishing the Memory-First Gate as a mandatory, BLOCKING step (Step 0.5) in the `/spec` pipeline between Step 0 (First Principles demand validation) and Step 1 (Problem Clarification). It resolves the failure mode where advisory "check memory first" guidance achieved under 50% compliance, causing expensive downstream rework (exemplified by PR #1887's 69 commits and 11+ review rounds) when proposals violated uninvestigated architectural decisions or canonical regex contracts. By composing three targeted skills (`chestertons-fence` for git archaeology, `memory` for point search, and `exploring-knowledge-graph` for multi-hop blast-radius discovery), defining machine-readable halt blocks (`step0_5-halt` with triggers H6–H11), and tracking invocations via `STEP-0.5-METRICS.md`, the gate enforces 100% compliance while degrading gracefully to Serena lexical search if local Forgetful MCP is unavailable. Without it, the `/spec` pipeline would lack architectural authority to halt progression on missing prior art, leaving repository governance rules unsatisfied.

## Phase — required
rjm:spec

## Inputs — required
- Problem statement and Step 0 First Principles Gate output — .agents/architecture/ADR-070-memory-first-gate-spec-pipeline.md:24-28
- Behavioral specification and 13 acceptance criteria (AC-01 through AC-13) in `.agents/specs/requirements/REQ-017-spec-memory-first-gate.md` — .agents/architecture/ADR-070-memory-first-gate-spec-pipeline.md:30
- Memory retrieval principle and Forgetful fallback table from `ADR-007-memory-first-architecture.md` — .agents/architecture/ADR-070-memory-first-gate-spec-pipeline.md:51
- BLOCKING declaration and Investigation Protocol table from `.claude/skills/memory/SKILL.md` — .agents/architecture/ADR-070-memory-first-gate-spec-pipeline.md:58-64,103-106
- Step 0 structural precedent and kill criteria (`REQ-016-13`) from `.agents/specs/requirements/REQ-016-spec-step0-first-principles-gate.md` — .agents/architecture/ADR-070-memory-first-gate-spec-pipeline.md:187
- Governance rules requiring an ADR for significant policy and gate changes (`.claude/rules/governance.md`) — .agents/architecture/ADR-070-memory-first-gate-spec-pipeline.md:45-50

## Outputs — required
- Codified architectural mandate establishing Step 0.5 as a BLOCKING gate in the `/spec` pipeline — .agents/architecture/ADR-070-memory-first-gate-spec-pipeline.md:86
- Machine-readable halt block schema (`step0_5-halt`) with trigger IDs H6 through H11 — .agents/architecture/ADR-070-memory-first-gate-spec-pipeline.md:34-35,89-91
- Mandatory `## Prior Art / Constraints` section generated for downstream PRD insertion at Step 6 — .agents/architecture/ADR-070-memory-first-gate-spec-pipeline.md:100-101
- Tracking log and invocation tally at `.agents/sessions/STEP-0.5-METRICS.md` — .agents/architecture/ADR-070-memory-first-gate-spec-pipeline.md:35-36,198-200
- Coverage notes for degraded execution when Forgetful MCP or graph exploration is unavailable, verified by Step 9 check 9d — .agents/architecture/ADR-070-memory-first-gate-spec-pipeline.md:114-120

## Invokes — required
- command .claude/commands/spec.md — .agents/architecture/ADR-070-memory-first-gate-spec-pipeline.md:24
- doc .agents/specs/requirements/REQ-017-spec-memory-first-gate.md — .agents/architecture/ADR-070-memory-first-gate-spec-pipeline.md:30
- skill chestertons-fence — .agents/architecture/ADR-070-memory-first-gate-spec-pipeline.md:33
- skill memory — .agents/architecture/ADR-070-memory-first-gate-spec-pipeline.md:33
- skill exploring-knowledge-graph — .agents/architecture/ADR-070-memory-first-gate-spec-pipeline.md:33
- doc .agents/sessions/STEP-0.5-METRICS.md — .agents/architecture/ADR-070-memory-first-gate-spec-pipeline.md:36
- doc .agents/retrospective/2026-05-05-pr-1887-iteration-paradox.md — .agents/architecture/ADR-070-memory-first-gate-spec-pipeline.md:41
- skill .claude/skills/memory/SKILL.md — .agents/architecture/ADR-070-memory-first-gate-spec-pipeline.md:43
- doc .claude/rules/governance.md — .agents/architecture/ADR-070-memory-first-gate-spec-pipeline.md:45
- doc ADR-007-memory-first-architecture.md — .agents/architecture/ADR-070-memory-first-gate-spec-pipeline.md:51
- script scripts/validate_session_json.py — .agents/architecture/ADR-070-memory-first-gate-spec-pipeline.md:143
- doc .claude/rules/canonical-source-mirror.md — .agents/architecture/ADR-070-memory-first-gate-spec-pipeline.md:146
- doc .agents/specs/requirements/REQ-016-spec-step0-first-principles-gate.md — .agents/architecture/ADR-070-memory-first-gate-spec-pipeline.md:187
- file src/copilot-cli/skills/spec/SKILL.md — .agents/architecture/ADR-070-memory-first-gate-spec-pipeline.md:270
- doc ADR-054 — .agents/architecture/ADR-070-memory-first-gate-spec-pipeline.md:286
- doc ADR-065 — .agents/architecture/ADR-070-memory-first-gate-spec-pipeline.md:288
- reference .claude/skills/software-engineering-library/references/philosophy-of-software-design.md — .agents/architecture/ADR-070-memory-first-gate-spec-pipeline.md:312

## Invoked by — required
- doc .agents/architecture/README.md — .agents/architecture/README.md:176

## Concepts named — required, verbatim
- `rjmurillo` — .agents/architecture/ADR-070-memory-first-gate-spec-pipeline.md:5 — used here
- `Memory-First Gate` — .agents/architecture/ADR-070-memory-first-gate-spec-pipeline.md:12 — defined here
- `First Principles Gate` — .agents/architecture/ADR-070-memory-first-gate-spec-pipeline.md:25 — used here
- `Step 0` — .agents/architecture/ADR-070-memory-first-gate-spec-pipeline.md:25 — used here
- `Step 0.5` — .agents/architecture/ADR-070-memory-first-gate-spec-pipeline.md:31 — defined here
- `Step 1` — .agents/architecture/ADR-070-memory-first-gate-spec-pipeline.md:31 — used here
- `chestertons-fence` — .agents/architecture/ADR-070-memory-first-gate-spec-pipeline.md:33 — used here
- `memory` — .agents/architecture/ADR-070-memory-first-gate-spec-pipeline.md:33 — used here
- `exploring-knowledge-graph` — .agents/architecture/ADR-070-memory-first-gate-spec-pipeline.md:33 — used here
- `step0_5-halt` — .agents/architecture/ADR-070-memory-first-gate-spec-pipeline.md:34 — defined here
- `STEP-0.5-METRICS.md` — .agents/architecture/ADR-070-memory-first-gate-spec-pipeline.md:36 — defined here
- `Step 3` — .agents/architecture/ADR-070-memory-first-gate-spec-pipeline.md:37 — used here
- `Prior Art block` — .agents/architecture/ADR-070-memory-first-gate-spec-pipeline.md:38 — used here
- `adr-review debate gate` — .agents/architecture/ADR-070-memory-first-gate-spec-pipeline.md:78 — used here
- `Prior Art / Constraints` — .agents/architecture/ADR-070-memory-first-gate-spec-pipeline.md:100 — defined here
- `Step 6` — .agents/architecture/ADR-070-memory-first-gate-spec-pipeline.md:100 — used here
- `PRD` — .agents/architecture/ADR-070-memory-first-gate-spec-pipeline.md:101 — used here
- `Investigation Protocol table` — .agents/architecture/ADR-070-memory-first-gate-spec-pipeline.md:104 — used here
- `PriorArtBlock` — .agents/architecture/ADR-070-memory-first-gate-spec-pipeline.md:110 — used here
- `blast-radius entities` — .agents/architecture/ADR-070-memory-first-gate-spec-pipeline.md:111 — defined here
- `human mode` — .agents/architecture/ADR-070-memory-first-gate-spec-pipeline.md:111 — defined here
- `auto mode` — .agents/architecture/ADR-070-memory-first-gate-spec-pipeline.md:111 — defined here
- `coverage note` — .agents/architecture/ADR-070-memory-first-gate-spec-pipeline.md:116 — defined here
- `Step 9 check 9d` — .agents/architecture/ADR-070-memory-first-gate-spec-pipeline.md:118 — used here
- `step0-halt` — .agents/architecture/ADR-070-memory-first-gate-spec-pipeline.md:137 — used here
- `STEP-0-METRICS.md` — .agents/architecture/ADR-070-memory-first-gate-spec-pipeline.md:137 — used here
- `kill criteria` — .agents/architecture/ADR-070-memory-first-gate-spec-pipeline.md:185 — used here
- `REQ-016-13` — .agents/architecture/ADR-070-memory-first-gate-spec-pipeline.md:186 — used here

## Structure
- # ADR-070: Memory-First Gate Is a BLOCKING Step in the Spec Pipeline
- ## Status
- ## Date
- ## Context
- ### What Currently Exists
- ### Why Change Now
- ## Decision
- ## Prior Art Investigation
- ## Rationale
- ### Alternatives Considered
- ### Trade-offs
- ## Reversibility and Kill Criteria
- ## Vendor Lock-In
- ## Consequences
- ### Positive
- ### Negative
- ### Neutral
- ## Impact on Dependent Components
- ## Implementation Notes
- ## Related Decisions
- ## References
- ## Amendment 2026-07-27

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- missing-path · .agents/architecture/ADR-070-memory-first-gate-spec-pipeline.md:213 · References search_memory.py which does not exist at root or scripts/ (only test exists).
- missing-path · .agents/architecture/ADR-070-memory-first-gate-spec-pipeline.md:159 · References .claude/rules/philosophy-of-software-design.md which was moved to .claude/skills/software-engineering-library/references/philosophy-of-software-design.md (amended at lines 308-313).
- internal-contradiction · .agents/architecture/ADR-070-memory-first-gate-spec-pipeline.md:4,20 · Frontmatter date specifies 2026-07-27 while body ## Date specifies 2026-05-31 (date discrepancy due to subsequent amendment).
- doc-drift · .agents/architecture/ADR-070-memory-first-gate-spec-pipeline.md:3,9 · Frontmatter marks status: proposed while implemented: true and body states the gate is already fully implemented in .claude/commands/spec.md lines 142-354.

## Observations
Codifies the governance requirement that elevating advisory guidance to a BLOCKING gate requires an explicit ADR. Illustrates the tight coupling in rjm between specification requirements (`REQ-017`), command pipelines (`.claude/commands/spec.md` Step 0.5), skill-level contracts (`.claude/skills/memory/SKILL.md`), and telemetry (`STEP-0.5-METRICS.md`). Also demonstrates concrete kill criteria (borrowed from REQ-016: 30% false-positive rate, 20% bypass rate, 3 abandoned sessions) and fallback mechanisms for third-party tools (Forgetful MCP failing gracefully to Serena lexical search).

## Context cost
17304 bytes, ~4325 tokens.
