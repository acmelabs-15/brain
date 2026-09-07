---
package: rjm
name: count ratchet
slug: count-ratchet
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/count_ratchet.py, sha256: 095a6520dd2798e9b67b1384cdf8f9bd9bd9b36c6f01e04cc1186e08a5acd4f0}
  - {path: scripts/validation/check_adr_lifecycle.py, sha256: 20aa2406f41d31ba7c7d8bb17271a66eb7e885f5f0588593869fba84920ca738}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# count ratchet

## Definition — verbatim
> "A count ratchet freezes a repository-wide violation ceiling in a baseline file." — scripts/ci/count_ratchet.py:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/count_ratchet.py | 3 | defined here | Defines the mechanism that freezes a repository-wide violation ceiling in a baseline file. |
| scripts/validation/check_adr_lifecycle.py | 123 | used here | Imports baseline_absent_at_ref from scripts.ci.count_ratchet to verify baseline existence during ADR lifecycle checks. |

## Consumes
Committed baseline violation files, current git index entries, and counter functions.

## Produces
A pass/fail gate verdict ensuring current violation counts do not exceed recorded baselines.

## When applied
During pre-PR validation, CI runs, and pre-push hook execution when checking codebase violation metrics.

## Sub-concepts
baseline-file

## Part of
pre-pr-sequence

## Implementation status
clean

## Design notes
A non-regression gate mechanism that locks repository debt ceilings in committed baseline files, guaranteeing that codebase violation metrics can only improve and never regress over time.
