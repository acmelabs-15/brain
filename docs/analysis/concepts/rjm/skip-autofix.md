---
package: rjm
name: SKIP_AUTOFIX
slug: skip-autofix
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/bootstrap-vm.sh, sha256: a04fdf031ec3cd4858fbeef8991fc72ace1274da92327620cfc473b59bae43d1}
  - {path: scripts/ci/verify_code_env.py, sha256: 17870be01d0b77be3b7a8784741d5c900e9a24f1d4f13984ea71f1dad8d0e963}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# SKIP_AUTOFIX

## Definition — verbatim
(used, not defined)

> "grep -q 'SKIP_AUTOFIX'" — scripts/bootstrap-vm.sh:348

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/bootstrap-vm.sh | 348 | defined here | Appended to user profile to configure default autofix behavior for pre-commit formatting tools. |
| scripts/ci/verify_code_env.py | 128 | used here | Inspected from the execution environment to report whether autofix formatting is enabled or disabled. |

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
defects: missing-path, doc-drift, orphan

## Design notes
SKIP_AUTOFIX is an environment variable configuration toggle controlling automatic code formatting tools rather than a lifecycle concept.
