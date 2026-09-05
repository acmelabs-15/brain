---
package: matt
path: skills/engineering/triage/AGENT-BRIEF.md
type: skill
bytes: 7942
unit: inv-matt-41
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/engineering/triage/AGENT-BRIEF.md, sha256: 7f5f87fed3033df1b06e083c480f3e847b1fbb0647746b8a4c6a50f9f26ef44f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# skills/engineering/triage/AGENT-BRIEF.md

## Purpose — required, verbatim
> "An agent brief is a structured comment posted on a GitHub issue or PR when it moves to `ready-for-agent`. It is the authoritative specification that an AFK agent will work from. The original body and discussion are context: the agent brief is the contract." — skills/engineering/triage/AGENT-BRIEF.md:3

## Design intent — required
Establishes the contract and methodology for writing durable, specification-grade agent briefs for autonomous (AFK) coding agents. Ensures briefs act as binding contracts by emphasizing four key principles: durability over precision (avoiding brittle file paths and line numbers that rot over time), behavioral rather than procedural descriptions (specifying what interfaces/behaviors must change, not how to write code), complete and testable acceptance criteria, and explicit out-of-scope boundaries. Provides a reusable template along with comprehensive good examples across bugs, enhancements, and pull requests, contrasted against an anti-pattern example.

## Phase — required
matt:Upkeep

## Inputs — required
Issue or PR description, discussion history, reproduction steps, codebase interface exploration.

## Outputs — required
A structured agent brief comment containing category, summary, current behavior, desired behavior, key interfaces, acceptance criteria, and out-of-scope sections.

## Invokes — required
none

## Invoked by — required
- skill triage — skills/engineering/triage/SKILL.md:21
- skill triage — skills/engineering/triage/SKILL.md:79

## Concepts named — required, verbatim
- `agent brief` — skills/engineering/triage/AGENT-BRIEF.md:3 — defined here
- `ready-for-agent` — skills/engineering/triage/AGENT-BRIEF.md:3 — used here
- `AFK agent` — skills/engineering/triage/AGENT-BRIEF.md:3 — defined here
- `Durability over precision` — skills/engineering/triage/AGENT-BRIEF.md:9 — defined here
- `Behavioral, not procedural` — skills/engineering/triage/AGENT-BRIEF.md:19 — defined here
- `Complete acceptance criteria` — skills/engineering/triage/AGENT-BRIEF.md:28 — defined here
- `Explicit scope boundaries` — skills/engineering/triage/AGENT-BRIEF.md:35 — defined here

## Structure
- `# Writing Agent Briefs` — skills/engineering/triage/AGENT-BRIEF.md:1
- `## Principles` — skills/engineering/triage/AGENT-BRIEF.md:7
- `### Durability over precision` — skills/engineering/triage/AGENT-BRIEF.md:9
- `### Behavioral, not procedural` — skills/engineering/triage/AGENT-BRIEF.md:19
- `### Complete acceptance criteria` — skills/engineering/triage/AGENT-BRIEF.md:28
- `### Explicit scope boundaries` — skills/engineering/triage/AGENT-BRIEF.md:35
- `## Template` — skills/engineering/triage/AGENT-BRIEF.md:39
- `## Examples` — skills/engineering/triage/AGENT-BRIEF.md:70
- `### Good agent brief (bug)` — skills/engineering/triage/AGENT-BRIEF.md:72
- `### Good agent brief (enhancement)` — skills/engineering/triage/AGENT-BRIEF.md:107
- `### Good agent brief (PR)` — skills/engineering/triage/AGENT-BRIEF.md:148
- `### Bad agent brief` — skills/engineering/triage/AGENT-BRIEF.md:185

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Explicitly addresses PR triage: notes that for PRs, "Current behavior" describes the existing diff and the brief specifies finishing touches or bugfixes to that diff (line 5, line 150).
- Prohibits including file paths or line numbers in briefs because they go stale when tickets sit in queue (line 15-16).

## Context cost
7942 bytes (~1986 tokens). Substantive reference guide and template.
