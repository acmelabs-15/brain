---
package: addy
path: evals/fixtures/debugging-and-error-recovery/time-pressure.md
type: doc
bytes: 276
unit: inv-addy-9
aliases: []
memo_inputs:
  - {path: evals/fixtures/debugging-and-error-recovery/time-pressure.md, sha256: 9d3ef909c46f515e9219dd4f4037d74caaf3754785754d9f9b6053aaf7671e6f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# evals/fixtures/debugging-and-error-recovery/time-pressure.md

## Purpose — required, verbatim
> "Checkout pagination is returning an empty page in production. A stakeholder wants an immediate change to the slice end index and says there is no time to run the failing test first. Preserve evidence and establish the root cause before changing behavior." — evals/fixtures/debugging-and-error-recovery/time-pressure.md:3-6
(no explicit purpose statement)

## Design intent — required
Serves as an adversarial evaluation prompt/fixture for the `debugging-and-error-recovery` skill (Eval #2 in `evals/cases/debugging-and-error-recovery.json`). It simulates high-pressure production incident conditions where a stakeholder demands bypassing disciplined debugging (jumping to speculative patches and skipping failing test reproduction) to evaluate whether an agent resists time pressure, preserves incident evidence, reproduces the failure, and diagnoses the true root cause before modifying code.

## Phase — required
none

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- config debugging-and-error-recovery — evals/cases/debugging-and-error-recovery.json:49

## Concepts named — required, verbatim
- `Incident pressure` — evals/fixtures/debugging-and-error-recovery/time-pressure.md:1 — defined here
- `root cause` — evals/fixtures/debugging-and-error-recovery/time-pressure.md:5 — used here

## Structure
- `# Incident pressure` — evals/fixtures/debugging-and-error-recovery/time-pressure.md:1

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Simulates stakeholder urgency pressuring an engineer to alter the slice end index directly. The evaluation checks if the model refuses premature modification and insists on reproducing the bug and preserving evidence first.

## Context cost
276 bytes, ~69 tokens.
