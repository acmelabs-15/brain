---
package: rjm
name: PR_BASE_REF
slug: pr-base-ref
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/ci_runner_base.py, sha256: b08a21f5a34af4f316b6c8aec454b9296876534c887abb8897a6a5a474559659}
  - {path: scripts/validation/run_install_parity_ci.py, sha256: c443c2ac28685dde69d91e626464de2bf4ad209c94b4dc3bcc7c31ceee9a23f5}
  - {path: scripts/validation/run_plugin_version_bump_ci.py, sha256: e74906d05e144bafa606c9eb48c902c83845d90507d444ef74f58d3321c92d4a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# PR_BASE_REF

## Definition — verbatim
(used, not defined)

> "1. Read ``PR_BASE_REF`` from the environment (falls back to ``main``)." — scripts/validation/run_install_parity_ci.py:12

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/ci_runner_base.py | 54 | used here | Documented as an environment-supplied base branch ref validated against the branch allowlist. |
| scripts/validation/run_install_parity_ci.py | 12 | used here | Read from environment to supply target base branch ref for install-parity CI validation. |
| scripts/validation/run_plugin_version_bump_ci.py | 11 | used here | Read from environment to supply target base branch ref for version bump CI validation. |

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
`PR_BASE_REF` is an environment variable name passing target base branch references in CI validation scripts rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
