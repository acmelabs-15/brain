---
package: rjm
name: ci_runner_base
slug: ci-runner-base
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/run_install_parity_ci.py, sha256: c443c2ac28685dde69d91e626464de2bf4ad209c94b4dc3bcc7c31ceee9a23f5}
  - {path: scripts/validation/run_plugin_version_bump_ci.py, sha256: e74906d05e144bafa606c9eb48c902c83845d90507d444ef74f58d3321c92d4a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# ci_runner_base

## Definition — verbatim
(used, not defined)

> "from ``ci_runner_base.py``." — scripts/validation/run_install_parity_ci.py:8

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/run_install_parity_ci.py | 8 | used here | Cited as the shared CI runner infrastructure module providing fetch, base resolution, and process execution helpers. |
| scripts/validation/run_plugin_version_bump_ci.py | 7 | used here | Cited as the shared runner module providing branch validation, fetch fallback, and subprocess invocation. |

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
A shared Python infrastructure module name in `run_install_parity_ci.py` and `run_plugin_version_bump_ci.py`, classified as name-only per D-023.
