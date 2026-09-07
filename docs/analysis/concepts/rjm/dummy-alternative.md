---
package: rjm
name: Dummy Alternative
slug: dummy-alternative
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

# Dummy Alternative

## Definition — verbatim
> "Fake option to make the preferred one shine" — .claude/skills/adr-generator/references/ad-quality-frameworks.md:108

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/adr-generator/references/ad-quality-frameworks.md | 108 | defines | Tabulated under Subjectivity anti-patterns as including fake or strawman options solely to make the preferred option appear superior. |

## Consumes
Alternatives Considered section and comparative evaluation tables in an ADR.

## Produces
Detection of strawman options, prompting authors to analyze authentic, competitive alternative designs.

## When applied
Checked during START readiness gate validation and peer review to ensure considered alternatives are genuine options.

## Sub-concepts
none

## Part of
adr-creation-anti-patterns

## Implementation status
clean

## Design notes
Dummy Alternative (or strawman option) is the practice of including obviously unfeasible, obsolete, or poorly designed alternatives merely to satisfy the procedural requirement of having multiple options. In rjm, this anti-pattern is challenged by reviewers who insist that all listed alternatives represent viable, credible engineering paths with honest analysis of their advantages and disadvantages.
