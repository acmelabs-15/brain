---
package: rjm
path: .agents/archive/planning/PRD-skills-index-registry.md
type: agent
bytes: 21638
unit: inv-rjm-53
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .agents/archive/planning/PRD-skills-index-registry.md, sha256: 8c7296bd5c209f7cfbe45d6c293c42e9f69f47807850313b34affcec7b5fb1b9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .agents/archive/planning/PRD-skills-index-registry.md

## Purpose — required, verbatim
> "This PRD defines a Skills Index Registry to enable O(1) skill lookup by ID, establish consistent naming conventions, and provide skill lifecycle governance." — .agents/archive/planning/PRD-skills-index-registry.md:20

## Design intent — required
Addresses the O(n) search scalability bottleneck of agent skill discovery across 65+ memory files in `.serena/memories/` by establishing a centralized markdown index (`skills-index.md`). Defines an O(1) lookup structure with quick-reference tables, strict `Skill-{Domain}-{Number}` ID naming conventions, domain groupings, and a 3-state lifecycle (Draft, Active, Deprecated). Documents the unanimous 10-agent review rejecting the "Semantic Slug Protocol" in favor of numeric IDs due to Serena MCP abstraction, low migration risk, and lexical activation vocabulary optimization.

## Phase — required
none (internal PRD artifact under .agents/archive/planning/, representing rjm:spec / rjm:plan activities)

## Inputs — required
- Memory files in `.serena/memories/` (65+ files across collections `skills-{domain}.md` and atomic files `skill-{domain}-{number}-{name}.md`) (`.agents/archive/planning/PRD-skills-index-registry.md:13-16`)
- Serena MCP memory tool primitives (`mcp__serena__list_memories`, `mcp__serena__read_memory`, `mcp__serena__write_memory`) (`.agents/archive/planning/PRD-skills-index-registry.md:18, 353`)
- GitHub Issue #581 (`.agents/archive/planning/PRD-skills-index-registry.md:9`)
- "Semantic Slug Protocol" proposal evaluated in agent review (`.agents/archive/planning/PRD-skills-index-registry.md:384`)
- 10-agent consensus inputs: Critic, Analyst, Implementer, QA, Orchestrator, Retrospective, Skillbook, Memory, DevOps, Security (`.agents/archive/planning/PRD-skills-index-registry.md:394-408`)

## Outputs — required
- Central skills registry file `.serena/memories/skills-index.md` (`.agents/archive/planning/PRD-skills-index-registry.md:50`)
- Standardized skill ID format `Skill-{Domain}-{Number}` (`.agents/archive/planning/PRD-skills-index-registry.md:120`)
- Quick-reference tables grouped by domain (`.agents/archive/planning/PRD-skills-index-registry.md:56-73`)
- Deprecated skills registry section (`.agents/archive/planning/PRD-skills-index-registry.md:107-113`)

## Invokes — required
- doc skills-governance — .agents/archive/planning/PRD-skills-index-registry.md:461
- doc skills-documentation — .agents/archive/planning/PRD-skills-index-registry.md:462
- doc skill-documentation-004-pattern-consistency — .agents/archive/planning/PRD-skills-index-registry.md:463
- doc skills-index.md — .agents/archive/planning/PRD-skills-index-registry.md:466
- doc skills-analysis — .agents/archive/planning/PRD-skills-index-registry.md:227
- doc skill-analysis-001-comprehensive-analysis-standard — .agents/archive/planning/PRD-skills-index-registry.md:233

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `PRD` — .agents/archive/planning/PRD-skills-index-registry.md:1 — used here
- `Skills Index Registry` — .agents/archive/planning/PRD-skills-index-registry.md:1 — defined here
- `10-Agent Consensus` — .agents/archive/planning/PRD-skills-index-registry.md:5 — defined here
- `mcp__serena__list_memories` — .agents/archive/planning/PRD-skills-index-registry.md:18 — used here
- `mcp__serena__read_memory` — .agents/archive/planning/PRD-skills-index-registry.md:18 — used here
- `O(1) skill lookup` — .agents/archive/planning/PRD-skills-index-registry.md:20 — defined here
- `skill lifecycle governance` — .agents/archive/planning/PRD-skills-index-registry.md:20 — defined here
- `Quick Reference Table` — .agents/archive/planning/PRD-skills-index-registry.md:54 — defined here
- `Skill ID` — .agents/archive/planning/PRD-skills-index-registry.md:60 — defined here
- `Domain Grouping` — .agents/archive/planning/PRD-skills-index-registry.md:77 — defined here
- `Deprecated Skills Section` — .agents/archive/planning/PRD-skills-index-registry.md:100 — defined here
- `Skill ID Naming Convention` — .agents/archive/planning/PRD-skills-index-registry.md:116 — defined here
- `Skill Lifecycle States` — .agents/archive/planning/PRD-skills-index-registry.md:143 — defined here
- `Draft` — .agents/archive/planning/PRD-skills-index-registry.md:147 — defined here
- `Active` — .agents/archive/planning/PRD-skills-index-registry.md:148 — defined here
- `Deprecated` — .agents/archive/planning/PRD-skills-index-registry.md:149 — defined here
- `validation count` — .agents/archive/planning/PRD-skills-index-registry.md:163 — defined here
- `Atomicity score` — .agents/archive/planning/PRD-skills-index-registry.md:164 — defined here
- `Skill Creation Process` — .agents/archive/planning/PRD-skills-index-registry.md:166 — defined here
- `Skill Deprecation Process` — .agents/archive/planning/PRD-skills-index-registry.md:190 — defined here
- `Collection Files` — .agents/archive/planning/PRD-skills-index-registry.md:216 — defined here
- `Activation Vocabulary Principle` — .agents/archive/planning/PRD-skills-index-registry.md:302 — defined here
- `Semantic Slug Protocol` — .agents/archive/planning/PRD-skills-index-registry.md:380 — used here
- `Disagree and Commit` — .agents/archive/planning/PRD-skills-index-registry.md:417 — used here
- `Skill ID Validation Gate` — .agents/archive/planning/PRD-skills-index-registry.md:436 — defined here
- `Index Integrity Check` — .agents/archive/planning/PRD-skills-index-registry.md:437 — defined here

## Structure
- # PRD: Skills Index Registry — .agents/archive/planning/PRD-skills-index-registry.md:1
- ## Introduction/Overview — .agents/archive/planning/PRD-skills-index-registry.md:11
- ## Goals — .agents/archive/planning/PRD-skills-index-registry.md:22
- ## Non-Goals (Out of Scope) — .agents/archive/planning/PRD-skills-index-registry.md:30
- ## User Stories — .agents/archive/planning/PRD-skills-index-registry.md:38
- ## Functional Requirements — .agents/archive/planning/PRD-skills-index-registry.md:46
- ### FR-1: Skills Index File Location — .agents/archive/planning/PRD-skills-index-registry.md:48
- ### FR-2: Quick Reference Table — .agents/archive/planning/PRD-skills-index-registry.md:54
- ### FR-3: Domain Grouping — .agents/archive/planning/PRD-skills-index-registry.md:77
- ### FR-4: Deprecated Skills Section — .agents/archive/planning/PRD-skills-index-registry.md:100
- ### FR-5: Skill ID Naming Convention — .agents/archive/planning/PRD-skills-index-registry.md:116
- ### FR-6: Skill Lifecycle States — .agents/archive/planning/PRD-skills-index-registry.md:143
- ### FR-7: Skill Creation Process — .agents/archive/planning/PRD-skills-index-registry.md:166
- ### FR-8: Skill Deprecation Process — .agents/archive/planning/PRD-skills-index-registry.md:190
- ### FR-9: Collection Files Handling — .agents/archive/planning/PRD-skills-index-registry.md:216
- ### FR-10: Index Maintenance — .agents/archive/planning/PRD-skills-index-registry.md:238
- ## Design Considerations — .agents/archive/planning/PRD-skills-index-registry.md:251
- ### UI/UX Requirements — .agents/archive/planning/PRD-skills-index-registry.md:253
- ### Table Readability — .agents/archive/planning/PRD-skills-index-registry.md:257
- ## Technical Considerations — .agents/archive/planning/PRD-skills-index-registry.md:268
- ### Performance — .agents/archive/planning/PRD-skills-index-registry.md:270
- ### Token Efficiency Trade-offs — .agents/archive/planning/PRD-skills-index-registry.md:285
- ### Activation Vocabulary Principle — .agents/archive/planning/PRD-skills-index-registry.md:302
- ### Scalability — .agents/archive/planning/PRD-skills-index-registry.md:341
- ### Backwards Compatibility — .agents/archive/planning/PRD-skills-index-registry.md:348
- ### Dependencies — .agents/archive/planning/PRD-skills-index-registry.md:351
- ## Success Metrics — .agents/archive/planning/PRD-skills-index-registry.md:356
- ### Primary Metrics — .agents/archive/planning/PRD-skills-index-registry.md:358
- ### Secondary Metrics — .agents/archive/planning/PRD-skills-index-registry.md:364
- ### Validation Criteria — .agents/archive/planning/PRD-skills-index-registry.md:370
- ## Agent Discussion: Semantic Slug Protocol Review — .agents/archive/planning/PRD-skills-index-registry.md:380
- ### Context — .agents/archive/planning/PRD-skills-index-registry.md:382
- ### 10-Agent Review — .agents/archive/planning/PRD-skills-index-registry.md:392
- ### Unanimous Findings — .agents/archive/planning/PRD-skills-index-registry.md:409
- ### Decision: APPROVED (Disagree and Commit) — .agents/archive/planning/PRD-skills-index-registry.md:417
- ### Security Recommendations (from Security Agent) — .agents/archive/planning/PRD-skills-index-registry.md:432
- ## Open Questions — .agents/archive/planning/PRD-skills-index-registry.md:440
- ## Assumptions — .agents/archive/planning/PRD-skills-index-registry.md:451
- ## References — .agents/archive/planning/PRD-skills-index-registry.md:459
- ## Appendix: Example Index Structure — .agents/archive/planning/PRD-skills-index-registry.md:468

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- missing-path · .agents/archive/planning/PRD-skills-index-registry.md:466 · Target file `.serena/memories/skills-index.md` falls under Serena memory boundary excluded from lifecycle synthesis scope.
- internal-contradiction · .agents/archive/planning/PRD-skills-index-registry.md:475 · Appendix example states "Total Active Skills: 65" and "Total Deprecated Skills: 1", but FR-10 and Section 373 state all 65 existing skills are active.

## Observations
Contains an insightful theoretical formulation of the "Activation Vocabulary Principle" (lines 302-330), explaining how LLMs map tokens into associative vector spaces and why 5-word keyword sets in skill names/summaries maximize selection probability under lexical search without vector embeddings. Also documents rjm's 10-agent consensus decision review process (Critic, Analyst, Implementer, QA, Orchestrator, Retrospective, Skillbook, Memory, DevOps, Security) with explicit "Disagree and Commit" outcomes.

## Context cost
21638 bytes, ~5400 tokens. Loads no external files directly.
