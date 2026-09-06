---
package: addy
name: Instrumentation Guidelines
slug: instrumentation-guidelines
kind: checklist
package_phase: addy:Verify
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/debugging-and-error-recovery/SKILL.md, sha256: 67ce2c9442da0c5a6e3515617fc9c4003cfe232ef7c7210da342f40f508f9958}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Instrumentation Guidelines

## Definition — verbatim
> "## Instrumentation Guidelines" — skills/debugging-and-error-recovery/SKILL.md:243
> "Add logging only when it helps. Remove it when done." — skills/debugging-and-error-recovery/SKILL.md:245

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/debugging-and-error-recovery/SKILL.md | 243 | defines | Prescribes criteria for when to add temporary debug logging and when to remove or retain it. |

## Consumes
Diagnostic investigation needing visibility into internal state, intermittent failures, or multi-component interactions.

## Produces
Targeted temporary logging during defect localization, and cleaned code stripped of debug noise prior to commit.

## When applied
Applied during debugging when failures cannot be localized, issues are intermittent, or interacting components must be monitored.

## Sub-concepts
none

## Part of
debugging-and-error-recovery

## Implementation status
clean

## Design notes
Disciplined rules governing the lifecycle of diagnostic logging and instrumentation. It requires adding logging only when localization is blocked, and strictly mandates removing transient logs once the defect is fixed and guarded by regression tests to avoid noise, performance overhead, and sensitive data leakage.
