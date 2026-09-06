---
package: addy
name: STOP
slug: stop
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/doubt-driven-development.md, sha256: 14ed5d0c377737e6739c290e63818be735de2ce06f3bdff56b14cf7b4271a0fe}
  - {path: hooks/SIMPLIFY-IGNORE.md, sha256: a7121b0505c960a8a7a7f09600c9fa81464fc403ab297b95d23f5109b13ea52a}
  - {path: hooks/simplify-ignore.sh, sha256: 1256c677adbce33f3c361793d7dae2405fb02a7efc07b19cc8f42134def8a5cd}
  - {path: skills/debugging-and-error-recovery/SKILL.md, sha256: 67ce2c9442da0c5a6e3515617fc9c4003cfe232ef7c7210da342f40f508f9958}
  - {path: skills/doubt-driven-development/SKILL.md, sha256: 0a058297aa6bdf90b0ff45c3537af4cb0005f4af6b0d202fc07b7b5984db50ea}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# STOP

## Definition — verbatim
> "- [ ] Step 5: STOP — met stop condition (trivial findings, 3 cycles, or user override)" — skills/doubt-driven-development/SKILL.md:59

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/doubt-driven-development.md | 1 | defined here | Positioned as the termination step of the doubt cycle. |
| hooks/SIMPLIFY-IGNORE.md | 36 | used here | Specified as the lifecycle Stop hook event triggering file restoration. |
| hooks/simplify-ignore.sh | 7 | used here | Documented as the hook handler that restores real file content upon session stop. |
| skills/debugging-and-error-recovery/SKILL.md | 26 | defined here | Defined as the immediate first action of the Stop-the-Line Rule: halt all feature edits upon error. |
| skills/doubt-driven-development/SKILL.md | 59 | defined here | Defined as meeting the stop condition to terminate adversarial review loops. |

## Consumes
Cycle counters, triage classifications, error events, or session termination signals.

## Produces
Loop exit decision, state preservation, or file restoration.

## When applied
> "1. STOP adding features or making changes" — skills/debugging-and-error-recovery/SKILL.md:26

## Sub-concepts
none

## Part of
doubt-driven-development, debugging-and-error-recovery

## Implementation status
clean

## Design notes
A protective gating concept used across multiple skills and hooks. In review loops, it enforces bounded cycles to prevent endless pedantic recursion; in debugging, it stops speculative changes from compounding damage; and in hook lifecycles, it safely restores sensitive files.
