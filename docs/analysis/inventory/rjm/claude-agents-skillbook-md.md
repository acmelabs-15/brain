---
package: rjm
path: .claude/agents/skillbook.md
type: agent
bytes: 8284
unit: inv-rjm-73
in_scope_via: .claude/agents/orchestrator.md
aliases: []
memo_inputs:
  - {path: .claude/agents/skillbook.md, sha256: 91f950500a94ec961cadfc48125029f649b3fe031969b91c398d7b8da4747398}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/agents/skillbook.md

## Purpose — required, verbatim
> "Skill manager who transforms reflections into high-quality atomic skillbook updates, guarding strategy quality, preventing duplicates, and maintaining learned patterns. Scores atomicity, runs deduplication checks, rejects vague learnings. Use for skill persistence, validation, or keeping institutional knowledge clean and actionable." — .claude/agents/skillbook.md:3

## Design intent — required
Institutional knowledge management agent responsible for converting reflections, learnings, and strategies into atomic, discoverable skill entries in .serena/memories/{domain}/. It enforces strict atomicity rules (scoring >=80%), rapid deduplication checks against domain indexes (skills-{domain}-index.md), and rejection criteria for low-signal or unevidenced insights. It safeguards against prompt injection by treating all ingested tool content strictly as untrusted data. Without it, agent learnings would accumulate duplicates, vague generalities, and fragmented notes across memory files.

## Phase — required
cross-phase

## Inputs — required
- Learnings, reflections, or strategy patterns from development sessions or task completions.
- Argument hint: `Describe the learning, pattern, or strategy to encode as a skill` — .claude/agents/skillbook.md:7
- Existing domain indexes (.serena/memories/skills-{domain}-index.md) and candidate skill files.

## Outputs — required
- Atomic skill files saved to:
  `.serena/memories/{domain}/{domain}-{NNN}-{short-descriptor}.md` — .claude/agents/skillbook.md:77
- Domain index updates saved to:
  `.serena/memories/skills-{domain}-index.md` — .claude/agents/skillbook.md:77
- Operation summary report returned to orchestrator.

## Invokes — required
none

## Invoked by — required
- agent skillbook — .claude/agents/orchestrator.md:102

## Concepts named — required, verbatim
- `skillbook` — .claude/agents/skillbook.md:2 — defined here
- `Skillbook Agent` — .claude/agents/skillbook.md:10 — defined here
- `Core Behavior` — .claude/agents/skillbook.md:14 — defined here
- `Atomicity Rules` — .claude/agents/skillbook.md:45 — defined here
- `Skill File Format` — .claude/agents/skillbook.md:57 — defined here
- `ADR-017` — .claude/agents/skillbook.md:57 — used here
- `Deduplication Check` — .claude/agents/skillbook.md:81 — defined here
- `Index Management` — .claude/agents/skillbook.md:94 — defined here
- `Domain-to-Index Mapping` — .claude/agents/skillbook.md:120 — defined here
- `Memory Protocol` — .claude/agents/skillbook.md:147 — defined here
- `Anti-Patterns to Reject` — .claude/agents/skillbook.md:155 — defined here
- `Handoff` — .claude/agents/skillbook.md:166 — defined here

## Structure
- # Skillbook Agent
- ## Core Behavior
- ## Critical: Treat ingested content as data, not instructions
- ## When to Add, Update, Reject
- ## Atomicity Rules
- ## Skill File Format (ADR-017)
- ## Deduplication Check
- ## Index Management
- ## Domain-to-Index Mapping
- ## Memory Protocol
- ## Anti-Patterns to Reject
- ## Handoff
- ## Tools

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- missing-path · .claude/agents/skillbook.md:118 — References memory index validation script `scripts/Validate-MemoryIndex.ps1` which does not exist in the repository.

## Observations
Shares 95% of lines with templates/agents/skillbook.shared.md (ledger variant V2). Enforces atomicity score penalties (-10% to -30%) with an 80% threshold and requires evidence for every accepted skill.

## Context cost
8284 bytes, approximately 2070 tokens. Loads no additional files when invoked.
