---
package: rjm
name: Conversation Structure Template
slug: conversation-structure-template
kind: template
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md, sha256: d4baf475bf65bb62eebadd4ee3458feed74409068cf1fad9195fbade1ff5ae06}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Conversation Structure Template

## Definition — verbatim
> "A general template for multi-turn improvement:" — .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md:548

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md | 546 | defined here | Section introducing the canonical turn sequence template for multi-turn prompting. |

## Consumes
Base system instructions and multi-turn conversational requirements.

## Produces
A structured message sequence defining roles and cognitive responsibilities across initial generation, analysis/feedback, refinement, and formatting turns.

## When applied
When architecting multi-turn conversational agents or iterative reasoning sequences.

## Sub-concepts
none

## Part of
prompt-engineer

## Implementation status
clean

## Design notes
A structural prompt template in rjm establishing a clean separation of cognitive operations across turns. By prescribing discrete turns for initial generation, critique/analysis, refinement/synthesis, and final format extraction, it provides a repeatable pattern that avoids mixed-goal prompt degradation.
