---
package: rjm
name: ADR Creation Anti-Patterns
slug: adr-creation-anti-patterns
kind: pattern
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

# ADR Creation Anti-Patterns

## Definition — verbatim
> "ADR Creation Anti-Patterns (Zimmermann)" — .claude/skills/adr-generator/references/ad-quality-frameworks.md:99

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/adr-generator/references/ad-quality-frameworks.md | 99 | defines | Section heading cataloging twelve recurring failure modes in ADR authoring across subjectivity, time dimension, size/content, and magic tricks. |

## Consumes
Draft ADR proposals, proposed options, decision justifications, and trade-off tables.

## Produces
Catalog of recognizable defect patterns enabling automated and peer detection of substandard decision documentation.

## When applied
Referenced during authoring self-checks, architect evaluation, and peer review gates to detect rhetorical and structural flaws in decision records.

## Sub-concepts
fairy-tale, sales-pitch, free-lunch-coupon, dummy-alternative, sprint-rush, tunnel-vision, maze, blueprint-policy-in-disguise, mega-adr, false-urgency, problem-solution-mismatch, pseudo-accuracy

## Part of
ad-quality-frameworks

## Implementation status
clean

## Design notes
ADR Creation Anti-Patterns classifies twelve common authoring pathologies into four categories: subjectivity, temporal distortion, scope misallocation, and deceptive justification ('magic tricks'). By giving formal names to practices like strawman alternatives, marketing hype, and monolithic documentation, rjm provides agents and reviewers with precise criteria to challenge and reject low-quality architectural proposals.
