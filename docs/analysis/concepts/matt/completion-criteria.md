---
package: matt
name: Completion criteria
slug: completion-criteria
kind: gate
package_phase: matt:Productivity
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/productivity/writing-for-agents.md, sha256: 009831d67d288eb2cb9494660f744affdef625d8e5eb041d75c4ee630a47ac73}
  - {path: external/writing-for-agents.md, sha256: ccebd127baac18804b7258275bc176b4859aabd8befe8c32a95c5c2056afdd65}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Completion criteria

## Definition — verbatim
> "Every step ends on a **completion criterion**, the condition that tells the agent the work is done." — skills/productivity/writing-for-agents/SKILL.md:47

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/productivity/writing-for-agents.md | 28 | defined here | Identifies completion criteria as the clarity and demand levers that drive thorough legwork. |
| external/writing-for-agents.md | 42 | defined here | Highlights completion criteria as the essential defense mechanism against premature task completion. |

## Consumes
A task step or operational phase.

## Produces
An unambiguous, checkable boundary condition signifying task completion.

## When applied
At the conclusion of every step in a procedural workflow.

## Sub-concepts
legwork

## Part of
writing-for-agents

## Implementation status
clean

## Design notes
Explicit termination conditions attached to each workflow step. In Matt's system, completion criteria are defined by two key properties: clarity (allowing the agent to objectively distinguish done from not-done) and demand (forcing thorough investigation rather than surface-level execution).
