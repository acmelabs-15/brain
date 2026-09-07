---
package: rjm
name: guard_refusal
slug: guard-refusal
kind: gate
package_phase: rjm:Test
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/_optimizer_core.py, sha256: bc511efa2aba8108b3ba293bb61fa007a323c0c9c78baae7b5e6abcce808b53f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# guard_refusal

## Definition — verbatim
> "Return why a comparison must not happen, or None when it may." — scripts/eval/_optimizer_core.py:634

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/_optimizer_core.py | 627 | defined here | Pre-check function verifying that consultation budgets and split fingerprints allow an evaluation comparison before scoring occurs. |

## Consumes
Consultation count, maximum consultation limit, candidate split fingerprint, and incumbent split fingerprint.

## Produces
A refusal reason string explaining why comparison is prohibited, or `None` if evaluation may proceed.

## When applied
Executed before running evaluations on held-out test splits to prevent wasted test exposures.

## Sub-concepts
none

## Part of
gate

## Implementation status
clean

## Design notes
`guard_refusal` checks evaluation preconditions before invoking scorers on held-out datasets in rjm's optimizer. By verifying consultation limits and split fingerprint consistency beforehand, it prevents callers from reading held-out data when the candidate would inevitably be rejected, protecting evaluation integrity.
