---
package: matt
name: Context pointers
slug: context-pointers
kind: technique
package_phase: matt:Productivity
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/productivity/writing-for-agents.md, sha256: 009831d67d288eb2cb9494660f744affdef625d8e5eb041d75c4ee630a47ac73}
  - {path: external/writing-for-agents.md, sha256: ccebd127baac18804b7258275bc176b4859aabd8befe8c32a95c5c2056afdd65}
  - {path: skills/in-progress/implement-spec/SKILL.md, sha256: f703b5f41df9c2202e19540d203e0d5fc32613572a838a070136cc22e712b129}
  - {path: skills/productivity/writing-for-agents/SKILL.md, sha256: 551adca942227b44192edba88acd4e8db911f0121ce58ad16944ccf6a896a74a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Context pointers

## Definition — verbatim
> "A **context pointer** is a reference held in the agent's context that names some out-of-context material and encodes the condition for reaching it." — skills/productivity/writing-for-agents/SKILL.md:12

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/productivity/writing-for-agents.md | 26 | defined here | Defines context pointers as in-context references that name external material and encode trigger conditions. |
| external/writing-for-agents.md | 40 | defined here | Explains how context pointers enable progressive disclosure by linking to external documentation. |
| skills/in-progress/implement-spec/SKILL.md | 13 | defined here | Directs subagents to communicate sparsely using context pointers to specs, tickets, and commits. |
| skills/productivity/writing-for-agents/SKILL.md | 10 | defined here | Heading and core guideline establishing context pointers as the primary mechanism for progressive disclosure. |

## Consumes
External documents, specifications, tickets, or secondary reference files.

## Produces
High-precision triggering references residing in persistent context.

## When applied
Whenever detailed reference material can be moved out of always-loaded context.

## Sub-concepts
leading-word

## Part of
writing-for-agents, progressive-disclosure

## Implementation status
clean

## Design notes
The foundational architectural mechanism for managing LLM context windows. By placing concise, high-salience pointers in persistent context that specify when and why to load external documents, agents can navigate deep project knowledge without saturating working memory.
