---
package: rjm
name: /sync
slug: sync
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
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
