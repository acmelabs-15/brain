---
package: rjm
name: sonnet-tier
slug: sonnet-tier
kind: technique
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/metrics/SKILL.md, sha256: 702620038e2f62fbf3a88eca8f6c4efb606f8e48926ec03c4422169918bff9fe}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# sonnet-tier

## Definition — verbatim
> "model-rationale: cost. The 'haiku' rolling alias resolves via the platform model_tiers map to a tier priced below the sonnet-tier harness default; this unit is routing/mechanical work where the cheaper tier suffices (ADR-080 rule 3)." — .claude/skills/metrics/SKILL.md:8

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/metrics/SKILL.md | 8 | used here | Referenced and applied in SKILL.md during verification and operational workflows. |

## Consumes
Developer inputs, configuration parameters, and codebase artifacts.

## Produces
Standardized system behaviors, verified outputs, and structured lifecycle artifacts.

## When applied
Invoked across development, analysis, and synthesis phases.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
An operational technique or artifact (sonnet-tier) utilized within the rjm ecosystem to ensure consistency and systematic execution.
