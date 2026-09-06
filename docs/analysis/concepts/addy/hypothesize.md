---
package: addy
name: Hypothesize
slug: hypothesize
kind: technique
package_phase: addy:Define
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/interview-me/SKILL.md, sha256: 1d94741d10d2c826cd0c191aea3981ee94c8abb27ef2a166f6a372117d06448f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Hypothesize

## Definition — verbatim
> "Before asking anything, write down your current best read of what the user wants in **one sentence**, plus an honest confidence number (0–100%):" — skills/interview-me/SKILL.md:42

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/interview-me/SKILL.md | 40 | defined here | Step 1 of the interview process requiring an explicit one-sentence hypothesis and confidence number. |

## Consumes
An underspecified user request or conversational starting point.

## Produces
An explicit, falsifiable one-sentence hypothesis regarding user goals and an accompanying confidence rating.

## When applied
> "Before asking anything, write down your current best read of what the user wants in **one sentence**, plus an honest confidence number (0–100%):" — skills/interview-me/SKILL.md:42

## Sub-concepts
- confidence-number

## Part of
- interview-me

## Implementation status
clean

## Design notes
An elicitation technique that obligates the interviewer to formulate a concrete, falsifiable guess about what the user wants before asking questions, creating a reference point that accelerates user feedback.
