---
package: rjm
path: .claude/skills/adr-review/references/debate-protocol.md
type: reference
bytes: 7026
unit: inv-rjm-77
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .claude/skills/adr-review/references/debate-protocol.md, sha256: 7ffb255e17ca77cfed1b1a4cf42531f93706c53636a57fb690fc4f7d96b1c86e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/adr-review/references/debate-protocol.md

## Purpose — required, verbatim
> "Detailed phases for multi-agent ADR validation." — .claude/skills/adr-review/references/debate-protocol.md:3

## Design intent — required
Defines the five-phase protocol (Phases 0 through 4) and round-management rules governing the multi-agent architectural debate. It specifies contextual research of GitHub issues/PRs (Phase 0), parallel independent reviews evaluated against the Zimmermann 7-question checklist (Phase 1), anti-pattern detection and conflict routing to high-level-advisor (Phase 2), update synthesis and scope split proposals (Phase 3), and convergence check voting up to a 10-round ceiling (Phase 4). Without it, ADR evaluation would lack a disciplined convergence mechanism, structured handling of dissenting opinions, and safeguards against debate paralysis.

## Phase — required
none

## Inputs — required
- Target ADR title and 3-5 extracted keywords — .claude/skills/adr-review/references/debate-protocol.md:14-15
- GitHub search queries for open issues, open PRs, and closed issues via gh CLI (`gh issue list`, `gh pr list`) — .claude/skills/adr-review/references/debate-protocol.md:21, 27, 33
- Full ADR content and related work research findings — .claude/skills/adr-review/references/debate-protocol.md:63, 95
- Previous agent concerns and updated ADR text across rounds — .claude/skills/adr-review/references/debate-protocol.md:182, 188

## Outputs — required
- Related work research report with implications for ADR review — .claude/skills/adr-review/references/debate-protocol.md:38-56
- Individual agent review reports classifying issues into P0 (blocking), P1 (important), P2 (nice-to-have) — .claude/skills/adr-review/references/debate-protocol.md:80-85
- Consolidated conflict listings and high-level-advisor rulings — .claude/skills/adr-review/references/debate-protocol.md:120-148
- Scope split recommendation (`ADR-NNN-A`, `ADR-NNN-B`) when 2+ agents flag scope concerns — .claude/skills/adr-review/references/debate-protocol.md:159-171
- Updated ADR text with incorporated feedback and recorded dissents in "Alternatives Considered" — .claude/skills/adr-review/references/debate-protocol.md:152-155
- Convergence positions: Accept, Disagree-and-Commit, or Block — .claude/skills/adr-review/references/debate-protocol.md:192-195
- Debate state tracking table (`Debate State`) recording rounds 1 to 10 — .claude/skills/adr-review/references/debate-protocol.md:207-224

## Invokes — required
- agent analyst — .claude/skills/adr-review/references/debate-protocol.md:10
- agent architect — .claude/skills/adr-review/references/debate-protocol.md:91
- agent critic — .claude/skills/adr-review/references/debate-protocol.md:114
- agent independent-thinker — .claude/skills/adr-review/references/debate-protocol.md:114
- agent security — .claude/skills/adr-review/references/debate-protocol.md:114
- agent high-level-advisor — .claude/skills/adr-review/references/debate-protocol.md:130

## Invoked by — required
- skill adr-review — .claude/skills/adr-review/SKILL.md:102

## Concepts named — required, verbatim
- `Phase 0: Related Work Research` — .claude/skills/adr-review/references/debate-protocol.md:5 — defined here
- `Phase 1: Independent Review` — .claude/skills/adr-review/references/debate-protocol.md:61 — defined here
- `Zimmermann review questions` — .claude/skills/adr-review/references/debate-protocol.md:102 — used here
- `Phase 2: Consolidation` — .claude/skills/adr-review/references/debate-protocol.md:116 — defined here
- `review anti-patterns` — .claude/skills/adr-review/references/debate-protocol.md:122 — used here
- `Pass Through` — .claude/skills/adr-review/references/debate-protocol.md:122 — used here
- `Copy Edit` — .claude/skills/adr-review/references/debate-protocol.md:122 — used here
- `Siding/Dead End` — .claude/skills/adr-review/references/debate-protocol.md:122 — used here
- `Self Promotion` — .claude/skills/adr-review/references/debate-protocol.md:122 — used here
- `Power Game` — .claude/skills/adr-review/references/debate-protocol.md:122 — used here
- `Offended Reaction` — .claude/skills/adr-review/references/debate-protocol.md:122 — used here
- `Groundhog Day` — .claude/skills/adr-review/references/debate-protocol.md:122 — used here
- `Phase 3: Resolution` — .claude/skills/adr-review/references/debate-protocol.md:150 — defined here
- `Scope Split Detection` — .claude/skills/adr-review/references/debate-protocol.md:157 — defined here
- `Phase 4: Convergence Check` — .claude/skills/adr-review/references/debate-protocol.md:173 — defined here
- `Disagree-and-Commit` — .claude/skills/adr-review/references/debate-protocol.md:193 — used here
- `Consensus Criteria` — .claude/skills/adr-review/references/debate-protocol.md:198 — defined here
- `Round Management` — .claude/skills/adr-review/references/debate-protocol.md:204 — defined here

## Structure
- # ADR Debate Protocol — .claude/skills/adr-review/references/debate-protocol.md:1
- ## Phase 0: Related Work Research — .claude/skills/adr-review/references/debate-protocol.md:5
- ## Phase 1: Independent Review — .claude/skills/adr-review/references/debate-protocol.md:61
- ## Phase 2: Consolidation — .claude/skills/adr-review/references/debate-protocol.md:116
- ## Phase 3: Resolution — .claude/skills/adr-review/references/debate-protocol.md:150
- ## Phase 4: Convergence Check — .claude/skills/adr-review/references/debate-protocol.md:173
- ## Round Management — .claude/skills/adr-review/references/debate-protocol.md:204
- ## Related Work Integration — .claude/skills/adr-review/references/debate-protocol.md:226
- ## Efficiency Notes — .claude/skills/adr-review/references/debate-protocol.md:238

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Mandates checking each agent's review in Phase 2 for Zimmermann's seven review anti-patterns, triggering a forced re-review if an agent produces shallow or non-substantive commentary (.claude/skills/adr-review/references/debate-protocol.md:122).
- Caps debate at 10 rounds maximum; if no consensus is reached by round 10, the debate terminates with unresolved issues explicitly recorded (.claude/skills/adr-review/references/debate-protocol.md:202).
- Includes an optimization rule allowing the orchestrator to skip Phase 1 re-invocation for agents without domain relevance (e.g. security for pure process ADRs) (.claude/skills/adr-review/references/debate-protocol.md:242).

## Context cost
7026 bytes. Approximately 1850 tokens.
