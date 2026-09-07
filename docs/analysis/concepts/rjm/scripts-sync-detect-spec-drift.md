---
package: rjm
name: scripts.sync.detect_spec_drift
slug: scripts-sync-detect-spec-drift
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/sync/__init__.py, sha256: 67ea47006dcd2b4c68e601bdc4092436a47d5454f6838565320bc77ee02c9f47}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# scripts.sync.detect_spec_drift

## Definition — verbatim
(used, not defined)

> "scripts.sync.detect_spec_drift" — scripts/sync/__init__.py:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/sync/__init__.py | 3 | used here | Re-exports module path scanning specification tiers for stale code references. |

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
`scripts.sync.detect_spec_drift` is a Python module import path identifier exposing specification drift scanning functionality rather than an operational lifecycle concept, classified as `kind: name-only` per D-023.
