---
package: rjm
name: script-driven workflow
slug: script-driven-workflow
kind: pattern
package_phase: rjm:analyze
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/analyze/references/DEVELOPMENT.md, sha256: 5602933212eb69cbc09c0bc6999de9cfa4f8631ca9ee973ad271013c504002bb}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# script-driven workflow

## Definition — verbatim
> "The skill uses a **script-driven workflow** pattern. The Python script acts as a state machine that generates phase-appropriate prompts." — .claude/skills/analyze/references/DEVELOPMENT.md:17

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/analyze/references/DEVELOPMENT.md | 17 | defined here | Architectural pattern where a Python script acts as a state machine generating prompts for the agent. |

## Consumes
Python CLI helper scripts, state passed via flags (`--thoughts`).

## Produces
Phase-appropriate prompts and guided investigation steps.

## When applied
Orchestrating complex multi-phase skill workflows in Claude Code.

## Sub-concepts
state-machine

## Part of
analyze

## Implementation status
defects: orphan

## Design notes
An architectural pattern in rjm skills where an external script acts as a deterministic state machine providing structured phase-specific instructions to the LLM agent, while the agent executes actions and passes evidence back into the script loop.
