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
verified: 2026-09-06 quote-check+coverage
---

# skills/engineering/triage/AGENT-BRIEF.md

## Purpose — required, verbatim
> "An agent brief is a structured comment posted on a GitHub issue or PR when it moves to `ready-for-agent`. It is the authoritative specification that an AFK agent will work from." — skills/engineering/triage/AGENT-BRIEF.md:3

## Design intent — required
Defines the authoritative standards and template for writing durable agent briefs posted to issues or PRs labeled `ready-for-agent`. Mandates four core principles: durability over precision (avoiding fleeting line numbers and file paths), behavioral specification (focusing on what rather than procedural how), complete acceptance criteria (verifiable and testable), and explicit scope boundaries (preventing gold-plating). Provides distinct worked examples for bugs, enhancements, and pull requests, as well as an anti-pattern example.

## Phase — required
cross-phase

## Inputs — required
Issue or PR description, discussion history, codebase context, and triage categorization.

## Outputs — required
Structured markdown agent brief comment containing category, summary, current behavior, desired behavior, key interfaces, testable acceptance criteria, and out of scope boundaries.

## Invokes — required
none

## Invoked by — required
- reference AGENT-BRIEF.md — skills/engineering/triage/SKILL.md:21
- reference AGENT-BRIEF.md — skills/engineering/triage/SKILL.md:79

## Concepts named — required, verbatim
- `agent brief` — skills/engineering/triage/AGENT-BRIEF.md:3 — defined here
- `ready-for-agent` — skills/engineering/triage/AGENT-BRIEF.md:3 — used here
- `AFK agent` — skills/engineering/triage/AGENT-BRIEF.md:3 — defined here
- `Durability over precision` — skills/engineering/triage/AGENT-BRIEF.md:9 — defined here
- `Behavioral, not procedural` — skills/engineering/triage/AGENT-BRIEF.md:19 — defined here
- `Complete acceptance criteria` — skills/engineering/triage/AGENT-BRIEF.md:28 — defined here
- `Explicit scope boundaries` — skills/engineering/triage/AGENT-BRIEF.md:35 — defined here
- `Agent Brief` — skills/engineering/triage/AGENT-BRIEF.md:42 — defined here
- `.out-of-scope/` — skills/engineering/triage/AGENT-BRIEF.md:113 — used here
- `wontfix` — skills/engineering/triage/AGENT-BRIEF.md:116 — used here

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
- doc-drift — skills/engineering/triage/AGENT-BRIEF.md:3: Mentions "posted on a GitHub issue or PR" specifically, whereas `SKILL.md` and repository design support alternative issue trackers like Linear or local `.scratch/` markdown directories.

## Observations
Treats the agent brief as a self-contained contract for an asynchronous "AFK" agent. For PRs, adapts the brief to define work remaining on an existing diff rather than starting from scratch.

## Context cost
7942 bytes, 208 lines, approximately 1850 tokens.
