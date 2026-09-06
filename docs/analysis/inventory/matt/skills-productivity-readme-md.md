---
package: matt
path: skills/productivity/README.md
type: skill
bytes: 1480
unit: inv-matt-45
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/productivity/README.md, sha256: bef3901088b409f00cb1ce6e94f4cf3f4e4865969d8b19330f375cd535b10e37}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# skills/productivity/README.md

## Purpose — required, verbatim
> "General workflow tools, not code-specific." — skills/productivity/README.md:3

## Design intent — required
Catalog and routing index for the `productivity` bucket of skills. Categorizes general workflow skills into user-invoked (requiring explicit human typing via `disable-model-invocation: true` / `allow_implicit_invocation: false`) and model-invoked (accessible autonomously by models via rich trigger phrasing). Explains the harness configuration duality between Claude Code and Codex/OpenAI.

## Phase — required
matt:Productivity

## Inputs — required
none

## Outputs — required
none

## Invokes — required
- skill grill-me — skills/productivity/README.md:9
- skill handoff — skills/productivity/README.md:10
- skill teach — skills/productivity/README.md:11
- skill to-questionnaire — skills/productivity/README.md:12
- skill wait-what — skills/productivity/README.md:13
- skill grilling — skills/productivity/README.md:19
- skill writing-for-agents — skills/productivity/README.md:20

## Invoked by — required
- doc CLAUDE.md — CLAUDE.md:4

## Concepts named — required, verbatim
- `Productivity` — skills/productivity/README.md:1 — defined here
- `General workflow tools` — skills/productivity/README.md:3 — defined here
- `User-invoked` — skills/productivity/README.md:5 — defined here
- `Claude Code` — skills/productivity/README.md:7 — used here
- `disable-model-invocation: true` — skills/productivity/README.md:7 — used here
- `Codex` — skills/productivity/README.md:7 — used here
- `policy.allow_implicit_invocation: false` — skills/productivity/README.md:7 — used here
- `agents/openai.yaml` — skills/productivity/README.md:7 — used here
- `grill-me` — skills/productivity/README.md:9 — used here
- `handoff` — skills/productivity/README.md:10 — used here
- `handoff document` — skills/productivity/README.md:10 — used here
- `teach` — skills/productivity/README.md:11 — used here
- `stateful teaching workspace` — skills/productivity/README.md:11 — used here
- `to-questionnaire` — skills/productivity/README.md:12 — used here
- `Markdown questionnaire` — skills/productivity/README.md:12 — used here
- `wait-what` — skills/productivity/README.md:13 — used here
- `CONTEXT.md` — skills/productivity/README.md:13 — used here
- `Model-invoked` — skills/productivity/README.md:15 — defined here
- `trigger phrasing` — skills/productivity/README.md:17 — used here
- `grilling` — skills/productivity/README.md:19 — used here
- `design tree` — skills/productivity/README.md:19 — used here
- `writing-for-agents` — skills/productivity/README.md:20 — used here
- `AGENTS.md` — skills/productivity/README.md:20 — used here
- `CLAUDE.md` — skills/productivity/README.md:20 — used here

## Structure
- `# Productivity` — skills/productivity/README.md:1
- `## User-invoked` — skills/productivity/README.md:5
- `## Model-invoked` — skills/productivity/README.md:15

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Explicitly formalizes the two-tier classification of skills (user-invoked vs model-invoked) matching CLAUDE.md:15 and .agents/invocation.md, and maps every skill in the productivity folder.

## Context cost
1480 bytes, 21 lines, approximately 300 tokens.
