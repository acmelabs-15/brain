---
package: rjm
name: Learning Signals
slug: learning-signals
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/reflect/references/phase2-signal-detection.md, sha256: 0ab4e815f6a5d845c34bb0ab190f497314bfe7ed429cc77e68d35b6122faf7bd}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Learning Signals

## Definition — verbatim
> "Scan the conversation for learning signals with confidence levels." — .claude/skills/reflect/references/phase2-signal-detection.md:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/reflect/references/phase2-signal-detection.md | 3 | defined here | Concept introducing conversation analysis to detect steering signals with assigned confidence tiers. |

## Consumes
Conversation history transcripts containing user directives, praise, corrections, and questions.

## Produces
Classified signal instances tagged by confidence tier (HIGH, MEDIUM, LOW) for threshold evaluation.

## When applied
Phase 2 of skill reflection when parsing conversational interaction for learning opportunities.

## Sub-concepts
none

## Part of
reflect

## Implementation status
clean

## Design notes
A conversational analysis technique that scans dialogue turns for behavioral cues—such as user corrections, praise, unexpected edge cases, and implicit preferences—categorizing them by confidence to ground subsequent memory updates in empirical interaction data.
