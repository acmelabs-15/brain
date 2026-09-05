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
verified: 2026-09-04 quote-check+coverage
---

# skills/productivity/handoff/SKILL.md

## Purpose — required, verbatim
> "description: Compact the current conversation into a handoff document for another agent to pick up." — skills/productivity/handoff/SKILL.md:3

## Design intent — required
Provides a standalone context-bridging utility that compacts the active conversation into a portable Markdown handoff document for a successor agent. Mandates writing to the OS temporary directory rather than polluting the active workspace, instructs referencing external artifacts (specs, plans, ADRs, diffs) by path or URL without duplicate content, requires redacting sensitive secrets, and incorporates suggested next skills and user-provided argument hints.

## Phase — required
matt:productivity

## Inputs — required
Current conversation context and optional arguments describing the focus of the next session.

## Outputs — required
A Markdown handoff document written to the temporary directory of the user's OS.

## Invokes — required
none

## Invoked by — required
- doc README — skills/productivity/README.md:10
- skill ask-matt — skills/engineering/ask-matt/SKILL.md:67
- doc PHASE-BOUNDARIES — skills/engineering/ask-matt/PHASE-BOUNDARIES.md:13

## Concepts named — required, verbatim
- `handoff` — skills/productivity/handoff/SKILL.md:2 — defined here
- `argument-hint` — skills/productivity/handoff/SKILL.md:4 — defined here
- `disable-model-invocation` — skills/productivity/handoff/SKILL.md:5 — defined here
- `Skill tool` — skills/productivity/handoff/SKILL.md:10 — used here

## Structure
(no markdown section headings; sequential prose instructions)

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Explicitly directs output to the OS temporary directory instead of the active repository to maintain workspace hygiene, establishing handoffs as transient transit documents rather than permanent repository artifacts.

## Context cost
894 bytes (~225 tokens). Lightweight single-file skill definition with zero external loads.
