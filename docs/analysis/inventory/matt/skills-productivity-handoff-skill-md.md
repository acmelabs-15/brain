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
verified: 2026-09-05 quote-check+coverage
---

# skills/productivity/handoff/SKILL.md

## Purpose — required, verbatim
> "description: Compact the current conversation into a handoff document for another agent to pick up." — skills/productivity/handoff/SKILL.md:3

## Design intent — required
Compacts active conversation history into a standalone, portable handoff markdown file intended for a fresh agent session. To prevent cluttering the repository working directory, the document is explicitly written to the temporary directory of the host operating system. Mandates inclusion of a "suggested skills" section to guide subsequent agent tooling invocations, enforces redaction of credentials and sensitive data, forbids duplicating existing codebase artifacts (requiring paths or URLs instead), and tailors the summary to user arguments indicating next session goals.

## Phase — required
matt:Productivity

## Inputs — required
- Full conversational context of the current session (skills/productivity/handoff/SKILL.md:8).
- Optional user argument describing the upcoming session's objective via `argument-hint` (skills/productivity/handoff/SKILL.md:4, 16).
- Existing repository artifacts referenced by path or URL (specs, plans, ADRs, issues, commits, diffs) (skills/productivity/handoff/SKILL.md:12).

## Outputs — required
- Handoff markdown document written to the OS temporary directory (skills/productivity/handoff/SKILL.md:8).
- "suggested skills" section naming skills for subsequent invocation via the Skill tool (skills/productivity/handoff/SKILL.md:10).

## Invokes — required
none

## Invoked by — required
- doc README.md — README.md:223
- doc skills/productivity/README.md — skills/productivity/README.md:10
- skill ask-matt — skills/engineering/ask-matt/SKILL.md:18
- skill ask-matt — skills/engineering/ask-matt/SKILL.md:67
- reference PHASE-BOUNDARIES.md — skills/engineering/ask-matt/PHASE-BOUNDARIES.md:13

## Concepts named — required, verbatim
- `handoff` — skills/productivity/handoff/SKILL.md:2 — defined here
- `handoff document` — skills/productivity/handoff/SKILL.md:3 — defined here
- `temporary directory` — skills/productivity/handoff/SKILL.md:8 — used here
- `suggested skills` — skills/productivity/handoff/SKILL.md:10 — defined here
- `Skill tool` — skills/productivity/handoff/SKILL.md:10 — used here
- `ADRs` — skills/productivity/handoff/SKILL.md:12 — used here
- `sensitive information` — skills/productivity/handoff/SKILL.md:14 — used here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Contrasts with `skills/in-progress/claude-handoff` which invokes the `claude` CLI background process directly; `handoff` instead persists a static file to the OS temp folder, facilitating asynchronous handoffs across distinct tools, directories, or team members.

## Context cost
894 bytes, 17 lines, approximately 210 tokens.
