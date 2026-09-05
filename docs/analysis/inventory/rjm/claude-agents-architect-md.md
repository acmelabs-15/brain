---
package: rjm
path: .claude/agents/architect.md
type: agent
bytes: 27643
unit: inv-rjm-64
in_scope_via: .claude/commands/test.md
aliases: []
memo_inputs:
  - {path: .claude/agents/architect.md, sha256: b109baee5c61acd4fd24d1a6b2832b7f77749be8424c85b1fc054216c42cd5e1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/agents/architect.md

## Purpose — required, verbatim
> "Technical authority on system design who guards architectural coherence, enforces patterns, and maintains boundaries. Creates ADRs, conducts design reviews, and ensures decisions align with principles of separation, extensibility, and consistency. Use for governance, trade-off analysis, and blueprints that protect long-term system health." — .claude/agents/architect.md:3

## Design intent — required
Strategic technical authority and governance subagent that preserves architectural coherence across the repository. It enforces core system design principles (consistency, simplicity, testability, extensibility, separation), conducts multi-phase architecture reviews (pre-planning, plan/analysis, post-implementation), and authoritatively logs decisions using MADR 4.0 Architectural Decision Records (ADRs). It prevents architectural drift, unchecked technical debt, and vendor lock-in through mandatory reversibility assessments, formal exception evaluation criteria (Chesterton's Fence), and CI-enforced design review verdicts (APPROVED, NEEDS_CHANGES, NEEDS_ADR, BLOCKED, REJECTED).

## Phase — required
cross-phase

## Inputs — required
- Design decision topic, review request, or ADR subject via argument prompt (`argument-hint: Describe the design decision, review request, or ADR topic` — .claude/agents/architect.md:9)
- Codebase architecture files via read-only tools: `Read`, `Grep`, `Glob` (.claude/agents/architect.md:39)
- External architectural pattern research via `WebSearch` (.claude/agents/architect.md:41)
- Context and past decisions via Memory Router (`search_memory.py`) and Serena MCP tools (.claude/agents/architect.md:42-48)
- Existing ADRs in `.agents/architecture/ADR-*.md` (.claude/agents/architect.md:57, 63)
- Impact analysis requests from `milestone-planner` (.claude/agents/architect.md:86)
- PRs adding new directories or relocating files for code organization review (.claude/agents/architect.md:534)

## Outputs — required
- ADR files adhering to MADR 4.0 template in `.agents/architecture/ADR-NNNN-[decision-name].md` (.claude/agents/architect.md:234, 608)
- Impact analysis documents in `.agents/planning/impact-analysis-architecture-[feature].md` (.claude/agents/architect.md:102)
- Formal Design Review documents with YAML frontmatter in `.agents/architecture/DESIGN-REVIEW-[topic].md` (.claude/agents/architect.md:413, 609)
- Memory entries via Serena write tools (`adr-[number]-[topic]`) (.claude/agents/architect.md:565-568)
- Mandatory orchestrator routing commands requiring `adr-review` invocation before downstream agent execution (`Skill(skill="adr-review", args="[path to ADR file]")`) (.claude/agents/architect.md:638-644)

## Invokes — required
- script search_memory.py — .claude/agents/architect.md:43
- skill adr-review — .claude/agents/architect.md:641
- agent milestone-planner — .claude/agents/architect.md:615
- agent analyst — .claude/agents/architect.md:616
- agent high-level-advisor — .claude/agents/architect.md:617
- agent implementer — .claude/agents/architect.md:618
- agent roadmap — .claude/agents/architect.md:619
- agent critic — .claude/agents/architect.md:620
- script pre_pr.py — .claude/agents/architect.md:487
- script check_design_review_gate.py — .claude/agents/architect.md:488

## Invoked by — required
- command architect — .claude/commands/test.md:110
- doc architect — .agents/AGENT-SYSTEM.md:466
- doc architect — .agents/architecture/ADR-039-agent-model-cost-optimization.md:221
- reference architect — .claude/skills/adr-review/references/agent-prompts.md:22
- reference architect — .claude/skills/adr-review/references/debate-protocol.md:91
- skill architect — .claude/skills/cva-analysis/SKILL.md:289
- skill architect — .claude/skills/slashcommandcreator/SKILL.md:107

## Concepts named — required, verbatim
- `Architecture Reasoning Protocol` — .claude/agents/architect.md:53 — defined here
- `ADR-precedent search` — .claude/agents/architect.md:63 — defined here
- `Impact Analysis Mode` — .claude/agents/architect.md:86 — defined here
- `Architectural Decision Records` — .claude/agents/architect.md:192 — defined here
- `Definition of Ready` — .claude/agents/architect.md:208 — defined here
- `Definition of Done` — .claude/agents/architect.md:220 — defined here
- `MADR 4.0` — .claude/agents/architect.md:232 — used here
- `ADR Anti-Patterns` — .claude/agents/architect.md:307 — defined here
- `Chesterton's Fence` — .claude/agents/architect.md:320 — used here
- `ADR Exception Evaluation` — .claude/agents/architect.md:318 — defined here
- `Reversibility Assessment` — .claude/agents/architect.md:356 — defined here
- `Vendor Lock-in Assessment` — .claude/agents/architect.md:377 — defined here
- `Design Review Template` — .claude/agents/architect.md:409 — defined here
- `CI Enforcement` — .claude/agents/architect.md:483 — defined here
- `Pre-Planning Review` — .claude/agents/architect.md:505 — defined here
- `Plan/Analysis Review` — .claude/agents/architect.md:514 — defined here
- `Post-Implementation Review` — .claude/agents/architect.md:523 — defined here
- `Code Organization Review` — .claude/agents/architect.md:532 — defined here
- `Memory Protocol` — .claude/agents/architect.md:552 — defined here
- `Degraded Mode Protocol` — .claude/agents/architect.md:570 — defined here
- `Architectural Principles` — .claude/agents/architect.md:589 — defined here
- `ADR Creation/Update Protocol` — .claude/agents/architect.md:626 — defined here
- `Self-Critique Pass` — .claude/agents/architect.md:657 — defined here

## Structure
- # Architect Agent — .claude/agents/architect.md:11
- ## Style Guide Compliance — .claude/agents/architect.md:13
- ## Core Identity — .claude/agents/architect.md:25
- ## Activation Profile — .claude/agents/architect.md:29
- ## Claude Code Tools — .claude/agents/architect.md:35
- ## Core Mission — .claude/agents/architect.md:49
- ## Architecture Reasoning Protocol — .claude/agents/architect.md:53
- ## Ask Before vs Proceed With Default — .claude/agents/architect.md:67
- ## Key Responsibilities — .claude/agents/architect.md:77
- ## Impact Analysis Mode — .claude/agents/architect.md:86
- ### Analyze Architecture Impact — .claude/agents/architect.md:90
- ### Impact Analysis Deliverable — .claude/agents/architect.md:100
- ## Architectural Decision Records (ADRs) — .claude/agents/architect.md:192
- ### When to Create an ADR — .claude/agents/architect.md:196
- ### Definition of Ready (START) — .claude/agents/architect.md:208
- ### Definition of Done (ecADR) — .claude/agents/architect.md:220
- ### ADR Template (MADR 4.0) — .claude/agents/architect.md:232
- ### ADR Anti-Patterns to Avoid — .claude/agents/architect.md:307
- ### ADR Exception Evaluation (BLOCKING) — .claude/agents/architect.md:318
- ### ADR Review Checklist — .claude/agents/architect.md:339
- ## Reversibility Assessment — .claude/agents/architect.md:356
- ### Reversibility Checklist — .claude/agents/architect.md:360
- ### Vendor Lock-in Section (Required in ADRs) — .claude/agents/architect.md:372
- ### Lock-in Levels Defined — .claude/agents/architect.md:399
- ## Design Review Template (MANDATORY) — .claude/agents/architect.md:409
- ### Status Definitions — .claude/agents/architect.md:473
- ### CI Enforcement — .claude/agents/architect.md:483
- ## ADR and Design Review Length Bounds — .claude/agents/architect.md:490
- ## Architecture Review Process — .claude/agents/architect.md:503
- ### Pre-Planning Review — .claude/agents/architect.md:505
- ### Plan/Analysis Review — .claude/agents/architect.md:514
- ### Post-Implementation Review — .claude/agents/architect.md:523
- ### Code Organization Review — .claude/agents/architect.md:532
- #### Questions to Ask — .claude/agents/architect.md:536
- #### Anti-Patterns to Flag — .claude/agents/architect.md:543
- ## Memory Protocol — .claude/agents/architect.md:552
- ## Degraded Mode Protocol — .claude/agents/architect.md:570
- ## Architectural Principles — .claude/agents/architect.md:589
- ## Constraints — .claude/agents/architect.md:597
- ## Output Location — .claude/agents/architect.md:604
- ## Handoff Options — .claude/agents/architect.md:611
- ## Handoff Protocol — .claude/agents/architect.md:622
- ### ADR Creation/Update Protocol (BLOCKING) — .claude/agents/architect.md:626
- ### Non-ADR Review Handoff — .claude/agents/architect.md:648
- ## Self-Critique Pass (MANDATORY) — .claude/agents/architect.md:657
- ### Step 1: Identify Weaknesses — .claude/agents/architect.md:661
- ### Step 2: Address Each Weakness — .claude/agents/architect.md:674
- ### Step 3: Flag Unresolved Risks — .claude/agents/architect.md:683
- ## Execution Mindset — .claude/agents/architect.md:697

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `missing-path` · .claude/agents/architect.md:79 · Cites master architecture document `system-architecture.md`, which does not exist anywhere in `sources/rjm/`.
- `missing-path` · .claude/agents/architect.md:582 · Fallback in Degraded Mode Protocol directs writing temporary markdown to `.agents/notes/`, but that directory does not exist in `sources/rjm/`.

## Observations
- Rigorous decision gates: mandates START criteria for Definition of Ready (Stakeholders, Time, Alternatives, Requirements, Template) and ecADR criteria for Definition of Done (Evidence, Criteria, Agreement, Documentation, Realization/Review).
- Reversibility and vendor lock-in checklists ensure decisions are not one-way doors without exit strategies.
- Mandatory blocking gate on ADR changes: requires the orchestrator to invoke the `adr-review` multi-agent debate skill before any downstream planning or implementation can begin.
- Forms VARIANT pair V29 with `templates/agents/architect.shared.md` (69% shared lines), where the template includes extended strategic frameworks (Chesterton's Fence, Path Dependence, Core vs Context, Wardley Mapping, Cynefin, Three Horizons) and legacy migration strategies, while the Claude Code version includes local tool configurations and reversibility checklists.

## Context cost
27643 bytes. Approximately 7,000 tokens for the agent prompt. Configured with model `opus` and `isolation_required: true`, requiring an isolated context window for architectural governance decisions.
