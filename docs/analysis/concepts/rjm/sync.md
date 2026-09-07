---
package: rjm
name: /sync
slug: sync
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/sync/__init__.py, sha256: 67ea47006dcd2b4c68e601bdc4092436a47d5454f6838565320bc77ee02c9f47}
  - {path: scripts/sync/detect_spec_drift.py, sha256: 4dc1517b2ead41c00958be4f3f4986ed5e2fa73971a79bac8c20a143afd635f6}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# /sync

## Definition — verbatim
(used, not defined)

> "Spec<->Code drift detection for the /sync command (issue #1997)." — scripts/sync/__init__.py:1

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/sync/__init__.py | 1 | used here | Package docstring introducing spec-to-code drift detection utilities designed for the /sync command. |
| scripts/sync/detect_spec_drift.py | 2 | used here | Script docstring identifying drift detection as the core mechanism supporting the /sync reverse path. |

## Consumes
Specification documents in REQ/DESIGN/TASK tiers and current repository code files.

## Produces
Drift detection findings report and structured ADR-056 verification envelope.

## When applied
Executed when manual code changes drift from specifications, identifying stale path references before review.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
`/sync` is a reverse-path lifecycle command and synchronization technique in rjm that reconciles drift between code changes and the three-tier specification layer (`requirements`, `design`, `tasks`). Unlike the forward pipeline (`/spec` -> `/plan` -> `/build`), `/sync` ensures that after code is edited directly, stale references are flagged and specifications can be updated to match implementation reality.
