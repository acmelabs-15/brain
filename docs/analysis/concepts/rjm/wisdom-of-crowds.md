---
package: rjm
name: wisdom of crowds
slug: wisdom-of-crowds
kind: pattern
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/references/synthesis-protocol.md, sha256: f7cf0dada576138f82391627c2b52c7fdeec4f41e60420673020ba664ff1e7d7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# wisdom of crowds

## Definition — verbatim
(used, not defined)

> "The synthesis panel applies the \"wisdom of crowds\" principle to skill evaluation." — .claude/skills/skillforge/references/synthesis-protocol.md:7

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/references/synthesis-protocol.md | 7 | used here | Guiding principle for multi-agent synthesis panel requiring diverse perspective evaluation. |

## Consumes
Multiple independent evaluation perspectives.

## Produces
Balanced quality assessments avoiding individual agent blind spots.

## When applied
Applied during synthesis panel evaluation of newly generated skills.

## Sub-concepts
none

## Part of
multi-agent-synthesis-protocol

## Implementation status
defects: doc-drift

## Design notes
An evaluative design pattern that aggregates judgments across diverse specialized agents to eliminate blind spots inherent in single-model or single-prompt assessments.
