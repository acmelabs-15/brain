---
package: rjm
name: issue #1997
slug: issue-1997
kind: name-only
package_phase: none
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

# issue #1997

## Definition — verbatim
(used, not defined)

> "Spec<->Code drift detection for the /sync command (issue #1997)." — scripts/sync/__init__.py:1

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/sync/__init__.py | 1 | used here | Cited in package docstring as tracking issue for spec-to-code drift detection. |
| scripts/sync/detect_spec_drift.py | 2 | used here | Cited in script docstring as tracking issue for the /sync command and drift detection slice. |

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
`issue #1997` is a GitHub issue tracking identifier for reverse-path specification drift detection rather than an operational lifecycle concept, classified as `kind: name-only` per D-023.
