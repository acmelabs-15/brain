---
package: rjm
path: .claude/skills/adr-review/references/zimmermann-review-guidance.md
type: reference
bytes: 6473
unit: inv-rjm-77
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .claude/skills/adr-review/references/zimmermann-review-guidance.md, sha256: 2b8d3a21a4e0a2a8cd0766bfbe1b605752200470c4f6f94d189d2dbb625e0cfb}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/adr-review/references/zimmermann-review-guidance.md

## Purpose — required, verbatim
> "Review practices, anti-patterns, and checklists adapted from Olaf Zimmermann's \"How to Review ADRs\", subtitled \"and How Not To\" (2023, updated 2025)." — .claude/skills/adr-review/references/zimmermann-review-guidance.md:3

## Design intent — required
Adapts Olaf Zimmermann's architectural decision review methodology into concrete guidance for automated multi-agent debate. It defines three review perspectives (Peer/Coach, Stakeholder, Design Authority), 14 good review practices spanning scope, content, style, and actionability, seven review anti-patterns with detection signals (Pass Through, Copy Edit, Siding/Dead End, Self Promotion, Power Game, Offended Reaction, Groundhog Day), a mandatory 7-question review checklist, a 5-point Reviewer Pledge, and the CALM benefits framework. Without it, reviewing agents would lack an objective, academic standard of quality, leading to superficial grammar edits, emotional defenses, or ungrounded authority claims.

## Phase — required
none

## Inputs — required
- Draft ADR marked ready for review — .claude/skills/adr-review/references/zimmermann-review-guidance.md:19
- Review areas and scope (content review vs. template conformance) — .claude/skills/adr-review/references/zimmermann-review-guidance.md:19
- ecADR Definition of Done criteria reference (`../../adr-generator/references/ad-quality-frameworks.md`) — .claude/skills/adr-review/references/zimmermann-review-guidance.md:69

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- skill adr-review — .claude/skills/adr-review/SKILL.md:271

## Concepts named — required, verbatim
- `Three Review Perspectives` — .claude/skills/adr-review/references/zimmermann-review-guidance.md:5 — defined here
- `Peer/Coach` — .claude/skills/adr-review/references/zimmermann-review-guidance.md:9 — defined here
- `Stakeholder` — .claude/skills/adr-review/references/zimmermann-review-guidance.md:10 — defined here
- `Design Authority` — .claude/skills/adr-review/references/zimmermann-review-guidance.md:11 — defined here
- `14 Good Review Practices` — .claude/skills/adr-review/references/zimmermann-review-guidance.md:15 — defined here
- `Seven Review Anti-Patterns` — .claude/skills/adr-review/references/zimmermann-review-guidance.md:43 — defined here
- `Pass Through` — .claude/skills/adr-review/references/zimmermann-review-guidance.md:47 — defined here
- `Over-Friendliness` — .claude/skills/adr-review/references/zimmermann-review-guidance.md:47 — defined here
- `Copy Edit` — .claude/skills/adr-review/references/zimmermann-review-guidance.md:48 — defined here
- `Siding/Dead End` — .claude/skills/adr-review/references/zimmermann-review-guidance.md:49 — defined here
- `Self Promotion` — .claude/skills/adr-review/references/zimmermann-review-guidance.md:50 — defined here
- `Power Game` — .claude/skills/adr-review/references/zimmermann-review-guidance.md:51 — defined here
- `Offended Reaction` — .claude/skills/adr-review/references/zimmermann-review-guidance.md:52 — defined here
- `Groundhog Day` — .claude/skills/adr-review/references/zimmermann-review-guidance.md:53 — defined here
- `ADR Review Checklist` — .claude/skills/adr-review/references/zimmermann-review-guidance.md:57 — defined here
- `ecADR Definition of Done` — .claude/skills/adr-review/references/zimmermann-review-guidance.md:69 — used here
- `Reviewer Pledge` — .claude/skills/adr-review/references/zimmermann-review-guidance.md:71 — defined here
- `CALM` — .claude/skills/adr-review/references/zimmermann-review-guidance.md:81 — defined here

## Structure
- # ADR Review Guidance (Zimmermann) — .claude/skills/adr-review/references/zimmermann-review-guidance.md:1
- ## Three Review Perspectives — .claude/skills/adr-review/references/zimmermann-review-guidance.md:5
- ## 14 Good Review Practices — .claude/skills/adr-review/references/zimmermann-review-guidance.md:15
- ### Scope (3 practices) — .claude/skills/adr-review/references/zimmermann-review-guidance.md:17
- ### Content (3 practices) — .claude/skills/adr-review/references/zimmermann-review-guidance.md:23
- ### Style (5 practices) — .claude/skills/adr-review/references/zimmermann-review-guidance.md:29
- ### Actionability (3 practices) — .claude/skills/adr-review/references/zimmermann-review-guidance.md:37
- ## Seven Review Anti-Patterns — .claude/skills/adr-review/references/zimmermann-review-guidance.md:43
- ## ADR Review Checklist (7 Questions) — .claude/skills/adr-review/references/zimmermann-review-guidance.md:57
- ## Reviewer Pledge — .claude/skills/adr-review/references/zimmermann-review-guidance.md:71
- ## ADR Benefits Reminder (CALM) — .claude/skills/adr-review/references/zimmermann-review-guidance.md:81
- ## Sources — .claude/skills/adr-review/references/zimmermann-review-guidance.md:92

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `missing-path` · .claude/skills/adr-review/references/zimmermann-review-guidance.md:69 · Relative link ../../adr-generator/references/ad-quality-frameworks.md does not exist in repository.

## Observations
- Maps the repository's 6-agent debate structure directly to Zimmermann's "Stakeholder" review perspective, with high-level-advisor acting as "Design Authority" (.claude/skills/adr-review/references/zimmermann-review-guidance.md:13).
- Explicitly incorporates the CALM mnemonic (Collaborative, Accountability, Learning, Management) for ADR value advocacy (.claude/skills/adr-review/references/zimmermann-review-guidance.md:83-89).

## Context cost
6473 bytes. Approximately 1650 tokens.
