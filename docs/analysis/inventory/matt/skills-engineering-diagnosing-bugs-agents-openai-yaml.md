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
verified: 2026-09-04 quote-check+coverage
---

# skills/engineering/diagnosing-bugs/agents/openai.yaml

## Purpose — required, verbatim
> "Diagnose hard bugs and regressions" — skills/engineering/diagnosing-bugs/agents/openai.yaml:3

## Design intent — required
Provides Codex harness UI metadata for the `diagnosing-bugs` skill, declaring its display name ("Diagnosing Bugs") and short description ("Diagnose hard bugs and regressions") for the skill picker. By omitting `policy.allow_implicit_invocation: false`, it configures the skill as model-invoked in Codex, allowing autonomous activation when the user reports bugs, failures, exceptions, or performance regressions.

## Phase — required
cross-phase

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `interface` — skills/engineering/diagnosing-bugs/agents/openai.yaml:1 — defined here
- `display_name` — skills/engineering/diagnosing-bugs/agents/openai.yaml:2 — defined here
- `short_description` — skills/engineering/diagnosing-bugs/agents/openai.yaml:3 — defined here

## Structure
- `interface:` — skills/engineering/diagnosing-bugs/agents/openai.yaml:1
- `display_name:` — skills/engineering/diagnosing-bugs/agents/openai.yaml:2
- `short_description:` — skills/engineering/diagnosing-bugs/agents/openai.yaml:3

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Configured as model-invoked in Codex by default, matching Claude Code's model-facing trigger description.

## Context cost
103 bytes (~26 tokens). Static metadata file for Codex UI.
