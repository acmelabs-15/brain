---
package: matt
name: Non-deterministic bugs
slug: non-deterministic-bugs
kind: pattern
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/engineering/diagnosing-bugs/SKILL.md, sha256: 77f3cf31bc99b2f49af943222526531fcc9fc41d047626d3640e875e85af3e84}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Non-deterministic bugs

## Definition — verbatim
> "### Non-deterministic bugs" — skills/engineering/diagnosing-bugs/SKILL.md:49

> "The goal is not a clean repro but a **higher reproduction rate**." — skills/engineering/diagnosing-bugs/SKILL.md:51

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/engineering/diagnosing-bugs/SKILL.md | 49 | defined here | Section heading and guidelines on raising reproduction rates for flaky or intermittent bugs. |

## Consumes
Flaky or intermittent bug symptoms with low baseline reproduction frequency.

## Produces
A stressed reproduction loop achieving a higher reproduction rate suitable for debugging.

## When applied
During Phase 1 of diagnosing bugs when dealing with race conditions or intermittent failures.

## Sub-concepts
none

## Part of
diagnosing-bugs

## Implementation status
clean

## Design notes
A category of bugs characterized by intermittent or flaky failures where the diagnostic strategy focuses on raising the reproduction rate through stress, concurrency, and looping rather than demanding 100% deterministic reproduction before investigation.
