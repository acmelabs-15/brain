---
package: rjm
name: LOW Confidence: Preferences
slug: low-confidence-preferences
kind: pattern
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

# LOW Confidence: Preferences

## Definition — verbatim
> "## LOW Confidence: Preferences" — .claude/skills/reflect/references/phase2-signal-detection.md:64

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/reflect/references/phase2-signal-detection.md | 64 | defined here | Detection patterns for implicit, accumulated style or tooling choices across conversation turns. |

## Consumes
Repeated tool flag usage (e.g. `-Force`), formatting habits, or implicit workflow choices.

## Produces
LOW-confidence notes requiring accumulation (≥3 occurrences) before proposal.

## When applied
When scanning conversation history for subtle stylistic tendencies during reflection.

## Sub-concepts
none

## Part of
reflect

## Implementation status
clean

## Design notes
A low-confidence signal category tracking subtle, repeated user preferences (formatting, CLI flags, workflow styles) that requires repeated accumulation across turns before surfacing as proposed memory updates.
