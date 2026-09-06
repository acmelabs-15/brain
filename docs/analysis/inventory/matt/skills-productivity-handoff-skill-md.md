---
package: matt
path: skills/productivity/handoff/SKILL.md
type: skill
bytes: 894
unit: inv-matt-45
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/productivity/handoff/SKILL.md, sha256: 7c62de979fdc7ac32fb5ddb2146156c917f80ee070d30fadc9d40343c4b6ed25}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# skills/productivity/handoff/SKILL.md

## Purpose — required, verbatim
> "Compact the current conversation into a handoff document for another agent to pick up." — skills/productivity/handoff/SKILL.md:3

## Design intent — required
Compacts conversation state into a portable handoff document written outside the workspace to the OS temporary directory, enabling work to transfer to a fresh agent, directory, harness, or collaborator. Preserves portability rather than in-place context compression (which is the domain of `/compact`). Directs the agent to tailor the document to the user's next session focus, suggest next skills, avoid duplicating existing repository artifacts (specs, ADRs, diffs), and redact sensitive credentials.

## Phase — required
matt:productivity

## Inputs — required
- Current conversation history
- User argument describing next session focus (`argument-hint: "What will the next session be used for?"`) — skills/productivity/handoff/SKILL.md:4, 16
- Paths/URLs of referenced artifacts (specs, plans, ADRs, issues, commits, diffs) — skills/productivity/handoff/SKILL.md:12

## Outputs — required
- Handoff document markdown file written to the OS temporary directory — skills/productivity/handoff/SKILL.md:8

## Invokes — required
none

## Invoked by — required
- doc skills/productivity/README.md — skills/productivity/README.md:10
- doc README.md — README.md:223
- skill ask-matt — skills/engineering/ask-matt/SKILL.md:18
- doc PHASE-BOUNDARIES.md — skills/engineering/ask-matt/PHASE-BOUNDARIES.md:13
- doc docs/productivity/handoff.md — docs/productivity/handoff.md:9
- doc docs/productivity/teach.md — docs/productivity/teach.md:20

## Concepts named — required, verbatim
- `handoff` — skills/productivity/handoff/SKILL.md:2 — defined here
- `argument-hint` — skills/productivity/handoff/SKILL.md:4 — used here
- `disable-model-invocation` — skills/productivity/handoff/SKILL.md:5 — used here
- `handoff document` — skills/productivity/handoff/SKILL.md:8 — defined here
- `fresh agent` — skills/productivity/handoff/SKILL.md:8 — defined here
- `temporary directory` — skills/productivity/handoff/SKILL.md:8 — used here
- `workspace` — skills/productivity/handoff/SKILL.md:8 — used here
- `suggested skills` — skills/productivity/handoff/SKILL.md:10 — defined here
- `Skill tool` — skills/productivity/handoff/SKILL.md:10 — used here
- `specs` — skills/productivity/handoff/SKILL.md:12 — used here
- `plans` — skills/productivity/handoff/SKILL.md:12 — used here
- `ADRs` — skills/productivity/handoff/SKILL.md:12 — used here
- `issues` — skills/productivity/handoff/SKILL.md:12 — used here
- `commits` — skills/productivity/handoff/SKILL.md:12 — used here
- `diffs` — skills/productivity/handoff/SKILL.md:12 — used here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Writing to the OS temporary directory ensures the workspace repository remains clean of transient session notes, but creates a portability vs persistence trade-off where handoffs can vanish if temp files are cleaned or hard to locate across different platforms (noted in `docs/productivity/handoff.md:45`). Setting `disable-model-invocation: true` prevents autonomous agent invocation.

## Context cost
894 bytes, 17 lines, approximately 200 tokens.
