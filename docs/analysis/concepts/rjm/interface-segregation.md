---
package: rjm
name: Interface Segregation
slug: interface-segregation
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/code-qualities-assessment/references/calibration-examples.md, sha256: 79f51c12b66cb2543069b1a0239227fcd1e864961d5e6e1b8c386a84645103cb}
  - {path: .claude/skills/quality-grades/references/solid-principles.md, sha256: b9f5ab503d00e1e3a0b32954a4570aa4b6269853bd9c896faad8365d304eaab4}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Interface Segregation

## Definition — verbatim
> "| Interface Segregation (ISP) | Many specific interfaces over one general interface |" — .claude/skills/quality-grades/references/solid-principles.md:18

## Also called — verbatim
`ISP` — .claude/skills/quality-grades/references/solid-principles.md:18

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/code-qualities-assessment/references/calibration-examples.md | 402 | defined here | TypeScript code calibration example contrasting focused interface contracts against concrete dependencies. |
| .claude/skills/quality-grades/references/solid-principles.md | 18 | defined here | Defined as the fourth SOLID principle mandating specific interfaces over monolithic contracts. |

## Consumes
Interface declarations, class inheritance trees, and client service dependencies.

## Produces
Client-focused interface abstractions that decouple consumers from unused operations.

## When applied
Applied when reviewing and grading object-oriented designs and scoring coupling and cohesion metrics.

## Sub-concepts
none

## Part of
solid-principles

## Implementation status
defects: missing-path

## Design notes
Interface Segregation enforces that clients should never be forced to depend upon methods they do not use. Within rjm's quality assessment framework, adhering to ISP directly correlates with high cohesion and low coupling scores, preventing monolithic "fat" interfaces that result in empty or throwing method stubs.
