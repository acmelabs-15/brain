---
package: rjm
name: XML Structure Patterns
slug: xml-structure-patterns
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md, sha256: 18d14cb05a5fae5714355776fc4016fe1af5af0709f06bc8b4745e30b2771db9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# XML Structure Patterns

## Definition — verbatim
> "XML tags are more than separators. They can enforce reasoning structure, ensure completeness, and even function as instructions themselves." — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:817

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md | 815 | defined here | Defined as structural patterns using XML tags to enforce reasoning steps, checklist completion, and self-documenting instructions. |

## Consumes
Prompt instructions, multi-stage tasks, analysis checklists, and desired output schemas.

## Produces
Structured reasoning traces and outputs encapsulated in semantic XML container tags.

## When applied
When enforcing completeness across multi-step agent actions or complex analyses where models might skip steps.

## Sub-concepts
none

## Part of
prompt-engineering-patterns

## Implementation status
clean

## Design notes
XML Structure Patterns leverage XML markup to structure agent deliberation and enforce task completeness. Explicit tag enclosures transform instructions into concrete cognitive checkpoints, ensuring that models systematically execute required sub-tasks rather than producing incomplete, conversational responses.
