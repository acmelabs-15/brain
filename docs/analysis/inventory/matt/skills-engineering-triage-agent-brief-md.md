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
verified: 2026-09-05 quote-check+coverage
---

# skills/engineering/triage/AGENT-BRIEF.md

## Purpose — required, verbatim
> "An agent brief is a structured comment posted on a GitHub issue or PR when it moves to `ready-for-agent`. It is the authoritative specification that an AFK agent will work from. The original body and discussion are context: the agent brief is the contract." — skills/engineering/triage/AGENT-BRIEF.md:3

## Design intent — required
Reference specification defining standards and templates for creating durable agent briefs during issue and PR triage. Serves as the authoritative specification from which an autonomous AFK agent executes without human intervention. Establishes four core design principles: durability over precision (focusing on types and interfaces rather than ephemeral file paths or line numbers), behavioral over procedural specifications, complete and testable acceptance criteria, and explicit out-of-scope boundaries.

## Phase — required
none

## Inputs — required
- Issue or PR description, discussion history, diffs, and codebase context — skills/engineering/triage/AGENT-BRIEF.md:3, 5

## Outputs — required
- Structured agent brief comment posted to an issue or pull request — skills/engineering/triage/AGENT-BRIEF.md:3, 41-68

## Invokes — required
none

## Invoked by — required
- skill triage — skills/engineering/triage/SKILL.md:21

## Concepts named — required, verbatim
- `agent brief` — skills/engineering/triage/AGENT-BRIEF.md:3 — defined here
- `ready-for-agent` — skills/engineering/triage/AGENT-BRIEF.md:3 — used here
- `AFK agent` — skills/engineering/triage/AGENT-BRIEF.md:3 — defined here
- `Durability over precision` — skills/engineering/triage/AGENT-BRIEF.md:9 — defined here
- `Behavioral, not procedural` — skills/engineering/triage/AGENT-BRIEF.md:19 — defined here
- `acceptance criteria` — skills/engineering/triage/AGENT-BRIEF.md:28 — defined here
- `scope boundaries` — skills/engineering/triage/AGENT-BRIEF.md:35 — defined here
- `wontfix` — skills/engineering/triage/AGENT-BRIEF.md:116 — used here

## Structure
- Writing Agent Briefs
- Principles
- Durability over precision
- Behavioral, not procedural
- Complete acceptance criteria
- Explicit scope boundaries
- Template
- Examples
- Good agent brief (bug)
- Good agent brief (enhancement)
- Good agent brief (PR)
- Bad agent brief

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Provides detailed examples across three distinct operational contexts (bug fix, enhancement adding `.out-of-scope/`, and finishing a contributor PR diff) plus an annotated negative example demonstrating anti-patterns.

## Context cost
7942 bytes, 208 lines, ~1990 tokens. Loads no external files.
