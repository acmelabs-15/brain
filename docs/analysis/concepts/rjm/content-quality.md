---
package: rjm
name: Content Quality
slug: content-quality
kind: checklist
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/adr-generator/references/quality-checklist.md, sha256: 8a66e192b59dcb7663bf3a054a57c2655d4d2aaf8c60429ae8ca15c2fa961cf4}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Content Quality

## Definition — verbatim
(used, not defined)

> "## Content Quality" — .claude/skills/adr-generator/references/quality-checklist.md:14

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/adr-generator/references/quality-checklist.md | 14 | defines | Checklist section verifying problem-focused context, unambiguous active-voice decision, 2+ alternatives, positive and negative consequences, actionable notes, and relative references. |

## Consumes
Prose content and arguments in the draft ADR.

## Produces
Verification of analytical rigor, trade-off honesty, and actionable implementation guidance.

## When applied
During Phase G4 self-validation of an ADR.

## Sub-concepts
none

## Part of
adr-quality-checklist

## Implementation status
clean

## Design notes
A critical category in the ADR Quality Checklist verifying the substantive rigor of an architectural decision record. It mandates problem-focused context, active-voice decisions, evaluation of at least two genuine alternatives with pros and cons, acknowledgment of negative consequences, actionable implementation notes, and valid relative links.
