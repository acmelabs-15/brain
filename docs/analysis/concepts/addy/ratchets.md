---
package: addy
name: Ratchets
slug: ratchets
kind: technique
package_phase: addy:Define
implementation_in_scope: true
memo_inputs:
  - {path: skills/constraint-driven-development/SKILL.md, sha256: 19d0aba70ced988c67739d5edd2a9b124a0783788c2baa70a8cc64cdd90612e5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Ratchets

## Definition — verbatim
> "DEFAULT if unsure: Measure and hold. See \"Ratchets\" below." — skills/constraint-driven-development/SKILL.md:82

> "The alternative asks for no decision: record where you are, then refuse to get worse." — skills/constraint-driven-development/SKILL.md:230

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/constraint-driven-development/SKILL.md | 82 | defined here | Recommends measuring and holding baseline values when target numbers are unknown |

## Consumes
Current baseline measurements of project metrics (such as overall test coverage or bundle size).

## Produces
Directional constraints ("must not fall", "must not grow") that prevent regressions without setting arbitrary targets.

## When applied
When establishing constraints on an existing codebase where teams lack predetermined target numbers.

## Sub-concepts
measured-not-yet-enforced

## Part of
constraint-driven-development

## Implementation status
defects: doc-drift

## Design notes
A non-arbitrary constraint technique that captures current baseline values and strictly forbids regression. Rather than setting unobtainable targets that cause red builds and eventual apathy, ratchets hold the existing line and ratchet upward whenever metrics improve.
