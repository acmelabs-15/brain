---
package: matt
name: Facts vs. decisions
slug: facts-vs-decisions
kind: technique
package_phase: matt:grilling
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: CHANGELOG.md, sha256: ef5b5c5dfab4103bebcff8820eadbc9634b45fb06c2098c5ce39fb83039b4bcd}
  - {path: docs/productivity/grilling.md, sha256: 5bd89a79cfc03e2a105e5da59da598e0834cf55df9c029daca950e98d3ff76f1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Facts vs. decisions

## Definition — verbatim
> "Grilling now splits _facts_ (look them up — explore the codebase) from _decisions_ (put each one to the human and wait for their answer)." — CHANGELOG.md:171

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| CHANGELOG.md | 171 | defined here | Defines the operational boundary between codebase investigation and user questioning |
| docs/productivity/grilling.md | 39 | defined here | Table row indicating that facts vs decisions is defined in the core grilling documentation |

## Consumes
An active problem statement and the target codebase

## Produces
Grounded questions that ask only about business/product trade-offs, having established existing code facts first

## When applied
During the formulation of grilling rounds and pre-interview codebase reconnaissance

## Sub-concepts
none

## Part of
grilling

## Implementation status
clean

## Design notes
This distinction prevents conversational fatigue by requiring agents to look up existing technical facts (libraries, schemas, existing patterns) from the workspace rather than asking the human, reserving human dialogue exclusively for true subjective decisions.
