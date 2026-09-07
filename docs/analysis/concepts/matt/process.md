---
package: matt
name: process
slug: process
kind: pattern
package_phase: matt:productivity
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/writing-for-agents.md, sha256: ccebd127baac18804b7258275bc176b4859aabd8befe8c32a95c5c2056afdd65}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# process

## Definition — verbatim
(used, not defined)
> "process" — external/writing-for-agents.md:25

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/writing-for-agents.md | 25 | used here | Highlights that predictable agent behavior relies on following a consistent process rather than expecting identical outputs |

## Consumes
Agent instructions, skills, workflows.

## Produces
Repeatable, predictable execution steps across varying model runs.

## When applied
When designing agent skills and workflows to ensure predictable task execution.

## Sub-concepts
none

## Part of
writing-for-agents

## Implementation status
defects: orphan, doc-drift

## Design notes
The authoring philosophy in writing-for-agents prioritizing a disciplined, repeatable operational process over deterministic outputs. Since models vary across runs, designing explicit steps and completion criteria creates predictable execution tracks.
