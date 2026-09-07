---
package: matt
name: no-op test
slug: no-op-test
kind: technique
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

# no-op test

## Definition — verbatim
> "the no-op test applied sentence by sentence, against" — external/writing-for-agents.md:44

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/writing-for-agents.md | 44 | defined here | Defined as a pruning technique applied sentence by sentence to eliminate text that changes no agent behavior |

## Consumes
Draft or existing agent documentation sentences.

## Produces
Pruned documentation where every remaining sentence verifiably alters agent behavior.

## When applied
During documentation review and pruning passes over skills, AGENTS.md, CLAUDE.md, specs, and tickets.

## Sub-concepts
none

## Part of
writing-for-agents

## Implementation status
defects: orphan, doc-drift

## Design notes
A behavioral editing technique: delete a sentence and test whether the agent's actions change. If behavior does not change, the line is a no-op that wastes context tokens and must be removed. It establishes an empirical, behavioral standard for brevity rather than stylistic preference.
