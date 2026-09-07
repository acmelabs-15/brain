---
package: rjm
name: run_taste_advisory
slug: run-taste-advisory
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/taste_count_ratchet.py, sha256: ff9e2fe47024f635d0df5c00d6ffb265ab99ae4f589b786080b5de4fe58611bd}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# run_taste_advisory

## Definition — verbatim
(used, not defined)

> "nothing in the repository has ever read that. ``run_taste_advisory`` in" — scripts/ci/taste_count_ratchet.py:5

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/taste_count_ratchet.py | 5 | used here | Cited as the legacy function in git_hook_policy.py that captured linter exits and treated them as non-blocking advisory messages. |

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
run_taste_advisory is a Python function name referenced historically to explain advisory linter behavior rather than an active SDLC lifecycle concept.
