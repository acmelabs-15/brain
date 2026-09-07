---
package: rjm
name: MEDIUM Confidence: Success Patterns
slug: medium-confidence-success-patterns
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

# MEDIUM Confidence: Success Patterns

## Definition — verbatim
> "## MEDIUM Confidence: Success Patterns" — .claude/skills/reflect/references/phase2-signal-detection.md:28

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/reflect/references/phase2-signal-detection.md | 28 | defined here | Detection criteria for user praise and unmodified output acceptance. |

## Consumes
Explicit user praise ("perfect", "great", "exactly") or unmodified acceptance across workflow steps.

## Produces
MEDIUM-confidence preference patterns contributing toward memory proposal thresholds.

## When applied
When analyzing conversation turns for positive reinforcement signals during reflection.

## Sub-concepts
none

## Part of
reflect

## Implementation status
clean

## Design notes
A medium-confidence signal category capturing explicit user praise and unedited output acceptance, requiring corroboration (≥2 MEDIUM signals) before formalizing into persistent memory preferences.
