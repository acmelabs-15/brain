---
package: matt
name: Negation
slug: negation
kind: pattern
package_phase: matt:writing-for-agents
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: CHANGELOG.md, sha256: ef5b5c5dfab4103bebcff8820eadbc9634b45fb06c2098c5ce39fb83039b4bcd}
  - {path: skills/productivity/writing-for-agents/SKILL.md, sha256: 551adca942227b44192edba88acd4e8db911f0121ce58ad16944ccf6a896a74a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Negation

## Definition — verbatim
> "**Negation** is the failure mode beside this lever: steering by prohibition drags the forbidden behaviour into context and makes it _more_ available, not less." — skills/productivity/writing-for-agents/SKILL.md:74

## Also called — verbatim
`the _elephant_` — CHANGELOG.md:173

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| CHANGELOG.md | 173 | defined here | Defines Negation as a prompt failure mode where prohibitions activate forbidden behavior |
| skills/productivity/writing-for-agents/SKILL.md | 74 | defined here | In-depth analysis of negation failure mode and instructions to prompt the positive |

## Consumes
Draft prompt instructions, negative steering rules, or system guidelines

## Produces
Positively phrased behavioural targets that avoid mentioning prohibited actions

## When applied
When drafting or editing skills, commands, rules files, and agent prompts

## Sub-concepts
none

## Part of
writing-for-agents

## Implementation status
clean

## Design notes
Negation identifies the LLM attention trap where phrasing rules as prohibitions ("don't do X") primes the forbidden concept in the context window, advocating instead for positive steering ("do Y") that directs attention directly to desired behaviors.
