---
package: rjm
name: portability ratchets
slug: portability-ratchets
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/portability_baseline.py, sha256: 713e756f9d9bf1db3006bc3cf53182484d338b62c39b18292fd60f1fcba5cca6}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# portability ratchets

## Definition — verbatim
> "Baseline artifact lifecycle for the portability ratchets." — scripts/validation/portability_baseline.py:1

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/portability_baseline.py | 1 | defines | Module docstring defining baseline lifecycle management for automated portability ratchets. |

## Consumes
Baseline JSON files, git repository history, and scan findings across tracked directories.

## Produces
Ratchet enforcement verdicts, verified baseline updates, and refusal of unreviewed debt reductions.

## When applied
Evaluated during portability validation scans and baseline update procedures.

## Sub-concepts
portability-floor, tree-coverage

## Part of
portability-validation

## Implementation status
clean

## Design notes
Portability ratchets enforce that code modifications do not introduce unportable paths or dependencies. By coupling scan findings against historical baselines and guarding against baseline tampering, deletion, or diff-suppression, the ratchets ensure that recorded debt monotonically decreases over releases.
