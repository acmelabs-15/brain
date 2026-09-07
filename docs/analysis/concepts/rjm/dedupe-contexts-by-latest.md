---
package: rjm
name: dedupe_contexts_by_latest
slug: dedupe-contexts-by-latest
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/pr_maintenance_rollup.py, sha256: 5abba9ce87a2916bed28e35fbab18047b401209abb7609199134b86e6256fcd1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# dedupe_contexts_by_latest

## Definition — verbatim
(used, not defined)

> "def dedupe_contexts_by_latest(contexts: list[dict[str, Any]]) -> list[dict[str, Any]]:" — scripts/pr_maintenance_rollup.py:125

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/pr_maintenance_rollup.py | 125 | defined here | Helper keeping only the most recent status check run for each check name. |

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
`dedupe_contexts_by_latest` is a Python helper function identifier deduplicating check runs by check name and timestamp rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
