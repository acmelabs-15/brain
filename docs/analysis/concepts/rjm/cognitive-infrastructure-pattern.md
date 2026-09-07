---
package: rjm
name: Cognitive Infrastructure Pattern
slug: cognitive-infrastructure-pattern
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/prompt-engineer/references/prompting-anti-patterns.md, sha256: bb3bb55f446fe40863d1d4460e2885e4f1115d196236896d4107656891eb1bc2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Cognitive Infrastructure Pattern

## Definition — verbatim
> "### Cognitive Infrastructure Pattern" — .claude/skills/prompt-engineer/references/prompting-anti-patterns.md:63
> "Core sequence: Pattern, Territory, Gap, Recognition, Embodiment." — .claude/skills/prompt-engineer/references/prompting-anti-patterns.md:65

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prompt-engineer/references/prompting-anti-patterns.md | 63 | defined here | Defined as a five-stage instructional sequence designed to foster user comprehension rather than superficial memorization. |

## Consumes
Complex technical concepts or system architecture requiring user understanding.

## Produces
Pedagogical sequence that presents structural patterns and relatable examples while withholding explicit connections.

## When applied
When designing prompts for explanation, tutoring, architectural debriefs, or advisory agents.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
The Cognitive Infrastructure Pattern follows the sequence: Pattern, Territory, Gap, Recognition, Embodiment. Based on the principle that over-explaining leads to memorization while bridging gaps creates genuine comprehension, this pattern guides the model to present patterns and familiar territory, then pause to let the user discover the connection.
