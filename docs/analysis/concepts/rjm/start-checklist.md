---
package: rjm
name: START Checklist
slug: start-checklist
kind: checklist
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/adr-generator/references/ad-quality-frameworks.md, sha256: 45f86306ae19ffd5bfea272c9f4db21a6effca28b85e4a9fa4d096b26f8d7d8e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# START Checklist

## Definition — verbatim
> "START Checklist" — .claude/skills/adr-generator/references/ad-quality-frameworks.md:33

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/adr-generator/references/ad-quality-frameworks.md | 33 | defines | Section heading introducing the five-point verification checklist operationalizing the START criteria before an ADR is authored. |

## Consumes
Identified stakeholders, timing justification, candidate options, requirements documentation, and selected ADR template.

## Produces
Completed five-point markdown checklist confirming entry readiness for architectural decision authoring.

## When applied
Completed by an author or agent prior to drafting an ADR to systematically verify that all Definition of Ready preconditions are met.

## Sub-concepts
none

## Part of
start

## Implementation status
clean

## Design notes
The START Checklist operationalizes the abstract Definition of Ready into a concrete, executable verification list. By demanding explicit confirmation that stakeholders are identified, the timing is appropriate, at least two alternatives are known, requirements are captured, and an ADR template has been chosen, it filters out ill-conceived proposals before they consume authoring and peer review resources.
