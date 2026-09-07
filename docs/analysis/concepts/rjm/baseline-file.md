---
package: rjm
name: baseline file
slug: baseline-file
kind: artifact
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/count_ratchet.py, sha256: 095a6520dd2798e9b67b1384cdf8f9bd9bd9b36c6f01e04cc1186e08a5acd4f0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# baseline file

## Definition — verbatim
> "A count ratchet freezes a repository-wide violation ceiling in a baseline file." — scripts/ci/count_ratchet.py:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/count_ratchet.py | 3 | used here | Documented as the on-disk file freezing a repository-wide violation ceiling. |

## Consumes
Measured violation count and maintainer approval via --update.

## Produces
Committed scalar ceiling against which subsequent runs measure regressions.

## When applied
Read on every ratchet execution; updated when count improves and --update is passed.

## Sub-concepts
none

## Part of
count-ratchet

## Implementation status
clean

## Design notes
A committed text or JSON file storing the frozen maximum threshold for specific violations across the codebase, ensuring monotonic debt reduction.
