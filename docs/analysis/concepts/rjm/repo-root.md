---
package: rjm
name: REPO_ROOT
slug: repo-root
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/_runtime_parity.py, sha256: a5f463e3d9e5a1b7792aee049f05a40b8f2c14ca3188fbc0f6dab8534d5b1308}
  - {path: scripts/eval/eval-rule-activation.py, sha256: df7d388d373dbae64564e5a3d6f5a58a8da5eb6a93ee7fdd47526ec38387de37}
  - {path: scripts/validation/check_agent_skill_discriminator.py, sha256: fb835dbd3148f58de0a6befdf83d9365975869f178def8624ab3e2b1832db6ce}
  - {path: scripts/validation/check_build_gates.py, sha256: df1360e6ff865be7eecb97ece1f78d0979415b85c87ea4e19cf9b693ee511102}
  - {path: scripts/validation/check_skill_md_exec_portability.py, sha256: 176c423ce1b4d3957c58c67a909039ca428157be432a1170ee8157911ac1a051}
  - {path: scripts/validation/check_skill_portability.py, sha256: 95cfb8c0749cec5771cc2c74e1a765f1ec706c86d206e90562cb3eeed64efd99}
  - {path: scripts/validation/run_install_parity_ci.py, sha256: c443c2ac28685dde69d91e626464de2bf4ad209c94b4dc3bcc7c31ceee9a23f5}
  - {path: scripts/validation/run_plugin_version_bump_ci.py, sha256: e74906d05e144bafa606c9eb48c902c83845d90507d444ef74f58d3321c92d4a}
  - {path: scripts/validation/test_investigation_eligibility.py, sha256: 50907c3f8f1d5da028be1849dee966d9cd6119d94ef298e4ea9ae21a0c37289f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# REPO_ROOT

## Definition — verbatim
(used, not defined)

> "REPO_ROOT = Path(__file__).resolve().parents[2]" — scripts/eval/_runtime_parity.py:14

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/_runtime_parity.py | 14 | defined here | Constant locating repository root Path relative to current script. |
| scripts/eval/eval-rule-activation.py | 81 | defined here | Constant resolving absolute repository root Path for fixture discovery. |
| scripts/validation/check_agent_skill_discriminator.py | 586 | defined here | CLI option `--repo-root` falling back to `REPO_ROOT` environment variable. |
| scripts/validation/check_build_gates.py | 188 | defined here | CLI option `--repo-root` specifying target repository root path for gate checking. |
| scripts/validation/check_skill_md_exec_portability.py | 87 | defined here | Helper function locating directory root containing `.claude/skills`. |
| scripts/validation/check_skill_portability.py | 186 | defined here | Helper function walking up directory tree to locate repository root. |
| scripts/validation/run_install_parity_ci.py | 32 | used here | Imported from `ci_runner_base` to establish repository anchor for CI runs. |
| scripts/validation/run_plugin_version_bump_ci.py | 33 | used here | Imported from `ci_runner_base` to anchor working tree during version bump CI checks. |
| scripts/validation/test_investigation_eligibility.py | 21 | defined here | Constant determining repository root and configuring `sys.path`. |

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
defects: doc-drift, missing-path, orphan, other

## Design notes
A constant, argument name, and environment variable identifier resolving repository root path across evaluation and validation scripts, classified as name-only per D-023.
