---
package: addy
name: Safe Fallback Patterns
slug: safe-fallback-patterns
kind: pattern
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

# Safe Fallback Patterns

## Definition — verbatim
> "## Safe Fallback Patterns" — skills/debugging-and-error-recovery/SKILL.md:214
> "When under time pressure, use safe fallbacks:" — skills/debugging-and-error-recovery/SKILL.md:216

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/debugging-and-error-recovery/SKILL.md | 214 | defines | Patterns for graceful degradation and safe defaults under urgent time pressure. |

## Consumes
Production incident, urgent regression, or unstable edge path requiring immediate stabilization before permanent root-cause fix.

## Produces
Defensive implementation patterns: safe default values with explicit warnings, and graceful degradation UI states.

## When applied
Used when working under urgent time pressure to prevent crashes and ensure graceful degradation while a proper fix is developed.

## Sub-concepts
none

## Part of
debugging-and-error-recovery

## Implementation status
clean

## Design notes
Defensive coding patterns prioritizing service availability and graceful degradation over hard crashes. Under urgent operational pressure, safe defaults with warning logs and graceful error states prevent total feature failure while permanent root-cause remedies are being engineered.
