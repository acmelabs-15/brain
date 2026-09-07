---
package: rjm
name: HIGH Confidence: Corrections
slug: high-confidence-corrections
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

# HIGH Confidence: Corrections

## Definition — verbatim
> "## HIGH Confidence: Corrections" — .claude/skills/reflect/references/phase2-signal-detection.md:9

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/reflect/references/phase2-signal-detection.md | 9 | defined here | Definition and detection patterns for explicit user steering and error corrections. |

## Consumes
Explicit negative user directives ("no", "not like that", "always do", "never do").

## Produces
HIGH-confidence constraints that unconditionally qualify for memory update proposals.

## When applied
When evaluating conversational signals during reflection.

## Sub-concepts
none

## Part of
reflect

## Implementation status
clean

## Design notes
The highest-priority reflection signal category capturing explicit user corrections and steering directives, treated as deterministic constraints that immediately qualify for persistent memory updates.
