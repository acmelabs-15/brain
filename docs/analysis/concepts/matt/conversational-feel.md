---
package: matt
name: Conversational feel
slug: conversational-feel
kind: technique
package_phase: matt:in-progress
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/in-progress/writing-shape/SKILL.md, sha256: f5e6c57bdd85178ace4a260c92f46da6b64ddee18215b461d875739c68976f72}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Conversational feel

## Definition — verbatim
> "This is a grilling session inverted." — skills/in-progress/writing-shape/SKILL.md:43

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/in-progress/writing-shape/SKILL.md | 41 | defined here | Section heading describing the editorial tone of an inverted grilling session that challenges weak transitions and cuts unearned paragraphs. |

## Consumes
Draft paragraphs and transitions proposed during article shaping.

## Produces
Sharpened arguments, pruned paragraphs, and resolved topical drift in the text.

## When applied
Throughout paragraph-by-paragraph article assembly in writing-shape.

## Sub-concepts
none

## Part of
writing-shape

## Implementation status
clean

## Design notes
Conversational feel frames the agent's role as an active editorial partner rather than a passive scribe. By inverting the exploratory grilling session to ask what the article is actually arguing and what breaks if a paragraph is cut, the agent enforces rigorous narrative momentum and defends against weak transitions.
