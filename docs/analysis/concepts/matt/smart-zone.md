---
package: matt
name: smart zone
slug: smart-zone
kind: reference
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: CHANGELOG.md, sha256: ef5b5c5dfab4103bebcff8820eadbc9634b45fb06c2098c5ce39fb83039b4bcd}
  - {path: docs/engineering/ask-matt.md, sha256: 813a78e29b999d895cbd2e7d95e09339e4d6dbf935c09133ac8dbd8dc3299299}
  - {path: external/ask-matt.md, sha256: 1fcf73a516b42ad9b5ddb1faa24574aad7490f97099e7b4276c364f870582b2d}
  - {path: skills/engineering/ask-matt/PHASE-BOUNDARIES.md, sha256: a8aa20158609ef39e2b308b6ba0660c91066838d07a867202e63a7744a88a3ed}
  - {path: skills/engineering/ask-matt/SKILL.md, sha256: b25d86fb36b1d294eeead5d7db529f86135f9671f2afcd607579a63bb2213769}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# smart zone

## Definition — verbatim
> "The limit on this is the **[smart zone](https://www.aihero.dev/ai-coding-dictionary/smart-zone)**: the window (~150k tokens on state-of-the-art models) within which the model still reasons sharply." — skills/engineering/ask-matt/SKILL.md:32

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| CHANGELOG.md | 106 | defined here | Introduces smart zone concept definition in changelog |
| docs/engineering/ask-matt.md | 40 | used here | Context boundary criterion deciding whether to continue in session |
| external/ask-matt.md | 43 | used here | Table entry for Continue option referencing available smart zone tokens |
| skills/engineering/ask-matt/PHASE-BOUNDARIES.md | 21 | used here | Decision rule checking if ~150k tokens remain before continuing session |
| skills/engineering/ask-matt/SKILL.md | 32 | used here | Context hygiene guideline cautioning against pushing past reasoning limits |

## Consumes
Model context usage metrics and token count tracking

## Produces
Context transition decisions (triggering /compact or session transitions before reasoning degrades)

## When applied
When deciding whether to continue an active session into the next phase or compact at a boundary

## Sub-concepts
none

## Part of
ask-matt, phase-boundaries

## Implementation status
clean

## Design notes
The smart zone represents the operational token budget (approximately 150k tokens) during which high-end models maintain peak reasoning and nuance, serving as an objective threshold to prompt compaction or session rotation before cognitive degradation occurs.
