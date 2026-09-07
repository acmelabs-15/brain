---
package: rjm
name: state machine
slug: state-machine
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

# state machine

## Definition — verbatim
> "The Python script acts as a state machine that generates phase-appropriate prompts." — .claude/skills/analyze/references/DEVELOPMENT.md:17

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/analyze/references/DEVELOPMENT.md | 17 | defined here | Execution model of the Python script managing phase transitions and prompting across steps. |

## Consumes
Current step number, accumulated state (`--thoughts`), command line flags.

## Produces
Step guidance, phase verification, and progression to the next investigation phase.

## When applied
During multi-step skill execution to enforce sequential lifecycle discipline.

## Sub-concepts
none

## Part of
script-driven-workflow

## Implementation status
defects: orphan

## Design notes
The state machine design in rjm delegates transition logic to deterministic Python code rather than relying on LLM memory, ensuring agents cannot skip steps, misclassify evidence, or bypass required analysis phases.
