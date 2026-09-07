---
package: rjm
name: --gate-mode
slug: gate-mode
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validation/check_build_gates.py, sha256: df1360e6ff865be7eecb97ece1f78d0979415b85c87ea4e19cf9b693ee511102}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# --gate-mode

## Definition — verbatim
(used, not defined)

> "and _option_value(arguments, \"--gate-mode\") == \"regression\"" — scripts/validation/check_build_gates.py:97

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_build_gates.py | 97 | used here | Verified as a required option configured to regression mode in code-qualities-assessment invocation. |

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
defects: missing-path

## Design notes
`--gate-mode` is a command-line option parameter identifier controlling gate execution mode rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
