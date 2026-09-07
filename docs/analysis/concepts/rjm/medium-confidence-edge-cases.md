---
package: rjm
name: MEDIUM Confidence: Edge Cases
slug: medium-confidence-edge-cases
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

# MEDIUM Confidence: Edge Cases

## Definition — verbatim
> "## MEDIUM Confidence: Edge Cases" — .claude/skills/reflect/references/phase2-signal-detection.md:46

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/reflect/references/phase2-signal-detection.md | 46 | defined here | Detection patterns for unhandled scenarios, missing preconditions, or error-handling gaps. |

## Consumes
User questions about missing scenarios or manual workarounds applied during execution.

## Produces
MEDIUM-confidence edge-case notes contributing toward reflection update thresholds.

## When applied
When analyzing conversational turns for unexpected boundary conditions during reflection.

## Sub-concepts
none

## Part of
reflect

## Implementation status
clean

## Design notes
A medium-confidence signal category identifying unhandled edge cases, missing file scenarios, and error-handling gaps revealed during conversation, turning boundary questions into actionable checks.
