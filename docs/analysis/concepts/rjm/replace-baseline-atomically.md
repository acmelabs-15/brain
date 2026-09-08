---
package: rjm
name: replace_baseline_atomically
slug: replace-baseline-atomically
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/portability_baseline.py, sha256: 713e756f9d9bf1db3006bc3cf53182484d338b62c39b18292fd60f1fcba5cca6}
  - {path: scripts/validation/portability_baseline_write.py, sha256: 6fdbc46571c4fccf993f37619487303343ea2b16ac3686423e452c90ca29ff12}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# replace_baseline_atomically

## Definition — verbatim
(used, not defined)

> "def replace_baseline_atomically(" — scripts/validation/portability_baseline_write.py:141

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/portability_baseline_write.py | 141 | defines | Public entry point asserting POSIX directory descriptor support before atomic file swap. |
| scripts/validation/portability_baseline.py | 51 | used here | Invoked to write serialized baseline JSON without allowing checked parents to be swapped. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
A Python function identifier in `portability_baseline_write.py`, classified as name-only per D-023.
