---
package: rjm
path: templates/agents/architect.shared.md
type: agent
bytes: 30286
unit: inv-rjm-314
in_scope_via: docs/agent-catalog.md
aliases: []
memo_inputs:
  - {path: templates/agents/architect.shared.md, sha256: cc34d58497548aa34e8f5d926ac342c35bdccf70cc8a61e9d120d02b7c6900ff}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# templates/agents/architect.shared.md

## Purpose — required, verbatim
> "Technical authority on system design who guards architectural coherence, enforces patterns, and maintains boundaries. Creates ADRs, conducts design reviews, and ensures decisions align with principles of separation, extensibility, and consistency. Use for governance, trade-off analysis, and blueprints that protect long-term system health." — templates/agents/architect.shared.md:3

## Design intent — required
System design authority and architectural governance agent for cross-platform workflows. It establishes and protects long-term system coherence by enforcing architectural principles (consistency, simplicity, testability, extensibility, and separation of concerns) and maintaining Architectural Decision Records (ADRs) using the MADR 4.0 specification. Operating across pre-planning, plan/analysis, and post-implementation phases, it performs impact analysis, evaluates technical debt, challenges design violations, and conducts structured design reviews with machine-parseable YAML frontmatter enforced by CI gates (`APPROVED`, `NEEDS_CHANGES`, `NEEDS_ADR`, `BLOCKED`, `REJECTED`). It incorporates strategic reasoning models (Chesterton's fence, path dependence, second-system effect, core vs context, strangler fig, expand/contract, sacrificial architecture) and enforces rigorous precedent searches and reversibility criteria before approving ADR exceptions or design proposals.

## Phase — required
cross-phase

## Inputs — required
- Design decision, review request, or ADR topic via argument prompt: `argument-hint: Describe the design decision, review request, or ADR topic` — templates/agents/architect.shared.md:4
- Toolsets for editing and knowledge: `tools_vscode:` ($toolset:editor, $toolset:knowledge) — templates/agents/architect.shared.md:5-7, and `tools_copilot:` ($toolset:editor, $toolset:knowledge) — templates/agents/architect.shared.md:8-10
- Prior ADR catalog: `git grep -F -i -- "<topic>" .agents/architecture/` — templates/agents/architect.shared.md:72
- Strategic Serena memories: "Query these Serena memories when relevant:" — templates/agents/architect.shared.md:43
- Impact analysis requests from milestone-planner: "When milestone-planner requests impact analysis (during planning phase):" — templates/agents/architect.shared.md:103
- ADR exception requests: "When reviewing an ADR exception request, apply Chesterton's Fence analysis per ADR-053." — templates/agents/architect.shared.md:376
- Memory search queries: `mcp__cloudmcp-manager__memory-search_nodes` — templates/agents/architect.shared.md:536

## Outputs — required
- Impact analysis document: `.agents/planning/impact-analysis-architecture-[feature].md` — templates/agents/architect.shared.md:117
- Architectural Decision Records: `.agents/architecture/ADR-NNNN-[decision-name].md` — templates/agents/architect.shared.md:249
- Design review document: `.agents/architecture/DESIGN-REVIEW-[topic].md` — templates/agents/architect.shared.md:424
- Memory entities: `mcp__cloudmcp-manager__memory-create_entities` — templates/agents/architect.shared.md:543
- Mandatory routing for adr-review skill: `Skill(skill="adr-review", args="[path to ADR file]")` — templates/agents/architect.shared.md:758

## Invokes — required
- agent milestone-planner — templates/agents/architect.shared.md:732
- agent analyst — templates/agents/architect.shared.md:733
- agent high-level-advisor — templates/agents/architect.shared.md:734
- agent implementer — templates/agents/architect.shared.md:735
- agent roadmap — templates/agents/architect.shared.md:736
- agent critic — templates/agents/architect.shared.md:737
- skill adr-review — templates/agents/architect.shared.md:758

## Invoked by — required
- doc architect — docs/agent-catalog.md:17
- template architect — templates/AGENTS.md:169
- template architect.shared.md — templates/README.md:13

## Concepts named — required, verbatim
- `Style Guide Compliance` — templates/agents/architect.shared.md:14 — defined here
- `Core Identity` — templates/agents/architect.shared.md:31 — defined here
- `Activation Profile` — templates/agents/architect.shared.md:35 — defined here
- `Strategic Knowledge Available` — templates/agents/architect.shared.md:41 — defined here
- `Architecture Principles` — templates/agents/architect.shared.md:45 — defined here
- `chestertons-fence` — templates/agents/architect.shared.md:47 — used here
- `path-dependence` — templates/agents/architect.shared.md:48 — used here
- `core-vs-context` — templates/agents/architect.shared.md:49 — used here
- `strangler-fig-pattern` — templates/agents/architect.shared.md:50 — used here
- `conways-law` — templates/agents/architect.shared.md:54 — used here
- `second-system-effect` — templates/agents/architect.shared.md:55 — used here
- `cap-theorem` — templates/agents/architect.shared.md:56 — used here
- `Core Mission` — templates/agents/architect.shared.md:64 — defined here
- `Architecture Reasoning Protocol` — templates/agents/architect.shared.md:68 — defined here
- `ADR-precedent search` — templates/agents/architect.shared.md:78 — defined here
- `Ask Before vs Proceed With Default` — templates/agents/architect.shared.md:82 — defined here
- `Key Responsibilities` — templates/agents/architect.shared.md:92 — defined here
- `Impact Analysis Mode` — templates/agents/architect.shared.md:101 — defined here
- `Architectural Decision Records` — templates/agents/architect.shared.md:207 — defined here
- `Definition of Ready` — templates/agents/architect.shared.md:223 — defined here
- `Definition of Done` — templates/agents/architect.shared.md:235 — defined here
- `ADR Template` — templates/agents/architect.shared.md:247 — defined here
- `ADR Anti-Patterns to Avoid` — templates/agents/architect.shared.md:363 — defined here
- `ADR Exception Evaluation` — templates/agents/architect.shared.md:374 — defined here
- `ADR Review Checklist` — templates/agents/architect.shared.md:404 — defined here
- `Design Review Template` — templates/agents/architect.shared.md:420 — defined here
- `Status Definitions` — templates/agents/architect.shared.md:484 — defined here
- `CI Enforcement` — templates/agents/architect.shared.md:494 — defined here
- `ADR and Design Review Length Bounds` — templates/agents/architect.shared.md:501 — defined here
- `Architectural Principles` — templates/agents/architect.shared.md:514 — defined here
- `Constraints` — templates/agents/architect.shared.md:522 — defined here
- `Memory Protocol` — templates/agents/architect.shared.md:529 — defined here
- `Strategic Architecture Principles` — templates/agents/architect.shared.md:553 — defined here
- `Chesterton's Fence` — templates/agents/architect.shared.md:555 — defined here
- `Path Dependence` — templates/agents/architect.shared.md:566 — defined here
- `Second-System Effect` — templates/agents/architect.shared.md:582 — defined here
- `Core vs Context` — templates/agents/architect.shared.md:598 — defined here
- `Legacy Modernization Patterns` — templates/agents/architect.shared.md:609 — defined here
- `Strangler Fig Pattern` — templates/agents/architect.shared.md:611 — defined here
- `Expand/Contract` — templates/agents/architect.shared.md:634 — defined here
- `Sacrificial Architecture` — templates/agents/architect.shared.md:653 — defined here
- `Architecture Review Process` — templates/agents/architect.shared.md:672 — defined here
- `Pre-Planning Review` — templates/agents/architect.shared.md:674 — defined here
- `Plan/Analysis Review` — templates/agents/architect.shared.md:683 — defined here
- `Post-Implementation Review` — templates/agents/architect.shared.md:692 — defined here
- `Code Organization Review` — templates/agents/architect.shared.md:701 — defined here
- `Output Location` — templates/agents/architect.shared.md:721 — defined here
- `Handoff Options` — templates/agents/architect.shared.md:728 — defined here
- `Handoff Protocol` — templates/agents/architect.shared.md:739 — defined here
- `Self-Critique Pass` — templates/agents/architect.shared.md:774 — defined here
- `Execution Mindset` — templates/agents/architect.shared.md:814 — defined here

## Structure
- # Architect Agent — templates/agents/architect.shared.md:12
- ## Style Guide Compliance — templates/agents/architect.shared.md:14
- ## Core Identity — templates/agents/architect.shared.md:31
- ## Activation Profile — templates/agents/architect.shared.md:35
- ## Strategic Knowledge Available — templates/agents/architect.shared.md:41
- ## Core Mission — templates/agents/architect.shared.md:64
- ## Architecture Reasoning Protocol — templates/agents/architect.shared.md:68
- ## Ask Before vs Proceed With Default — templates/agents/architect.shared.md:82
- ## Key Responsibilities — templates/agents/architect.shared.md:92
- ## Impact Analysis Mode — templates/agents/architect.shared.md:101
- ### Analyze Architecture Impact — templates/agents/architect.shared.md:105
- ### Impact Analysis Deliverable — templates/agents/architect.shared.md:115
- ## Architectural Decision Records (ADRs) — templates/agents/architect.shared.md:207
- ### When to Create an ADR — templates/agents/architect.shared.md:211
- ### Definition of Ready (START) — templates/agents/architect.shared.md:223
- ### Definition of Done (ecADR) — templates/agents/architect.shared.md:235
- ### ADR Template (MADR 4.0) — templates/agents/architect.shared.md:247
- ### ADR Anti-Patterns to Avoid — templates/agents/architect.shared.md:363
- ### ADR Exception Evaluation (BLOCKING) — templates/agents/architect.shared.md:374
- ### ADR Review Checklist — templates/agents/architect.shared.md:404
- ## Design Review Template (MANDATORY) — templates/agents/architect.shared.md:420
- ### Status Definitions — templates/agents/architect.shared.md:484
- ### CI Enforcement — templates/agents/architect.shared.md:494
- ## ADR and Design Review Length Bounds — templates/agents/architect.shared.md:501
- ## Architectural Principles — templates/agents/architect.shared.md:514
- ## Constraints — templates/agents/architect.shared.md:522
- ## Memory Protocol — templates/agents/architect.shared.md:529
- ## Strategic Architecture Principles — templates/agents/architect.shared.md:553
- ### Chesterton's Fence (Before Removing) — templates/agents/architect.shared.md:555
- ### Path Dependence (Constraint Recognition) — templates/agents/architect.shared.md:566
- ### Second-System Effect (Avoiding Over-Engineering) — templates/agents/architect.shared.md:582
- ### Core vs Context (Investment Prioritization) — templates/agents/architect.shared.md:598
- ## Legacy Modernization Patterns — templates/agents/architect.shared.md:609
- ### Strangler Fig Pattern (Incremental Migration) — templates/agents/architect.shared.md:611
- ### Expand/Contract (Safe Schema Evolution) — templates/agents/architect.shared.md:634
- ### Sacrificial Architecture (Planned Obsolescence) — templates/agents/architect.shared.md:653
- ## Architecture Review Process — templates/agents/architect.shared.md:672
- ### Pre-Planning Review — templates/agents/architect.shared.md:674
- ### Plan/Analysis Review — templates/agents/architect.shared.md:683
- ### Post-Implementation Review — templates/agents/architect.shared.md:692
- ### Code Organization Review — templates/agents/architect.shared.md:701
- #### Questions to Ask — templates/agents/architect.shared.md:705
- #### Anti-Patterns to Flag — templates/agents/architect.shared.md:713
- ## Output Location — templates/agents/architect.shared.md:721
- ## Handoff Options — templates/agents/architect.shared.md:728
- ## Handoff Protocol — templates/agents/architect.shared.md:739
- ### ADR Creation/Update Protocol (BLOCKING) — templates/agents/architect.shared.md:743
- ### Non-ADR Review Handoff — templates/agents/architect.shared.md:766
- ## Self-Critique Pass (MANDATORY) — templates/agents/architect.shared.md:774
- ### Step 1: Identify Weaknesses — templates/agents/architect.shared.md:778
- ### Step 2: Address Each Weakness — templates/agents/architect.shared.md:791
- ### Step 3: Flag Unresolved Risks — templates/agents/architect.shared.md:800
- ## Execution Mindset — templates/agents/architect.shared.md:814

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `missing-path` · templates/agents/architect.shared.md:94 · Cites `system-architecture.md` as master architecture document, but file does not exist in repository root.
- `missing-path` · templates/agents/architect.shared.md:499 · Cites `synthesis-panel-gate.yml` instead of its actual workflow path `.github/workflows/synthesis-panel-gate.yml`.

## Observations
- Comprehensive architecture governance framework: integrates MADR 4.0 template, START (Definition of Ready), ecADR (Definition of Done), and YAML frontmatter design reviews.
- Strict length bounding: caps ADR context (3 sentences), options (5 options), pros/cons (4 bullets), review executive summaries (3 sentences), issues (7 per tier), and recommendations (5 items) to prevent document bloat.
- Rigorous ADR exception enforcement: requires quoting original rationale, documenting at least two failed compliance attempts, and strict reversibility before an exception can be approved.
- Variant relation: shares 69% of lines with `.claude/agents/architect.md` (ledger VARIANT V29).

## Context cost
30286 bytes (approx. 7570 tokens).
