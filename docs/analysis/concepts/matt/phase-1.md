---
package: matt
name: Phase 1
slug: phase-1
kind: phase
package_phase: matt:diagnosing-bugs
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/diagnosing-bugs.md, sha256: e98918deb1006ce9e3e40d12e60c54410a8a9820225e85cb4a78c0323a8c5c40}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Phase 1

## Definition — verbatim
> "Phase 1 gets disproportionate effort because it is the only phase that is hard. The skill gives a ladder of ways to construct the loop, roughly in order of preference:" — external/diagnosing-bugs.md:32

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/diagnosing-bugs.md | 32 | defined here | Defines the initial and most critical phase of bug diagnosis dedicated to constructing a tight automated feedback loop. |

## Consumes
A defect report, observed symptom, or failing scenario.

## Produces
A tight, deterministic, automated command that fails on the bug and succeeds when fixed.

## When applied
At the start of bug diagnosis whenever a defect is reported, before any hypothesizing or code changes occur.

## Sub-concepts
failing-test, snapshot, replayed-capture, throwaway-harness, fuzz-loop, bisection-harness, differential-loop, hitl-loop-template-sh

## Part of
diagnosing-bugs

## Implementation status
clean

## Design notes
Phase 1 acts as the mandatory reproduction gate in Matt's bug diagnosis lifecycle. It forbids agents from guessing or editing code until a tight, fast, deterministic feedback loop exists, treating reproduction loop construction as the primary intellectual hurdle of debugging.
