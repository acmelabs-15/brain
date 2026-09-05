---
package: addy
path: evals/fixtures/debugging-and-error-recovery/pagination.js
type: file
bytes: 172
unit: inv-addy-9
aliases: []
memo_inputs:
  - {path: evals/fixtures/debugging-and-error-recovery/pagination.js, sha256: a60cc6ec6570f6ef27882cbc4855991d5c3f2c485722931556e549a2fba6d510}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# evals/fixtures/debugging-and-error-recovery/pagination.js

## Purpose — required, verbatim
> "function paginate(items, page, pageSize) {" — evals/fixtures/debugging-and-error-recovery/pagination.js:3
(no explicit purpose statement)

## Design intent — required
Provides a buggy pagination implementation fixture for evaluating the `debugging-and-error-recovery` skill. The function computes `start = page * pageSize`, introducing an off-by-one / zero-versus-one index mismatch when invoked with one-based page numbers. It is paired with `pagination.test.js` to evaluate whether an agent reproduces the failure, diagnoses the mathematical root cause, and applies a minimal fix rather than a speculative patch.

## Phase — required
none

## Inputs — required
Arguments `items` (array), `page` (number), and `pageSize` (number) passed to `paginate(items, page, pageSize)` (evals/fixtures/debugging-and-error-recovery/pagination.js:3).

## Outputs — required
Slice of `items` returned by `paginate` (evals/fixtures/debugging-and-error-recovery/pagination.js:5).

## Invokes — required
none

## Invoked by — required
- file paginate — evals/fixtures/debugging-and-error-recovery/pagination.test.js:5
- config debugging-and-error-recovery — evals/cases/debugging-and-error-recovery.json:35

## Concepts named — required, verbatim
- `paginate` — evals/fixtures/debugging-and-error-recovery/pagination.js:3 — defined here
- `pageSize` — evals/fixtures/debugging-and-error-recovery/pagination.js:3 — defined here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
The calculation `start = page * pageSize` at line 4 assumes 0-based pagination (page 0 is items 0..pageSize, page 1 is items pageSize..2*pageSize), which causes 1-based callers (such as `pagination.test.js`) to receive page 3's items instead of page 2's.

## Context cost
172 bytes, ~43 tokens.
