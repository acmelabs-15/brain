---
package: rjm
name: pooled description delta
slug: pooled-description-delta
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/context-optimizer/references/rule-audit-evidence.md, sha256: 70d527ebb420739aa099f7982f4dc28e44432b3fa91532ae93ed5e0fa78e34e9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# pooled description delta

## Definition — verbatim
(used, not defined)

> "3.83 to 3.89) and left the sign count unchanged, with the pooled description" — .claude/skills/context-optimizer/references/rule-audit-evidence.md:94

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/context-optimizer/references/rule-audit-evidence.md | 94 | used here | Aggregate metric comparing average description mechanism scores against baseline across all evaluation runs (-0.13 pre-recovery to -0.14 post-recovery). |

## Consumes
Description mechanism and baseline cell scores across all multi-seed evaluation runs.

## Produces
Pooled average differential metric reflecting overall description-only routing performance.

## When applied
Applied when synthesizing cross-run summary statistics for rule activation audits.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
The `pooled description delta` is an aggregate performance metric in rjm tracking the net score differential between rules exposed via metadata description versus baseline controls across all evaluated model families. It demonstrates whether description-level progressive disclosure incurs an activation penalty.
