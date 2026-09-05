---
package: matt
path: skills/engineering/ask-matt/agents/openai.yaml
type: skill
bytes: 137
unit: inv-matt-37
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/engineering/ask-matt/agents/openai.yaml, sha256: bdffbc5a0a99ed1b6ef3253d251d755fd18162b9845972e380007f844b09b05c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# skills/engineering/ask-matt/agents/openai.yaml

## Purpose — required, verbatim
> "short_description: "Find the right skill or workflow"" — skills/engineering/ask-matt/agents/openai.yaml:3

## Design intent — required
Declares OpenAI Codex and ChatGPT agent configuration metadata for the `ask-matt` router skill. Establishes the display title (`Ask Matt`), provides a concise summary (`Find the right skill or workflow`), and enforces `allow_implicit_invocation: false`, guaranteeing that the skill is strictly human-invoked and never triggered autonomously by an agent.

## Phase — required
cross-phase

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- doc CLAUDE.md — CLAUDE.md:19

## Concepts named — required, verbatim
- `display_name` — skills/engineering/ask-matt/agents/openai.yaml:2 — defined here
- `short_description` — skills/engineering/ask-matt/agents/openai.yaml:3 — defined here
- `allow_implicit_invocation` — skills/engineering/ask-matt/agents/openai.yaml:5 — defined here

## Structure
- `interface:` — skills/engineering/ask-matt/agents/openai.yaml:1
- `policy:` — skills/engineering/ask-matt/agents/openai.yaml:4

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Implements the Codex equivalent of Claude Code's `disable-model-invocation: true` frontmatter policy via `policy.allow_implicit_invocation: false`.
- Minimal 6-line configuration ensuring consistent user-invoked behavior across harnesses.

## Context cost
137 bytes (~35 tokens). Agent harness metadata configuration; negligible context footprint.
