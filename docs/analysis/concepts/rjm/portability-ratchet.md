---
package: rjm
name: portability ratchet
slug: portability-ratchet
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/portability_common.py, sha256: 1ca675f452447698f1720f14d3d4a41778f37621bbdbd15c3136f65b793757c0}
  - {path: scripts/validation/portability_floor.py, sha256: 880eb845d61bfdbabbe2065af1621f298c96a33719f50ed694a30a69e461f9d7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# portability ratchet

## Definition — verbatim
(used, not defined)

> "The evidence a portability ratchet is floored against." — scripts/validation/portability_floor.py:1

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/portability_common.py | 25 | used here | Docstring description of load_baseline validating a portability ratchet baseline. |
| scripts/validation/portability_floor.py | 1 | used here | Module docstring introducing the evidence against which a portability ratchet is floored. |

## Consumes
Baseline JSON files (`skill_portability_baseline.json`, `skill_md_portability_baseline.json`, `skill_md_exec_portability_baseline.json`) and git repository state.

## Produces
Pass/fail verification verdicts and updated baseline JSON artifacts via `--update-baseline`.

## When applied
Executed during PR validation and change-control verification gates to ensure violation counts decrease or remain strictly at or below baseline.

## Sub-concepts
marker-files, drift-files, baseline-size-ceiling

## Part of
vendor-portability

## Implementation status
clean

## Design notes
The portability ratchet enforces that technical debt and non-portable path invocations in skill files cannot increase across changes. By flooring checks against both working tree disk state and committed git history, it allows incremental debt reduction while preventing silent debt erasure, tampering, or regression.
