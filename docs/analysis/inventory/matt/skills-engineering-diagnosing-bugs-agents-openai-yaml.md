---
package: matt
path: skills/engineering/diagnosing-bugs/agents/openai.yaml
type: skill
bytes: 103
unit: inv-matt-38
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/engineering/diagnosing-bugs/agents/openai.yaml, sha256: 3e430dbe4334a87597488c060cb3dc3786bb00c9182877d6f5ec41f62490e90b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# skills/engineering/diagnosing-bugs/agents/openai.yaml

## Purpose — required, verbatim
> "display_name: \"Diagnosing Bugs\"" — skills/engineering/diagnosing-bugs/agents/openai.yaml:2
(first substantive line; no explicit purpose statement)

## Design intent — required
OpenAI / Codex interface metadata configuration for the `diagnosing-bugs` skill. Exposes the human-readable display title and concise descriptive summary to the model and UI catalog.

## Phase — required
cross-phase

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- skill diagnosing-bugs — skills/engineering/diagnosing-bugs/SKILL.md:2
- doc CLAUDE.md — CLAUDE.md:19
- doc CHANGELOG.md — CHANGELOG.md:33

## Concepts named — required, verbatim
- `interface` — skills/engineering/diagnosing-bugs/agents/openai.yaml:1 — defined here
- `display_name` — skills/engineering/diagnosing-bugs/agents/openai.yaml:2 — defined here
- `short_description` — skills/engineering/diagnosing-bugs/agents/openai.yaml:3 — defined here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Dual-harness metadata providing Codex parity with Claude Code's skill frontmatter without requiring duplicate skill trees.

## Context cost
103 bytes, 4 lines, approximately 25 tokens.
