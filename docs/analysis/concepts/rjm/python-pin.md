---
package: rjm
name: PYTHON_PIN
slug: python-pin
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/bootstrap-vm.sh, sha256: a04fdf031ec3cd4858fbeef8991fc72ace1274da92327620cfc473b59bae43d1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# PYTHON_PIN

## Definition — verbatim
(used, not defined)

> "PYTHON_PIN" — scripts/bootstrap-vm.sh:175

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/bootstrap-vm.sh | 175 | defined here | Shell variable storing the target Python version read from the committed .python-version file. |

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
defects: missing-path, doc-drift

## Design notes
PYTHON_PIN is a shell variable identifier in bootstrap-vm.sh holding the active Python version requirement rather than a lifecycle concept.
