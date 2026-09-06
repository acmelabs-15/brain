---
package: addy
name: Discipline skills
slug: discipline-skills
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: evals/README.md, sha256: 9d67d641f2b710661462fce67370b25adcc60ad99d2149342f55cb33e025aa2b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Discipline skills

## Definition — verbatim
> "Discipline skills also include pressure cases for time pressure, sunk cost, and authority pressure; these verify that the workflow still holds when the prompt argues for skipping it." — evals/README.md:38

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| evals/README.md | 38 | defined here | Characterizes skills subjected to adversarial pressure testing in behavioral evaluations. |

## Consumes
Skill definitions and pressure test cases for rationalization resistance.

## Produces
Resilience verification that workflows hold even when prompts argue for skipping them.

## When applied
During behavioral evaluation of skills that enforce process discipline.

## Sub-concepts
time-pressure

## Part of
evals-framework

## Implementation status
defects: doc-drift

## Design notes
addy groups process-enforcing skills (such as TDD and verification workflows) as discipline skills, subjecting them to behavioral evaluations that simulate rationalizations and conversational shortcuts to ensure rigor under pressure.
