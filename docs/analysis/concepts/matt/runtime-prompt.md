---
package: matt
name: runtime prompt
slug: runtime-prompt
kind: artifact
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

# runtime prompt

## Definition — verbatim
(used, not defined)
> "a runtime prompt, a README, any doc an" — external/writing-for-agents.md:25

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/writing-for-agents.md | 25 | used here | Listed among the types of documents read by an agent that should be written against the writing-for-agents reference |

## Consumes
Task instructions, operational context, human prompts.

## Produces
Agent execution behavior driven by prompt constraints.

## When applied
Passed dynamically to an agent session at runtime (e.g. system instructions or task-specific prompts).

## Sub-concepts
none

## Part of
none

## Implementation status
defects: orphan, doc-drift

## Design notes
An ephemeral or dynamically injected prompt provided to an agent during execution. It represents one category of agent-read documentation governed by the writing-for-agents reference, emphasizing concision, leading words, and behavioral pruning over conversational verbosity.
