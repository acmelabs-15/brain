---
package: matt
name: no-op
slug: no-op
kind: pattern
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

# no-op

## Definition — verbatim
> "Every one of those lines is a **no-op**, paying [context](https://www.aihero.dev/ai-coding-dictionary/context) and changing no behaviour." — docs/productivity/writing-for-agents.md:5

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/productivity/writing-for-agents.md | 5 | defined here | Defines a no-op as instruction lines that pay context cost without altering model behavior. |
| external/writing-for-agents.md | 26 | defined here | Identifies redundant explanatory lines that waste context window capacity without changing behavior. |

## Consumes
A draft prompt, skill, or instruction document.

## Produces
Sentence-level deletions that prune redundant instructions.

## When applied
During pruning and editing passes on agent-facing documentation.

## Sub-concepts
none

## Part of
pruning, writing-for-agents

## Implementation status
clean

## Design notes
An anti-pattern in agent prompt authoring where instructions state what the base model already does by default. Because LLMs already know general programming concepts, explaining them incurs token cost and context degradation without influencing model output.
