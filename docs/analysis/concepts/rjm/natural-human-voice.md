---
package: rjm
name: Natural Human Voice
slug: natural-human-voice
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

# Natural Human Voice

## Definition — verbatim
> "### Natural Human Voice" — .claude/skills/prompt-engineer/references/prompting-anti-patterns.md:73
> "Forbidden patterns (AI tells): "not X, but Y" framing, em dashes in paragraphs, excessive bullets, corrective antithesis." — .claude/skills/prompt-engineer/references/prompting-anti-patterns.md:75

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prompt-engineer/references/prompting-anti-patterns.md | 73 | defined here | Defined as an authoring pattern combining positive craft constraints and elimination of synthetic AI mannerisms. |

## Consumes
Prose generation tasks where output must avoid predictable artificial writing signatures.

## Produces
Writing characterized by directness, short sentences, active voice, concrete examples, and conversational transitions.

## When applied
When authoring prompts for human-facing documentation, communication, or editorial tasks.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
Natural Human Voice guides prompt construction to produce authentic communication by explicitly forbidding common AI stylistic tells ("not X, but Y" framing, excessive em dashes, corrective antithesis) while applying positive craft constraints such as concise phrasing, active voice, and grounded examples.
