---
package: addy
name: fresh-context reviewer
slug: fresh-context-reviewer
kind: role
package_phase: addy:Build
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/doubt-driven-development/SKILL.md, sha256: 0a058297aa6bdf90b0ff45c3537af4cb0005f4af6b0d202fc07b7b5984db50ea}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# fresh-context reviewer

## Definition — verbatim
> "materializing a fresh-context reviewer — biased to **disprove**, not approve — before any non-trivial output stands." — skills/doubt-driven-development/SKILL.md:10

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/doubt-driven-development/SKILL.md | 10 | defined here | Defined in overview as an adversarial reviewer spawned with fresh context to cross-examine non-trivial decisions. |

## Consumes
An isolated reviewable unit (ARTIFACT + CONTRACT) stripped of author reasoning and CLAIM conclusions.

## Produces
Adversarial findings identifying unstated assumptions, unhandled edge cases, hidden couplings, or contract violations.

## When applied
> "A decision is **non-trivial** when at least one of these is true:" — skills/doubt-driven-development/SKILL.md:16

## Sub-concepts
none

## Part of
doubt-driven-development

## Implementation status
clean

## Design notes
The `fresh-context reviewer` provides independent adversarial scrutiny by examining code or proposals in an isolated session free from author rationalizations, counteracting confirmation bias before changes are committed.
