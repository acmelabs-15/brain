---
package: rjm
name: Confidence Threshold
slug: confidence-threshold
kind: gate
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

# Confidence Threshold

## Definition — verbatim
> "## Confidence Threshold" — .claude/skills/reflect/references/phase2-signal-detection.md:82

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/reflect/references/phase2-signal-detection.md | 82 | defined here | Total evaluation table mapping signal counts (HIGH/MED/LOW) to propose or skip actions. |

## Consumes
Counts of detected HIGH, MEDIUM, and LOW confidence conversational signals.

## Produces
Binary gating verdict (propose findings to user vs. skip and defer to future session).

## When applied
End of Phase 2 conversation analysis in the reflection workflow.

## Sub-concepts
none

## Part of
reflect

## Implementation status
clean

## Design notes
A gating rule structured as a total function (first match wins top-to-bottom: ≥1 HIGH, ≥2 MED, ≥3 LOW, else skip) that filters conversational noise and ensures agents only interrupt users with memory proposals when supported by sufficient empirical evidence.
