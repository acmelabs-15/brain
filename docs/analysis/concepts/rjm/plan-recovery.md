---
package: rjm
name: plan_recovery
slug: plan-recovery
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/github_core/recovery_manifest.py, sha256: 4ec40a442220c75958c784756c9bb22f6e2c7902b1f47382feee82ef7ed953a9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# plan_recovery

## Definition — verbatim
(used, not defined)

> "def plan_recovery(" — scripts/github_core/recovery_manifest.py:374

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/github_core/recovery_manifest.py | 374 | defined here | Function building the complete fail-closed RecoveryManifest for a proposed bulk cancellation batch. |

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
A function in `recovery_manifest.py` constructing the fail-closed `RecoveryManifest` for proposed workflow run cancellations rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
