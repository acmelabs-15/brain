---
package: addy
name: Measured, not yet enforced
slug: measured-not-yet-enforced
kind: artifact
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

# Measured, not yet enforced

## Definition — verbatim
> "## Measured, not yet enforced" — skills/constraint-driven-development/SKILL.md:126

> "Put it in the \"Measured, not yet enforced\" table with today's number and a direction." — skills/constraint-driven-development/SKILL.md:230

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/constraint-driven-development/SKILL.md | 126 | defined here | Section heading in CONSTRAINTS.md for the ratchet tracking table |

## Consumes
Baseline measurements of codebase metrics lacking explicit target numbers.

## Produces
A structured table in CONSTRAINTS.md tracking metrics, baseline values, and enforcement directions.

## When applied
Authored in Step 3 and Step 7 of constraint-driven development for metrics that should not regress.

## Sub-concepts
ratchets

## Part of
constraints-md, constraint-driven-development

## Implementation status
defects: doc-drift

## Design notes
A structured table section in CONSTRAINTS.md dedicated to ratchets. It records baseline values and required drift directions ("must not fall", "must not grow") for metrics without predetermined numerical targets, ensuring that code quality does not deteriorate over time.
