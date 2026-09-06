---
package: addy
name: Silent confusion
slug: silent-confusion
kind: pattern
package_phase: addy:Build
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/context-engineering/SKILL.md, sha256: ff9d4e5706bdd2eb7de1bfed569f1f42d28e478979ce6fcc32e617e7861b491d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Silent confusion

## Definition — verbatim
> "| Silent confusion | Agent guesses when it should ask | Surface ambiguity explicitly using the confusion management patterns above |" — skills/context-engineering/SKILL.md:262

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/context-engineering/SKILL.md | 262 | defined here | Listed in the Anti-Patterns table as a behavioral flaw where an agent guesses instead of asking for clarification. |

## Consumes
Ambiguous task instructions, conflicting project documents, or incomplete feature specifications.

## Produces
Unwarranted assumptions, hallucinated feature requirements, and wasted engineering effort.

## When applied
Identified when an agent silently guesses an implementation path when faced with ambiguous requirements; remedied by explicit confusion management prompts.

## Sub-concepts
none

## Part of
context-engineering

## Implementation status
defects: doc-drift, orphan

## Design notes
A critical behavioral failure mode in autonomous coding agents where ambiguity is resolved by guessing rather than asking. Silent confusion leads to divergent implementations and severe rework; agents must instead surface conflicts explicitly with structured alternatives.
