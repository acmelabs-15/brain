---
package: rjm
path: .claude/skills/analyze/references/strategy-ooda-loop.md
type: reference
bytes: 2327
unit: inv-rjm-88
in_scope_via: .claude/skills/analyze/SKILL.md
aliases: []
verified: 2026-09-06 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/analyze/references/strategy-ooda-loop.md, sha256: b27a9dfc0c884c93391b7acecade4bd48ec460803cd31b4e1b2ddaff101e21b7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
---

# .claude/skills/analyze/references/strategy-ooda-loop.md

## Purpose — required, verbatim
> "Decision-making framework for operating in uncertain, rapidly changing environments." — .claude/skills/analyze/references/strategy-ooda-loop.md:9

## Design intent — required
Strategic framework mapping John Boyd's OODA Loop (Observe, Orient, Decide, Act) to software engineering operations. It aligns the six phases of the `analyze` skill directly to OODA stages: Exploration (Observe), Focus Selection (Orient), Investigation Planning (Decide), Deep Analysis (Act), Verification (Observe - new loop), and Synthesis (Orient + Decide). It additionally outlines OODA procedures for incident response and legacy system modernization, and highlights anti-patterns such as analysis paralysis (stuck in Orient) and shooting from the hip (skipping Orient).

## Phase — required
cross-phase

## Inputs — required
- Operational context, telemetry, codebase findings, or incident data (.claude/skills/analyze/references/strategy-ooda-loop.md:9, 16, 41)

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- skill analyze — .claude/skills/analyze/SKILL.md:66

## Concepts named — required, verbatim
- `OODA Loop` — .claude/skills/analyze/references/strategy-ooda-loop.md:7 — defined here | used here
- `Stages` — .claude/skills/analyze/references/strategy-ooda-loop.md:13 — defined here | used here
- `Observe` — .claude/skills/analyze/references/strategy-ooda-loop.md:17 — defined here | used here
- `Orient` — .claude/skills/analyze/references/strategy-ooda-loop.md:18 — defined here | used here
- `Decide` — .claude/skills/analyze/references/strategy-ooda-loop.md:19 — defined here | used here
- `Act` — .claude/skills/analyze/references/strategy-ooda-loop.md:20 — defined here | used here
- `Key Insight` — .claude/skills/analyze/references/strategy-ooda-loop.md:22 — defined here | used here
- `Application to Codebase Analysis` — .claude/skills/analyze/references/strategy-ooda-loop.md:26 — defined here | used here
- `Exploration` — .claude/skills/analyze/references/strategy-ooda-loop.md:32 — defined here | used here
- `Focus Selection` — .claude/skills/analyze/references/strategy-ooda-loop.md:33 — defined here | used here
- `Investigation Planning` — .claude/skills/analyze/references/strategy-ooda-loop.md:34 — defined here | used here
- `Deep Analysis` — .claude/skills/analyze/references/strategy-ooda-loop.md:35 — defined here | used here
- `Verification` — .claude/skills/analyze/references/strategy-ooda-loop.md:36 — defined here | used here
- `Synthesis` — .claude/skills/analyze/references/strategy-ooda-loop.md:37 — defined here | used here
- `Application to Incident Response` — .claude/skills/analyze/references/strategy-ooda-loop.md:39 — defined here | used here
- `Application to Modernization` — .claude/skills/analyze/references/strategy-ooda-loop.md:46 — defined here | used here
- `Anti-Patterns` — .claude/skills/analyze/references/strategy-ooda-loop.md:53 — defined here | used here
- `Analysis paralysis` — .claude/skills/analyze/references/strategy-ooda-loop.md:57 — defined here | used here
- `Shooting from the hip` — .claude/skills/analyze/references/strategy-ooda-loop.md:58 — defined here | used here
- `One-and-done` — .claude/skills/analyze/references/strategy-ooda-loop.md:59 — defined here | used here

## Structure
- `# OODA Loop` — .claude/skills/analyze/references/strategy-ooda-loop.md:7
- `## Stages` — .claude/skills/analyze/references/strategy-ooda-loop.md:13
- `## Key Insight` — .claude/skills/analyze/references/strategy-ooda-loop.md:22
- `## Application to Codebase Analysis` — .claude/skills/analyze/references/strategy-ooda-loop.md:26
- `## Application to Incident Response` — .claude/skills/analyze/references/strategy-ooda-loop.md:39
- `## Application to Modernization` — .claude/skills/analyze/references/strategy-ooda-loop.md:46
- `## Anti-Patterns` — .claude/skills/analyze/references/strategy-ooda-loop.md:53

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- missing-path · .claude/skills/analyze/references/strategy-ooda-loop.md:2 · frontmatter `source:` references non-existent path `wiki/concepts/Strategic Thinking/OODA Loop.md`.

## Observations
The mapping between analyze phases and OODA stages provides the theoretical justification for why the `analyze` workflow is structured into separate Exploration, Focus Selection, Planning, Deep Analysis, Verification, and Synthesis steps.

## Context cost
2327 bytes, loads nothing further (0 bytes). Approximately 580 tokens.
