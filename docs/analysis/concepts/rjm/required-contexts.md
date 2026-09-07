---
package: rjm
name: REQUIRED_CONTEXTS
slug: required-contexts
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/ruleset_required_contexts.py, sha256: e20d3bab6c5e8d2312db178d5a46b54f27f0a1fc6401ccd229996a4f7f57234b}
  - {path: scripts/github_core/recovery_manifest.py, sha256: 4ec40a442220c75958c784756c9bb22f6e2c7902b1f47382feee82ef7ed953a9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# REQUIRED_CONTEXTS

## Definition — verbatim
(used, not defined)

> "REQUIRED_CONTEXTS: frozenset[str] = frozenset(" — scripts/ci/ruleset_required_contexts.py:11

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/ruleset_required_contexts.py | 11 | defined here | Canonical frozenset constant specifying the exact set of required CI status check context strings for main. |
| scripts/github_core/recovery_manifest.py | 17 | used here | Documented parameter source imported from ruleset_required_contexts to ensure recovery operations use the single canonical baseline. |

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
`REQUIRED_CONTEXTS` is a Python module constant frozenset in `ruleset_required_contexts.py` specifying mandatory status check names rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
