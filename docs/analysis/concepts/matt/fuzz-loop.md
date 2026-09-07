---
package: matt
name: fuzz loop
slug: fuzz-loop
kind: technique
package_phase: matt:diagnosing-bugs
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/diagnosing-bugs.md, sha256: e98918deb1006ce9e3e40d12e60c54410a8a9820225e85cb4a78c0323a8c5c40}
  - {path: skills/engineering/diagnosing-bugs/SKILL.md, sha256: 77f3cf31bc99b2f49af943222526531fcc9fc41d047626d3640e875e85af3e84}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# fuzz loop

## Definition — verbatim
> "If the bug is \"sometimes wrong output\", run 1000 random inputs and look for the failure mode." — skills/engineering/diagnosing-bugs/SKILL.md:32

## Also called — verbatim
`property or fuzz loop` — external/diagnosing-bugs.md:40

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/diagnosing-bugs.md | 40 | used here | Seventh rung on the loop ladder, used to catch non-deterministic or intermittent incorrect output. |
| skills/engineering/diagnosing-bugs/SKILL.md | 32 | defined here | Defines fuzzing as running 1000 random inputs to expose failure modes for intermittent bugs. |

## Consumes
A randomized input generator and a specification or validation invariant.

## Produces
A repeatable counterexample input that deterministically reproduces the defect.

## When applied
When investigating non-deterministic defects, flakes, or edge-case calculations where static inputs fail to reproduce the error.

## Sub-concepts
none

## Part of
diagnosing-bugs, phase-1

## Implementation status
clean

## Design notes
Fuzz loops increase the reproduction rate of elusive, non-deterministic bugs. By repeatedly exercising candidate code paths against thousands of semi-random inputs, they transform a sporadic failure into a reproducible test case.
