---
package: rjm
name: Sense-Analyze-Respond
slug: sense-analyze-respond
kind: pattern
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/cynefin-classifier/SKILL.md, sha256: 693d6b820eed8768ff439de20b1541f57e73e716e8c9d5a111df606f9263ebf5}
  - {path: .claude/skills/cynefin-classifier/scripts/classify.py, sha256: f5ce4befe58c6a8a7f8e8545099f29fca17bf8f89a0a63b40d09a8875028cb6a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Sense-Analyze-Respond

## Definition — verbatim
> "Sense-Analyze-Respond" — .claude/skills/cynefin-classifier/scripts/classify.py:128

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/cynefin-classifier/scripts/classify.py | 128 | defined here | Defined in STRATEGIES dictionary as the response strategy approach string for the Complicated domain. |
| .claude/skills/cynefin-classifier/SKILL.md | 48 | defined here | Specified in the Cynefin Framework quadrant ASCII diagram as the response model for Complicated problems. |

## Consumes
Telemetry, logs, expert domain knowledge, diagnostic tools.

## Produces
Root cause determination, quantitative analysis, trade-off matrix, good practice implementation.

## When applied
When problems fall into the Complicated domain where cause-and-effect relationships are discoverable through expert analysis.

## Sub-concepts
none

## Part of
cynefin-classifier

## Implementation status
defects: unimplemented-feature, doc-drift

## Design notes
`Sense-Analyze-Respond` is the cognitive strategy applied to Complicated domain problems in rjm. Unlike clear problems with obvious solutions, complicated problems have multiple viable solutions or subtle cause-and-effect interactions requiring expert investigation, diagnostic profiling, and analytical reasoning before deciding and acting.
