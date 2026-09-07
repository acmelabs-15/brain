---
package: rjm
name: SYSTEM_REMEDY
slug: system-remedy
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validation/check_git_hook_health.py, sha256: 994cbeca1efab1c3e1fa9fac5a2e1f7bf19447ebc27da86cf4925a6ef85ffee2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# SYSTEM_REMEDY

## Definition — verbatim
(used, not defined)

> "SYSTEM_REMEDY = f\"git config --system --unset-all core.hooksPath && {REMEDY}\"" — scripts/validation/check_git_hook_health.py:77

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_git_hook_health.py | 77 | defined here | Constant command string to unset system-scoped core.hooksPath and reinstall lefthook. |

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
SYSTEM_REMEDY is a Python constant identifier for unsetting system-scoped git configuration rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
