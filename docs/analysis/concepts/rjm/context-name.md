---
package: rjm
name: context_name
slug: context-name
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

# context_name

## Definition — verbatim
(used, not defined)

> "def context_name(context: dict[str, Any]) -> str:" — scripts/pr_maintenance_rollup.py:110

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/pr_maintenance_rollup.py | 110 | defined here | Utility returning the check name for CheckRun or StatusContext nodes. |

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
`context_name` is a Python utility function identifier extracting the status check name from GitHub GraphQL context nodes rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
