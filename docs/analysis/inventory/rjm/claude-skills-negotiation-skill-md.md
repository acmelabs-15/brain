---
package: rjm
path: .claude/skills/negotiation/SKILL.md
type: skill
bytes: 5293
unit: inv-rjm-127
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .claude/skills/negotiation/SKILL.md, sha256: 9753ad450c2b3aa5ac0cdda0c7d9a429dd82e7c8227ac35b43eda1bfa8b02e41}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/negotiation/SKILL.md

## Purpose — required, verbatim
> "Codifies deal intelligence behavior. Use when reviewing any offer or designing how an agentic system should analyze and counter-propose." — .claude/skills/negotiation/SKILL.md:14-15

## Design intent — required
Domain skill providing deal intelligence, offer analysis, and counter-proposal drafting workflows for human operators and multi-agent systems. Addresses the problem of suboptimal deal acceptance, psychological anchor traps, and unquantified value leaks by enforcing the 5-phase RADAR protocol (Read, Analyze, Design, Assess, Review) and requiring senior model tier routing. It mandates explicit dollar-denominated value gap quantification before qualitative evaluation, enforces Perception-Context-Permission (PCP) framing, enforces multi-term concession bundling, and mandates explicit human approval gates before counter-proposals are transmitted. Without it, autonomous agents and human negotiators risk reactive countering from disadvantaged anchors, conceding single dimensions without reciprocity, and leaving substantial value uncaptured.

## Phase — required
cross-phase

## Inputs — required
- Trigger phrases: `review this offer`, `what's the value gap`, `draft a counter`, `should I walk`, `anchor first or wait` (.claude/skills/negotiation/SKILL.md:22-26)
- Commercial or operational offers across real estate, compensation, vendor agreements, and resource allocation (.claude/skills/negotiation/SKILL.md:22)
- Reference skill rules and templates from `references/skills.md` (.claude/skills/negotiation/SKILL.md:16, 48, 123)

## Outputs — required
- Formatted deal analysis and counter-proposal marked DRAFT (.claude/skills/negotiation/SKILL.md:65, 83)
- Populated BATNA worksheet prior to first counter (.claude/skills/negotiation/SKILL.md:79)
- Value gap quantification block (.claude/skills/negotiation/SKILL.md:73)

## Invokes — required
- reference skills.md — .claude/skills/negotiation/SKILL.md:16
- reference skills.md — .claude/skills/negotiation/SKILL.md:48
- reference skills.md — .claude/skills/negotiation/SKILL.md:123

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `RADAR` — .claude/skills/negotiation/SKILL.md:4 — used here
- `Phase 1: Read` — .claude/skills/negotiation/SKILL.md:39 — defined here
- `Phase 2: Analyze` — .claude/skills/negotiation/SKILL.md:44 — defined here
- `Phase 3: Design` — .claude/skills/negotiation/SKILL.md:50 — defined here
- `Phase 4: Assess` — .claude/skills/negotiation/SKILL.md:56 — defined here
- `Phase 5: Review` — .claude/skills/negotiation/SKILL.md:63 — defined here
- `PCP framing` — .claude/skills/negotiation/SKILL.md:52 — used here
- `ZOPA` — .claude/skills/negotiation/SKILL.md:46 — used here
- `BATNA` — .claude/skills/negotiation/SKILL.md:46 — used here
- `Skill-Negotiation-001` — .claude/skills/negotiation/SKILL.md:48 — used here
- `Skill-Negotiation-003` — .claude/skills/negotiation/SKILL.md:54 — used here
- `Skill-Negotiation-008` — .claude/skills/negotiation/SKILL.md:60 — used here
- `Skill-Negotiation-009` — .claude/skills/negotiation/SKILL.md:61 — used here
- `Skill-Negotiation-010` — .claude/skills/negotiation/SKILL.md:66 — used here
- `Skill-Negotiation-005` — .claude/skills/negotiation/SKILL.md:81 — used here
- `Skill-Negotiation-006` — .claude/skills/negotiation/SKILL.md:86 — used here
- `Skill-Negotiation-007` — .claude/skills/negotiation/SKILL.md:76 — used here
- `Anthropic Project Deal` — .claude/skills/negotiation/SKILL.md:9 — used here

## Structure
- `# Negotiation Skill` — .claude/skills/negotiation/SKILL.md:12
- `## Triggers` — .claude/skills/negotiation/SKILL.md:18
- `## Process` — .claude/skills/negotiation/SKILL.md:34
- `### Phase 1: Read` — .claude/skills/negotiation/SKILL.md:39
- `### Phase 2: Analyze` — .claude/skills/negotiation/SKILL.md:44
- `### Phase 3: Design` — .claude/skills/negotiation/SKILL.md:50
- `### Phase 4: Assess` — .claude/skills/negotiation/SKILL.md:56
- `### Phase 5: Review` — .claude/skills/negotiation/SKILL.md:63
- `## Verification` — .claude/skills/negotiation/SKILL.md:69
- `## Anti-Patterns` — .claude/skills/negotiation/SKILL.md:88
- `## Extension Points` — .claude/skills/negotiation/SKILL.md:108
- `## References` — .claude/skills/negotiation/SKILL.md:121

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `orphan` · .claude/skills/negotiation/SKILL.md:1 · Skill is not invoked by any lifecycle command or entry point; it functions as a standalone domain intelligence skill triggered directly by user prompts or through its counterpart agent `.claude/agents/negotiation.md`.

## Observations
- Enforces human-in-the-loop safety: All outputs must be labeled DRAFT and await explicit human approval before transmission (.claude/skills/negotiation/SKILL.md:65, 83).
- Incorporates agent model routing constraints: Mandates senior-tier models (e.g. Opus) based on Project Deal empirical evidence showing that model capability differences directly determine deal value extraction, while prompting style does not compensate (.claude/skills/negotiation/SKILL.md:100-103, 118).
- Pairs with dedicated counterpart agent `.claude/agents/negotiation.md` which shares the same underlying domain and literature citations.

## Context cost
5293 bytes (~1323 tokens) for SKILL.md.
Combined with reference `references/skills.md` (11804 bytes), total skill bundle context is 17097 bytes (~4274 tokens).
